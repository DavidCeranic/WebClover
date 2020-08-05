using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using WebApiClover.Models;

namespace WebApiClover.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]//zabranjuje ako nema token
    public class UserDetailsController : ControllerBase
    {
        private readonly UserDetailContext _context;

        public UserDetailsController(UserDetailContext context)
        {
            _context = context;
        }

        // GET: api/UserDetails
        [HttpGet]
        [AllowAnonymous]

        public async Task<ActionResult<IEnumerable<UserDetail>>> GetUserDetails()
        {
            return await _context.UserDetails.ToListAsync();
        }


        // GET: api/UserDetails/5
        [HttpGet("{id}")]
        //[Authorize(Roles = "User")]//ko ima pristup ovde
        //[Authorize(Roles = "User,Admin")]//ko ima pristup ovde
        [AllowAnonymous]//svi mogu
        public async Task<ActionResult<UserDetail>> GetUserDetail(int id)
        {
            var userDetail = await _context.UserDetails.FindAsync(id);

            if (userDetail == null)
            {
                return NotFound();
            }

            return userDetail;
        }

        
        [HttpPost("Login")]
        [AllowAnonymous]
        public async Task<ActionResult<UserDetail>> Login([FromBody] EmailAndPassword EmailAndPassword)
        {
            Console.WriteLine(EmailAndPassword.email);
            var userDetail = await _context.UserDetails.FirstOrDefaultAsync(x => x.Email == EmailAndPassword.email);


            if (userDetail == null)
            {
                return BadRequest("Wrong email");
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("this is my custom Secret key for authnetication");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, userDetail.UserId.ToString()),
                    new Claim(ClaimTypes.Role, userDetail.UserType)
                }),
                Expires = DateTime.UtcNow.AddHours(3),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            userDetail.Password = string.Empty;
            userDetail.StringToken = tokenString;

            return await Task.FromResult<ActionResult<UserDetail>>(Ok(JsonConvert.SerializeObject(userDetail)));
        }


        // PUT: api/UserDetails/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        [AllowAnonymous]

        public async Task<IActionResult> PutUserDetail(int id, UserDetail userDetail)
        {
            if (id != userDetail.UserId)
            {
                return BadRequest();
            }

            _context.Entry(userDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserDetails
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        //[Authorize(Roles = "User,Admin")]//ko ima pristup ovde
        [AllowAnonymous]

        public async Task<ActionResult<UserDetail>> PostUserDetail(UserDetail userDetail)
        {
            _context.UserDetails.Add(userDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserDetail", new { id = userDetail.UserId }, userDetail);
        }

        // DELETE: api/UserDetails/5
        [HttpDelete("{id}")]
        [AllowAnonymous]

        public async Task<ActionResult<UserDetail>> DeleteUserDetail(int id)
        {
            var userDetail = await _context.UserDetails.FindAsync(id);
            if (userDetail == null)
            {
                return NotFound();
            }

            _context.UserDetails.Remove(userDetail);
            await _context.SaveChangesAsync();

            return userDetail;
        }

        private bool UserDetailExists(int id)
        {
            return _context.UserDetails.Any(e => e.UserId == id);
        }
    }


    public class EmailAndPassword
    {
        public string email { get; set; }
        public string password { get; set; }
    }
}

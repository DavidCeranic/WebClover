using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiClover.Models;

namespace WebApiClover.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentServicesController : ControllerBase
    {
        private readonly UserDetailContext _context;

        public RentServicesController(UserDetailContext context)
        {
            _context = context;
        }

        // GET: api/RentServices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RentService>>> GetRentService()
        {
            return await _context.RentService.Include(x=>x.ServiceCars).ToListAsync();
        }

        // GET: api/RentServices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RentService>> GetRentService(int id)
        {
            var rentService = await _context.RentService.FindAsync(id);

            if (rentService == null)
            {
                return NotFound();
            }

            return rentService;
        }

        // PUT: api/RentServices/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRentService(int id, RentService rentService)
        {
            //if (id != rentService.ServiceId)
            //{
            //    return BadRequest();
            //}

            _context.Entry(rentService).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RentServiceExists(id))
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

        // POST: api/RentServices
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<RentService>> PostRentService(RentService rentService)
        {
            _context.RentService.Add(rentService);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRentService", new { id = rentService.ServiceId }, rentService);
        }

        // DELETE: api/RentServices/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RentService>> DeleteRentService(int id)
        {
            var rentService = await _context.RentService.FindAsync(id);
            if (rentService == null)
            {
                return NotFound();
            }

            _context.RentService.Remove(rentService);
            await _context.SaveChangesAsync();

            return rentService;
        }

        private bool RentServiceExists(int id)
        {
            return _context.RentService.Any(e => e.ServiceId == id);
        }
    }
}

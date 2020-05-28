﻿using System;
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
    public class AboutCompaniesController : ControllerBase
    {
        private readonly UserDetailContext _context;

        public AboutCompaniesController(UserDetailContext context)
        {
            _context = context;
        }

        // GET: api/AboutCompanies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AboutCompany>>> GetAboutCompanies()
        {
            return await _context.AboutCompanies.ToListAsync();
        }

        // GET: api/AboutCompanies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AboutCompany>> GetAboutCompany(int id)
        {
            var aboutCompany = await _context.AboutCompanies.FindAsync(id);

            if (aboutCompany == null)
            {
                return NotFound();
            }

            return aboutCompany;
        }

        // PUT: api/AboutCompanies/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAboutCompany(int id, AboutCompany aboutCompany)
        {
            if (id != aboutCompany.AvioCompID)
            {
                return BadRequest();
            }

            _context.Entry(aboutCompany).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AboutCompanyExists(id))
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

        // POST: api/AboutCompanies
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<AboutCompany>> PostAboutCompany(AboutCompany aboutCompany)
        {
            _context.AboutCompanies.Add(aboutCompany);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAboutCompany", new { id = aboutCompany.AvioCompID }, aboutCompany);
        }

        // DELETE: api/AboutCompanies/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AboutCompany>> DeleteAboutCompany(int id)
        {
            var aboutCompany = await _context.AboutCompanies.FindAsync(id);
            if (aboutCompany == null)
            {
                return NotFound();
            }

            _context.AboutCompanies.Remove(aboutCompany);
            await _context.SaveChangesAsync();

            return aboutCompany;
        }

        private bool AboutCompanyExists(int id)
        {
            return _context.AboutCompanies.Any(e => e.AvioCompID == id);
        }
    }
}

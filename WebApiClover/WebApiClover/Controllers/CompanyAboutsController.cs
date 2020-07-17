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
    public class CompanyAboutsController : ControllerBase
    {
        private readonly UserDetailContext _context;

        public CompanyAboutsController(UserDetailContext context)
        {
            _context = context;
        }

        // GET: api/CompanyAbouts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompanyAbout>>> GetCompanyAbout()
        {
            return await _context.CompanyAbout.ToListAsync();
        }

        // GET: api/CompanyAbouts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CompanyAbout>> GetCompanyAbout(int id)
        {
            var companyAbout = await _context.CompanyAbout.FindAsync(id);

            if (companyAbout == null)
            {
                return NotFound();
            }

            return companyAbout;
        }

        // PUT: api/CompanyAbouts/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompanyAbout(int id, CompanyAbout companyAbout)
        {
            if (id != companyAbout.AvioCompID)
            {
                return BadRequest();
            }

            _context.Entry(companyAbout).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyAboutExists(id))
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

        // POST: api/CompanyAbouts
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<CompanyAbout>> PostCompanyAbout(CompanyAbout companyAbout)
        {
            _context.CompanyAbout.Add(companyAbout);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompanyAbout", new { id = companyAbout.AvioCompID }, companyAbout);
        }

        // DELETE: api/CompanyAbouts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CompanyAbout>> DeleteCompanyAbout(int id)
        {
            var companyAbout = await _context.CompanyAbout.FindAsync(id);
            if (companyAbout == null)
            {
                return NotFound();
            }

            _context.CompanyAbout.Remove(companyAbout);
            await _context.SaveChangesAsync();

            return companyAbout;
        }

        private bool CompanyAboutExists(int id)
        {
            return _context.CompanyAbout.Any(e => e.AvioCompID == id);
        }
    }
}
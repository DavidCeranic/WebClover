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
    public class FlightInfo2Controller : ControllerBase
    {
        private readonly UserDetailContext _context;

        public FlightInfo2Controller(UserDetailContext context)
        {
            _context = context;
        }

        // GET: api/FlightInfo2
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FlightInfo2>>> GetFlightInfo2()
        {
            return await _context.FlightInfo2.ToListAsync();
        }

        // GET: api/FlightInfo2/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FlightInfo2>> GetFlightInfo2(int id)
        {
            var flightInfo2 = await _context.FlightInfo2.FindAsync(id);

            if (flightInfo2 == null)
            {
                return NotFound();
            }

            return flightInfo2;
        }

        // PUT: api/FlightInfo2/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFlightInfo2(int id, FlightInfo2 flightInfo2)
        {
            if (id != flightInfo2.FlightID)
            {
                return BadRequest();
            }

            _context.Entry(flightInfo2).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlightInfo2Exists(id))
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

        // POST: api/FlightInfo2
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<FlightInfo2>> PostFlightInfo2(FlightInfo2 flightInfo2)
        {
            _context.FlightInfo2.Add(flightInfo2);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFlightInfo2", new { id = flightInfo2.FlightID }, flightInfo2);
        }

        // DELETE: api/FlightInfo2/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FlightInfo2>> DeleteFlightInfo2(int id)
        {
            var flightInfo2 = await _context.FlightInfo2.FindAsync(id);
            if (flightInfo2 == null)
            {
                return NotFound();
            }

            _context.FlightInfo2.Remove(flightInfo2);
            await _context.SaveChangesAsync();

            return flightInfo2;
        }

        private bool FlightInfo2Exists(int id)
        {
            return _context.FlightInfo2.Any(e => e.FlightID == id);
        }
    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiClover.Models;

namespace WebApiClover.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatesController : ControllerBase
    {
        private readonly UserDetailContext _context;

        public RatesController(UserDetailContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetAllRate")]
        public async Task<List<Rate>> GetAllRate()
        {
            return await _context.Rate.ToListAsync();
        }

        [HttpPost]
        [Route("CreateRate")]
        public async Task<IActionResult> CreateRate(Rate rate)
        {
            await _context.Rate.AddAsync(rate);
            await _context.SaveChangesAsync();
            return Ok();
        }

        
    }
}

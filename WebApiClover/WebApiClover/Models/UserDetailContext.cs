using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiClover.Models
{
    public class UserDetailContext : DbContext 
    {

        public UserDetailContext(DbContextOptions<UserDetailContext> options) : base(options)
        {


        }

        public DbSet<UserDetail> UserDetails { get; set; }

        public DbSet<AboutCompany> AboutCompanies { get; set; }

        public DbSet<RentService> RentService { get; set; }

        public DbSet<FlightInfo> FlightsInfo { get; set; }

        public DbSet<CarInfo> CarInfo { get; set; }
    }
}

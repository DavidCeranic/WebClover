using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiClover.Models
{
    public class FlightInfo2
    {
        [Key]
        public int FlightID { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string From { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string To { get; set; }


        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Departing { get; set; }


        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Returning { get; set; }


        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Baggage { get; set; }


        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string ClassF { get; set; }


        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public int Stops { get; set; }


        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Duration { get; set; }


        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string CompanyName { get; set; }


        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public int Price { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public int SeatsNumber { get; set; }

       
        public virtual List<Rate> RateFlight{ get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiClover.Models
{
    public class AboutCompany
    {
        [Key]
        public string avioCompID { get; set; }

        [Required]
        [Column(TypeName ="nvarchar(100)")]
        public string avioCompName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string avioCompAddress { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string avioCompAbout { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string avioCompDestinations { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string avioCompFastReservationDiscount { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string avioCompSeats { get; set; }


        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public int avioCompPrices { get; set; }
    }
}

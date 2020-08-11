﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiClover.Models
{
    public class RentService
    {
        [Key]
        public int ServiceId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string ServiceName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Location { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(500)")]
        public string Img { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(500)")]
        public string Description { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(4000)")]
        public string About { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(500)")]
        public string PriceTable { get; set; }

        //public string Cars { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(4000)")]
        public string Contact { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        public float Lat { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        public float Lng { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public int RateService { get; set; }

        public List<CarInfo> ServiceCars { get; set; }
    }
}

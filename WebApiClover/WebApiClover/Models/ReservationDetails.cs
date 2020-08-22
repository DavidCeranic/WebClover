﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiClover.Models
{
    public class ReservationDetails
    {
        [Key]
        public int ReservationId { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }

        //[Required]
        //public virtual OfficeDetail StartOffice { get; set; }

        //[Required]
        //public virtual OfficeDetail EndOffice { get; set; }

        [Required]
        public virtual CarInfo Car { get; set; }

        [Required]
        public virtual UserDetail User { get; set; }
    }
}

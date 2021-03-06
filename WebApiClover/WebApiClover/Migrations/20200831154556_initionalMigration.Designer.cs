﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApiClover.Models;

namespace WebApiClover.Migrations
{
    [DbContext(typeof(UserDetailContext))]
    [Migration("20200831154556_initionalMigration")]
    partial class initionalMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebApiClover.Models.CarInfo", b =>
                {
                    b.Property<int>("CarId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Brand")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("EndLocation")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ImgUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("IsTaken")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<decimal>("NumOfSeats")
                        .HasColumnType("decimal");

                    b.Property<decimal>("PricePerDay")
                        .HasColumnType("decimal");

                    b.Property<int?>("RentServiceServiceId")
                        .HasColumnType("int");

                    b.Property<bool>("Sale")
                        .HasColumnType("bit");

                    b.Property<string>("ServiceName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("TypeOfCar")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("UserDetailUserId")
                        .HasColumnType("int");

                    b.Property<decimal>("Year")
                        .HasColumnType("decimal");

                    b.HasKey("CarId");

                    b.HasIndex("RentServiceServiceId");

                    b.HasIndex("UserDetailUserId");

                    b.ToTable("CarInfo");
                });

            modelBuilder.Entity("WebApiClover.Models.CompanyAbout", b =>
                {
                    b.Property<int>("AvioCompID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AvioCompAbout")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("AvioCompAddress")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("AvioCompDestinations")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("AvioCompFastReservationDiscount")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("AvioCompName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("AvioCompPrices")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("AvioCompSeats")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("AvioCompID");

                    b.ToTable("CompanyAbout");
                });

            modelBuilder.Entity("WebApiClover.Models.FlightInfo", b =>
                {
                    b.Property<string>("FlightID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Baggage")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ClassF")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("CompanyName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Departing")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Duration")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("From")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Price")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Returning")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Stops")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("To")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("FlightID");

                    b.ToTable("FlightsInfo");
                });

            modelBuilder.Entity("WebApiClover.Models.FlightInfo2", b =>
                {
                    b.Property<int>("FlightID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Baggage")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ClassF")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("CompanyAboutAvioCompID")
                        .HasColumnType("int");

                    b.Property<string>("CompanyName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Departing")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Duration")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("EndTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("From")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Price")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Returning")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("SeatsNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("StartTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Stops")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("To")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("UserDetailUserId")
                        .HasColumnType("int");

                    b.HasKey("FlightID");

                    b.HasIndex("CompanyAboutAvioCompID");

                    b.HasIndex("UserDetailUserId");

                    b.ToTable("FlightInfo2");
                });

            modelBuilder.Entity("WebApiClover.Models.FlightReservation", b =>
                {
                    b.Property<int>("ReservationID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ReservedFlightFlightID")
                        .HasColumnType("int");

                    b.Property<int>("ReservedSeatId")
                        .HasColumnType("int");

                    b.Property<int>("ReservedUserUserId")
                        .HasColumnType("int");

                    b.HasKey("ReservationID");

                    b.HasIndex("ReservedFlightFlightID");

                    b.HasIndex("ReservedSeatId");

                    b.HasIndex("ReservedUserUserId");

                    b.ToTable("FlightReservation");
                });

            modelBuilder.Entity("WebApiClover.Models.Friends", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Accepted")
                        .HasColumnType("bit");

                    b.Property<bool>("Added")
                        .HasColumnType("bit");

                    b.Property<bool>("Removed")
                        .HasColumnType("bit");

                    b.Property<string>("UserEmail1")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserEmail2")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Friends");
                });

            modelBuilder.Entity("WebApiClover.Models.OfficeDetail", b =>
                {
                    b.Property<int>("OfficeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<double>("Lat")
                        .HasColumnType("float");

                    b.Property<double>("Lng")
                        .HasColumnType("float");

                    b.Property<string>("OfficeName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("RentServiceServiceId")
                        .HasColumnType("int");

                    b.HasKey("OfficeId");

                    b.HasIndex("RentServiceServiceId");

                    b.ToTable("OfficeDetail");
                });

            modelBuilder.Entity("WebApiClover.Models.Rate", b =>
                {
                    b.Property<int>("RateID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CarInfoCarId")
                        .HasColumnType("int");

                    b.Property<string>("RateNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("RateID");

                    b.HasIndex("CarInfoCarId");

                    b.ToTable("Rate");
                });

            modelBuilder.Entity("WebApiClover.Models.RentService", b =>
                {
                    b.Property<int>("ServiceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("About")
                        .IsRequired()
                        .HasColumnType("nvarchar(4000)");

                    b.Property<string>("Contact")
                        .IsRequired()
                        .HasColumnType("nvarchar(4000)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("Img")
                        .IsRequired()
                        .HasColumnType("nvarchar(500)");

                    b.Property<decimal>("Lat")
                        .HasColumnType("decimal");

                    b.Property<decimal>("Lng")
                        .HasColumnType("decimal");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("PriceTable")
                        .IsRequired()
                        .HasColumnType("nvarchar(500)");

                    b.Property<double>("Rate")
                        .HasColumnType("float");

                    b.Property<string>("ServiceName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("ServiceId");

                    b.ToTable("RentService");
                });

            modelBuilder.Entity("WebApiClover.Models.ReservationDetails", b =>
                {
                    b.Property<int>("ReservationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CarId")
                        .HasColumnType("int");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("EndOfficeId")
                        .HasColumnType("int");

                    b.Property<float>("Price")
                        .HasColumnType("real");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("StartOfficeId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("ReservationId");

                    b.HasIndex("CarId");

                    b.HasIndex("EndOfficeId");

                    b.HasIndex("StartOfficeId");

                    b.HasIndex("UserId");

                    b.ToTable("ReservationDetails");
                });

            modelBuilder.Entity("WebApiClover.Models.Seat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Class2")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Discount")
                        .HasColumnType("int");

                    b.Property<int>("FlightInfo2Id")
                        .HasColumnType("int");

                    b.Property<int>("Number2")
                        .HasColumnType("int");

                    b.Property<int>("Price")
                        .HasColumnType("int");

                    b.Property<bool>("Taken")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("FlightInfo2Id");

                    b.ToTable("Seat");
                });

            modelBuilder.Entity("WebApiClover.Models.UserDetail", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<bool>("IsVerify")
                        .HasColumnType("bit");

                    b.Property<bool>("LogOut")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("StringToken")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserType")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("UserId");

                    b.ToTable("UserDetails");
                });

            modelBuilder.Entity("WebApiClover.Models.flightRate", b =>
                {
                    b.Property<int>("RateIdd")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CompanyIdd")
                        .HasColumnType("int");

                    b.Property<int>("FlightInfo2FlightID")
                        .HasColumnType("int");

                    b.Property<int>("Ocena")
                        .HasColumnType("int");

                    b.Property<int>("UserIdd")
                        .HasColumnType("int");

                    b.HasKey("RateIdd");

                    b.HasIndex("FlightInfo2FlightID");

                    b.ToTable("flightRate");
                });

            modelBuilder.Entity("WebApiClover.Models.CarInfo", b =>
                {
                    b.HasOne("WebApiClover.Models.RentService", null)
                        .WithMany("ServiceCars")
                        .HasForeignKey("RentServiceServiceId");

                    b.HasOne("WebApiClover.Models.UserDetail", null)
                        .WithMany("UserCars")
                        .HasForeignKey("UserDetailUserId");
                });

            modelBuilder.Entity("WebApiClover.Models.FlightInfo2", b =>
                {
                    b.HasOne("WebApiClover.Models.CompanyAbout", null)
                        .WithMany("CompanyFlights")
                        .HasForeignKey("CompanyAboutAvioCompID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApiClover.Models.UserDetail", null)
                        .WithMany("UserFlights")
                        .HasForeignKey("UserDetailUserId");
                });

            modelBuilder.Entity("WebApiClover.Models.FlightReservation", b =>
                {
                    b.HasOne("WebApiClover.Models.FlightInfo2", "ReservedFlight")
                        .WithMany()
                        .HasForeignKey("ReservedFlightFlightID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApiClover.Models.Seat", "ReservedSeat")
                        .WithMany()
                        .HasForeignKey("ReservedSeatId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApiClover.Models.UserDetail", "ReservedUser")
                        .WithMany()
                        .HasForeignKey("ReservedUserUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("WebApiClover.Models.OfficeDetail", b =>
                {
                    b.HasOne("WebApiClover.Models.RentService", null)
                        .WithMany("ServiceOffice")
                        .HasForeignKey("RentServiceServiceId");
                });

            modelBuilder.Entity("WebApiClover.Models.Rate", b =>
                {
                    b.HasOne("WebApiClover.Models.CarInfo", null)
                        .WithMany("RateCar")
                        .HasForeignKey("CarInfoCarId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("WebApiClover.Models.ReservationDetails", b =>
                {
                    b.HasOne("WebApiClover.Models.CarInfo", "Car")
                        .WithMany()
                        .HasForeignKey("CarId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApiClover.Models.OfficeDetail", "EndOffice")
                        .WithMany()
                        .HasForeignKey("EndOfficeId");

                    b.HasOne("WebApiClover.Models.OfficeDetail", "StartOffice")
                        .WithMany()
                        .HasForeignKey("StartOfficeId");

                    b.HasOne("WebApiClover.Models.UserDetail", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("WebApiClover.Models.Seat", b =>
                {
                    b.HasOne("WebApiClover.Models.FlightInfo2", null)
                        .WithMany("Seats")
                        .HasForeignKey("FlightInfo2Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("WebApiClover.Models.flightRate", b =>
                {
                    b.HasOne("WebApiClover.Models.FlightInfo2", null)
                        .WithMany("FlightRates")
                        .HasForeignKey("FlightInfo2FlightID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}

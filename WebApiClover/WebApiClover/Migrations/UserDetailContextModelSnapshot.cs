﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApiClover.Models;

namespace WebApiClover.Migrations
{
    [DbContext(typeof(UserDetailContext))]
    partial class UserDetailContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebApiClover.Models.AboutCompany", b =>
                {
                    b.Property<string>("avioCompID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("avioCompAbout")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("avioCompAddress")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("avioCompDestinations")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("avioCompFastReservationDiscount")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("avioCompName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("avioCompPrices")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("avioCompSeats")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("avioCompID");

                    b.ToTable("AboutCompanies");
                });

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

                    b.Property<int?>("CompanyAboutAvioCompID")
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

                    b.Property<int?>("CarInfoCarId")
                        .HasColumnType("int");

                    b.Property<int?>("CompanyAboutAvioCompID")
                        .HasColumnType("int");

                    b.Property<int?>("FlightInfo2FlightID")
                        .HasColumnType("int");

                    b.Property<string>("RateNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("RentServiceServiceId")
                        .HasColumnType("int");

                    b.HasKey("RateID");

                    b.HasIndex("CarInfoCarId");

                    b.HasIndex("CompanyAboutAvioCompID");

                    b.HasIndex("FlightInfo2FlightID");

                    b.HasIndex("RentServiceServiceId");

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

                    b.Property<string>("ServiceName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("ServiceId");

                    b.ToTable("RentService");
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
                        .WithMany("CompanyFlihts")
                        .HasForeignKey("CompanyAboutAvioCompID");

                    b.HasOne("WebApiClover.Models.UserDetail", null)
                        .WithMany("UserFlights")
                        .HasForeignKey("UserDetailUserId");
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
                        .HasForeignKey("CarInfoCarId");

                    b.HasOne("WebApiClover.Models.CompanyAbout", null)
                        .WithMany("RateCompany")
                        .HasForeignKey("CompanyAboutAvioCompID");

                    b.HasOne("WebApiClover.Models.FlightInfo2", null)
                        .WithMany("RateFlight")
                        .HasForeignKey("FlightInfo2FlightID");

                    b.HasOne("WebApiClover.Models.RentService", null)
                        .WithMany("RateService")
                        .HasForeignKey("RentServiceServiceId");
                });
#pragma warning restore 612, 618
        }
    }
}

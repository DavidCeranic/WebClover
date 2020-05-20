﻿// <auto-generated />
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

            modelBuilder.Entity("WebApiClover.Models.RentService", b =>
                {
                    b.Property<int>("ServiceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("About")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Contact")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Img")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<decimal>("Lat")
                        .HasColumnType("decimal");

                    b.Property<decimal>("Lng")
                        .HasColumnType("decimal");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

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
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("UserType")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("UserId");

                    b.ToTable("UserDetails");
                });
#pragma warning restore 612, 618
        }
    }
}

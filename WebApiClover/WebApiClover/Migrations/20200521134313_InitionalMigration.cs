using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class InitionalMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserDetails",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    UserType = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserDetails", x => x.UserId);
                });

            migrationBuilder.CreateTable(
            name: "AboutCompanies",
            columns: table => new
            {
                avioCompID = table.Column<string>(nullable: false),
                avioCompName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                avioCompAddress = table.Column<string>(type: "nvarchar(100)", nullable: false),
                avioCompAbout = table.Column<string>(type: "nvarchar(100)", nullable: false),
                avioCompDestinations = table.Column<string>(type: "nvarchar(100)", nullable: false),
                avioCompFastReservationDiscount = table.Column<string>(type: "nvarchar(100)", nullable: false),
                avioCompSeats = table.Column<string>(type: "nvarchar(100)", nullable: false),
                avioCompPrices = table.Column<string>(type: "nvarchar(100)", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_AboutCompanies", x => x.avioCompID);
            });

            migrationBuilder.CreateTable(
                name: "RentService",
                columns: table => new
                {
                    ServiceId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ServiceName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Img = table.Column<string>(type: "nvarchar(500)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", nullable: false),
                    About = table.Column<string>(type: "nvarchar(4000)", nullable: false),
                    PriceTable = table.Column<string>(type: "nvarchar(500)", nullable: false),
                    Contact = table.Column<string>(type: "nvarchar(4000)", nullable: false),
                    Lat = table.Column<decimal>(type: "decimal", nullable: false),
                    Lng = table.Column<decimal>(type: "decimal", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RentService", x => x.ServiceId);
                });

            migrationBuilder.CreateTable(
                            name: "FlightsInfo",
                            columns: table => new
                            {
                                FlightID = table.Column<string>(nullable: false),
                                From = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                To = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                Departing = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                Returning = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                Baggage = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                ClassF = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                Stops = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                Duration = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                CompanyName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                Price = table.Column<string>(type: "nvarchar(100)", nullable: false)
                            },
                            constraints: table =>
                            {
                                table.PrimaryKey("PK_FlightsInfo", x => x.FlightID);
                            });

            migrationBuilder.CreateTable(
                            name: "CarInfo",
                            columns: table => new
                            {
                                CarId = table.Column<int>(nullable: false)
                                    .Annotation("SqlServer:Identity", "1, 1"),
                                ServiceName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                Brand = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                Model = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                Year = table.Column<decimal>(type: "decimal", nullable: false),
                                PricePerDay = table.Column<decimal>(type: "decimal", nullable: false),
                                NumOfSeats = table.Column<decimal>(type: "decimal", nullable: false),
                                ImgUrl = table.Column<string>(type: "nvarchar(500)", nullable: false),
                                Location = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                EndLocation = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                TypeOfCar = table.Column<string>(type: "nvarchar(100)", nullable: false),
                                Rate = table.Column<string>(type: "nvarchar(100)", nullable: false)
                            },
                            constraints: table =>
                            {
                                table.PrimaryKey("PK_CarInfo", x => x.CarId);
                            });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.DropTable(
                            name: "UserDetails");

            migrationBuilder.DropTable(
                name: "AboutCompanies");

            migrationBuilder.DropTable(
                name: "RentService");

            migrationBuilder.DropTable(
                            name: "FlightsInfo");

            migrationBuilder.DropTable(
                            name: "CarInfo");
        }
    }
}

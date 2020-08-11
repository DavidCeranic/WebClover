using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                name: "CompanyAbout",
                columns: table => new
                {
                    AvioCompID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AvioCompName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    AvioCompAddress = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    AvioCompAbout = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    AvioCompDestinations = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    AvioCompFastReservationDiscount = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    AvioCompSeats = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    AvioCompPrices = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    RateCompany = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompanyAbout", x => x.AvioCompID);
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
                    Lng = table.Column<decimal>(type: "decimal", nullable: false),
                    RateService = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RentService", x => x.ServiceId);
                });

            migrationBuilder.CreateTable(
                name: "UserDetails",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    UserType = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserDetails", x => x.UserId);
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
                    Rate = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    IsTaken = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    RentServiceServiceId = table.Column<int>(nullable: true),
                    UserDetailUserId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarInfo", x => x.CarId);
                    table.ForeignKey(
                        name: "FK_CarInfo_RentService_RentServiceServiceId",
                        column: x => x.RentServiceServiceId,
                        principalTable: "RentService",
                        principalColumn: "ServiceId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CarInfo_UserDetails_UserDetailUserId",
                        column: x => x.UserDetailUserId,
                        principalTable: "UserDetails",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "FlightInfo2",
                columns: table => new
                {
                    FlightID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    From = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    To = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Departing = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Returning = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Baggage = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    ClassF = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Stops = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Duration = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    CompanyName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Price = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    SeatsNumber = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    RateFlight = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    CompanyAboutAvioCompID = table.Column<int>(nullable: true),
                    UserDetailUserId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlightInfo2", x => x.FlightID);
                    table.ForeignKey(
                        name: "FK_FlightInfo2_CompanyAbout_CompanyAboutAvioCompID",
                        column: x => x.CompanyAboutAvioCompID,
                        principalTable: "CompanyAbout",
                        principalColumn: "AvioCompID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_FlightInfo2_UserDetails_UserDetailUserId",
                        column: x => x.UserDetailUserId,
                        principalTable: "UserDetails",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CarInfo_RentServiceServiceId",
                table: "CarInfo",
                column: "RentServiceServiceId");

            migrationBuilder.CreateIndex(
                name: "IX_CarInfo_UserDetailUserId",
                table: "CarInfo",
                column: "UserDetailUserId");

            migrationBuilder.CreateIndex(
                name: "IX_FlightInfo2_CompanyAboutAvioCompID",
                table: "FlightInfo2",
                column: "CompanyAboutAvioCompID");

            migrationBuilder.CreateIndex(
                name: "IX_FlightInfo2_UserDetailUserId",
                table: "FlightInfo2",
                column: "UserDetailUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AboutCompanies");

            migrationBuilder.DropTable(
                name: "CarInfo");

            migrationBuilder.DropTable(
                name: "FlightInfo2");

            migrationBuilder.DropTable(
                name: "FlightsInfo");

            migrationBuilder.DropTable(
                name: "RentService");

            migrationBuilder.DropTable(
                name: "CompanyAbout");

            migrationBuilder.DropTable(
                name: "UserDetails");
        }
    }
}

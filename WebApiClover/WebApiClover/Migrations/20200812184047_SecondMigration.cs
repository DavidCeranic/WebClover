using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RateService",
                table: "RentService");

            migrationBuilder.DropColumn(
                name: "RateFlight",
                table: "FlightInfo2");

            migrationBuilder.DropColumn(
                name: "RateCompany",
                table: "CompanyAbout");

            migrationBuilder.DropColumn(
                name: "Rate",
                table: "CarInfo");

            migrationBuilder.CreateTable(
                name: "Rate",
                columns: table => new
                {
                    RateID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RateNumber = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    CarInfoCarId = table.Column<int>(nullable: true),
                    CompanyAboutAvioCompID = table.Column<int>(nullable: true),
                    FlightInfo2FlightID = table.Column<int>(nullable: true),
                    RentServiceServiceId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rate", x => x.RateID);
                    table.ForeignKey(
                        name: "FK_Rate_CarInfo_CarInfoCarId",
                        column: x => x.CarInfoCarId,
                        principalTable: "CarInfo",
                        principalColumn: "CarId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Rate_CompanyAbout_CompanyAboutAvioCompID",
                        column: x => x.CompanyAboutAvioCompID,
                        principalTable: "CompanyAbout",
                        principalColumn: "AvioCompID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Rate_FlightInfo2_FlightInfo2FlightID",
                        column: x => x.FlightInfo2FlightID,
                        principalTable: "FlightInfo2",
                        principalColumn: "FlightID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Rate_RentService_RentServiceServiceId",
                        column: x => x.RentServiceServiceId,
                        principalTable: "RentService",
                        principalColumn: "ServiceId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Rate_CarInfoCarId",
                table: "Rate",
                column: "CarInfoCarId");

            migrationBuilder.CreateIndex(
                name: "IX_Rate_CompanyAboutAvioCompID",
                table: "Rate",
                column: "CompanyAboutAvioCompID");

            migrationBuilder.CreateIndex(
                name: "IX_Rate_FlightInfo2FlightID",
                table: "Rate",
                column: "FlightInfo2FlightID");

            migrationBuilder.CreateIndex(
                name: "IX_Rate_RentServiceServiceId",
                table: "Rate",
                column: "RentServiceServiceId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Rate");

            migrationBuilder.AddColumn<string>(
                name: "RateService",
                table: "RentService",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "RateFlight",
                table: "FlightInfo2",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "RateCompany",
                table: "CompanyAbout",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Rate",
                table: "CarInfo",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");
        }
    }
}

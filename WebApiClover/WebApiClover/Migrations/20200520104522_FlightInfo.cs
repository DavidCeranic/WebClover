using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class FlightInfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FlightsInfo");
        }
    }
}

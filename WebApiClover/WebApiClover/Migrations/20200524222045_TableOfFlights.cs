using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class TableOfFlights : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                    Price = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlightInfo2", x => x.FlightID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FlightInfo2");
        }
    }
}

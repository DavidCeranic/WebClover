using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class DveTabele : Migration
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AboutCompanies");
        }
    }
}

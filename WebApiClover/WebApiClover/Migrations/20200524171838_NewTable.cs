using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class NewTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                    AvioCompPrices = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompanyAbout", x => x.AvioCompID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CompanyAbout");
        }
    }
}

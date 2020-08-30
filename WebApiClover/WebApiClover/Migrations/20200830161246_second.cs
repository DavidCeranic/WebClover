using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "flightRate",
                columns: table => new
                {
                    RateIdd = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserIdd = table.Column<int>(nullable: false),
                    FlightIdd = table.Column<int>(nullable: false),
                    Ocena = table.Column<int>(nullable: false),
                    FlightInfo2FlightID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_flightRate", x => x.RateIdd);
                    table.ForeignKey(
                        name: "FK_flightRate_FlightInfo2_FlightInfo2FlightID",
                        column: x => x.FlightInfo2FlightID,
                        principalTable: "FlightInfo2",
                        principalColumn: "FlightID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_flightRate_FlightInfo2FlightID",
                table: "flightRate",
                column: "FlightInfo2FlightID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "flightRate");
        }
    }
}

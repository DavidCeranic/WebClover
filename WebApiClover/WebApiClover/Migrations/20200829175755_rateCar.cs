using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class rateCar : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rate_FlightInfo2_FlightInfo2FlightID",
                table: "Rate");

            migrationBuilder.DropIndex(
                name: "IX_Rate_FlightInfo2FlightID",
                table: "Rate");

            migrationBuilder.DropColumn(
                name: "FlightInfo2FlightID",
                table: "Rate");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FlightInfo2FlightID",
                table: "Rate",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Rate_FlightInfo2FlightID",
                table: "Rate",
                column: "FlightInfo2FlightID");

            migrationBuilder.AddForeignKey(
                name: "FK_Rate_FlightInfo2_FlightInfo2FlightID",
                table: "Rate",
                column: "FlightInfo2FlightID",
                principalTable: "FlightInfo2",
                principalColumn: "FlightID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

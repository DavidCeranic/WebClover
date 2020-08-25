using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class ThirdMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Seat_FlightInfo2_FlightInfo2FlightID",
                table: "Seat");

            migrationBuilder.DropIndex(
                name: "IX_Seat_FlightInfo2FlightID",
                table: "Seat");

            migrationBuilder.DropColumn(
                name: "FlightInfo2FlightID",
                table: "Seat");

            migrationBuilder.AddColumn<int>(
                name: "FlightInfo2Id",
                table: "Seat",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Seat_FlightInfo2Id",
                table: "Seat",
                column: "FlightInfo2Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Seat_FlightInfo2_FlightInfo2Id",
                table: "Seat",
                column: "FlightInfo2Id",
                principalTable: "FlightInfo2",
                principalColumn: "FlightID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Seat_FlightInfo2_FlightInfo2Id",
                table: "Seat");

            migrationBuilder.DropIndex(
                name: "IX_Seat_FlightInfo2Id",
                table: "Seat");

            migrationBuilder.DropColumn(
                name: "FlightInfo2Id",
                table: "Seat");

            migrationBuilder.AddColumn<int>(
                name: "FlightInfo2FlightID",
                table: "Seat",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Seat_FlightInfo2FlightID",
                table: "Seat",
                column: "FlightInfo2FlightID");

            migrationBuilder.AddForeignKey(
                name: "FK_Seat_FlightInfo2_FlightInfo2FlightID",
                table: "Seat",
                column: "FlightInfo2FlightID",
                principalTable: "FlightInfo2",
                principalColumn: "FlightID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

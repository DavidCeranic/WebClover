using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Seat_FlightInfo2_FlightInfo2FlightId",
                table: "Seat");

            migrationBuilder.RenameColumn(
                name: "FlightInfo2FlightId",
                table: "Seat",
                newName: "FlightInfo2FlightID");

            migrationBuilder.RenameIndex(
                name: "IX_Seat_FlightInfo2FlightId",
                table: "Seat",
                newName: "IX_Seat_FlightInfo2FlightID");

            migrationBuilder.AlterColumn<int>(
                name: "FlightInfo2FlightID",
                table: "Seat",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Seat_FlightInfo2_FlightInfo2FlightID",
                table: "Seat",
                column: "FlightInfo2FlightID",
                principalTable: "FlightInfo2",
                principalColumn: "FlightID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Seat_FlightInfo2_FlightInfo2FlightID",
                table: "Seat");

            migrationBuilder.RenameColumn(
                name: "FlightInfo2FlightID",
                table: "Seat",
                newName: "FlightInfo2FlightId");

            migrationBuilder.RenameIndex(
                name: "IX_Seat_FlightInfo2FlightID",
                table: "Seat",
                newName: "IX_Seat_FlightInfo2FlightId");

            migrationBuilder.AlterColumn<int>(
                name: "FlightInfo2FlightId",
                table: "Seat",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Seat_FlightInfo2_FlightInfo2FlightId",
                table: "Seat",
                column: "FlightInfo2FlightId",
                principalTable: "FlightInfo2",
                principalColumn: "FlightID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class third : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_flightRate_FlightInfo2_FlightInfo2FlightID",
                table: "flightRate");

            migrationBuilder.DropColumn(
                name: "FlightIdd",
                table: "flightRate");

            migrationBuilder.AlterColumn<int>(
                name: "FlightInfo2FlightID",
                table: "flightRate",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_flightRate_FlightInfo2_FlightInfo2FlightID",
                table: "flightRate",
                column: "FlightInfo2FlightID",
                principalTable: "FlightInfo2",
                principalColumn: "FlightID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_flightRate_FlightInfo2_FlightInfo2FlightID",
                table: "flightRate");

            migrationBuilder.AlterColumn<int>(
                name: "FlightInfo2FlightID",
                table: "flightRate",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "FlightIdd",
                table: "flightRate",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_flightRate_FlightInfo2_FlightInfo2FlightID",
                table: "flightRate",
                column: "FlightInfo2FlightID",
                principalTable: "FlightInfo2",
                principalColumn: "FlightID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

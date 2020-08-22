using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class reservationDetails : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReservationDetails_OfficeDetail_StartOfficeOfficeId",
                table: "ReservationDetails");

            migrationBuilder.DropIndex(
                name: "IX_ReservationDetails_StartOfficeOfficeId",
                table: "ReservationDetails");

            migrationBuilder.DropColumn(
                name: "StartOfficeOfficeId",
                table: "ReservationDetails");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StartOfficeOfficeId",
                table: "ReservationDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ReservationDetails_StartOfficeOfficeId",
                table: "ReservationDetails",
                column: "StartOfficeOfficeId");

            migrationBuilder.AddForeignKey(
                name: "FK_ReservationDetails_OfficeDetail_StartOfficeOfficeId",
                table: "ReservationDetails",
                column: "StartOfficeOfficeId",
                principalTable: "OfficeDetail",
                principalColumn: "OfficeId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

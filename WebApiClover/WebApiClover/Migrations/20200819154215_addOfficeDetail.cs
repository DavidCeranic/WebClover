using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class addOfficeDetail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OfficeDetail",
                columns: table => new
                {
                    OfficeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OfficeName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Lat = table.Column<double>(type: "float", nullable: false),
                    Lng = table.Column<double>(type: "float", nullable: false),
                    RentServiceServiceId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OfficeDetail", x => x.OfficeId);
                    table.ForeignKey(
                        name: "FK_OfficeDetail_RentService_RentServiceServiceId",
                        column: x => x.RentServiceServiceId,
                        principalTable: "RentService",
                        principalColumn: "ServiceId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OfficeDetail_RentServiceServiceId",
                table: "OfficeDetail",
                column: "RentServiceServiceId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OfficeDetail");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApiClover.Migrations
{
    public partial class RemovedFriendsFromUserDetails : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Friends_UserDetails_UserDetailUserId",
                table: "Friends");

            migrationBuilder.DropIndex(
                name: "IX_Friends_UserDetailUserId",
                table: "Friends");

            migrationBuilder.DropColumn(
                name: "UserDetailUserId",
                table: "Friends");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserDetailUserId",
                table: "Friends",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Friends_UserDetailUserId",
                table: "Friends",
                column: "UserDetailUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Friends_UserDetails_UserDetailUserId",
                table: "Friends",
                column: "UserDetailUserId",
                principalTable: "UserDetails",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

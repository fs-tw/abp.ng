using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Identity.Migrations
{
    public partial class add_fs_modules : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CodingManagementCodes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ExtraProperties = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierId = table.Column<Guid>(nullable: true),
                    No = table.Column<string>(nullable: false),
                    DisplayName = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Code = table.Column<string>(nullable: false),
                    DefinitionId = table.Column<Guid>(nullable: true),
                    ParentId = table.Column<Guid>(nullable: true),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CodingManagementCodes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CodingManagementCodes_CodingManagementCodes_DefinitionId",
                        column: x => x.DefinitionId,
                        principalTable: "CodingManagementCodes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CodingManagementCodes_CodingManagementCodes_ParentId",
                        column: x => x.ParentId,
                        principalTable: "CodingManagementCodes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CodingManagementCodes_DefinitionId",
                table: "CodingManagementCodes",
                column: "DefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_CodingManagementCodes_ParentId",
                table: "CodingManagementCodes",
                column: "ParentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CodingManagementCodes");
        }
    }
}

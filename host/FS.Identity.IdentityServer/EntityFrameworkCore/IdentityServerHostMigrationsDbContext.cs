using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.IdentityServer.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement.EntityFrameworkCore;
using FS.Abp.CodingManagement.EntityFrameworkCore;
using FS.Abp.Themes.EntityFrameworkCore;

namespace FS.Identity.EntityFrameworkCore
{
    public class IdentityServerHostMigrationsDbContext : AbpDbContext<IdentityServerHostMigrationsDbContext>
    {
        public IdentityServerHostMigrationsDbContext(DbContextOptions<IdentityServerHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ConfigurePermissionManagement();
            modelBuilder.ConfigureSettingManagement();
            modelBuilder.ConfigureAuditLogging();
            modelBuilder.ConfigureIdentity();
            modelBuilder.ConfigureIdentityServer();
            modelBuilder.ConfigureTenantManagement();
            modelBuilder.ConfigureThemes();
            modelBuilder.ConfigureCodingManagement();
            

            base.OnModelCreating(modelBuilder);
        }
    }
}

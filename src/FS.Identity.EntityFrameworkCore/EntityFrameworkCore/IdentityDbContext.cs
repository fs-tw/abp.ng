using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Identity.EntityFrameworkCore
{
    [ConnectionStringName(IdentityDbProperties.ConnectionStringName)]
    public partial class IdentityDbContext : AbpDbContext<IdentityDbContext>, IIdentityDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public IdentityDbContext(DbContextOptions<IdentityDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ConfigureIdentity();

            base.OnModelCreating(builder);
        }
    }
}
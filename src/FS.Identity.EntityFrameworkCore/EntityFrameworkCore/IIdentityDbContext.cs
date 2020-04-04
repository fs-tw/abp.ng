using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Identity.EntityFrameworkCore
{
    [ConnectionStringName(IdentityDbProperties.ConnectionStringName)]
    public partial interface IIdentityDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}
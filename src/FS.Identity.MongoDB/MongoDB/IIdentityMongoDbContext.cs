using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Identity.MongoDB
{
    [ConnectionStringName(IdentityDbProperties.ConnectionStringName)]
    public interface IIdentityMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}

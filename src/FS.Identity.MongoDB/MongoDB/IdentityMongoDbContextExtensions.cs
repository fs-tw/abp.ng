using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Identity.MongoDB
{
    public static class IdentityMongoDbContextExtensions
    {
        public static void ConfigureIdentity(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new IdentityMongoModelBuilderConfigurationOptions(
                IdentityDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}
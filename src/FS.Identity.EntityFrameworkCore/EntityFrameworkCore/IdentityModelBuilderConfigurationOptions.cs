using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.Identity.EntityFrameworkCore
{
    public partial class IdentityModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public IdentityModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}
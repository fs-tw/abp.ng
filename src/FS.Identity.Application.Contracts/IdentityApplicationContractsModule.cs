using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Authorization;

namespace FS.Identity
{
    [DependsOn(
        typeof(IdentityDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule),
        typeof(FS.Abp.Application.AbpDddApplicationContractsModule)
        )]
    public class IdentityApplicationContractsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<IdentityApplicationContractsModule>("FS.Identity");
            });
        }
    }
}

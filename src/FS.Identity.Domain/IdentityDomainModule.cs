using Volo.Abp.Modularity;

namespace FS.Identity
{
    [DependsOn(
        typeof(IdentityDomainSharedModule),
        typeof(FS.Abp.Domain.AbpDddDomainModule)
        )]
    public class IdentityDomainModule : AbpModule
    {

    }
}

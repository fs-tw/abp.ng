using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace FS.Identity
{
    [DependsOn(
        typeof(IdentityDomainModule),
        typeof(IdentityApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule),
        typeof(FS.Abp.Application.AbpDddApplicationModule)
        )]
    public class IdentityApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<IdentityApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<IdentityApplicationModule>();
            });
        }
    }
}

using Localization.Resources.AbpUi;
using FS.Identity.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Identity
{
    [DependsOn(
        typeof(IdentityApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class IdentityHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(IdentityHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<IdentityResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}

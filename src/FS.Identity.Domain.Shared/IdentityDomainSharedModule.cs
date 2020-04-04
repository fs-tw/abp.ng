using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Identity.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.Identity
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    public class IdentityDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<IdentityDomainSharedModule>("FS.Identity");
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<IdentityResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/Identity");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Identity", typeof(IdentityResource));
            });
        }
    }
}

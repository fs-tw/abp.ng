using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Identity
{
    [DependsOn(
        typeof(IdentityApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class IdentityHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Identity";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(IdentityApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}

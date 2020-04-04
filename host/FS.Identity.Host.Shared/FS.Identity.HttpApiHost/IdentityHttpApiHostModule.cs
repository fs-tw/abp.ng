using Microsoft.Extensions.DependencyInjection;
using FS.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

namespace FS.Identity.Host.HttpApi
{
    [DependsOn(
        typeof(IdentityApplicationModule),
        typeof(IdentityHttpApiModule),
        typeof(EntityFrameworkCore.IdentityEntityFrameworkCoreModule)
        )]
    public class IdentityHttpApiHostModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddJsonSubtypesConverterProfile<IdentityApplicationModule>();
            Configure<AbpAspNetCoreMvcOptions>(options =>
            {
                options.ConventionalControllers.Create(typeof(IdentityApplicationModule).Assembly, action => action.RootPath = "Identity");
            });
        }
    }
}

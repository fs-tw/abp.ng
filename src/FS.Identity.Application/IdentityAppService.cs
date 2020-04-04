using FS.Identity.Localization;
using Volo.Abp.Application.Services;

namespace FS.Identity
{
    public abstract class IdentityAppService : ApplicationService
    {
        protected IdentityAppService()
        {
            LocalizationResource = typeof(IdentityResource);
            ObjectMapperContext = typeof(IdentityApplicationModule);
        }
    }
}

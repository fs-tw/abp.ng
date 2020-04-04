using FS.Identity.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Identity
{
    public abstract class IdentityController : AbpController
    {
        protected IdentityController()
        {
            LocalizationResource = typeof(IdentityResource);
        }
    }
}

using FS.Identity.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Identity.Pages
{
    public abstract class IdentityPageModel : AbpPageModel
    {
        protected IdentityPageModel()
        {
            LocalizationResourceType = typeof(IdentityResource);
        }
    }
}
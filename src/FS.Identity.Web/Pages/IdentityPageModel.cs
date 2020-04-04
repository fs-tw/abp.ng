using FS.Identity.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Identity.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class IdentityPageModel : AbpPageModel
    {
        protected IdentityPageModel()
        {
            LocalizationResourceType = typeof(IdentityResource);
            ObjectMapperContext = typeof(IdentityWebModule);
        }
    }
}
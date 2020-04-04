using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using FS.Identity.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Identity.Web.Pages
{
    /* Inherit your UI Pages from this class. To do that, add this line to your Pages (.cshtml files under the Page folder):
     * @inherits FS.Identity.Web.Pages.IdentityPage
     */
    public abstract class IdentityPage : AbpPage
    {
        [RazorInject]
        public IHtmlLocalizer<IdentityResource> L { get; set; }
    }
}

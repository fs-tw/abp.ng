using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using FS.Identity.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Identity.Pages
{
    public abstract class IdentityPage : AbpPage
    {
        [RazorInject]
        public IHtmlLocalizer<IdentityResource> L { get; set; }
    }
}

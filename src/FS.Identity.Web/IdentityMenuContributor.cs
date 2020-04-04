using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Identity.Web
{
    public class IdentityMenuContributor : IMenuContributor
    {
        public async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name == StandardMenus.Main)
            {
                await ConfigureMainMenu(context);
            }
        }

        private Task ConfigureMainMenu(MenuConfigurationContext context)
        {
            //Add main menu items.

            return Task.CompletedTask;
        }
    }
}
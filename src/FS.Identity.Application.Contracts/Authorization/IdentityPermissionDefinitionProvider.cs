using FS.Identity.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Identity.Authorization
{
    public class IdentityPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            //var moduleGroup = context.AddGroup(IdentityPermissions.GroupName, L("Permission:Identity"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<IdentityResource>(name);
        }
    }
}
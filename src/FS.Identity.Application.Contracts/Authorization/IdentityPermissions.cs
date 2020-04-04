using Volo.Abp.Reflection;

namespace FS.Identity.Authorization
{
    public class IdentityPermissions
    {
        public const string GroupName = "Identity";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(IdentityPermissions));
        }
    }
}
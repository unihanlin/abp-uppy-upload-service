using Volo.Abp.Reflection;

namespace Unihanlin.AbpUppyUploadService.Permissions;

public class AbpUppyUploadServicePermissions
{
    public const string GroupName = "AbpUppyUploadService";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(AbpUppyUploadServicePermissions));
    }
}

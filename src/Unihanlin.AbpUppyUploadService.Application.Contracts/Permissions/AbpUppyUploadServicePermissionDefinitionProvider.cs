using Unihanlin.AbpUppyUploadService.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Unihanlin.AbpUppyUploadService.Permissions;

public class AbpUppyUploadServicePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(AbpUppyUploadServicePermissions.GroupName, L("Permission:AbpUppyUploadService"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AbpUppyUploadServiceResource>(name);
    }
}

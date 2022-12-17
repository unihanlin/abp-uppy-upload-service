using Unihanlin.AbpUppyUploadService.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Unihanlin.AbpUppyUploadService;

public abstract class AbpUppyUploadServiceController : AbpControllerBase
{
    protected AbpUppyUploadServiceController()
    {
        LocalizationResource = typeof(AbpUppyUploadServiceResource);
    }
}

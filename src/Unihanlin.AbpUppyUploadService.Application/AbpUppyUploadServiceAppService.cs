using Unihanlin.AbpUppyUploadService.Localization;
using Volo.Abp.Application.Services;

namespace Unihanlin.AbpUppyUploadService;

public abstract class AbpUppyUploadServiceAppService : ApplicationService
{
    protected AbpUppyUploadServiceAppService()
    {
        LocalizationResource = typeof(AbpUppyUploadServiceResource);
        ObjectMapperContext = typeof(AbpUppyUploadServiceApplicationModule);
    }
}

using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;

namespace Unihanlin.AbpUppyUploadService.Seed;

public class AbpUppyUploadServiceHttpApiHostDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly AbpUppyUploadServiceSampleDataSeeder _abpUppyUploadServiceSampleDataSeeder;
    private readonly ICurrentTenant _currentTenant;

    public AbpUppyUploadServiceHttpApiHostDataSeedContributor(
        AbpUppyUploadServiceSampleDataSeeder abpUppyUploadServiceSampleDataSeeder,
        ICurrentTenant currentTenant)
    {
        _abpUppyUploadServiceSampleDataSeeder = abpUppyUploadServiceSampleDataSeeder;
        _currentTenant = currentTenant;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        using (_currentTenant.Change(context?.TenantId))
        {
            await _abpUppyUploadServiceSampleDataSeeder.SeedAsync(context);
        }
    }
}

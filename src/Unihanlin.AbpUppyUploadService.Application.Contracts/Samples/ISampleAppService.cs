﻿using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Unihanlin.AbpUppyUploadService.Samples;

public interface ISampleAppService : IApplicationService
{
    Task<SampleDto> GetAsync();

    Task<SampleDto> GetAuthorizedAsync();

    Task<bool> UploadAsync(UploadDto input);

    Task<bool> UploadManyAsync(UploadManyDto input);
}

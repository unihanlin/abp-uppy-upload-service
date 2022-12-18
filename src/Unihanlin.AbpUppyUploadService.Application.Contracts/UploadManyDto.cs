using System.Collections.Generic;
using Volo.Abp.Content;

namespace Unihanlin.AbpUppyUploadService
{
    public class UploadManyDto
    {
        public IList<IRemoteStreamContent> Files { get; set; }
    }
}

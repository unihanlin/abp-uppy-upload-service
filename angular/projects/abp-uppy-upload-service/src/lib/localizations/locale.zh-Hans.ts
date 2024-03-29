import { ABP } from '@abp/ng.core';

export class AbpUppyUploadServiceZhHans {
  static Resource: ABP.LocalizationResource = {
    resourceName: 'AbpUppyUploadService',
    texts: {
      Ok: '确定',
      FileTooBig: '文件太大，最大文件大小限制为 {0}。',
      Open: '打开',
      Type: '类型',
      Name: '名称',
      Rename: '重命名',
      CurrentName: '当前名称',
      DirectoryDeleteConfirmationMessage: '这个目录以及目录下的文件将被删除, 此操作无法撤销.',
      FileDeleteConfirmationMessage: '文件将被删除, 此操作无法撤销',
      SuccessfullyDeleted: '删除成功!',
      Download: '下载',
      CantDownloadFolderDescription: '你无法下载文件夹',
      CreateFolder: '创建文件夹',
      UploadFiles: '上传文件',
      Root: '根目录',
      ThereIsNoDirectory: '没有目录',
      AreYouSure: '你确定吗?',
      DirectoryMoveConfirmMessage: '你确定要移动{0}文件夹到{1}下吗?',
      SuccessfullyMoved: '移动成功',
      Move: '移动',
      MoveToUnder: '移至下方',
      FileName: '文件名',
      NotValidName: "'{0}' 不是有效的名称.",
      AlreadyExist: "'{0}' 已经存在.",
      NotMovableToUnderChild: '不能将文件夹移动到其子文件夹下.',
      GoUpFolder: '到父目录',
      AllFiles: '所有文件',
      Filter: '筛选',
      MoveHere: '搬来这',
      FilesWillBeOverrided: '{0} 个文件已存在。这些文件将被覆盖。',
      NotValidFileNames: '{0} 个文件名无效。',
      FilesAlreadyExist: '某些选定的文件已存在。',
      CloseModal: '关闭模态框',
      AddMoreFiles: '添加更多文件',
      AddingMoreFiles: '添加更多文件',
      ImportFrom: '从%{name}导入',
      DashboardWindowTitle: '文件上传控制台（按Esc键关闭）',
      DashboardTitle: '文件上传控制台',
      CopyLinkToClipboardSuccess: '链接已复制到剪贴板.',
      CopyLinkToClipboardFallback: '复制以下网址',
      CopyLink: '复制链接',
      FileSource: '文件源: %{name}',
      Done: '完成',
      Back: '后退',
      RemoveFile: '移除文件',
      EditFile: '编辑文件',
      Editing: '编辑%{file}',
      Edit: '编辑',
      FinishEditingFile: '完成编辑',
      SaveChanges: '保持改动',
      MyDevice: '我的设备',
      DropPasteImport: '将文件拖放到此处, 粘贴, 从%{browse}导入',
      DropPaste: '将文件拖放到此处，粘贴, 或%{browse}',
      DropHint: '将文件拖放到这里',
      Browse: '点击浏览',
      UploadComplete: '上传完成',
      UploadPaused: '暂停上传',
      ResumeUpload: '恢复上传',
      PauseUpload: '暂停上传',
      RetryUpload: '重试上传',
      CancelUpload: '取消上传',
      FileSelected: '%{smart_count} 文件已选择',
      NFileSelected: '%{smart_count} 文件已选择',
      UploadingFile: '上传 %{smart_count} 文件',
      NUploadingFile: '上传 %{smart_count} 文件',
      ProcessingFile: '正在处理%{smart_count}文件',
      NProcessingFile: '正在处理%{smart_count}文件',
      Uploading: '上传中',
      Complete: '完成',
      UploadFailed: '上传失败',
      Paused: '暂停',
      Retry: '重试',
      Cancel: '取消',
      FileUploadedOfTotal: '%{complete} of %{smart_count} 文件已上传',
      NFileUploadedOfTotal: '%{complete} of %{smart_count} 文件已上传',
      DataUploadedOfTotal: '%{complete} of %{total}',
      XTimeLeft: '剩余%{time}',
      UploadFile: '上传%{smart_count}文件',
      UploadXFiles: '上传%{smart_count}文件',
      UploadNewFile: '上传+%{smart_count}文件',
      UploadXNewFile: '上传+%{smart_count}文件',
      CopyDecimalText: '复制数值型文本',
      CopyDmsText: '复制度分秒(DD°MM\'SS")型文本',
      Information: '信息',
      Error: '错误',
      TextCopied: '已复制 <strong>{0}</strong> 到剪贴板',
      TextCopiedErrorMessage: '复制 <strong>{0}</strong> 到剪贴板时发生错误',
      PoweredBy: 'Powered by %{uppy}',
      AddMore: '添加更多',
      EditFileWithFilename: '编辑%{file}文件',
      Save: '保存',
      DropPasteFiles: '将文件拖放到此处, 或%{browseFiles}',
      DropPasteFolders: '将文件拖放到此处, 或%{browseFolders}',
      DropPasteBoth: '将文件拖放到此处, %{browseFiles}, 或%{browseFolders}',
      DropPasteImportFiles: '将文件拖放到此处, %{browseFiles}, 或导入:',
      DropPasteImportFolders: '将文件拖放到此处, %{browseFolders}, 或导入:',
      DropPasteImportBoth: '将文件拖放到此处, %{browseFiles}, %{browseFolders}, 或导入:',
      ImportFiles: '导入文件:',
      BrowseFiles: '浏览文件',
      BrowseFolders: '浏览文件夹',
      RecoveredFile: '我们无法完全恢复1个文件. 请重新选择并恢复上传.',
      RecoveredXFiles: '我们无法完全恢复1个文件%{smart_count}个文件. 请重新选择并恢复上传.',
      RecoveredAllFiles: '我们已恢复了所有文件. 你现在可以恢复上传.',
      SessionRestored: 'Session已恢复',
      ReSelect: '重新选择',
      MissingRequiredMetaField: '缺少必需的元字段: %{fields}.',
      MissingRequiredMetaFields: '缺少必需的元字段: %{fields}.',
      TakePictureBtn: '截屏',
      RecordVideoBtn: '录视频',
    },
  };
}

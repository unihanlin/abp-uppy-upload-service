import { ABP } from '@abp/ng.core';

export class AbpUppyUploadServiceFr {
  static Resource: ABP.LocalizationResource = {
    resourceName: 'AbpUppyUploadService',
    texts: {
      FileTooBig: 'Le fichier est trop volumineux, la taille maximale du fichier est de {0}.',
      Open: 'Ouvert',
      Type: 'Type',
      Name: 'Nom',
      Rename: 'Renommer',
      CurrentName: 'Nom actuel',
      DirectoryDeleteConfirmationMessage:
        'Ce répertoire et tout son contenu seront supprimés, vous ne pouvez pas annuler cette action.',
      FileDeleteConfirmationMessage:
        'Le fichier sera supprimé, vous ne pouvez pas annuler cette action.',
      SuccessfullyDeleted: 'Supprimé avec succès.',
      Download: 'Télécharger',
      CantDownloadFolderDescription: 'Vous ne pouvez pas télécharger le dossier.',
      CreateFolder: 'Créer le dossier',
      UploadFiles: 'Télécharger des fichiers',
      Root: 'Racine',
      ThereIsNoDirectory: "Il n'y a pas de répertoire.",
      AreYouSure: 'Êtes-vous sûr?',
      DirectoryMoveConfirmMessage: 'Voulez-vous vraiment déplacer le dossier {0} sous {1}?',
      SuccessfullyMoved: 'Déplacé avec succès.',
      Move: 'Déplacer',
      MoveToUnder: 'Déplacer sous',
      FileName: 'Nom de fichier',
      NotValidName: "«{0}» n'est pas un nom valide.",
      AlreadyExist: '«{0}» existe déjà.',
      NotMovableToUnderChild: 'Vous ne pouvez pas déplacer un dossier sous son dossier enfant.',
      GoUpFolder: 'Remonter le dossier',
      AllFiles: 'Tous les fichiers',
      Filter: 'Filtre',
      MoveHere: 'Déplacer ici',
      FilesWillBeOverrided: '{0} fichiers existent déjà. Les fichiers seront remplacés.',
      NotValidFileNames: '{0} nom (s) de fichier (s) ne sont pas valides.',
      FilesAlreadyExist: 'Certains fichiers sélectionnés existent déjà.',
      CloseModal: 'Fermer modal',
      AddMoreFiles: 'Ajouter plus de fichiers',
      AddingMoreFiles: 'Ajouter plus de fichiers',
      ImportFrom: 'Importer depuis %{name}',
      DashboardWindowTitle:
        'Fenêtre du tableau de bord de téléchargement de fichiers (appuyez sur Échap pour fermer)',
      DashboardTitle: 'Tableau de bord de téléchargement de fichiers',
      CopyLinkToClipboardSuccess: 'Lien copié dans le presse-papiers.',
      CopyLinkToClipboardFallback: "Copiez l'URL ci-dessous",
      CopyLink: 'Copier le lien',
      FileSource: 'Source du fichier: %{name}',
      Done: 'Terminé',
      Back: 'Retour',
      RemoveFile: 'Effacer le fichier',
      EditFile: 'Modifier le fichier',
      Editing: 'Modification de %{file}',
      Edit: 'Éditer',
      FinishEditingFile: "Terminer l'édition du fichier",
      SaveChanges: 'Sauvegarder les modifications',
      MyDevice: 'Mon appareil',
      DropPasteImport: 'Déposez les fichiers ici, collez, %{browse} ou importez depuis',
      DropPaste: 'Déposez les fichiers ici, collez ou %{browse}',
      DropHint: 'Déposez vos fichiers ici',
      Browse: 'cliquez pour parcourir',
      UploadComplete: 'Téléchargement complet',
      UploadPaused: 'Téléchargement interrompu',
      ResumeUpload: 'Reprendre le téléchargement',
      PauseUpload: 'Suspendre le téléchargement',
      RetryUpload: 'Réessayer le téléversement',
      CancelUpload: 'Annuler le téléchargement',
      FileSelected: '%{smart_count} fichier sélectionné',
      NFileSelected: '%{smart_count} fichiers sélectionnés',
      UploadingFile: 'Téléchargement du fichier %{smart_count}',
      NUploadingFile: 'Téléchargement de %{smart_count} fichiers',
      ProcessingFile: 'Traitement du fichier %{smart_count}',
      NProcessingFile: 'Traitement de %{smart_count} fichiers',
      Uploading: 'Téléchargement',
      Complete: 'Compléter',
      UploadFailed: 'Le téléchargement a échoué',
      Paused: 'En pause',
      Retry: 'Réessayez',
      Cancel: 'Annuler',
      FileUploadedOfTotal: '%{complete} de %{smart_count} fichier téléversé',
      NFileUploadedOfTotal: '%{complete} de %{smart_count} fichiers téléversés',
      DataUploadedOfTotal: '%{complete} sur %{total}',
      XTimeLeft: '%{time} left',
      UploadFile: 'Importer le fichier %{smart_count}',
      UploadXFiles: 'Importer %{smart_count} fichiers',
      UploadNewFile: 'Importer le fichier +%{smart_count}',
      UploadXNewFile: 'Importer +%{smart_count} fichiers',
      PoweredBy: 'Powered by %{uppy}',
      AddMore: 'Add more',
      EditFileWithFilename: 'Edit file %{file}',
      Save: 'Save',
      DropPasteFiles: 'Drop files here or %{browseFiles}',
      DropPasteFolders: 'Drop files here or %{browseFolders}',
      DropPasteBoth: 'Drop files here, %{browseFiles} or %{browseFolders}',
      DropPasteImportFiles: 'Drop files here, %{browseFiles} or import from:',
      DropPasteImportFolders: 'Drop files here, %{browseFolders} or import from:',
      DropPasteImportBoth: 'Drop files here, %{browseFiles}, %{browseFolders} or import from:',
      ImportFiles: 'Import files from:',
      BrowseFiles: 'browse files',
      BrowseFolders: 'browse folders',
      RecoveredFile:
        'We could not fully recover 1 file. Please re-select it and resume the upload.',
      RecoveredXFiles:
        'We could not fully recover %{smart_count} files. Please re-select them and resume the upload.',
      RecoveredAllFiles: 'We restored all files. You can now resume the upload.',
      SessionRestored: 'Session restored',
      ReSelect: 'Re-select',
      MissingRequiredMetaField: 'Missing required meta field: %{fields}.',
      MissingRequiredMetaFields: 'Missing required meta fields: %{fields}.',
      TakePictureBtn: 'Take Picture',
      RecordVideoBtn: 'Record Video',
    },
  };
}

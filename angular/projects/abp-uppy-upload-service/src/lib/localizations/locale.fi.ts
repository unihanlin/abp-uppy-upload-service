import { ABP } from '@abp/ng.core';

export class AbpUppyUploadServiceFi {
  static Resource: ABP.LocalizationResource = {
    resourceName: 'AbpUppyUploadService',
    texts: {
      FileTooBig: 'Tiedosto on liian suuri, tiedoston enimmäiskoko on {0}.',
      Open: 'Avata',
      Type: 'Tyyppi',
      Name: 'Nimi',
      Rename: 'Nimeä uudelleen',
      CurrentName: 'Nykyinen nimi',
      DirectoryDeleteConfirmationMessage:
        'Tämä hakemisto ja kaikki sisältö poistetaan. Et voi peruuttaa tätä toimintoa.',
      FileDeleteConfirmationMessage: 'Tiedosto poistetaan, et voi peruuttaa tätä toimintoa.',
      SuccessfullyDeleted: 'Poistaminen onnistui.',
      Download: 'Downlad',
      CantDownloadFolderDescription: 'Et voi ladata kansiota.',
      CreateFolder: 'Luo kansio',
      UploadFiles: 'Lähetä tiedostoja',
      Root: 'Root',
      ThereIsNoDirectory: 'Hakemistoa ei ole.',
      AreYouSure: 'Oletko varma?',
      DirectoryMoveConfirmMessage: 'Haluatko varmasti siirtää {0} kansion kohtaan {1}?',
      SuccessfullyMoved: 'Onnistuneesti liikuttunut.',
      Move: 'Liikkua',
      MoveToUnder: 'Siirry kohtaan',
      FileName: 'Tiedoston nimi',
      NotValidName: '{0} ei ole kelvollinen nimi.',
      AlreadyExist: '"{0}" on jo olemassa.',
      NotMovableToUnderChild: 'Et voi siirtää kansiota sen alikansioon.',
      GoUpFolder: 'Siirry kansioon',
      AllFiles: 'Kaikki tiedostot',
      Filter: 'Suodattaa',
      MoveHere: 'Muuta tänne',
      FilesWillBeOverrided: '{0} tiedostoa on jo olemassa. Tiedostot ohitetaan.',
      NotValidFileNames: '{0} tiedostonimi (t) eivät kelpaa.',
      FilesAlreadyExist: 'Jotkut valitut tiedostot ovat jo olemassa.',
      CloseModal: 'Sulje Modal',
      AddMoreFiles: 'Lisää lisää tiedostoja',
      AddingMoreFiles: 'Lisää tiedostoja',
      ImportFrom: 'Tuo kohteesta %{name}',
      DashboardWindowTitle: 'Tiedoston lataus -näyttöikkuna (sulje painamalla Esc-näppäintä)',
      DashboardTitle: 'Tiedostojen lataamisen hallintapaneeli',
      CopyLinkToClipboardSuccess: 'Linkki kopioitu leikepöydälle.',
      CopyLinkToClipboardFallback: 'Kopioi alla oleva URL-osoite',
      CopyLink: 'Kopioi linkki',
      FileSource: 'Tiedoston lähde: %{name}',
      Done: 'Tehty',
      Back: 'Takaisin',
      RemoveFile: 'Poista tiedosto',
      EditFile: 'Muokkaa tiedostoa',
      Editing: 'Muokataan %{file}',
      Edit: 'Muokata',
      FinishEditingFile: 'Viimeistele tiedoston muokkaus',
      SaveChanges: 'Tallenna muutokset',
      MyDevice: 'Laitteeni',
      DropPasteImport: 'Pudota tiedostot tänne, liitä, %{browse} tai tuo niistä',
      DropPaste: 'Pudota tiedostot tänne, liitä tai %{browse}',
      DropHint: 'Pudota tiedostosi tähän',
      Browse: 'napsauta selataksesi',
      UploadComplete: 'Lataus valmis',
      UploadPaused: 'Lataus keskeytetty',
      ResumeUpload: 'Jatka lataamista',
      PauseUpload: 'Keskeytä lataus',
      RetryUpload: 'Yritä lähettää uudelleen',
      CancelUpload: 'Peruuta lähetys',
      FileSelected: '%{smart_count} tiedosto valittu',
      NFileSelected: '%{smart_count} tiedostoa valittu',
      UploadingFile: 'Ladataan tiedostoa %{smart_count}',
      NUploadingFile: 'Ladataan %{smart_count} tiedostoa',
      ProcessingFile: 'Käsitellään tiedostoa %{smart_count}',
      NProcessingFile: 'Käsitellään %{smart_count} tiedostoa',
      Uploading: 'Lähetetään',
      Complete: 'Saattaa loppuun',
      UploadFailed: 'Lataus epäonnistui',
      Paused: 'Keskeytetty',
      Retry: 'Yritä uudelleen',
      Cancel: 'Peruuttaa',
      FileUploadedOfTotal: '%{complete}/%{smart_count} -tiedostosta ladattu',
      NFileUploadedOfTotal: '%{complete}/%{smart_count} ladatusta tiedostosta',
      DataUploadedOfTotal: '%{complete} of %{total}',
      XTimeLeft: '%{time} left',
      UploadFile: 'Lähetä %{smart_count} tiedosto',
      UploadXFiles: 'Lähetä %{smart_count} tiedostoa',
      UploadNewFile: 'Lähetä + %{smart_count} tiedosto',
      UploadXNewFile: 'Lähetä + %{smart_count} tiedostoa',
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
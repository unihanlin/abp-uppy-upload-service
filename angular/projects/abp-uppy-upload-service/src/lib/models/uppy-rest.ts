export namespace UppyRest {
  export type Trigger = string;

  export type Params = { [param: string]: any };

  export type Config = {
    url: string;
    apiName: string;
  };

  export type Xhr = Partial<{
    fieldName: string;
    timeout: number;
    formData: boolean;
    bundle: boolean;
  }>;

  export type Restrictions = Partial<{
    maxFileSize: number;
    minFileSize: number;
    maxTotalFileSize: number;
    maxNumberOfFiles: number;
    minNumberOfFiles: number;
    allowedFileTypes: string[];
  }>;
}

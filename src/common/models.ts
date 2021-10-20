export interface GenericParameter<T> {
    body: T;
  }
  
  export interface CompanyInfoModel {
    name: string;
    registerNumber: string;
    taxOffice: string;
    tradeRegistryNumber: string;
    mersisNumber: string;
    phone: string;
    fax: string;
    address: string;
    district: string;
    city: string;
    country: string;
    postalCode: string;
    buildingNumber: string;
    doorNumber: string;
    mail: string;
    webSite: string;
  }

  export interface LocationModel {
    selectedKeys: string;
    disabledPage: {
      theme: boolean;
      companyinfo: boolean;
      logo: boolean;
      signature: boolean;
      bankinfo: boolean;
      notes: boolean;
      home: boolean;
    }
  }
  
  export interface DocumentNotesModel {
    firstNote: string;
    secondNote: string;
    thirdNote: string;
  }

  export interface CropperStateModel {
    src?: any;
    cropResult?: any;
    refresh?: boolean;
  }
  
  export interface LogoModel {
    logoBase64: string;
  }
  
  export interface SignatureModel {
    signatureBase64: string;
  }
  
  export interface BankInfoModel {
    bankName: string;
    branch: string;
    branchCode: string;
    accountCode: string;
    accountType: string;
    iban: string;
    accountName: string;
  }
  
  export interface TemplateModel {
    HtmlTemplate: string;
    EinvoiceTemplate: string;
    EarchiveTemplate: string;
  }
  
  export interface ProductModel {
    Product: boolean;
  }
  
  export interface LogoAndSinatureModel {
    logoCroppedImage: string;
    signatureCroppedImage: string;
  }
  
  export interface CommonModel {
    companyInfo: StateModel;
    bankInfo: StateModel;
    documentNotes: StateModel;
    logoAndSignature: LogoModel;
    htmlPreview: HtmlPreviewModel;
  }
  
  export interface HtmlPreviewModel {
    selected: TemplateModel;
    selectedProduct: ProductSetModel;
  }
  
  export interface ProductSetModel {
    Product: string;
  }
  
  export interface StateModel {
    info: CompanyInfoModel;
    list: Array<BankInfoModel>;
    notes: DocumentNotesModel;
  }
  
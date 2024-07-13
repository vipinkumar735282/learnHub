// export interface IForm {
//     formTitle: string;
//     FormControls: IFormControl[];
//     saveBtnTitle?: string;
//     resetBtnTitle?: string;
// }

// export interface IFormControl {
//     name: string;
//     label: string;
//     value?: string;
//     options?: IOptions[];
//     radioOptions?: string[];
//     placeholder?: string;
//     class: string;
//     type: string;
//     validators: IValidator[];
// }

// export interface IValidator {
//     validatorName?: string;
//     message?: string;
//     required?: boolean;
//     pattern?: string | undefined;
//     minlength?: number;
//     maxlength?: number;
//     email?: string;
// }

// export interface IOptions {
//     id?: number;
//     value?: string;
// }
export interface IForm{
    get(arg0: string): unknown
        formTitle: string 
        formControls: IFormControl[]
        saveBtnTitle?: string
        resetBtnTitle?: string
    }
    export interface IFormControl{
        name: string;
        label: string;
        value: string | number | string[];
        placeholder: string;
        class: string;
        type: 'text' | 'number' | 'date' | 'select' | 'checkbox' | 'file' | 'radio';
        options?: IOptions[];
        radioOptions?: string[]
        checkboxOptions?: string[];
        validators: IValidator[];
    }
     export interface IValidator{
        validatorName?: string
        message?: string
        required?: boolean
        pattern?: string |undefined
        minlength?: number
        maxlength?: number
        email?: string
        touched?: boolean
    
    }
    
    interface IOptions{
        label: string;
        id?: number;
        value?: string;
    }
    
    /**
     * create the interface fro Admission
     */
    //  export interface IForm{
    //     get(arg0: string): unknown
    //     formTitle: string
    //     formControls: IFormControl[]
    //     saveBtnTitle?: string
    //     resetBtnTitle?: string
    //  }
    //  export interface IFormControl{
    //     name: string
    //     label: string
    //     value?: string
    //     options?: IOptions[]
    //     radioOptions?: string[]
    //     placeholder?: string
    //     class:  string
    //     type: string
    //     validators?: IValidator[]
    //  }
    //  export interface IValidator{
    //     validatorName?: string
    //     message?: string
    //     required?: boolean
    //     pattern?: string
    //     minlength?:number
    //     maxlength?: number
    //     email?: string
    //     touched?: boolean
    //  }
    //  interface IOptions{
    //     label: string
    //     id?: number
    //     value?: string
    //  }
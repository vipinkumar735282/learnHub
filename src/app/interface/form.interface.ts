export interface IForm {
    formTitle: string;
    FormControls: IFormControl[];
    saveBtnTitle?: string;
    resetBtnTitle?: string;
}

export interface IFormControl {
    name: string;
    label: string;
    value?: string;
    options?: IOptions[];
    radioOptions?: string[];
    placeholder?: string;
    class: string;
    type: string;
    validators: IValidator[];
}

export interface IValidator {
    validatorName?: string;
    message?: string;
    required?: boolean;
    pattern?: string | undefined;
    minlength?: number;
    maxlength?: number;
    email?: string;
}

export interface IOptions {
    id?: number;
    value?: string;
}
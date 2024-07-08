import { IForm } from "../interface/form.interface";

export const registerFormConfig: IForm = {
    formTitle: 'registration Form',
    saveBtnTitle: 'register',
    resetBtnTitle: 'Rest',
    FormControls: [
        {
            "name": "FirstName",
            "label": "FirstName",
            "value": "",
            "placeholder": "",
            "class": "col-md-6",
            "type": "text",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*First Name ois required"
                }
            ]
        },
        {
            "name": "LastName",
            "label": "LastName",
            "value": "",
            "placeholder": "",
            "class": "col-md-6",
            "type": "text",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Last Name is required"
                }
            ]
        },
        {
            "name": "email",
            "label": "email",
            "value": "",
            "placeholder": "",
            "class": "col-md-6",
            "type": "email",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*email is required"
                },
                {
                    "validatorName": "email",
                    "email": "email",
                    "message": "*email is not valid"
                }
            ]
        },
        {
            "name": "mobile",
            "label": "mobile",
            "value": "",
            "placeholder": "",
            "class": "col-md-4",
            "type": "number",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*mobile is required"
                },
                {
                    "validatorName": "mobile",
                    "maxlength": 10,
                    "message": "*maximum 10 digts is allowed"
                }
            ]
        },
        {
            "name": "weigth",
            "label": "weigth",
            "value": "",
            "placeholder": "should be in 5kgs",
            "class": "col-md-4",
            "type": "number",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*weigth is required"
                }
            ]
        },
        {
            "name": "height",
            "label": "height",
            "value": "",
            "placeholder": "should be in cms",
            "class": "col-md-4",
            "type": "number",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*heightis required"
                }
            ]
        },
        {
         "name": "gender",
         "label": "Gender",
         "class": "col-md-4",
         "placeholder": "",
         "radioOptions": [
            "male",
            "famele"
         ],
         "type": "radio",
         "validators":[
            {
                "validatorName": "required",
                "required": true,
                "message": "gender is required"
            }
         ]
        },
        {
         "name": "teacher",
         "label": "teacher",
         "class": "col-md-4",
         "placeholder": "",
         "radioOptions": [
            "male",
            "famele"
         ],
         "type": "radio",
         "validators":[
            {
                "validatorName": "required",
                "required": true,
                "message": "gender is required"
            }
         ]
        },
        {
            "name": "package",
            "label": "package",
            "class": "col-md-6",
            "placeholder": "",
            "options": [
                {
                    "id": 1,
                    "value": "monthly"
                },
                {
                    "id": 2,
                    "value": "Quarterly"
                },
                {
                    "id": 3,
                    "value": "Yearly"
                }
            ],
            "type": "select",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "package is Required"
                }
            ]
        },
        {
            "name": "enquiry",
            "label": "date of enquiry",
            "class": "col-md-4",
            "placeholder": "",
            "type": "date",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "enquiry date is required"
                }
            ]
        },
    ]
}
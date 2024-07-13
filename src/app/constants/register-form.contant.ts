// import { IForm } from "../interface/form.interface";

import { IForm } from "../interface/form.interface";

// export const registerFormConfig: IForm = {
//     formTitle: 'registration Form',
//     saveBtnTitle: 'register',
//     resetBtnTitle: 'Rest',
//     FormControls: [
//         {
//             "name": "FirstName",
//             "label": "FirstName",
//             "value": "",
//             "placeholder": "",
//             "class": "col-md-6",
//             "type": "text",
//             "validators": [
//                 {
//                     "validatorName": "required",
//                     "required": true,
//                     "message": "*First Name ois required"
//                 }
//             ]
//         },
//         {
//             "name": "LastName",
//             "label": "LastName",
//             "value": "",
//             "placeholder": "",
//             "class": "col-md-6",
//             "type": "text",
//             "validators": [
//                 {
//                     "validatorName": "required",
//                     "required": true,
//                     "message": "*Last Name is required"
//                 }
//             ]
//         },
//         {
//             "name": "email",
//             "label": "email",
//             "value": "",
//             "placeholder": "",
//             "class": "col-md-6",
//             "type": "email",
//             "validators": [
//                 {
//                     "validatorName": "required",
//                     "required": true,
//                     "message": "*email is required"
//                 },
//                 {
//                     "validatorName": "email",
//                     "email": "email",
//                     "message": "*email is not valid"
//                 }
//             ]
//         },
//         {
//             "name": "mobile",
//             "label": "mobile",
//             "value": "",
//             "placeholder": "",
//             "class": "col-md-4",
//             "type": "number",
//             "validators": [
//                 {
//                     "validatorName": "required",
//                     "required": true,
//                     "message": "*mobile is required"
//                 },
//                 {
//                     "validatorName": "mobile",
//                     "maxlength": 10,
//                     "message": "*maximum 10 digts is allowed"
//                 }
//             ]
//         },
//         {
//             "name": "weigth",
//             "label": "weigth",
//             "value": "",
//             "placeholder": "should be in 5kgs",
//             "class": "col-md-4",
//             "type": "number",
//             "validators": [
//                 {
//                     "validatorName": "required",
//                     "required": true,
//                     "message": "*weigth is required"
//                 }
//             ]
//         },
//         {
//             "name": "height",
//             "label": "height",
//             "value": "",
//             "placeholder": "should be in cms",
//             "class": "col-md-4",
//             "type": "number",
//             "validators": [
//                 {
//                     "validatorName": "required",
//                     "required": true,
//                     "message": "*heightis required"
//                 }
//             ]
//         },
//         {
//          "name": "gender",
//          "label": "Gender",
//          "class": "col-md-4",
//          "placeholder": "",
//          "radioOptions": [
//             "male",
//             "famele"
//          ],
//          "type": "radio",
//          "validators":[
//             {
//                 "validatorName": "required",
//                 "required": true,
//                 "message": "gender is required"
//             }
//          ]
//         },
//         {
//          "name": "teacher",
//          "label": "teacher",
//          "class": "col-md-4",
//          "placeholder": "",
//          "radioOptions": [
//             "male",
//             "famele"
//          ],
//          "type": "radio",
//          "validators":[
//             {
//                 "validatorName": "required",
//                 "required": true,
//                 "message": "gender is required"
//             }
//          ]
//         },
//         {
//             "name": "package",
//             "label": "package",
//             "class": "col-md-6",
//             "placeholder": "",
//             "options": [
//                 {
//                     "id": 1,
//                     "value": "monthly"
//                 },
//                 {
//                     "id": 2,
//                     "value": "Quarterly"
//                 },
//                 {
//                     "id": 3,
//                     "value": "Yearly"
//                 }
//             ],
//             "type": "select",
//             "validators": [
//                 {
//                     "validatorName": "required",
//                     "required": true,
//                     "message": "package is Required"
//                 }
//             ]
//         },
//         {
//             "name": "enquiry",
//             "label": "date of enquiry",
//             "class": "col-md-4",
//             "placeholder": "",
//             "type": "date",
//             "validators": [
//                 {
//                     "validatorName": "required",
//                     "required": true,
//                     "message": "enquiry date is required"
//                 }
//             ]
//         },
//     ]
// }



export const admissionFormConfig: IForm ={
    formTitle: "Vehicle Information",
    saveBtnTitle: "Save",
    resetBtnTitle: "Reset",
    formControls: [
      {
        name: "stockNumber",
        label: "Stock Number",
        value: "",
        placeholder: "Enter stock number",
        class: "col-md-6",
        type: "text",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Stock number is required"
          }
        ]
      },
      {
        name: "title",
        label: "Title",
        value: "",
        placeholder: "Enter title",
        class: "col-md-6",
        type: "text",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Title is required"
          }
        ]
      },
      {
        name: "vinNumber",
        label: "VIN Number",
        value: "",
        placeholder: "Enter VIN number",
        class: "col-md-6",
        type: "text",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "VIN number is required"
          }
        ]
      },
      {
        name: "cityMPG",
        label: "City MPG",
        value: "",
        placeholder: "Enter city MPG",
        class: "col-md-6",
        type: "number",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "City MPG is required"
          }
        ]
      },
      {
        name: "highwayMPG",
        label: "Highway MPG",
        value: "",
        placeholder: "Enter highway MPG",
        class: "col-md-6",
        type: "number",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Highway MPG is required"
          }
        ]
      },
      {
        name: "registrationDate",
        label: "Registration Date",
        value: "",
        placeholder: "",
        class: "col-md-6",
        type: "date",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Registration date is required"
          }
        ]
      },
      {
        name: "condition",
        label: "Condition",
        value: "",
        placeholder: "Enter condition",
        class: "col-md-6",
        type: "text",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Condition is required"
          }
        ]
      },
      {
        name: "make",
        label: "Make",
        value: "",
        placeholder: "Select make",
        class: "col-md-6",
        type: "select",
        options: [
          {
              id: 1, value: "Dodge",
              label: ""
          },
          {
              id: 2, value: "Honda",
              label: ""
          },
          {
              id: 3, value: "Suzuki",
              label: ""
          },
          {
              id: 4, value: "HYUNDAI",
              label: ""
          },
          {
              id: 5, value: "FORD",
              label: ""
          },
          {
              id: 6, value: "Acura",
              label: ""
          }
        ],
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Make is required"
          }
        ]
      },
      {
        name: "model",
        label: "Model",
        value: "",
        placeholder: "Enter model",
        class: "col-md-6",
        type: "text",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Model is required"
          }
        ]
      },
      {
        name: "fuelType",
        label: "Fuel Type",
        value: "",
        placeholder: "Enter fuel type",
        class: "col-md-6",
        type: "text",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Fuel type is required"
          }
        ]
      },
      {
        name: "engine",
        label: "Engine",
        value: "",
        placeholder: "Enter engine",
        class: "col-md-6",
        type: "text",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Engine is required"
          }
        ]
      },
      {
        name: "year",
        label: "Year",
        value: "",
        placeholder: "Enter year",
        class: "col-md-6",
        type: "number",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Year is required"
          }
        ]
      },
      {
        name: "transmission",
        label: "Transmission",
        value: "",
        placeholder: "Enter transmission",
        class: "col-md-6",
        type: "text",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Transmission is required"
          }
        ]
      },
      {
        name: "drive",
        label: "Drive",
        value: "",
        placeholder: "Enter drive type",
        class: "col-md-6",
        type: "text",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Drive type is required"
          }
        ]
      },
      {
        name: "vehicleType",
        label: "Vehicle Type",
        value: [],
        placeholder: "",
        class: "col-md-6",
        type: "checkbox",
        checkboxOptions: [
          "SUV",
          "Hatchback",
          "Sedan"
        ],
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Vehicle type is required"
          }
        ]
      },
      {
        name: "kilometers",
        label: "Kilometers",
        value: "",
        placeholder: "Enter kilometers",
        class: "col-md-6",
        type: "number",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Kilometers is required"
          }
        ]
      },
      {
        name: "features",
        label: "Features",
        value: "",
        placeholder: "Enter features",
        class: "col-md-6",
        type: "text",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Features are required"
          }
        ]
      },
      {
        name: "price",
        label: "Price",
        value: "",
        placeholder: "Enter price",
        class: "col-md-6",
        type: "number",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Price is required"
          }
        ]
      },
      {
        name: "images",
        label: "Images",
        value: "",
        placeholder: "Upload images",
        class: "col-md-6",
        type: "file",
        validators: [
          {
            validatorName: "required",
            required: true,
            message: "Images are required"
          }
        ]
      }
    ],
    get: (arg0: string): unknown  => {
        throw new Error("Function not implemented.");
    }
}
import * as Yup from 'yup';

export const userValidationSchema = Yup.object({
    firstName: Yup.string().required('FirstName is a required field'),
    middleName: Yup.string().required('MiddleName is a required field'),
    lastName: Yup.string().required('LastName is a required field'),
    mobileNumber: Yup.number().required('MobileNo is a required field').positive(),
    email: Yup.string().email('invalid email format')
        .required('Email is a required field'),
    birthday: Yup.string().required('Birthday is a required field'),
    age: Yup.number().required('Age is a required field').positive(),
    bloodGroup: Yup.string().required('BloodGroup is a required field'),
    height: Yup.number().required('Height is a required field').positive(),
    weight: Yup.number().required('Weight is a required field').positive(),
    gender: Yup.string().required('Please Select Your Gender'),
    maritalStatus: Yup.string().required('Please Select Marital Status'),

})

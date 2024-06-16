import * as Yup from 'yup';

export const addressValidationSchema = Yup.object({
    addressLine1: Yup.string().required('AddressLine1 is a required field'),
    addressLine2: Yup.string().required('AddressLine2 is a required field'),
    city: Yup.string().required('City is a required field'),
    state: Yup.string().required('State is a required field'),
    country: Yup.string().required('Country is a required field'),
    pincode: Yup.number().required('PinCode is a required field').positive(),

})
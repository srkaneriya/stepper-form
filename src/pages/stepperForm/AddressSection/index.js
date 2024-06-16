import React from 'react';
import { Formik } from 'formik';
import FormikControl from '../../../components/FormikControl';
import { cityOptions, stateOptions, countryOptions } from '../../../components/Data';
import { Button, Stack } from '@mui/material';
import { Form } from '../../../components/Form';
import { addressValidationSchema } from './addressValidationSchema/addressValidationSchema';


export default function AddressSection({ back, next }) {
    const initialValues = {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
    }


    const onSubmit = (values) => {

        console.log(values)
        next(values)
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={addressValidationSchema}
            onSubmit={onSubmit}>
            {({ errors, touched, handleBlur, handleChange }) => (
                < Form >
                    <FormikControl
                        control="input"
                        type="text"
                        name="addressLine1"
                        placeHolder="Address Line 1"
                        className={errors.addressLine1 && touched.addressLine1 && 'error'}
                    />

                    <FormikControl
                        control="input"
                        type="text"
                        name="addressLine2"
                        placeHolder="Address Line 2"
                        className={errors.addressLine2 && touched.addressLine2 && 'error'}
                    />

                    <FormikControl
                        control="select"
                        name="city"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        options={cityOptions}
                        className={errors.city && touched.city && 'error'}
                    />

                    <FormikControl
                        control="select"
                        name="state"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        options={stateOptions}
                        className={errors.state && touched.state && 'error'}
                    />

                    <FormikControl
                        control="select"
                        name="country"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        options={countryOptions}
                        className={errors.country && touched.country && 'error'}
                    />

                    <FormikControl
                        control="input"
                        type="number"
                        name="pincode"
                        placeHolder="Pin Code"
                        className={errors.pincode && touched.pincode && 'error'}
                    />

                    <Stack direction='row' alignItems='center' gap={2} ml={1}>
                        <Button variant='contained' onClick={back}>BACK</Button>
                        <Button variant='contained' type='submit'>NEXT</Button>

                    </Stack>
                </Form>
            )
            }
        </Formik >
    )
}
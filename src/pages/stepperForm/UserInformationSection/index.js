import React from 'react';
import { Formik } from 'formik';
import FormikControl from '../../../components/FormikControl';
import { dropDownOptions, genderOptions, maritalStatusOptions } from '../../../components/Data';
import { Button, Stack } from '@mui/material';
import { Form } from '../../../components/Form';
import { useInputType } from '../../../customHook/useInputType/useInputType';
import { userValidationSchema } from './userValidationSchema/userValidationSchema';


export default function UserInformationSection({ next, data }) {
    const initialValues = {
        firstName: "",
        middleName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        birthday: "",
        age: "",
        bloodGroup: "",
        height: "",
        weight: "",
        gender: "",
        maritalStatus: "",
    }


    const [inputType, handleFieldFocus] = useInputType();

    const onSubmit = (values) => {
        next(values)
    };
    return (
        <Formik
            initialValues={data || initialValues}
            validationSchema={userValidationSchema}
            onSubmit={onSubmit}>
            {({ errors, touched, handleBlur, handleChange, values }) => (
                < Form >
                    <FormikControl
                        control="input"
                        type="text"
                        name="firstName"
                        placeHolder="First name"
                        className={errors.firstName && touched.firstName && 'error'}
                    />

                    <FormikControl
                        control="input"
                        type="text"
                        name="middleName"
                        placeHolder="Middle name"
                        className={errors.middleName && touched.middleName && 'error'}
                    />

                    <FormikControl
                        control="input"
                        type="text"
                        name="lastName"
                        placeHolder="Last name"
                        className={errors.lastName && touched.lastName && 'error'}
                    />

                    <FormikControl
                        control="input"
                        type="number"
                        name="mobileNumber"
                        placeHolder="Mobile No"
                        className={errors.mobileNumber && touched.mobileNumber && 'error'}
                    />

                    <FormikControl
                        control="input"
                        type="email"
                        name="email"
                        placeHolder="Email"
                        className={errors.email && touched.email && 'error'}
                    />

                    <FormikControl
                        control="input"
                        name="birthday"
                        type={inputType}
                        onFocus={() => handleFieldFocus('date')}
                        placeHolder="Birthday"
                        className={errors.birthday && touched.birthday && 'error'}
                    />

                    <FormikControl
                        control="input"
                        type="number"
                        name="age"
                        placeHolder="Age"
                        className={errors.age && touched.age && 'error'}
                    />

                    <FormikControl
                        control="select"
                        name="bloodGroup"
                        value={values.bloodGroup}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        options={dropDownOptions}
                        className={errors.bloodGroup && touched.bloodGroup && 'error'}
                    />

                    <FormikControl
                        control="input"
                        type="number"
                        name="height"
                        placeHolder="Height"
                        className={errors.height && touched.height && 'error'}
                    />

                    <FormikControl
                        control="input"
                        type="number"
                        name="weight"
                        placeHolder="Weight"
                        className={errors.weight && touched.weight && 'error'}
                    />

                    <FormikControl
                        control="radio"
                        label="Gender"
                        name="gender"
                        options={genderOptions}
                        error={Boolean(errors.gender && touched.gender)}
                        className={errors.gender && touched.gender && 'error'}
                    />

                    <FormikControl
                        control="radio"
                        label="Marital Status"
                        name="maritalStatus"
                        options={maritalStatusOptions}
                        error={Boolean(errors.maritalStatus && touched.maritalStatus)}
                        className={errors.maritalStatus && touched.maritalStatus && 'error'}
                    />
                    <Stack direction='row' alignItems='center' gap={2} ml={1}>
                        <Button variant='contained' disabled>BACK</Button>
                        <Button variant='contained' type='submit'>NEXT</Button>

                    </Stack>
                </Form>
            )
            }
        </Formik >
    )
}
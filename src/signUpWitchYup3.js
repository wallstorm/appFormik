import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
    const clase1 = {
        color: "red"
    }
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" className={clase1} placeholder="Name" />
                <ErrorMessage name="firstName" />
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" placeholder="Last Name" />
                <ErrorMessage name="lastName" />
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="text" placeholder="Email" />
                <ErrorMessage name="email" />
                <button type="submit">Submit</button>
                <hr />
                <Field name="message" as="textarea" />
                <Field name="colors" as="select">
                    <option value="red">Red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                </Field>
            </Form>
        </Formik>
    );
};

export default SignupForm;
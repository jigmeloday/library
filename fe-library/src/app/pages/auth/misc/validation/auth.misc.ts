import * as Yup from 'yup';

export const LOGIN_SCHEMA = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export const SIGNUP_SCHEMA = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    cPassword: Yup.string()
        .oneOf( [Yup.ref( 'password' ), null], 'Passwords must match' ).required('Required')
});

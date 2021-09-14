import * as yup from 'yup'

const userValidation = yup.object().shape({
    email: yup.string().email().required('No email provided.'),
    password: yup
        .string()
        .required('No password provided.')
        .min(8, 'Password is too weak')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})

export default userValidation

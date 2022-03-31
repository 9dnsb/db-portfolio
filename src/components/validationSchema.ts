import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),

  subject: Yup.string().required('Subject is required'),
  details: Yup.string().required('Details are required'),
})

export default validationSchema

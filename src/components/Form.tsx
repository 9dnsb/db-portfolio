import { Formik, Form, Field, ErrorMessage } from 'formik'

import './Form.scss'
import validationSchema from './validationSchema'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface initialValuesType {
  email: string
  subject: string
  details: string
}

const initialValues: initialValuesType = {
  email: '',
  subject: '',
  details: '',
}

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const SignInForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: initialValuesType, { resetForm }) => {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact', ...values }),
        })
          .then(() => {
            toast.success('Form Submitted')

            resetForm()
          })
          .catch((error) => {
            toast.error('Error submitting form')
          })
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik
        return (
          <div className="form-container">
            <h1>Please fill out the contact form</h1>
            <Form>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={
                    errors.email && touched.email ? 'input-error' : null
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>

              <div className="form-row">
                <label htmlFor="subject">Subject</label>
                <Field
                  type="text"
                  name="subject"
                  id="subject"
                  className={
                    errors.subject && touched.subject ? 'input-error' : null
                  }
                />
                <ErrorMessage
                  name="subject"
                  component="span"
                  className="error"
                />
              </div>

              <div className="form-row">
                <label htmlFor="subject">Details</label>
                <Field
                  type="text"
                  name="details"
                  id="details"
                  as="textarea"
                  className={
                    errors.details && touched.details ? 'input-error' : null
                  }
                />
                <ErrorMessage
                  name="details"
                  component="span"
                  className="error"
                />
              </div>

              <button
                type="submit"
                className={!(dirty && isValid) ? 'disabled-btn' : ''}
                disabled={!(dirty && isValid)}
              >
                Submit
              </button>
            </Form>
          </div>
        )
      }}
    </Formik>
  )
}

export default SignInForm

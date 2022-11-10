//Libraries
import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
//Styles
import style from './Searcher.module.css'

function Searcher() {
    const navigate = useNavigate()

    const initialValues = {
        keyword: ""
    }
    const validationSchema = Yup.object().shape({
        keyword: Yup.string().required("Ingresa un palabra clave para buscar")
    })
    const onSubmit = (e) => {
        navigate(`/resultados?keyword=${e.keyword}`)
    }
  return (
    <div className={ style.mainContainer }>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            { ({ handleChange, errors, values }) => (
                <Form className={ style.form }>
                    <label htmlFor="keyword">
                        <Field 
                            type="text"
                            name="keyword"
                            id="keyword"
                            value={ values.keyword }
                            onChange={ handleChange }
                            placeholder="Ingresar palabra clave"
                        />
                        { errors.keyword && <span className={ style.errorMessage }>{errors.keyword}</span> }
                    </label>
                    <div>
                        <button type='submit'>Buscar</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default Searcher
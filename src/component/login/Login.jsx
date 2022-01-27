import { Formik } from 'formik';
import * as yup from "yup";
import React from "react";
import s from "./login.module.css";


 const FormLogin = (props) => {

    const validationsSchema = yup.object().shape({
        email: yup.string().email('Введите верный email').required('Обязательно'),
        password: yup.string().required("Обязательно"),
        passwordConfirm: yup.string().oneOf([yup.ref('password')] , "NOT CONFIRM PASSWORD").required("Обязательно"),
    })

    return (
        <div>
            
            <Formik
                initialValues={{ email: "", password: "", passwordConfirm: "", rememberMe: "" }}
                validateOnBlur
                onSubmit={(values) => {
                    props.logInThunk({ email: values.email, password: values.password, rememberMe: values.rememberMe });
                }}
                validationSchema={validationsSchema} 
            >
                {({values,errors,touched,handleChange,handleBlur,handleSubmit,isValid,dirty,}) => (
                    <div className={s.login__form}>
                        
                        <label htmlFor={`email`}>Email</label><br />
                        <input
                            className={'input'}
                            type={`email`}
                            name={`email`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        
                        {touched.email && errors.email && <p className={s.login__err}>{errors.email}</p>}

                        <label htmlFor="Pas">Password</label>
                        <input 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            id='Pas' 
                            type="text" 
                            placeholder='Password' 
                            name={"password"} 
                            />
                        {touched.password && errors.password && <div className={s.login__err}>{errors.password}</div>}

                        <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.passwordConfirm}
                            type="text"
                            placeholder='Password-Confirm'
                            name="passwordConfirm"
                        />
                        {(touched.passwordConfirm && errors.passwordConfirm) && <div className={s.login__err}>{errors.passwordConfirm}</div>}
                        
                        <input type="checkbox" name="rememberMe" value={values.rememberMe} onChange={handleChange} onBlur={handleBlur} id="" />

                        <button type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>SEND</button>
                    </div>
                )}


            </Formik>
        </div>
    )
}


class Login extends React.Component {


    render() {
        return (
            <div>
                {console.log(this.props)}
                <h1>HELLO WORLD</h1>
                <FormLogin {...this.props} />
            </div>
        )
    }
}


export default Login;
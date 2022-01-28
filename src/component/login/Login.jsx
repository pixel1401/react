import { Formik } from 'formik';
import * as yup from "yup";
import React  from "react";
import s from "./login.module.css";
import { Redirect } from 'react-router-dom';


class FormLogin extends React.Component {


    constructor(props) {
        console.log('constructor');
        super(props)
        this.state = {
            redirect: false,
            disabled: this.props.isFetching
        }
    }

    redirectTo() {
        console.log("redirectTo");
        this.setState({
            disabled:true,
            // redirect:true,
        })
    }

   

    

     componentDidUpdate (props , state) {
        if(state.disabled !== this.props.isFetching) {
            return this.setState({disabled:props.isFetching})
        }else if (state.redirect !== this.props.isAuth) {
            return this.setState({redirect:this.props.isAuth})
        }else {
            return null;
        }
    }

    

    

    validationsSchema = yup.object().shape({
        email: yup.string().email('Введите верный email'),
        password: yup.string(),
        passwordConfirm: yup.string().oneOf([yup.ref('password')], "NOT CONFIRM PASSWORD"),
    })


    render() {



        return (
            <div>
                <Formik
                    initialValues={{ email: "", password: "", passwordConfirm: "", rememberMe: "" }}
                    validateOnBlur
                    onSubmit={(values) => {
                        if (this.props.isAuth) return ;
                        this.props.logInThunk({ email: values.email, password: values.password, rememberMe: values.rememberMe });
                        this.redirectTo()
                        
                    }}
                    validationSchema={this.validationsSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty, }) => (
                        <div className={s.login__form}>

                            <label
                                htmlFor={`email`}
                                className={s.login__label}
                                data-set-error={touched.email && errors.email && 'err'}
                                data-set-ok={!errors.email && values.email !== "" && "ok"}
                            >
                                <p>Email</p>
                                <input
                                    id='email'
                                    placeholder='Your Email'
                                    className={'input'}
                                    type={`email`}
                                    name={`email`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    data-set-error={touched.email && errors.email && 'err'}

                                />
                                {touched.email && errors.email && <p className={s.login__err}>{errors.email}</p>}
                            </label>




                            <label
                                htmlFor="Pas"
                                className={s.login__label}
                                data-set-error={touched.password && errors.password && 'err'}
                                data-set-ok={!errors.password && values.password !== "" && "ok"}
                            >
                                <p>Password</p>
                                <input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    id='Pas'
                                    type="text"
                                    placeholder='Password'
                                    name={"password"}
                                    data-set-error={touched.password && errors.password && 'err'}
                                />
                                {touched.password && errors.password && <div className={s.login__err}>{errors.password}</div>}
                            </label>


                            <label
                                htmlFor="passwordConfirm"
                                className={s.login__label}
                                data-set-error={touched.passwordConfirm && errors.passwordConfirm && 'err'}
                                data-set-ok={!errors.passwordConfirm && values.passwordConfirm !== "" && "ok"}
                            >
                                <p>Password-Confirm</p>
                                <input
                                    id='passwordConfirm'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.passwordConfirm}
                                    type="text"
                                    placeholder='Password-Confirm'
                                    name="passwordConfirm"
                                    data-set-error={touched.passwordConfirm && errors.passwordConfirm && 'err'}
                                />
                                {(touched.passwordConfirm && errors.passwordConfirm) && <div className={s.login__err}>{errors.passwordConfirm}</div>}
                            </label>


                            <input type="checkbox" name="rememberMe" value={values.rememberMe} onChange={handleChange} onBlur={handleBlur} id="" />

                            {(!this.state.disabled) 
                                ? <button className={s.login__btn} type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>SEND</button> 
                                : <button className={s.login__btn} disabled>Send</button> 
                            }

                            {(this.state.redirect) && <Redirect to={'/profile'}/>}
                        </div>
                    )}


                </Formik>
            </div>
        )
    }
}


class Login extends React.Component {


    render() {
        return (
            <div>
                {/* <h2 className={s.login__title}>LOG IN</h2> */}
                {this.props.loginError && <h3>{this.props.loginError}</h3>}
                <FormLogin {...this.props} />
            </div>
        )
    }
}


export default Login;
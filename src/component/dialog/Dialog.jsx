// import { NavLink } from "react-router-dom";
import { Field, Formik, ErrorMessage, useField } from "formik";
import * as yup from "yup";
import React from "react";
import s from "./Dialog.module.css";
import DialogItem from "./dialogsName/dilogsName";
import DialogWindow from "./messeges/messeges"


 
const MyTextArea = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};




// SEND HTML
const Dialog = (props) => {


    let dialosgElem = props.dialogs.map((name, i) => <DialogItem key={i} id={name.id} name={name.name} />)

    let massegElem = props.messages.map((m, i) => <DialogWindow key={i} who={m.who} name={m.name} text={m.text} />)


    const validations = yup.object().shape({
        textarea:yup.string().required("Обязательно")
    })

    return (
        <div className={s.dialog}>
            <div className={`title ${s.dialog__title}`}>Dialog</div>
            <div className={s.dialog__contact}>
                {dialosgElem}
            </div>

            <div className={s.dialog__window}>
                {massegElem}
                <div className={s.dialog__texterea}>
                    <Formik
                        initialValues={{textarea:""}}
                        validateOnBlur
                        validationSchema={validations}
                        onSubmit={(values, actions)=> {
                            props.addMessagesThunk(values.textarea)
                            actions.resetForm();
                        }}
                    >
                        {({ handleSubmit}) => (
                        <>
                                <MyTextArea 
                                    label="First Name"
                                    name="textarea"
                                    rows="6"
                                    placeholder="print your messages"
                                />
                                <button onClick={handleSubmit} type="submit">Send</button>
                        </>
                    )}

                    </Formik>

                </div>
            </div>
        </div>
    )
}


export default Dialog;
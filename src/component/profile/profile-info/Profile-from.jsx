import { Formik, useField } from "formik";
import * as yup from "yup";

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

const validations = yup.object().shape({
    textarea: yup.string().required("Обязательно")
})

function ProfileForm (props) {
    return (
        <Formik
            initialValues={{ textarea: "" }}
            validateOnBlur
            onSubmit={(values, action) => {
                props.addPostThunk(values.textarea);
                action.resetForm();
            }}
            validationSchema={validations}
        >
            {({ handleSubmit }) => (
                <>
                    <MyTextArea label={'My Post'} name="textarea" placeholder="Print your post" />
                    <button type="submit" onClick={handleSubmit}>Send</button>
                </>
            )}


        </Formik>
    )
}


export default ProfileForm;
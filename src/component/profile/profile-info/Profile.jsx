import React  from "react";
import Post from "./post/post";
import s from "../profile.module.css";
import Preloader from "../../preloader/preloader";
import ProfileStatus from "./Profile-status";
import { Formik, useField } from "formik";
import * as yup from "yup";






const Profile = (props) => {
    
    


    // DEFAULT PHOTO
    let defImgLarge = "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    let myImgSmall = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HXBNEcPO8DOwEs0Zx7owwqcGvkv_s-9TJA&usqp=CAU";


    let postElem = props.postsBase.map((p, i) => <Post key={i} name={p.name} likeCount={p.likeCount} text={p.text} />)


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
        textarea:yup.string().required("Обязательно")
    })

    
    if (props.profile !== null) {
        let alienUser = props.profile;
        return (
            <main className={s.content}>
                <div className={s.content__profile}>
                    <div className={s.content__img}>
                        <img src={(alienUser.photos.large !== null) ? alienUser.photos.large : defImgLarge} alt="content-img"></img>
                        <input type="file" name="file"  />
                    </div>
                    <div className={s.content__profile_img}>
                        <img src={(alienUser.photos.small !== null) ? alienUser.photos.small : myImgSmall} alt="img"></img>
                    </div>
                    <div className={s.content__profile_info}>
                        <h3 className={`${s.content__profile_info}  ${s.content__profile_name}`} >{alienUser.fullName}</h3>
                        <div className={`${s.content__profile_info}  ${s.content__profile_born}`}>Date of Birth: 1 April </div>
                        <div className={`${s.content__profile_info}  ${s.content__profile_education}`}>{alienUser.lookingForAJobDescription}</div>
                        <div className={`${s.content__profile_info}  ${s.content__profile_education}`}>{alienUser.aboutMe}</div>
                        <div className={`${s.content__profile_info}  ${s.content__profile_site}`}>Web sity:https://fugicar1.ru</div>
                        
                        <ProfileStatus {...props} />
                    </div>


                    <div className={s.content__post}>
                        <Formik
                            initialValues={{textarea:""}}
                            validateOnBlur
                            onSubmit={(values , action)=> {
                                props.addPostThunk(values.textarea);
                                action.resetForm();
                            }}
                            validationSchema={validations}
                        >
                            {({ handleSubmit})=> (
                                <>
                                    <MyTextArea label={'My Post'} name="textarea" placeholder="Print your post"/>
                                    <button type="submit" onClick={handleSubmit}>Send</button>
                                </>
                            )}


                        </Formik>
                        
                    </div>
                </div>

                {postElem}
            </main>

        )
    }else {
        return (
            <div className={s.content__preloader}>
                <Preloader/>
            </div>
        )
    }


}

export default Profile;
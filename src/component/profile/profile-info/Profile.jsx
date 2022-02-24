import React from "react";
import Post from "./post/post";
import s from "../profile.module.css";
import Preloader from "../../preloader/preloader";
import ProfileStatus from "./Profile-status";
import ProfileForm from "./Profile-from";
import { render } from "@testing-library/react";
import ProfileStatusHook from "./Profile-status-Hook";
import { PureComponent } from "react";


import defaulyAva from '../../../assets/img/UsersDefault.jpg';



class Profile extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.profile.userId,
            isFollow: props.isFollow
        }
    }

    componentDidUpdate(props , state) {
        if (this.props.profile.userId !== this.state.userId ) {
            return this.setState({
                userId: this.props.profile.userId,
                isFollow : this.props.isFollow                
            })
        }
    }



    // DEFAULT PHOTO
    defImgLarge = "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    myImgSmall = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HXBNEcPO8DOwEs0Zx7owwqcGvkv_s-9TJA&usqp=CAU";


    postElem = this.props.postsBase.map((p, i) => <Post key={i} name={p.name} likeCount={p.likeCount} text={p.text} />)


    buttonClickFollow = (id,e)=> {
        let valueButton = e.target.dataset.followed;
        (valueButton === "true") ? valueButton = false : valueButton=true;
        this.props.changeFollowTh(id, valueButton);

        this.setState({
            isFollow:valueButton
        })
    }

    
    buttonFollow = (id, progress) => {
        if (this.state.isFollow === "true" || this.state.isFollow === true) {
            return <button disabled={progress} data-followed={true} onClick={(e)=> this.buttonClickFollow(id, e)}
            className={s.users__status}>followed</button>
        } else {
            return <button disabled={progress} data-followed={false} onClick={(e) => { this.buttonClickFollow(id,e) }} 
            className={s.users__status}>Unfollow</button>
        }
    }


    render() {
        if (this.props.profile) {
            let alienUser = this.props.profile;
            return (
                <main className={s.content}>
                    <div className={s.content__profile}>
                        <div className={s.content__img}>
                            <img src={(alienUser.photos.large !== null) ? alienUser.photos.large : this.defImgLarge} alt="content-img"></img>
                            <input type="file" name="file" />
                        </div>
                        {(this.props.myId !== alienUser.userId && this.props.isFollow) && this.buttonFollow(alienUser.userId, this.props.progres)}

                        <div className={s.content__profile_img}>
                            <img src={(alienUser.photos.small !== null) ? alienUser.photos.small : defaulyAva} alt="img"></img>
                        </div>
                        <div className={s.content__profile_info}>
                            <h3 className={`${s.content__profile_info}  ${s.content__profile_name}`} >{alienUser.fullName}</h3>
                            <div className={`${s.content__profile_info}  ${s.content__profile_born}`}>Date of Birth: 1 April </div>
                            <div className={`${s.content__profile_info}  ${s.content__profile_education}`}>{alienUser.lookingForAJobDescription}</div>
                            <div className={`${s.content__profile_info}  ${s.content__profile_education}`}>{alienUser.aboutMe}</div>
                            <div className={`${s.content__profile_info}  ${s.content__profile_site}`}>Web sity:https://fugicar1.ru</div>

                            <ProfileStatus {...this.props} />
                            {/* <ProfileStatusHook {...this.props}/> */}
                        </div>


                        <div className={s.content__post}>
                            <ProfileForm {...this.props} />

                        </div>
                    </div>

                    {this.postElem}
                </main>

            )
        } else {
            return (
                <div className={s.content__preloader}>
                    <Preloader />
                </div>
            )
        }
    }




}

export default Profile;
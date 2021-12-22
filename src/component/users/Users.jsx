import * as axios from "axios";
import React from "react";
import s from "./users.module.css";
import usersImg from '../../assets/img/UsersDefault.jpg'

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
            this.props.setUsersAction(res.data.items)
        })
    }



    changeFollow = (e) => {
        let value = e.target.dataset.followed === 'false' ? false : true;
        let id = e.target.closest(`.${s.users__item}`).id;
        this.props.followAction(value, id);
    }



    render() {
        return (
            <section className={s.users}>
                <h2 className={s.users__title}>Users</h2>
                <div className={s.users__box}>
                    {this.props.users.map((el) => {
                        return (
                            <div className={s.users__item} id={el.id}>
                                <div className={s.users__ava_box}>
                                    <div className={s.users__ava}>
                                        <img src={`${usersImg}`} alt="users" />
                                    </div>
                                    {el.followed == true
                                        ? <button data-followed={true} onClick={this.changeFollow} className={s.users__status}>followed</button>
                                        : <button data-followed={false} onClick={this.changeFollow} className={s.users__status}>Unfollow</button>}
                                </div>
                                <div className={s.users__info_box}>
                                    <div className={`${s.users__name}  ${s.users__info_item}`}>{el.name}</div>
                                    <div className={`${s.users__country} ${s.users__info_item}`}>el.country</div>
                                    <div className={`${s.users__quote} ${s.users__info_item}`}>el.quote</div>
                                    <div className={`${s.users__city} ${s.users__info_item}`}>el.city</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className={s.users__btn}>Show more</button>
            </section>
        )
    }

}


export default Users;
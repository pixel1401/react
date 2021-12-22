import * as axios from "axios";
import React from "react";
import s from "./users.module.css";
import usersImg from '../../assets/img/UsersDefault.jpg'



const Users = (props) => {



    if (props.users.length == null || props.users.length == 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
            props.setUsersAction(res.data.items)
        })
        // props.setUsersAction(
        //     [
        //         { id: 1, name: "Erzhan", country: 'Kazakhstan', city: "Astana", quote: "It's my life", status: "Follow" },
        //         { id: 2, name: "Chan-long", country: 'China', city: "Pekin", quote: "lorem lorem lore", status: "Unfollow" },
        //         { id: 3, name: "Naruto", country: 'Japan', city: "Tokyo", quote: "It's my life aw dwad a", status: "Follow" },
        //         { id: 4, name: "Oleg-Mongol ))", country: 'Russia', city: "Moscow", quote: "I am from Russia", status: "Follow" },
        //         { id: 5, name: "Mike Jordan", country: 'USA', city: "Texas", quote: "I dont from Russia", status: "Follow" },
        //         { id: 6, name: "Dina", country: 'Russia', city: "Moscow", quote: "I am from Russia", status: "UnFollow" },
        //     ]
        // )
    }


    let changeFollow = (e) => {
        let value = e.target.dataset.followed === 'false' ? false : true;
        let id = e.target.closest(`.${s.users__item}`).id;
        props.followAction(value, id);
    }


    let users = props.users.map((el) => {
        return (
            <div className={s.users__item} id={el.id}>
                <div className={s.users__ava_box}>
                    <div className={s.users__ava}>
                        <img src={`${usersImg}`} alt="users" />
                    </div>
                    {el.followed == true  
                    ? <button data-followed={true} onClick={changeFollow} className={s.users__status}>followed</button>
                    : <button data-followed={false} onClick={changeFollow} className={s.users__status}>Unfollow</button>}
                </div>
                <div className={s.users__info_box}>
                    <div className={`${s.users__name}  ${s.users__info_item}`}>{el.name}</div>
                    <div className={`${s.users__country} ${s.users__info_item}`}>el.country</div>
                    <div className={`${s.users__quote} ${s.users__info_item}`}>el.quote</div>
                    <div className={`${s.users__city} ${s.users__info_item}`}>el.city</div>
                </div>
            </div>
        )
    });


    return (
        <section className={s.users}>
            <h2 className={s.users__title}>Users</h2>
            <div className={s.users__box}>
                {users}
            </div>
            <button className={s.users__btn}>Show more</button>
        </section>
    )
}

export default Users;
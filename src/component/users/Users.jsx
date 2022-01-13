// My ID of API => 21461

import React from "react";
import s from "./users.module.css";
import usersImg from '../../assets/img/UsersDefault.jpg'
import { NavLink } from "react-router-dom";
import { getApi } from "../../api";

let Users = (props) => {

    let ellipsis = (<li type='ellipsis'>...</li>);
    let printPage = (el, i) => (<li data-index={i} onClick={(pos) => props.activePage(el, pos)} className={props.curPage === el ? s.users__count_page : "no"}>{el}</li>)

    let totalCountPage = props.totalNumOfPages;
    let lastPage = (i) => (<li type='lastPage' data-index={i} onClick={(pos) => props.activePage(totalCountPage, pos)} className={props.curPage === totalCountPage ? s.users__count_page : 'no'}>{totalCountPage}</li>);



    let printPagesLi = (arr, lastpageShow = false) => {

        if (lastpageShow) {
            return arr.map((el, i) => {
                return (printPage(el, i))
            })
        } else {
            if (arr.length < props.countPages) {
                return arr.map((el, i) => {
                    return (printPage(el, i))
                })
            } else {
                return arr.map((el, i) => {
                    if (i === arr.length - 2) {
                        return (ellipsis)
                    } else if (arr.length - 1 === i) {
                        return (lastPage(i))
                    } else {
                        return (printPage(el, i))
                    }
                })
            }

        }

    }



    return (
        <section className={s.users}>
            <h2 className={s.users__title}>Users</h2>
            <ul className={s.users__count}>
                {printPagesLi(props.arrPage, props.isLastPage)}
            </ul>
            <div className={s.users__box}>
                {props.users.map((el) => {
                    return (
                        <div className={s.users__item} id={el.id}>
                            <div className={s.users__ava_box}>
                                <NavLink to={`profile/${el.id}`} className={s.users__ava}>
                                    <img src={`${(el.photos.small !== null) ? el.photos.small : usersImg}`} alt="users" />
                                </NavLink>
                                {el.followed === true
                                    ? <button data-followed={true} onClick={(e) => {
                                        getApi.unfollow(el.id)
                                        .then((res) => {
                                            if (res.data.resultCode === 0) {
                                                props.changeFollow(e)
                                            }
                                        })
                                    }} className={s.users__status}>followed</button>
                                    : <button data-followed={false} onClick={(e) => {
                                    
                                        getApi.follow(el.id)
                                        .then((res) => {if (res.data.resultCode === 0) props.changeFollow(e); })
                                    
                                    }} className={s.users__status}>Unfollow</button>}
                            </div>
                            <div className={s.users__info_box}>
                                <div className={`${s.users__name}  ${s.users__info_item}`}>{el.name}</div>
                                <div className={`${s.users__country} ${s.users__info_item}`}>{el.id}</div>
                                <div className={`${s.users__quote} ${s.users__info_item}`}>{el.status}</div>
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


export default Users;
// My ID of API => 21461

import React from "react";
import s from "./users.module.css";
import usersImg from '../../assets/img/UsersDefault.jpg'
import { NavLink } from "react-router-dom";

class Users extends React.Component {

    savePagesArr = [];  
    ellipsis = (<li type='ellipsis'>...</li>);
    printPage = (el, i) => (<li data-index={i} onClick={(pos) => this.props.activePage(el, pos)} className={this.props.curPage === el ? s.users__count_page : "no"}>{el}</li>)
    
    render() {
        let totalCountPage = Math.ceil(this.props.totalItemsProps / this.props.count);
        let lastPage = (i) => (<li type='lastPage' data-index={i} onClick={(pos) => this.props.activePage(totalCountPage, pos)} className={this.props.curPage === totalCountPage ? s.users__count_page : 'no'}>{totalCountPage}</li>);
        let positionCurPageOfArr = this.props.positionCurPageOfArr;


        let viewCountPage = (curPage = 1, countPage = 15) => {

            let printPagesLi = (arr, lastpageShow = false) => {

                if (lastpageShow) {
                    return arr.map((el, i) => {
                            return (this.printPage(el, i))
                    })
                } else {
                    return arr.map((el, i) => {
                        if (i === arr.length - 2) {
                            return (this.ellipsis)
                        } else if (arr.length - 1 === i) {
                            return (lastPage(i))
                        } else {
                            return (this.printPage(el, i))
                        }
                    })
                }


            }

            if (positionCurPageOfArr <= (countPage - 4) && countPage !== positionCurPageOfArr) {
                // [1,2,3, ... ,last]
                if (curPage === 1) {
                    this.savePagesArr.length = 0
                    for (let i = 1; i <= 15; i++) {
                        this.savePagesArr.push(i);
                    }
                }


                if ((curPage > (totalCountPage - countPage)) && positionCurPageOfArr !== 2) {
                    return printPagesLi(this.savePagesArr, true);
                } else if (positionCurPageOfArr === 2  && curPage !== 2) {
                    let newArrPages = [1];
                    for (let i = curPage - (countPage - 6); i <= curPage + 2; i++ ) {
                        newArrPages.push(i);
                    }
                    newArrPages.push('...' , "last-page");

                    this.savePagesArr = newArrPages;

                    return printPagesLi(this.savePagesArr);
                }else {
                    return printPagesLi(this.savePagesArr);
                }


            } else if (positionCurPageOfArr > countPage - 4 &&  curPage < (totalCountPage - countPage - 2)) {
                // [1,23,25 , ... ,last]
                let pagesRight = countPage - 2 - 2;
                let curPagesArr = [1, curPage - 1];
                for (let i = curPage; i < (curPage + pagesRight); i++) {
                    curPagesArr.push(i);
                };
                curPagesArr.push(this.ellipsis, this.lastPage);

                this.savePagesArr = curPagesArr;

                return printPagesLi(this.savePagesArr);


            } else if (positionCurPageOfArr === countPage) {
                // [1,55,56,last(57)]
                let curPagesArr = [1];
                for (let i = totalCountPage - (countPage - 2); i <= totalCountPage; i++) {
                    curPagesArr.push(i);
                }
                this.savePagesArr = curPagesArr;

                return printPagesLi(this.savePagesArr, true);
            } else {
                return printPagesLi(this.savePagesArr, true);
            }

        }

        return (
            <section className={s.users}>
                <h2 className={s.users__title}>Users</h2>
                <ul className={s.users__count}>
                    {viewCountPage(this.props.curPage)}
                </ul>
                <div className={s.users__box}>
                    {this.props.users.map((el) => {
                        return (
                            <div  className={s.users__item} id={el.id}>
                                <div className={s.users__ava_box}>
                                    <NavLink to={`profile/${el.id}`} className={s.users__ava}>
                                        <img src={`${(el.photos.small !== null) ? el.photos.small : usersImg}`} alt="users" />
                                    </NavLink>
                                    {el.followed === true
                                        ? <button data-followed={(true)} onClick={this.props.changeFollow} className={s.users__status}>followed</button>
                                        : <button data-followed={false} onClick={this.props.changeFollow} className={s.users__status}>Unfollow</button>}
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

}


export default Users;
// My ID of API => 21461

import * as axios from "axios";
import React from "react";
import s from "./users.module.css";
import usersImg from '../../assets/img/UsersDefault.jpg'

class Users extends React.Component {



    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.curPage}`)
            .then((res) => {
                this.props.setUsersAction(res.data.items)
                this.props.totalCount(res.data.totalCount)
            })
    }

    changeFollow = (e) => {
        let value = e.target.dataset.followed === 'false' ? false : true;
        let id = e.target.closest(`.${s.users__item}`).id;
        this.props.followAction(value, id);
    }

    activePage = (e, pos) => {
        this.props.changePageAction(e);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${e}`).then((response) => {
            this.props.setUsersAction(response.data.items);
        })

        let index = pos != undefined ? +((pos.nativeEvent.path[0]).dataset.index) : 0;
        this.positionCurPageOfArr = index + 1;

    }

    savePagesArr = [];
    positionCurPageOfArr = 1;
    totalCountPage = Math.ceil(this.props.totalItemsProps / this.props.count);
    ellipsis = (<li type='ellipsis'>...</li>);
    lastPage = (i) => (<li type='lastPage' data-index={i} onClick={(pos) => this.activePage(this.totalCountPage, pos)} className={this.props.curPage == this.totalCountPage && s.users__count_page}>{this.totalCountPage}</li>);
    printPage = (el, i) => (<li data-index={i} onClick={(pos) => this.activePage(el, pos)} className={this.props.curPage == el && s.users__count_page}>{el}</li>)

    viewCountPage = (curPage = 1, countPage = 15) => {

        let printPagesLi = (arr, lastpage = false) => {

            if (lastpage) {
                return arr.map((el, i) => {
                    if (i == 2) {
                        return el;
                    } else {
                        return (this.printPage(el, i))
                    }
                })
            } else {
                return arr.map((el, i) => {
                    if (i == arr.length - 2) {
                        return (this.ellipsis)
                    } else if (arr.length - 1 == i) {
                        return (this.lastPage(i))
                    } else {
                        return (this.printPage(el, i))
                    }
                })
            }


        }


        if (this.positionCurPageOfArr < (countPage - 3) && countPage != this.positionCurPageOfArr) {
            if (curPage == 1) {
                this.savePagesArr.length = 0
                for (let i = 1; i <= 15; i++) {
                    this.savePagesArr.push(i);
                }
            }

            return printPagesLi(this.savePagesArr);

        } else if (this.positionCurPageOfArr > countPage - 4 && this.positionCurPageOfArr <= countPage - 2 && curPage < (this.totalCountPage - countPage - 4)) {
            let pagesRight = countPage - 2 - 2;
            let curPagesArr = [1, curPage - 1];
            for (let i = curPage; i < (curPage + pagesRight); i++) {
                curPagesArr.push(i);
            };
            curPagesArr.push(this.ellipsis, this.lastPage);

            this.savePagesArr = curPagesArr;

            return printPagesLi(this.savePagesArr);

        } else if (this.positionCurPageOfArr == countPage) {
            let curPagesArr = [1, this.ellipsis];
            for (let i = this.totalCountPage - (countPage - 2); i <= this.totalCountPage; i++) {
                curPagesArr.push(i);
            }
            this.savePagesArr = curPagesArr;

            return printPagesLi(this.savePagesArr , true);
        }else {
            return printPagesLi(this.savePagesArr , true);
        }



    }


    render() {







        return (
            <section className={s.users}>
                <h2 className={s.users__title}>Users</h2>


                <ul className={s.users__count}>
                    {this.viewCountPage(this.props.curPage)}
                </ul>
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
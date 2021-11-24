import s from "../works.module.css";


const WorksItem = (props)=> {
    return (
        <div className={s.works__item}>
            <div className={s.works__img}>
                <img src={props.img} alt="item-works" />
            </div>
            <div className={s.works__name}>{props.name}</div>
            <div className={s.works__text}>{props.text}</div>
        </div>
    )
};


export default WorksItem;
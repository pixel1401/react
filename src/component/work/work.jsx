import WorksItem from "./item/works-item";
import s from "./works.module.css";





const Works = (props) => {
    let itemCart = props.base.baseWork.map((e, i) => <WorksItem key={i} img={e.img} name={e.name} text={e.text} />);
    return (
        <section className={s.works}>
            <h2 className={s.works__title}>Works</h2>
            <div className={s.works__box}>
                {itemCart}
            </div>
        </section>
    )
}


export default Works;
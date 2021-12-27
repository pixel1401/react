import loader from '../../assets/img/loader.gif';
import  '../../App.css';

const Preloader = (props)=> {
    return  (
        <div className="preloader">
            <img src={loader} alt="loader" />
        </div>
    )
}

export default Preloader
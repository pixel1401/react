import { connect } from "react-redux";
import { getWorks } from "../../redux/selectors";
import Works from "./work";



const mapPropsToState = (state)=> {
    return {
        baseWork: getWorks(state)
    }
}

const WorksContainer = connect(mapPropsToState)(Works)


export default WorksContainer;
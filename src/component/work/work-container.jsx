import { connect } from "react-redux";
import Works from "./work";



const mapPropsToState = (state)=> {
    return {
        baseWork: state.workComponent.baseWork
    }
}

const WorksContainer = connect(mapPropsToState)(Works)


export default WorksContainer;
import React from 'react';
import s from '../profile.module.css';



class ProfileStatus extends React.Component {
    localState = {
        editMode: false,
        title:''
    }
    setStatusBlur  (event)  {
        let value = event.target.value;
        this.localState.title = value;
        this.localState.editMode = true;
        // console.log(this.forceUpdate);
        this.setState({ 
            title:value,
            editMode:true
        })
        // this.forceUpdate()
    }

    changeStatus (event) {
        this.localState.editMode = false;
        this.setState({
            editMode:false
        })
        // this.forceUpdate()
    }


    render() {
        let editMode = this.localState.editMode;
        let title  = this.localState.title;
        return (
            <div>
                {
                    (!editMode || title === '') &&
                    <input type="text" 
                        defaultValue={title}
                        onBlur={(e) => { this.setStatusBlur(e) }}
                        placeholder="Print your status" 
                        className={`${s.content__profile_info}  ${s.content__profile_input}`}></input>
                }
                {
                    (editMode) &&
                    <div 
                        onClick={(e) => this.changeStatus(e)} 
                        className={`${s.content__profile_info}  ${s.content__profile_status}`}>{title}</div>
                }
            </div>
        )


    }
}


export default ProfileStatus;
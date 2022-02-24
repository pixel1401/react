import React from 'react';
import s from '../profile.module.css';



class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: this.props.userStatus,
    }
    setStatus  (event)  {
        let value = event.target.value;
        // console.log(this.forceUpdate);
        this.setState({ 
            title:value
        })
        // this.forceUpdate()
    }

    changeStatus (event) {
        this.state.editMode = true;
        this.setState({
            editMode:true
        })
        // this.forceUpdate()
    }

    blurInput(event) {
        let value = this.state.title;
        if(this.props.userStatus === value) {
            return this.setState({
                editMode:true
            })
        } 
        this.setState({
            editMode:false,
        })

        console.log("SEND" , value);
        this.props.changeStatusTh(value);
        
    }

    componentDidUpdate(prevProps , prevState) {
        if(prevProps.userStatus !== this.props.userStatus) {
            this.setState({
                title:this.props.userStatus
            })
        }
    }

    render() {
        // if(title !== null && title !== "") this.state.editMode = true;
        return (
            <div>            
                {(!this.state.editMode ) ?(

                    <div onClick={(e) => this.changeStatus(e)} 
                            className={`${s.content__profile_info}  ${s.content__profile_status}`}>{this.props.userStatus}</div>
                )
                    :(<input type="text"
                        autoFocus 
                        value={this.state.title}
                        onChange={(e) => { this.setStatus(e) }}
                        onBlur={(e) => {this.blurInput(e)}}
                        placeholder="Print your status" 
                        className={`${s.content__profile_info}  ${s.content__profile_input}`}></input>
                    )
                    }
                    
            </div>  
        )


    }
}


export default ProfileStatus;
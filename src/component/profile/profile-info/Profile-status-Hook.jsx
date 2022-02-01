import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import s from '../profile.module.css';



export default function ProfileStatusHook(props) {

    let isUserStatus = (props.userStatus && props.userStatus !== "") ? true : false;

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.userStatus)

    useEffect(()=> {
        setEditMode(isUserStatus)
    }, [props.userStatus])


    let printStatus = (event)=> {
        let value = event.target.value;
        setStatus(value)
    }

    let sendStatus = (e) => {
        if(status === "" || !status) {
            return setEditMode(false);
        }else if (status === props.userStatus) {
            return setEditMode(true)
        }

        props.changeStatusTh(status);
        setEditMode(true)
    }

    let changeStatus = (e) => {
        if(!props.isMe) return; 
        setEditMode(false)
    }


    return (
        <div>
            {(!editMode && props.isMe) ? (
                <input type="text"
                    autoFocus
                    value={status}
                    onChange={(e) => { printStatus(e) }}
                    onBlur={(e) => { sendStatus(e) }}
                    placeholder="Print your status"
                    className={`${s.content__profile_info}  ${s.content__profile_input}`}></input>

            )
                : (
                    <div onClick={(e) => changeStatus(e)}
                        className={`${s.content__profile_info}  ${s.content__profile_status}`}>{props.userStatus}
                    </div>
                )
            }

        </div>
    )


}


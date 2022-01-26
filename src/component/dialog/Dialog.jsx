// import { NavLink } from "react-router-dom";
import React from "react";
import s from "./Dialog.module.css";
import DialogItem from "./dialogsName/dilogsName";
import DialogWindow from "./messeges/messeges"


 

// SEND HTML
const Dialog = (props) => {

    const text = React.createRef();

    let changeText = ()=> {
        let printText = text.current.value;
        props.printMessages(printText);
    }

    let send = () => {
        props.addMessages();
    }


    let dialosgElem = props.dialogs.map((name, i) => <DialogItem key={i} id={name.id} name={name.name} />)

    let massegElem = props.messages.map((m, i) => <DialogWindow key={i} who={m.who} name={m.name} text={m.text} />)

    return (
        <div className={s.dialog}>
            <div className={`title ${s.dialog__title}`}>Dialog</div>
            <div className={s.dialog__contact}>
                {dialosgElem}
            </div>

            <div className={s.dialog__window}>
                {massegElem}
                <div className={s.dialog__texterea}>
                    <textarea ref={text} onChange={changeText} value={props.change_text} placeholder="print your messages"></textarea>
                    <button  onClick={send} aria-label="send">Send</button>
                </div>
            </div>
        </div>
    )
}


export default Dialog;
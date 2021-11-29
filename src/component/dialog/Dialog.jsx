// import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";
import DialogItem from "./dialogsName/dilogsName";
import DialogWindow from "./messeges/messeges"





// SEND HTML
const Dialog = (props) => {
        
    let dialosgElem = props.base.dialogs.map((name ,i)=>  <DialogItem key ={i}  id={name.id} name={name.name}/>)

    let massegElem = props.base.messeges.map((m , i)=>  <DialogWindow  key={i} who={m.who} name={m.name} text = {m.text}/> )

    return (
        <div className = {s.dialog}>
                <div className={`title ${s.dialog__title}`}>Dialog</div>
                <div className={s.dialog__contact}>
                    {dialosgElem}
                </div>

                <div className={s.dialog__window}>
                    {massegElem}
                    <from className={s.dialog__texterea}>
                        <textarea  placeholder="print your messages"></textarea>
                        <button type="submit" aria-label="send">Send</button>
                    </from>
                </div>
        </div>
    )
}


export default Dialog;
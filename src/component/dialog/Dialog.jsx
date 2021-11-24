// import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";
import DialogItem from "./dialogsName/dilogsName";
import DialogWindow from "./messeges/messeges"
// DATAbASE
let dialogs = [
            {id:1,name:"Andrew"},
            {id:2,name:"Era"},
            {id:3,name:"Oleg"},
            {id:4,name:"Dina"},
            {id:5,name:"Victor"}
]

let messeges = [
    {who:"mine" , name:"Me" , text:"My name is Erzhan"},
    {who:"aline" , name:"Victor" , text:"My name is victor awd a"},
    {who:"aline" , name:"Victor" , text:"My name is victor awd awd"},
    {who:"mine" , name:"Me" , text:"I am a  popover and I can have text and everything Erzhan awdawda "},
    {who:"aline" , name:"Victor" , text:"I am a normal popover awdad wad awd awd"},
]
// END DATABASE




// SEND HTML
const Dialog = (props) => {
        
        let dialosgElem = dialogs.map((name ,i)=>  <DialogItem key ={i}  id={name.id} name={name.name}/>)

        let massegElem = messeges.map((m , i)=>  <DialogWindow  key={i} who={m.who} name={m.name} text = {m.text}/> )

    return (
        <div className = {s.dialog}>
                <div className={`title ${s.dialog__title}`}>Dialog</div>
                <div className={s.dialog__contact}>
                    {dialosgElem}
                </div>

                <div className={s.dialog__window}>
                    {massegElem}
                </div>
        </div>
    )
}


export default Dialog;
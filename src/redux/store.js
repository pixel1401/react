import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";

const store = {

    _state : {
        dialogComponent:{
            dialogs : [
                {id:1,name:"Andrew"},
                {id:2,name:"Era"},
                {id:3,name:"Oleg"},
                {id:4,name:"Dina"},
                {id:5,name:"Victor"}
            ],
            messages : [
                {who:"mine" , name:"Me" , text:"My name is Erzhan"},
                {who:"aline" , name:"Victor" , text:"My name is victor awd a"},
                {who:"aline" , name:"Victor" , text:"My name is victor awd awd"},
                {who:"mine" , name:"Me" , text:"I am a  popover and I can have text and everything Erzhan awdawda "},
                {who:"aline" , name:"Victor" , text:"I am a normal popover awdad wad awd awd"},
            ],

            change_text:""
        },

        workComponent:{
            baseWork : [
                {
                    img: "https://media.istockphoto.com/photos/all-set-for-a-productive-day-at-home-picture-id1272462939",
                    name: "Front-end",
                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
                },
                {
                    img: "https://media.istockphoto.com/photos/all-set-for-a-productive-day-at-home-picture-id1272462939",
                    name: "Front-end",
                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
                },
                {
                    img: "https://media.istockphoto.com/photos/all-set-for-a-productive-day-at-home-picture-id1272462939",
                    name: "Front-end",
                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
                },
                {
                    img:"https://shrm-res.cloudinary.com/image/upload/c_crop,h_408,w_724,x_0,y_75/w_auto:100,w_1200,q_35,f_auto/v1/Benefits/office_space_kj3wup.jpg",
                    name:"Backend Developer",
                    text:"ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    img:"https://shrm-res.cloudinary.com/image/upload/c_crop,h_408,w_724,x_0,y_75/w_auto:100,w_1200,q_35,f_auto/v1/Benefits/office_space_kj3wup.jpg",
                    name:"Backend Developer",
                    text:"ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    img:"https://shrm-res.cloudinary.com/image/upload/c_crop,h_408,w_724,x_0,y_75/w_auto:100,w_1200,q_35,f_auto/v1/Benefits/office_space_kj3wup.jpg",
                    name:"Backend Developer",
                    text:"ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    img:"https://shrm-res.cloudinary.com/image/upload/c_crop,h_408,w_724,x_0,y_75/w_auto:100,w_1200,q_35,f_auto/v1/Benefits/office_space_kj3wup.jpg",
                    name:"Backend Developer",
                    text:"ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            ]
        },

        profileComponent: {
            postsBase :[
                {name:"Egor" ,likeCount:"25" , text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
                {name:"Ana" ,likeCount:"25K" , text:"It is a long established fact that a reader will be distracted by the readable content o"},
                {name:"Kill" ,likeCount:"0" , text:"It is fine"},
            ],
            newText:""
        },

        friends:{
            friendsLink: [
                {id:1,name:"Andrew"},
                {id:2,name:"Era"},
                {id:3,name:"Oleg"},
                {id:4,name:"Dina"},
                {id:5,name:"Victor"}
            ]
        },

       

    },

    renderDom() {
        console.log("state change");
    },

    getState(){
        return this._state;
    },


    subscribe(observer) {
        this.renderDom = observer;
    },

    dispatch(action){

        this._state.profileComponent = profileReducer(this._state.profileComponent , action);
        this._state.dialogComponent = messageReducer(this._state.dialogComponent , action);

        this.renderDom(this._state);

    }
};




export default store;

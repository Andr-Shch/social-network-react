const add_post = 'ADD-POST';
const update_post = 'UPDATE-POST-STATE';


 let store = {
    state : {
    messageData: [
        {id:1, message:'Did you see Lady in red?' },
        {id:2, message:'Be carefull, she is an agent' },
        {id:3, message:'But she is &#128293;' },
      
      ],
      dialogData: [
        {id:1, name:'Thomas Anderson' },
        {id:2, name:'Jhon Smith' },
        {id:3, name:'Morpheus' },
        {id:4, name:'The Merovingian' }
      ],
      wallInfo:{
        postText:[{id:1, text:'Hi, I use props for this text'},
      {id:2, text:'Life would be tragic if it weren’t funny.'} ],
        inputText: 'New post!'
      } 
    },
    callSubscruber() {
    console.log('state changed')
    },
    getState(){
     return this.state
    },
    subscribe(observer){
      this.callSubscruber = observer;
    },


  dispatch(action){
   if(action.type === add_post){
    let newPost = {
                id:3,
                text: this.state.wallInfo.inputText
            }
           this.state.wallInfo.postText.push(newPost)
           this.state.wallInfo.inputText =''
           this.callSubscruber(this.state)

   }else if(action.type === update_post){
    this.state.wallInfo.inputText = action.newText;
     this.callSubscruber(this.state)
   }


  }//end dispatch
   
 }//store end
 
 export const addPostActionCreator=()=>{
   return {type: add_post}
 }
 export const updatePostAcCre=(a)=>({
   type: update_post,
   newText: a
 })

  export default store
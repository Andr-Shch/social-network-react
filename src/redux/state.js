 let renderEntireTree = () => {
    

 }

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
    renderEntireTree() {
    console.log('state changed')
    },

     addPost (postMessage){
       
      let newPost = {
          id:3,
          text: postMessage
      }
     this.state.wallInfo.postText.push(newPost)
     
     this.renderEntireTree(this.state)

   } ,
   textChanger(newText){
    this.state.wallInfo.inputText = newText;
    this.renderEntireTree(this.state)
 },
  subscribe(observer){
  this.renderEntireTree = observer;
}

 }

  export default store
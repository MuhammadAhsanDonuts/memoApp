import PostMessage from '../models/postMessage.js'; 


export const getPosts = async (req, res) => {
   try{
       //this will find the data in the database. 
        const postMessages = await PostMessage.find();

        console.log(postMessages); 
        //return okay if everything is fine  
        res.status(200).json(postMessages); 
   }catch (error) {
        res.status(404).json( {message: error.message} )
   }
}


export const createPost = async (req, res) => {
    
    //requesting the data from front-end body
    const post = req.body; 
    //passing the requested data into PostMessage params
   const newPost = new PostMessage(post) 

   try {
       //waiting untill the data has been saved. 
        await newPost.save(); 

        res.status(201).json(newPost)
   }catch (error) {
        res.status(409).json({message: error.message}); 
   }
}



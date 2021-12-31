import express from  'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose  from  'mongoose'
import postRoutes  from './routes/posts.js'



const app = express()




const PORT = process.env.PORT || 5000; 

//setting up body-parser so we can send our requests to the server properly. 
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());


app.use('/posts', postRoutes); 

//connecting database
mongoose.connect('mongodb://localhost/27017', {useNewUrlParser: true }).then(()=> {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})
.catch((error) => console.log(error.message)); 





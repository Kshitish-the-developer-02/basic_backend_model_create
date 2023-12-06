import express from 'express';
import 'dotenv/config'
import cors from "cors"
const app=express();

// app.use(cors({
//     origin: "http://localhost:5173"
// }))

app.get('/',(req,res)=>{
    res.send("hello i'm sargio martina");
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            "id":"1",
            "title":"A joke",
            "content":"this a joke"
        },
        {
            "id":"2",
            "title":"Another joke",
            "content":"this a  another joke"
        },
        {
            "id":"3",
            "title":"3rd joke",
            "content":"this a 3rd joke"
        },
        {
            "id":"4",
            "title":"4th joke",
            "content":"this a 4th joke"
        },

    ];
    res.send(jokes);
});
const port=process.env.PORT ||3000;
console.log(process.env.PORT);

app.listen(port,()=>{
    console.log(`server is create on http:/${port}`);
})  


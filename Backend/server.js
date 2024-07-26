import express from 'express'
import cors from "cors"
const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.get("/", (req,res)=>{
    res.send("server is ready")
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.get("/api/v1/jokes", (req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Third joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: 'Fourth joke',
            content: 'This is a fourth joke'
        },
        {
            id: 5,
            title: 'Fifh joke',
            content: 'This is a fifth joke'
        },
        {
            id: 6,
            title: 'Sixth joke',
            content: 'This is a sixth joke'
        },
        {
            id: 7,
            title: 'Seventh joke',
            content: 'This is a seventh joke'
        },
        {
            id: 8,
            title: 'Eight joke',
            content: 'This is a eight joke'
        },
    ]
    res.send(jokes)
});

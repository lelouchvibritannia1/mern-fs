const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDB = require("./config/db")
const userRouter = require("./routes/userRouter")
const chatRoutes = require("./routes/chatRoutes")
const messageRoutes = require("./routes/messageRoutes")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
})

// app.get('/api/chat', (req, res) => {
//     res.send(chats);
// })

// app.get('/api/chat/:id', (req, res) => {
//     // console.log(req.params.id);
//     const singleChat = chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// })

app.use('/api/user', userRouter)
app.use('/api/chat', chatRoutes);
app.use("/api/message", messageRoutes);


app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000;
app.listen(5000, console.log("Started successfully"));
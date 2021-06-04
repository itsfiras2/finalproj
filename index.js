import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: '52428800', extended: true }))
app.use(bodyParser.urlencoded({ limit: '52428800', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

import * as path from "path";
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join('app', '../client/build')))
    app.get('/*', (req, res) => {
        res.sendFile(path.join('app', '../client/build', 'index.html'))
    })
}
const CONNECTION_URL = 'mongodb+srv://firasdb:firas123456789@cluster0.3hplv.mongodb.net/firasdb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${err} did not connect`));

mongoose.set('useFindAndModify', false);
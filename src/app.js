import express from "express"
import userApi from "./api/user/user.js"

const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.use("/user", userApi)

app.listen(port, () => {
    console.log(`app is now listening on http://localhost:${port}/`);
});
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import roomRoutes from './routes/room.js';

const app = express();
const port = 80;

// Body-parser middleware
app.use(bodyParser.json());

app.use(cors({
    origin: "*", // 접근 권한을 부여하는 도메인
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
}));

// MongoDB 연결
mongoose.connect('mongodb://localhost/constellations', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 라우트 설정
app.use('/room', roomRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});  

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

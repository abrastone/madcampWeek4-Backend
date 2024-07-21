import { Router } from "express";
const router = Router();

router.get("/", (req, res)=>{
    res.send("이건 user 라우트야~")
});

router.get("/AAA", (req, res)=>{
    res.send("이건 AAA user 라우트야~")
});

router.get("/BBB", (req, res)=>{
    res.send("이건 user 라우트일까?")
});

export default router;
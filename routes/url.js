const express=require('express');
const{handleShortURL,handleGetAnalytics}=require("../controllers/url");
const router=express.Router();


router.post("/",handleShortURL);

router.get('/analytics/:shortId',handleGetAnalytics);

module.exports=router;
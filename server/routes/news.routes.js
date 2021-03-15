const express = require('express');
const router = express.Router();
//const passport = require('passport')
const News = require ('../models/News.js');
//Add new News
router.post('/add',(req,res,next) => {
  console.log(req.body)
  const news = new News({
    title : req.body.title,
    description : req.body.description,
    owner : req.body.owner,
  });
  console.log(news)
  news.save((err,news)=>{
    if (err){
      return res.send({
        success :false,
        message : 'Eroor while saving'
      });
    }
    if(!news){
      return res.send({
        success :false,
        message : 'Failed while saving'
      });
    }
    return res.send({
      success :true,
      message : 'News added',
      news
    });
  })
});
//List of all task by owner
router.get('/list',(req,res,next) => {
  News.find({},(err,news) => {
    // if (err){
    //   return res.send({
    //     success :false,
    //     message : 'Eroor while getting news'
    //   });
    // }
    // if (!news){
    //   return res.send({
    //     success :false,
    //     message : 'No news'
    //   });
    // }

    // return res.send({
    //   success :true,
    //   message : 'List of all your news',
    //   news

    // });
    res.send(
    console.log("cgfgdfgdfgdfgfdg")
    )
    console.log('List of all')

  })
  console.log(news)
})
router.get('/listed', (req, res) => {
  News.find({}, function (err, news) {
    if (err) throw err;
    console.log(err)
    res.send(news);
    console.log(news)
  });
});



//Delete News
// router.post('/delete/:id',passport.authenticate('jwt',{session : false}),(req,res,next) => {
//  const newsId = req.params.id;
//  News.remove({_id: newsId},err=>{
//   if (err){
//     return res.send({
//       success :false,
//       message : 'Eroor while getting news'
//     });
//   }

//   return res.send({
//     success :true,
//     message : 'News deleted',
//     news
//   });
//  })
// })
module.exports = router;

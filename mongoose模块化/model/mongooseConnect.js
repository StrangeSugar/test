let mongoose = require("mongoose");
mongoose.set('useCreateIndex',true) 

//创建数据库连接
mongoose.connect('mongodb://localhost:27017/demo',{
  useNewUrlParser: true, //使用一个新的URL解析器，用于解决一些安全性问题。
  useUnifiedTopology: true //使用一个统一的新的拓扑结构。
})


mongoose.connection.on('open',function (err) {
        if(err){
          console.log('数据库连接失败',err);
          
        }else{
          console.log('数据库连接成功')
          
        }
    })

exports = mongoose;

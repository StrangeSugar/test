let mongoose = require("mongoose");

//4.真正有人要进入你家了 -------- CRUD
  
      //新增操作 --- C
      // stuModel.create({
      //   stu_id:'002',
      //   name:'强',
      //   age:'42',
      //   sex:'男',
      //   hobby:['女','打代码','打篮球'], //限制爱好只能为数组，数组中的每一项必须为字符串
      //   info:'一个风一样的男子', //接收所有类型
      // },function(err,data){
      //     if (!err) console.log(data)
      //     else console.log(err)
      // })
      // stuModel.find({stu_id:"050"},function(err,data){
      //   if(!err){
      //     console.log(data)
      //   }else{
      //     console.log(err)
      //   }
      // })
      // stuModel.update({stu_id:"002"},{name:"静静"},function(err,data){
      //   if(!err){
      //         console.log(data)
      //       }else{
      //         console.log(err)
      //       }
      // })
      stuModel.deleteMany({stu_id:"002"},function(err,data){
        if(!err){
                  console.log(data)
                }else{
                  console.log(err)
                }
      })
  
      //查询 --- R
      /*find方法：
          1.返回的是一个数组，就算是一条数据，也包裹一个数组
          2.若查询结果为空，则返回一个空数组。
      */
      /*stuModel.find({name:'金龙老师'},function (err,data) {
        if (!err) console.log(data)
        else console.log(err)
      })*/
      /*find方法：
          1.若有结果，返回的是一个对象
          2.若没有结果，返回一个null
      */
      /*stuModel.findOne({name:'班长'},{age:1,_id:0},function (err,data) {
        if (!err) console.log(data)
        else console.log(err)
      })*/
  
      //更新 --- U
      /*stuModel.updateOne({name:'静静'},{age:16},function (err,data) {
        if (!err) console.log(data)
        else console.log(err)
      })*/
  
      //删除 --- D
      /*stuModel.deleteMany({age:16},function (err,data) {
        if (!err) console.log(data)
        else console.log(err)
      })*/
    
window.onload = function(){
    var btn = document.querySelectorAll('.choiceArea>button');
    function demo(){
        for(var i=0;i<btn.length;i++){
            //每次循环都将i作为一个参数赋值给j
            (function(j){
                btn[j].onclick =function(){
                    alert("你的的选择是"+(j+1)+"号女嘉宾");
                }
            }(i));
        };
    }
    demo();
}
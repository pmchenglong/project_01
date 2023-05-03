
        function donghuahan(obj,mumu,callback){
            clearInterval(obj.times)//避免点击过多，导致滑块过快
            obj.times=setInterval(function(){//定时器
            var step=(mumu-obj.offsetLeft)/10;
            if(step>0){
                var step=Math.ceil(step)//会存在小数位，offsetleft距离会有误差，所以取整数（往大的整数取）
            }else{
                var step=Math.floor(step)//如果存在负数，offsetleft距离会有误差，所以取整数（往小的整数取）
            }
            if(obj.offsetLeft ==mumu){
                clearInterval(obj.times)//等于规定的距离时，停止动画
                if(callback){//如果有callback参数传进来，就执行
                    //调用函数名
                    callback()};
            }
            obj.style.left=obj.offsetLeft+step+'px'
        },30)
        }
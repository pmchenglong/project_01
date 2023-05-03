window.addEventListener('load',function(){
    var fangxiang=document.querySelector('.main_left_fangxiang')
    var main_left=document.querySelector('.main_left')
    var main_left_img_ul=document.querySelector('.main_left_img_ul')
    var li_list=main_left_img_ul.querySelectorAll('li')
    var main_left_yuandian_ul=document.querySelector('.main_left_yuandian_ul')
    var main_left_fangxiang=document.querySelector('.main_left_fangxiang')
    
    //鼠标移入显示左右滑动按钮
    main_left.addEventListener('mouseenter',function(){
        fangxiang.style.display='block'
        clearInterval(timer)
    })
    main_left.addEventListener('mouseleave',function(){
        fangxiang.style.display='none'
        setInterval(function(){
            main_left_fangxiang_child[1].click();
        },2000)
    })
    //获取图片数量动态生成小圆点
    for(var i=0;i<li_list.length;i++){
        var li=document.createElement('li');
        main_left_yuandian_ul.appendChild(li);
        li.setAttribute('index',i)
        //注册鼠标移入切换圆点事件
        li.addEventListener('mouseenter',function(){
            var main_left_yuandian_ul_li=main_left_yuandian_ul.querySelectorAll('li')
            for(var i=0;i<main_left_yuandian_ul_li.length;i++){
                main_left_yuandian_ul_li[i].id=''
            }
            this.id='current';
            //同时切换图片
            var index=this.getAttribute('index');
            var main_left_width=main_left.offsetWidth;
            num=index;
            circle=index;
            donghuahan(main_left_img_ul,-index*main_left_width);
        })

    }
    //默认给第一个圆点选中
    var main_left_yuandian_ul_li=main_left_yuandian_ul.querySelectorAll('li')
    main_left_yuandian_ul_li[0].id='current'
    //克隆第一个图片插入到最后一个li,在动态生成圆点后面克隆，避免多出一个圆点。
    var first=li_list[0].cloneNode(true);
    main_left_img_ul.appendChild(first)
    
    //点击右侧按钮滑动，无缝滑动
    var main_left_fangxiang_child=main_left_fangxiang.querySelectorAll('span')
    var num=0;
    var main_left_width=main_left.offsetWidth;
    var circle=0;
    main_left_fangxiang_child[1].addEventListener('click',function(){
        
            
            if(num==main_left_yuandian_ul_li.length){
                main_left_img_ul.style.left=0;
                num=0
            }
            num++;
            donghuahan(main_left_img_ul,-num*main_left_width,function(){
                flag=true
            })
            circle++;
            if(circle==2){
                circle=0
            }
            for(var i=0;i<main_left_yuandian_ul_li.length;i++){
                main_left_yuandian_ul_li[i].id='';
            }
            main_left_yuandian_ul_li[circle].id='current'
        
    })
    //左侧按钮
    main_left_fangxiang_child[0].addEventListener('click',function(){
        
            if(num==0){
                num=li_list.length
                main_left_img_ul.style.left=-num*main_left_width+'px';
            }
            num--;
            donghuahan(main_left_img_ul,-num*main_left_width,function(){
                flag=true
            })
            circle--;
            if(circle<0){
                circle=main_left_yuandian_ul_li.length-1;
            }
            for(var i=0;i<main_left_yuandian_ul_li.length;i++){
                main_left_yuandian_ul_li[i].id='';
            }
            main_left_yuandian_ul_li[circle].id='current'
        
    })
    //定时器，自动切换
    var timer=setInterval(function(){
        main_left_fangxiang_child[1].click();//手动触发事件
    },2000)
    
})
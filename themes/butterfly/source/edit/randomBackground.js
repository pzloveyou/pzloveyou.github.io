//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(/img/77.jpg)",
    "url(/img/85.jpg)",
    "url(/img/79.jpg)",
    "url(/img/80.jpg)",
    "url(/img/91.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.ceil(Math.random() * (backimg.length-1));
//重设背景图片
var web=document.getElementById("web_bgs");
web.style.backgroundImage  = backimg[bgindex];
//重设banner图片
//document.getElementById("page-header").style.backgroundImage = backimg[bgindex];

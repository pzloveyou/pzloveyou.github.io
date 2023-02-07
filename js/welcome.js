function welcome() {
    let welcome_text='欢迎光顾本知恩的小窝!';
    console.log(111,document.referrer)
    console.log(222,document.domain)
    if(document.referrer&&document.referrer!==''){
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
        
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
        console.log(222,document.referrer.split("/"))
        console.log(222,document.domain)

        swal({
            title:"欢迎！",
            text: welcome_text+'\n打开下方音乐以获取更佳体验!',
            imageUrl: "/img/640.png",
            timer: 2000,
            showConfirmButton: false
        });
    }

}

$(document).ready(()=>{
    welcome();
})

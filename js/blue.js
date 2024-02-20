$(document).ready(function(){
    // $("html,body").css({
    //     "background-color":"red"
    // })
    // $(".m-menu span").click(function(){
    //     $(this).chiidren(".drop").hide();
    // });
    $(".m-menu span").click(function(){
        $(".drop").hide()
        $(this).children(".drop").show().css({
            display:"flex"
        });
    });
});
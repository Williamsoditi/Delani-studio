$(document).ready(function () {
    $(".design-logo").click(function () {
        $("#design").fadeToggle(1000);
    });
    $(".development-logo").click(function () {
        $("#development").fadeToggle(1000);
    });
    $(".product-management").click(function () {
        $("#management").fadeToggle(1000);
    });
    $("#img-1").hover(function () {
        $(".blank").toggle(500);
    });
    $("#img2").hover(function () {
        $(".2").toggle(500);
    });
    $("#img3").hover(function () {
        $(".3").toggle(500);
    });
    $("#img4").hover(function () {
        $(".4").toggle(500);
    });
    $("#img5").hover(function () {
        $(".5").toggle(500);
    });
    $("#img6").hover(function () {
        $(".6").toggle(500);
    });
    $("#img7").hover(function () {
        $(".7").toggle(500);
    });
    $("#img8").hover(function () {
        $(".8").toggle(500);
    });
   
    

})
// ....... Adding PAGE YEAR ..................  //
let date = new Date().getFullYear();
let dateTag = document.getElementById("date");
dateTag.innerHTML = "(c)" + " " + date;


// function mySubmit() {
//     alert("Thank you for reaching out!");
// }
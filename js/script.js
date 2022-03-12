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
        $(".blank").toggle(1000);
        // $(".blank").animate();
    });
    

})
// ....... Adding PAGE YEAR ..................  //
let date = new Date().getFullYear();
let dateTag = document.getElementById("date");
dateTag.innerHTML = "(c)" + " " + date;


// function mySubmit() {
//     alert("Thank you for reaching out!");
// }
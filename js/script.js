$(document).ready(function () {
    $(".design-logo").click(function () {
        $("#design").fadeToggle();
    });
    $(".development-logo").click(function name() {
        $("#development").fadeToggle();
    });
    $(".product-management").click(function name() {
        $("#management").fadeToggle();
    });
    $("#img-1").hover(function () {
        $(".img-1").fadeToggle();
    });

})
let date = new Date().getFullYear();
let dateTag = document.getElementById("date");
dateTag.innerHTML = date;
// function mySubmit() {
//     alert("Thank you for reaching out!");
// }
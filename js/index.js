$(document).ready(function () {
    $("#1prev").click(function () {
        $("#1").hide();
        $("#3").show();
    });
    $("#1").on("swipeleft", function () {
        $("#1").hide();
        $("#3").show();
    });
    $("#1next").click(function () {
        $("#1").hide();
        $("#2").show();
    });
    $("#1").on("swiperight", function () {
        $("#1").hide();
        $("#2").show();
    });
});
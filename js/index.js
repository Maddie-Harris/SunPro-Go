$(document).ready(function () {
    $('#fadeIn').hide()
    console.log("I am loaded")

    setTimeout(() => {
        $('#fadeIn').show()


 

        $("#preLoader").hide()
    }, 1500)
});
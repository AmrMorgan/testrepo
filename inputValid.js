$(document).ready(
    function () {
        $(".validInput").on('input', function (e) {
            var htyd = /[0-9]+$/.test($(this).val());
            if (!htyd) {
                $(this).val("");
                htyd = false;
            }
        });
    });
function validateNumericInput(evt, text) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /\d/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault)
            theEvent.preventDefault();
    }
}
onkeypress="validateNumericInput(event, this.text)"
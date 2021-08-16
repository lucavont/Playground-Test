var text = document.querySelector('#accordion-text-p');

$('#button1').click(function () {

    // On click, execute the ajax call.
    $.ajax({
        type: "GET",
        url: "./assets/tab1.json",
        dataType: 'json',
        beforeSend: function () { // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
            $('#loader').removeClass('hidden')
        },
        success: function (data) {
            // On Success, build our rich list up and append it to the #richList div.
            $(text).text(data.item.content)
        },
        complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
            $('#loader').addClass('hidden')
        },
    });
});
$('#button2').click(function () {

    // On click, execute the ajax call.
    $.ajax({
        type: "GET",
        url: "./assets/tab2.json",
        dataType: 'json',
        beforeSend: function () { // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
            $('#loader').removeClass('hidden')
        },
        success: function (data) {
            // On Success, build our rich list up and append it to the #richList div.
            $(text).text(data.item.content)
        },
        complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
            $('#loader').addClass('hidden')
        },
    });
});
$('#button3').click(function () {

    // On click, execute the ajax call.
    $.ajax({
        type: "GET",
        url: "./assets/tab3.json",
        dataType: 'json',
        beforeSend: function () { // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
            $('#loader').removeClass('hidden')
        },
        success: function (data) {
            // On Success, build our rich list up and append it to the #richList div.
            $(text).text(data.item.content)
        },
        complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
            $('#loader').addClass('hidden')
        },
    });
});
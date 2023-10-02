// Define your getJSONMethod
function getJSONMethod() {
    $.getJSON('team.json', function(data) {
        // Remove any existing content in the #team div
        $('#team').empty();

        // Loop through the data array
        $.each(data, function(index, teamMember) {
            // Create HTML elements for name, position, and bio
            var nameElement = $('<h2>').text(teamMember.name);
            var positionElement = $('<h5>').text(teamMember.position);
            var bioElement = $('<p>').text(teamMember.bio);

            // Append the elements to the #team div
            $('#team').append(nameElement, positionElement, bioElement);
        });
    });
}

// Define your ajaxMethod
function ajaxMethod() {
    // Display "Loading..." message in the #team div before sending the AJAX request
    $('#team').text('Loading...');

    $.ajax({
        type: 'GET',
        url: 'team.json',
        dataType: 'json',
        success: function(data) {
            // Remove the "Loading..." message
            $('#team').empty();

            // Loop through the data array
            $.each(data, function(index, teamMember) {
                // Create HTML elements for name, position, and bio
                var nameElement = $('<h2>').text(teamMember.name);
                var positionElement = $('<h5>').text(teamMember.position);
                var bioElement = $('<p>').text(teamMember.bio);

                // Append the elements to the #team div
                $('#team').append(nameElement, positionElement, bioElement);
            });
        },
        error: function() {
            // Display an error message in case of an error
            $('#team').text('Error: Content could not be retrieved.');
        }
    });
}

// Call one of the methods in a ready function to run the code
$(document).ready(function() {
    // You can choose to call either getJSONMethod() or ajaxMethod() here
    // Example: getJSONMethod();
    ajaxMethod(); // Since you mentioned it doesn't matter which one you call
});

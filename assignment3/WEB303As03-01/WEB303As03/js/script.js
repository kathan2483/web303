// defining method
function getJSONMethod() {
    $.getJSON('team.json', function(data) {
        //deleting old content
        $('#team').empty();

        // array
        $.each(data, function(index, teamMember) {
            // new elements
            var nameElement = $('<h2>').text(teamMember.name);
            var positionElement = $('<h5>').text(teamMember.position);
            var bioElement = $('<p>').text(teamMember.bio);

            $('#team').append(nameElement, positionElement, bioElement);
        });
    });
}

//ajaxMethod
function ajaxMethod() {
    $('#team').text('Loading...');

    $.ajax({
        type: 'GET',
        url: 'team.json',
        dataType: 'json',
        success: function(data) {
           $('#team').empty();

            $.each(data, function(index, teamMember) {
                
                var nameElement = $('<h2>').text(teamMember.name);
                var positionElement = $('<h5>').text(teamMember.position);
                var bioElement = $('<p>').text(teamMember.bio);
 $('#team').append(nameElement, positionElement, bioElement);
            });
        },
        error: function() {
           $('#team').text('Error: Content could not be retrieved.');
        }
    });
}


$(document).ready(function() {
    ajaxMethod();
});

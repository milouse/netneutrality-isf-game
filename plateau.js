function neutrality_game(players_number, size) {
    var players = [];
    var case_number = (2 * size) + (2 * (size - 2));
    var colorArray = ['red', 'green', 'blue', 'yellow', 'cyan'];

    for (var i = 0; i < players_number ; i++) {
        players.push({'name': 'joueur ' + i, 'color': colorArray[i]});
    }

    var bottom_container = document.createElement('UL');
    bottom_container.setAttribute('id', 'bottom_container');
    bottom_container.className = 'cases_container horizontal_cases_container';

    for (var i = 0 ; i < size ; i++) {
        var local_case = document.createElement('LI');
        local_case.setAttribute('id', 'case_' + case_number);
        local_case.innerHTML = case_number;
        local_case.className = 'case';
        $(bottom_container).append(local_case);
        case_number--;
    }

    var right_container = document.createElement('UL');
    right_container.setAttribute('id', 'right_container');
    right_container.className = 'cases_container aside_cases_container';

    for (var i = 0 ; i < (size - 2) ; i++) {
        var local_case = document.createElement('LI');
        local_case.setAttribute('id', 'case_' + case_number);
        local_case.innerHTML = case_number;
        local_case.className = 'case';
        $(right_container).prepend(local_case);
        case_number--;
    }

    var top_container = document.createElement('UL');
    top_container.setAttribute('id', 'top_container');
    top_container.className = 'cases_container horizontal_cases_container';

    for (var i = 0 ; i < size ; i++) {
        var local_case = document.createElement('LI');
        local_case.setAttribute('id', 'case_' + case_number);
        local_case.innerHTML = case_number;
        local_case.className = 'case';
        $(top_container).prepend(local_case);
        case_number--;
    }

    var left_container = document.createElement('UL');
    left_container.setAttribute('id', 'left_container');
    left_container.className = 'cases_container aside_cases_container';

    for (var i = 0 ; i < (size - 2) ; i++) {
        var local_case = document.createElement('LI');
        local_case.setAttribute('id', 'case_' + case_number);
        local_case.innerHTML = case_number;
        local_case.className = 'case';
        $(left_container).append(local_case);
        case_number--;
    }

    $('#plateau').append($(top_container));
    $('#plateau').append($(left_container));

    var central_zone = document.createElement('DIV');
    central_zone.className = 'central_zone';
    central_zone.setAttribute('id', 'central-zone');
    $(central_zone).css('width', ((size - 2) * 100) + ((size - 1) * 2));
    $(central_zone).css('height', ((size - 2) * 100) + ((size - 2) * 2));
    $('#plateau').append($(central_zone));

    $('#plateau').append($(right_container));
    $('#plateau').append($(bottom_container));

    return self;
}

var plateau_principal = null;
$(document).ready(function(){
    if(!plateau_principal) {
        $('#game_init').show();
    } else {
        $('#game_init').hide();
    }
    
    $('#size_field').change(function (){
        $('#size_hint').css('color', 'black');
        $('#size_hint').html('&times; ' + $('#size_field').val());
    });
    
    $('#game_init').submit(function (e){
        e.preventDefault();
        var players = $('#player_field').val();
        var size = $('#size_field').val();
        if(size > 2) {
            plateau_principal = neutrality_game(players, size);
            $('#game_init').hide();
        } else {
            $('#size_hint').html("La taille du plateau doit être un carré de plus de 2 cases de côté");
            $('#size_hint').css('color', 'red');
        }
        return false;
    });
});

$(document).ready(function () {
    $('body').keypress(function (event) {
        if (event.keyCode === '13') {
            event.preventDefault();
        }
    });

    $('#button-search').click(function () {
        $('a').removeClass('found');
        var NotFound = $('main p').removeClass('not-found'),
            needle = $('input.search').val().toUpperCase(),
            result = 0;
            
        $('a').each(function () {
            var counter = $(this).attr('counter') !== undefined ? $(this).attr('counter') : 0;
            if (($(this).text().toUpperCase().indexOf(needle) !== -1) && needle !== '') {
                $(this).addClass('found');
                $(this).attr('counter', ++counter);
                if (counter >= 3) {
                    $(this).addClass('gold');
                }
                result += 1;
            }
        });

        if ((result === 0) && (needle !== '')) {
            NotFound.addClass('not-found').text('Ничего не найдено!');
        } else {
            if (needle === '') {
                NotFound.addClass('not-found').text('Введите запрос в поле поиска');
            }
        }
    });

    $('#button-shuffle').click(function () {
        $('ul').each(function () {
            $(this).find('li').sort(function () {
                return Math.random() - 0.5;
            }).appendTo(this);

        });

    });
});

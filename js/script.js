$(document).ready(function () {
    $('body').keypress(function (event) {
        if (event.keyCode === '13') {
            event.preventDefault();
        }
    });
    
    $('#button-search').click(function (event) {
        event.preventDefault();
        $('a').removeClass('found');
        var NotFound = $('main p').removeClass('not-found'),
            needle = $('input.search').val().toUpperCase(),
            result = 0;
        $('a').each(function () {
            if (($(this).text().toUpperCase().indexOf(needle) !== -1) && needle !== '') {
                $(this).addClass('found');
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
                return (Math.random - 0.5);
                
            });
            $(this).appendTo('ul');
            
        });
        
    });
});


//1. needdle (то, что ищем, value формы)
//искать по странице
//добавить класс с изменением вида
//
//если .length = 0, создать элемент под инпут (ничего не найдено)
//
//2. полчить коллекцию, записать в переменную (detach? или рандом). перемешать. вывести (как???)

//$.fn.shuffle = function..(все засунуть в ;(function($){})(jQuery);)

// получить коллекцию всех лишек .get()

//функция получения рандома через Math.random*.length

// shuffled = map
//привести все элементы в массив
// взять рандомное число по ленгс
// клонировать рандомный элемент
//вырезать его splice
//вернуть данный элемент

//this.each(function(i) {})функция с заменой элементов через replaceWith(i-тым элементом shuffled)
//


//для каждого ул взять ли > sort(func return math.random - 0.5) >appendTo ul
//3. 
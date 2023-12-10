var newestUrls = [
    'https://chiphim.com'
];
var otherUrls = [
    'https://chiphim.github.io'
];
var foreverUrls = [
    'https://chiphim.com'
];
var notices = [
	'* please bookmark our link(chiphim.github.io)。'
];

function createFieldElem(option) {
    var title = option.title;
    var items = option.items;
    var plainText = option.plainText;
    var classStr = option.classStr;
    var text = option.text;

    var fieldElem = document.createElement('div');
    var fieldClass = ['field', classStr].join(' ');
    fieldElem.setAttribute('class', fieldClass);

    var titleElem = document.createElement('h2');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');
    var htmlStr = ''
    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr = htmlStr + '<li>' + items[i] + '</li>';
        } else {
            htmlStr = htmlStr + '<li><a href="' + items[i] + '">' + items[i] + '</a></li>';
        }
    }

    // For text
    if (text) {
        htmlStr = htmlStr + '<li class="text">' + text + '</li>';
    }

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');
    // append logo
    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = '<h1 class="flag">chiphim</h1>'
    mainElem.appendChild(logoElem);

    // newest urls
    var newestFieldElem = createFieldElem({title: 'chiphim lastest link', items: newestUrls, text: ''});
    mainElem.appendChild(newestFieldElem);

    // other urls
    var otherFieldElem = createFieldElem({title: 'please bookmark', items: otherUrls});
    mainElem.appendChild(otherFieldElem);

    // forever urls
    var foreverFieldElem = createFieldElem({title: 'chiphim permanent link', items: foreverUrls});
    mainElem.appendChild(foreverFieldElem);
}

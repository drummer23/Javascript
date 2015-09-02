/**
 * Outputs the content of an HTML Element
 * @param element
 *
 * @return string
 */
function getContent(element) {
    var content = element.innerText;

    return content;
}


//Loop todos with jQuery
$('li').each(function (index, element) {
    console.log(index + ': ' + getContent(element))
});



//Loop todos with JS
var children = document.getElementById('todo').children;

for(i=0; i < children.length; i++) {
    console.log(i + ': ' + children[i].innerText);
}
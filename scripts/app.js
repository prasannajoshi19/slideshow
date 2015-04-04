/*
	onload() function is called on body load.
	In this function we call ajaxReuest method.
*/
function onload() {
    ajaxRequest('./json/configCat.json', 'myDiv');
    ajaxRequest('./json/configTiger.json', 'myDiv1');
}
/*
	In ajaxRequest() we create xmlHttpRequest for JSON files.
	On successful response we call initSlideshow() method from slidshow.js.
*/
function ajaxRequest(path, id) {
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                initSlideshow(id, JSON.parse(xmlHttp.responseText));
            } else {
                alert('data not loaded');
            }
        }
    }
    xmlHttp.open('GET', path, true);
    xmlHttp.send();
}

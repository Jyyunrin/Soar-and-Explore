

function ajaxGet(url, callback) {

    const xhr = new XMLHttpRequest();

    let value = null;

    xhr.onload = function() {
        value = this.responseText;
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            value = this.responseText;
            callback(this.responseText);
        } else {
            console.log(this.status);
        }
    }

    xhr.open("GET", url);
    xhr.send();

}


document.addEventListener('DOMContentLoaded', function(e) {
    ajaxGet('/trendinglocations?format=html', function(data){

        document.getElementById('grid4').innerHTML = data;
    });
});


document.querySelector("#trendingCities2").addEventListener('click', function(e) {
    let output = null;
    ajaxGet('/trendinglocations?format=json', function(data) {

        let parsedData = JSON.parse(data);
        output = parsedData;
        let str = '<div id="trendingHeader">' +
        '<h2>Trending Cities</h2>' +
        '</div>';
        for (let i = 0; i < parsedData.length; i++) {
            str += '<ul id="jsCard' + (i+1) + '">' +
            '<li id="img' + (i+1) + '">' + 
            '<img src="' + parsedData[i].image + '"/></li>' +
            '<li>' + parsedData[i].city + '</li>' +
            '<li>' + parsedData[i].price + '</li>' +
            '<li>' + parsedData[i].flightType + '</li>' +
            '<li>' + parsedData[i].stops + '</li>' +
            '</ul>';
        }
        document.getElementById('grid4').innerHTML = str;

    });
});

document.querySelector("#trendingCities1").addEventListener('click', function(e) {
    ajaxGet('/trendinglocations?format=html', function(data){

        document.getElementById('grid4').innerHTML = data;
    });
});
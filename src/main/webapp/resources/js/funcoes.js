/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function createCookie(name, value, days) {

    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }

    document.cookie = name + "=" + value + expires + "; path=/";


}

function readCookie(name) {
    var r = null;
    var allcookies = document.cookie;
    cookiearray = allcookies.split(';');
    for (var i = 0; i < cookiearray.length; i++) {
        var c = cookiearray[i].split("=");
        var name1 = c[0];
        var value1 = c[1];
        if(name.trim()===name1.trim())return value1;
    }
    return r;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

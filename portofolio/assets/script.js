let article1 = document.getElementById('article1');
let article2 = document.getElementById('article2');
let article3 = document.getElementById('article3');
let article4 = document.getElementById('article4');

var menu = document.getElementById('menu');

function button_menu() {
    menu.style.display = 'block';
}

function close_menu () {
    menu.style.display = 'none';
} 
// window.onscroll = function() {warna()};

 let copyText = document.getElementById('scrcpy');

 copy = () => {
     copyText.select();
     document.execCommand('copy');
     alert(copyText.value + ' => copied');
 } 

 krol = () => {
    let a = document.getElementById('kikuk1');
    sap = Math.floor(a.scrollTop);
    
    if(sap > 660) {
        article1.style.display = 'inline';
    }
    
    if (sap > 1270 ) {
        article3.style.display = 'inline';
    }
    if (sap > 2000) {
        article4.style.display = 'inline';
    }

    console.log('topnya : ' + sap);
}


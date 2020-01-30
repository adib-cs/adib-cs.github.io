var menu = document.getElementById('menu');

function button_menu() {
    menu.style.display = 'block';
}

function close_menu () {
    menu.style.display = 'none';
} 
window.onscroll = function() {warna()};

 let copyText = document.getElementById('scrcpy');

 copy = () => {
     copyText.select();
     document.execCommand('copy');
     alert(copyText.value + ' => copied');
 }
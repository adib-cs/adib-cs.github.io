krol = () => {
    let a = document.getElementById('kikuk1');
    sap = Math.floor(a.scrollTop);
    console.log('topnya : ' + sap);
    if(sap > 50) {
        document.getElementById('kikuk1').style.backgroundColor = 'red';
    } else if ( sap < 50) {
        document.getElementById('kikuk1').style.backgroundColor = 'green';
    }
}


let saveCode = {
    'nama' : 'adib',
    'umur' : 10,
    'skill' : 'fullstack'
}
var e1 = "jakarta bogor depok tasikmalaya depok bekasi";
var e2 = e1.split(" ");
    var sleman1 = e1.indexOf("bogor");
    var sleman = e1.lastIndexOf("depok");
    var sleman2 = e1.indexOf("purwodadi");
    var sleman3 = e1.indexOf("depok", 19);
    var sleman4 = e1.lastIndexOf("depok", 15);
    
    


    
    const hasil = document.getElementById('hasil');
    // nggak ngerti
    var myNumber = 201;
    user = 5000;
    user2 = 5000;
    barang = 10000;
    var string = 'purwodadi'; 
    var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var day = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]
    var d = Date();
    txt = "";
    handphone = [{
            merk: "xiamoi",
            launched: 2019
        },
        {
            merk: "huawai",
            launched: 2012
        },
        {
            merk: "oppo",
            launched: 2020
        },
        {
            merk: "vivo",
            launched: 2013
        }
    ];
    number = [1, 32, 21, 45, 37, 15];
    dusun = ['tambak', 'karangjati', 'tengger', 'setren', 'galsari']
    desa = ['sarirejo',
        'bandungsari', 'truwolu', 'kalanglundo', 'sendangsuro', 'kuwu'
    ]
    kota = ["purwodadi", "gorontalo", "depok", "bekasi", "jakarta", "ambon"];
    alamat = {
        dusun: "tambak",
        desa: "sarirejo",
        kecamatan: "ngaringan"
    }

    

    function concat0() {
        kikuk6 = e1.concat(" <- merge -> ", dusun);
        document.getElementById("hasil").innerHTML = kikuk6;
    }

    charAt0 = () => {
        document.getElementById("hasil").innerHTML = e1.charAt(0);
    }
     
    charCodeAt0 = () => {
        document.getElementById("hasil").innerHTML = e1.charCodeAt(0);
    }

    kota[0] = "purwodadii";
 // maksudnya apa
  
    document.getElementById("kikuk10").innerHTML =
        "75 = " + "<br>" +
        " Decimal " + myNumber.toString(10) + "<br>" +
        " Hexadecimal " + myNumber.toString(16) + "<br>" +
        " Octal " + myNumber.toString(8) + "<br>" +
        " Binary " + myNumber.toString(2);
    // nggak ngerti
    var x = 9.656;
    document.getElementById("kikuk11").innerHTML =
        x.toExponential() + "<br>" +
        x.toExponential(2) + "<br>" +
        x.toExponential(4) + "<br>" +
        x.toExponential(6);
    // nggak ngerti
    var x = 9.656;
    document.getElementById("kikuk12").innerHTML =
        x.toFixed(0) + "<br>" +
        x.toFixed(2) + "<br>" +
        x.toFixed(4) + "<br>" +
        x.toFixed(6);
    // nggak ngerti
    var x = 9.656;
    document.getElementById("kikuk13").innerHTML =
        x.toPrecision() + "<br>" +
        x.toPrecision(2) + "<br>" +
        x.toPrecision(4) + "<br>" +
        x.toPrecision(6);

    var a = 3;
    var b = 3;
    var c = a * b;
    var z = "99";
    var y = "99";
    var g = Number.MIN_VALUE;
    var h = Number.MAX_VALUE;
    document.getElementById("pur").innerHTML =  + " " + g + " " + h;

    // document.getElememtById("jogja").innerHTML = "jogja istemewa " + a + b;
    // document.getElememtById("demo4").innerHTML = a + b + " jogja istemewa";

    function mefunction(a, b) {
        return a * b;
    }

    Number0 = () => {
        var kk = Number(z);
        hasil.innerHTML = kk + ' ' + typeof(kk);
    }

    parseInt0 = () => {
        var kk = parseInt(z);
        var kk1 = +z;
        hasil.innerHTML = kk + ' ' + typeof(kk) + ' ' + kk1 + ' ' + typeof(kk1);
    }

    parseFloat0 = () => {
        var kk = parseFloat(z);
        var kk1 = +z;
        hasil.innerHTML = kk + ' ' + typeof(kk) + ' ' + kk1 + ' ' + typeof(kk1);
    }

    slice0 = () => {
        var sleman5 = e1.slice(7, 13);
        hasil.innerHTML= sleman5;
     }

     substring0 = () => {
        var sleman6 = e1.substring(7, 13);
        hasil.innerHTML = sleman6;
     }

     substr0 = () => {
        var sleman7 = e1.substr(7, 6);
        hasil.innerHTML = sleman7;
     }

    // perbedaan di replace kalau i mereplace 1 kata kalau g langsung semua
    replacei0 = () => {
        var str = document.getElementById("demo3").innerHTML;
        var txt = str.replace(/PURWODADI/i, "grobogan");
        document.getElementById("demo3").innerHTML = txt.toUpperCase();
    }
 
    replaceg0 = () => {
        var str = document.getElementById("demo3").innerHTML;
        var txt = str.replace(/GROBOGAN/g, "purwodadi");
        document.getElementById("demo3").innerHTML = txt;
    }

    var d = 40.500500;
    // var e = ;
    // var f = ;
    // log ada banyak ?

    // document.getElementById("kikuk18").innerHTML=
    
    // kenapa if yang kedua tidak mucul
    

  




    myFunction90 = () => {
        let createElement = document.createElement('h1');     //  membuat element h1 baru
        let createText = document.createTextNode('halo bro')  // membuat text baru
        createElement.appendChild(createText);                //  menggabungkan createText ke createElement;

        document.getElementById('hasil').appendChild(createElement); // menggabungkan hasil gabungan createText dan createElement ke id hasil
    }

    // tempatnya.removeChild(elBaru);

    // var elanyar = document.createElement('h2');
    // var textanyar = document.createTextNode('mantapu jiwa')
    // elanyar.appendChild(textanyar);
    // var elchange = document.getElementById('kikuk21');
    // box.replaceChild(elchange, elanyar);

    // sampai sini gak ada yang work 


    // document.getElementsByClassName(kikuk19)[0].style.color = "blue";
    // document.getElementsByClassName(kikuk19)[1].style.color = "blue";
    // document.getElementsByClassName(kikuk19)[2].style.color = "blue";
    // document.getElementsByClassName('kikuk19')[0].style.color = "blue";
    // document.getElementsByClassName('kikuk19')[0].style.color = "blue";
    var a11 = document.getElementsByClassName('kikuk19');
    a11[0].style.color = "blue";
    a11[1].style.color = "blue";
    a11[2].style.color = "blue";



    sort0 = () => {
        var kk = kota.sort().join(" ");
        document.getElementById("hasil").innerHTML = kk;
    }

    length0 = () => {
        var kk = kota.length;
        var ko = e1.length;
        document.getElementById("hasil").innerHTML = kk + ' ' + ko;
    }

    ofa0 = () => {
        kota[0] = Date();
        kota[1] = myFunction6();
        kota[2] = e1;
        document.getElementById("hasil").innerHTML = kota.join(' ');
    }

    lastArray0 = () => {
        document.getElementById("hasil").innerHTML = kota[kota.length - 1];
    }

    //no work

    forArray0 = () => {
        var kk = kota.length;
        text = "<ul>";
        for ($i = 0; $i < kk; $i = $i + 1) {
            text += "<li>" + kota[$i] + "</li>";
        }
        text += "</ul>";
        document.getElementById('hasil').innerHTML = text;
    }

    forEach0 = () => {
        var kk = kota.length;
        var $i = 0;
        text = "<ul>";
        kota.forEach(ulangi);
        text += "</ul>";
        document.getElementById('hasil').innerHTML = text;

        function ulangi(value) {
            text += "<li>" + value + "</ul>";
        }
    }

    asta0 = () => {
        kota.push("surabaya");
    }

    instanceof0 = () => {
        document.getElementById('hasil').innerHTML = kota instanceof Array;
    }

    join0 = () => {
        document.getElementById('hasil').innerHTML = kota.join(' ');
    }

    pop0 = () => {
        document.getElementById('hasil').innerHTML = kota.pop();
    }


    shift0 = () => {
        document.getElementById('hasil').innerHTML = kota.shift();
    }

    unshift0 = () => {
        document.getElementById('hasil').innerHTML = kota.unshift('malang');
    }

    delete0 = () => {
        document.getElementById('hasil').innerHTML = delete kota[0];
    }


    splice0 = () => {
        kota.splice(1, 0, "ngawi", "cepu").join(' ');
    }

    splice1 = () => {
        kota.splice(0, 1).join(' ');
    }

    concat1 = () => {
        document.getElementById('hasil').innerHTML = kota.concat(dusun, desa).join(' ');
    }

    reverse0 = () => {
        document.getElementById('hasil').innerHTML = kota.reverse().join(' ');
    }

    sort1 = () => {
        number.sort(function (a, b) {
            return a - b
        });
        document.getElementById('hasil').innerHTML = number.join();
    }

    sort2 = () => {
        number.sort(function (a, b) {
            return 0.5 - Math.random();
        });
        document.getElementById('hasil').innerHTML = number.join();
    }

    MathMaxApply0 = () => {
        document.getElementById('hasil').innerHTML = Math.max.apply(null, number);
    }

    MathMinApply0 = () => {
        document.getElementById('hasil').innerHTML = Math.min.apply(null, number);
    }

    // kenapa object pertama munculnya NAN
    sort3 = () => {
        handphone.sort(function (a, b) {
            return a.launched - b.launched
        });
        handphoneSpek();
    }

    function handphoneSpek() {
        document.getElementById('hasil').innerHTML =
            handphone[0].type + handphone[0].launched + "<br>" +
            handphone[1].merk + handphone[1].launched + "<br>" +
            handphone[2].merk + handphone[2].launched + "<br>" +
            handphone[3].merk + handphone[3].launched + "<br>"
    }


    arrayforEach0 = () => {
        number.forEach(help);
        document.getElementById('hasil').innerHTML = txt;
    }

    function help(value) {
        txt = txt + value + " ";
    }

    map0 = () => {
        number.map(help1);
        document.getElementById('hasil').innerHTML = txt;
    }

    function help1(value) {
        txt = txt + value * 5 + " ";
    }

    filter0 = () => {
        kk = number.filter(help2)
        document.getElementById("hasil").innerHTML = kk;
    }

    function help2(value) {
        return value > 30;
    }

    reduce0 = () => {
        var kk = number.reduce(help3);
        document.getElementById('hasil').innerHTML = kk;
    }

    function help3(total, value, index, array) {
        return total + value;
    }

    reduceRight0 = () => {
        var kk = number.reduceRight(help4);
        document.getElementById('hasil').innerHTML = kk;
    }

    function help4(total, value, index, array) {
        return total + value;
    }

    every0 = () => {
        var kk = number.every(help5);
        document.getElementById('hasil').innerHTML = "apakah " + number.join(" ") + " lebih besar dari 20 = " + kk;
    }

    function help5(total, value, index, array) {
        return value > 20;
    }

    // kenapa hasilya tidak true harusnya true
    some0 = () => {
        var kk = number.some(help6);
        document.getElementById('hasil').innerHTML = "apakah salah satu " + number.join(" ") + " lebih besar dari 20 = " + kk;
    }

    function help6(total, value, index, array) {
        return value > 20;
    }

    indexOf0 = () => {
        var kk = kota.indexOf("surabaya");
        document.getElementById('hasil').innerHTML = 'surabaya berada diindex ke ' + kk;
    }

    lastIndexOf0 = () => {
        var kk = kota.lastIndexOf("surabaya");
        document.getElementById('hasil').innerHTML = 'surabaya terakhir berada diindex ke ' + kk;
    }

    //kenapa hasilnya undefined bukan 21
    find0 = () => {
        var kk = number.find(help7);
        document.getElementById('hasil').innerHTML = number.join(' ') + " yang lebih besar dan terdekat dari 20 adalah " + kk;
    }

    function help7(total, value, index, array) {
        return value > 20;
    }

    findIndex0 = () => {
        var kk = number.findIndex(help8);
        document.getElementById('hasil').innerHTML = number.join(' ') + "index keberapa value yang lebih besar dan terdekat dari 20 adalah " + kk;
    }

    function help8(total, value, index, array) {
        return value > 20;
    }

    //kenapa var d nya tidak bisa ditaruh diluar
    // commit perbaikan date()
    date0 = () => {
        var d = new Date();
        document.getElementById('hasil').innerHTML = day[d.getDay()] + ", " + d.getDate() + " " + x + " " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds();
    }

    //masih belum berhasil
    date1 = () => {
        var hour = new Date();
        var hourSubuh = new Date();
        // hourSubuh.setHours(4);
        var hourDuhur = new Date();
        // hourDuhur.setHours(12);
        var hourAsar = new Date();
        // hourAsar.setHours(15);
        var hourMagrib = new Date();
        // hourMagrib.setHours(18);
        var hourIsya = new Date();
        // hourIsya.setHours(19);
        // console.log(hourSubuh.setHours(4), Date.now());

        if (Date.now() > hourSubuh.setHours(4)) {
            document.getElementById('hasil').innerHTML = "udah masuk waktu sholat subuh";
        } else if (Date.now() > hourDuhur.setHours(12)) {
            document.getElementById('hasil').innerHTML = "udah masuk waktu sholat duhur";
        } else if (Date.now() > hourAsar.setHours(15)) {
            document.getElementById('hasil').innerHTML = "udah masuk waktu sholat asar";
        } else if (Date.now() > hourMagrib.setHours(18)) {
            document.getElementById('hasil').innerHTML = "udah masuk waktu sholat magrib";
        } else if (Date.now() > hourIsya.setHours(19)) {
            document.getElementById('hasil').innerHTML = "udah masuk waktu sholat isya";
        }
        
        
        //  else {
        //     document.getElementById('hasil').innerHTML = "udah masuk waktu sholat tahajud";
        // }


    }

    Mathround0 = () => {
        document.getElementById('hasil').innerHTML = "angka terdekat dari 8 sampai 10 adalah " + Math.round(8.10);
    }


    Mathpow0 = () => {
        document.getElementById('hasil').innerHTML = "15 x 15 = " + Math.pow(15, 2);
    }

    Mathsqrt0 = () => {
        document.getElementById('hasil').innerHTML = "akar kuadrat dari 64 adalah " + Math.sqrt(64);
    }

    Mathabs0 = () => {
        document.getElementById('hasil').innerHTML = "dari negatif  -8.898  ke positif  " + Math.abs(-8.898);
    }

    Mathceil0 = () => {
        document.getElementById('hasil').innerHTML = "membulatkan keangka terdekat keatas contoh 8.3 = " + Math.ceil(8.3);
    }

    Mathfloor0 = () => {
        document.getElementById('hasil').innerHTML = "membulatkan keangka terdekat kebawah contoh 8.3 = " + Math.floor(8.3);
    }

    Mathsin0 = () => {
        document.getElementById("hasil").innerHTML =
            "belum ngerti kenapa hasilnya " + Math.sin(90 * Math.PI / 180);
    }

    Mathcos0 = () => {
        document.getElementById("hasil").innerHTML =
            "belum ngerti kenapa hasilnya " + Math.cos(0 * Math.PI / 180);
    }

    Mathrandom0 = () => {
        document.getElementById('hasil').innerHTML = "mengacak nomor dari 0 sampai 1000 = " + Math.floor(Math.random() * 1001);
    }

    Mathrandom1 = (min, max) => {
        document.getElementById('hasil').innerHTML = "mengacak nomor dari 0 sampai 1000 = " + Math.floor(Math.random() * (max - min));
    }

    Boolean0 = () => {
        document.getElementById('hasil').innerHTML = "apakah 20 lebih kecil dari 25 " + Boolean(20 < 25) + ", apakah 23 lebih besar dari 17 " + Boolean(23 > 17) + ", apakah 9 sama dengan angka 9 " + Boolean(9 == 9) +
            "<br><br> <b>Note : semua value akan keluar false seperti angka 0, -0, string kosong, null, Nan, variabel yang valuenya false semua tadi akan mengeluarkan false.<br>kalau pakai = = = harus sama antara value dan type</b>";
    }

    comparison0 = () => {
        var a = 8;
        var c = '8';
        document.getElementById('hasil').innerHTML =
            ' angka 8 == string 8 ' + (a == c) + ' ] valuenya sama / tidak' +
            '<br>angka 8 === string 8 ' + (a === c) + ' ] value dan type sama / tidak' +
            '<br>angka 8 != string 8 ' + (a != c) + ' ] value tidak sama / sama' +
            '<br>angka 8 !== string 8 ' + (a !== c) + ' ] value dan type tidak sama / sama' +
            '<br>angka 8 < string 8 ' + (a < c) +
            '<br>angka 8 > string 8 ' + (a > c) +
            '<br>angka 8 <= string 8 ' + (a <= c) +
            '<br>angka 8 >= string 8 ' + (a >= c);
    }

    ifelse0 = () => {
        var $i = 1;
        if ($i < 10) {
            document.getElementById('hasil').innerHTML='hallo selamat pagi';
         } else if ($i < 19) {
             document.getElementById('hasil').innerHTML='halo selamat sore';
         } else {
             document.getElementById('hasil').innerHTML='halo selamat malam';
         }
    }

    ifelse1 = () => {

        if (user <= barang) {
            if (user + user2 >= barang) {
                document.getElementById("hasil").innerHTML = "uang anda tidak cukup jadi ditambah uang teman kamu untuk membeli barang";
            } else {
                hasil.innerHTML= "uang anda sendiri sudah cukup";
            }
        } else if (user2 >= barang) {
            document.getElementById("hasil").innerHTML = "uang anda tidak cukup jadi pembayaran akan diatambah dengan saldo teman kamu";
        } else {
            document.getElementById("hasil").innerHTML = "uang anda dan teman anda tidak cukup silahkan isi saldo kalian";
        }

    }

    switch0 = () => {
     var day;
     switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
      }
     document.getElementById("hasil").innerHTML = "Today is " + day;
    }

    for0 = () => {
        var text = '';
        for (i = 0; i < 5; i++) {
            text += 'ulangi ' + i + 'x ';
        }
        document.getElementById('hasil').innerHTML=text;
    }

    forin0 = () => {
        var text = '';
        for ($i in alamat) {
            text += alamat[$i] + " ";
        }
        document.getElementById('hasil').innerHTML=text;
    }

    forofarray0 = () => {
        var text;
        for (text of dusun) {
            document.write(text + ' ');
        }
    }

    forofstring0 = () => {
        var text;
        for (text of string) {
            document.write(text + '<br>');
        }
    }

    while0 = () => {
        var text = '';
        var i = 0;
        while (i < 10) {
            text += 'looping ' + i + ' ';
            i++;
        }
        document.getElementById('hasil').innerHTML= text;
    }

    dowhile0 = () => {
        var text = '';
        var i = 0;
        do {
            text += 'loop ' + i + ' ';
            i++;
        } while (i < 10);
        document.getElementById('hasil').innerHTML= text;
    }

    forarray0 = () => {
        var text = '';
        var i = 0;
        for(;dusun[i];) {
            text += 'dusun ' + dusun[i] + '. ';
            i++;
        }
        document.getElementById('hasil').innerHTML= text;
    }

    whilearray = () => {
        var text = '';
        var i = 0;
        while (dusun[i]) {
            text += ' dusun ' + dusun[i] + ' ';
            i++; 
        }
        document.getElementById('hasil').innerHTML=text;
    }

    break0 = () => {
        var text = '';
        var i = 0;
        while (dusun[i]) {
            text += ' dusun ' + dusun[i] + ' ';
            i++;
            if (i >= 3) {
                break;
            } else {
                text += document.getElementById('hasil').innerHTML= ',' ;
            }
        }
        document.getElementById('hasil').innerHTML=text;
    }

   
    continue0 = () => {
        var text = '';
        var i = 0;
        while (dusun[i]) {
            text += ' dusun ' + dusun[i] + ' ';
            i++;
            if (i >= 3) {
                continue;
            } else {
                text += document.getElementById('hasil').innerHTML= ',' ;
            }
        }
        document.getElementById('hasil').innerHTML=text;
    }

   typeof0 = () => {
       document.getElementById('hasil').innerHTML= 
       'type data dari array dusun adalah '+typeof(e1) + '<br>' +
       'type data dari number adalah '+typeof(number) + '<br>' +
       'type data Nan adalah '+typeof(Nan) + '<br>' +
       'type data dari true adalah '+typeof(true) + '<br>' +
       'type data dari var. user adalah '+typeof(user) + '<br>' +
       'type data dari array handphone adalah '+typeof(handphone) + '<br>' +
       'type data dari var. d adalah '+typeof(d) + '<br>' +
       'type data dari myFunction65() adalah '+typeof(myFunction65) + '<br>' +
       'type data dari var. tidak ada adalah '+typeof(klakson) + '<br>' +
       'type data dari null adalah '+typeof(null);
   }

   // kenapa ada yang gak bisa di concstructor padahal ditypeof bisa
   function constructor0() {
       document.getElementById('hasil').innerHTML=
       '1. dusun.constructor : ' + dusun.constructor + '<br>' +
       '2. number.constructor : ' + number.constructor + '<br>' +
       '3. NaN.constructor : ' + NaN.constructor + '<br>' +
       '4. true.constructor : ' + true.constructor + '<br>' +
       '5. user.constructor : ' + user.constructor + '<br>' +
       '6. handphone.constructor : ' + handphone.constructor + '<br>' +
       '7. d.constructor : ' + d.constructor + '<br>' +
       '8. myFunction65.constructor : ' + myFunction65.constructor + '<br>';
   }



// kenapa hasilnya object bukan string
  function toString0() {
      let b = 989;
      let a = dusun.toString();
      document.getElementById('hasil').innerHTML= dusun +' typeof ' + typeof(dusun) +
     '<br>' + a + ' typeof ' + typeof(a);
      
  }

  // skip bitwise

  //kalau diconsole work tpi kalau di pagenya gak work
//   try {
//     adddlert("Welcome guest!");
//   }
//   catch(err) {
//     document.getElementById("hasil").innerHTML = err.message;
//   }

//skip errors
// var hello;
// hello = () => {
//     document.getElementById('hasil').innerHTML= "hello words";
// }

//skip arrows function

// nggak work
// function myFunction70() {
//     class Car {
//         constructor(brand) {
//           this.carname = brand;
//         }
//       }
      
//       mycar = new Car("Ford");
      
//       document.getElementById("hasil").innerHTML = mycar.carname;
//     }


////////////////////////   ARROW FUNCTION   \\\\\\\\\\\\\\\\\\\\\\\\\\\
// mana yang paling sering dipakai

const myFunction71 = function() {
document.getElementById('hasil').innerHTML='hallo purwodadi';
};

const myFunction72 = () => {
    document.getElementById('hasil').innerHTML='hallo sarirejo';
};

const myFunction73 = () => document.getElementById('hasil').innerHTML= 'hello tambak';

const myFunction74 = ss => document.getElementById('hasil').innerHTML= 'hello galsari' + ' ' + ss * ss;

const help9 = number.map(function(value) {
  return value * 5 + '';
});

const myFunction75 = () => {
    document.getElementById('hasil').innerHTML= help9.join(' ');
}

myFunction76 = () => {
    document.getElementById('hasil').innerHTML= 'halo bantul';
}

/////////////////////////  SKIP CLASS  \\\\\\\\\\\\\\\\\\\\\\\\\\\
split0 = () => {
    var e2 = e1.split(" ");
    document.getElementById('hasil').innerHTML= e2 + '<br>' + e1;
}

myFunction87 = () => {
    hasil.innerHTML= kota.valueOf();
}

myFunction88 = () => {
    var kelas = document.getElementsByClassName("kikuk19");
    kelas[0].innerHTML = "mantappu jiwa 1";
    kelas[1].innerHTML = "mantappu jiwa 2";
    kelas[2].innerHTML = "mantappu jiwa 3";
}

myFunction89 = () => {
    var teknem = document.getElementsByTagName("li");
    teknem[0].innerHTML = "purwodadi";
    teknem[1].innerHTML = "jogjakarta";
    teknem[2].innerHTML = "blora";
}
 // jika discroll akan menjalankan sesuatu yang sudah ditentukan
window.onscroll = function() {colorBody()};
colorBody = () => {
    let body = document.documentElement.scrollTop;
    console.log(body);
    if(body > 460) {
        document.body.style.backgroundColor = 'rgba(255, 255, 220, 0.7)';
    }

    if(body < 300) {
        document.body.style.backgroundColor = 'rgb(0, 0, 0)';
    }
    
}



searchCode = () => {
    
    let input = document.getElementById('searchCode');
    let filter = input.value.toUpperCase();
    let tempatFucntionnya = document.getElementById('tempatFunction');
    let tombol = tempatFucntionnya.getElementsByTagName('button');

    

    let i = 0;
    while(i < tombol.length) {
        let textValue = tombol[i].textContent || tombol[i].innerText;
        
        if(textValue.toUpperCase().indexOf(filter) > -1) {
        tombol[i].style.display = ''; 
        } else {
            tombol[i].style.display = 'none';
        }
        i++;
    } 
}






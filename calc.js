// Ini function buat ngitung persegi panjangnya ya ges ya
function hitungPersegiPanjang() {
    let panjang = parseFloat(document.getElementById("p").value);
    let lebar = parseFloat(document.getElementById("l").value);
    
    if (isNaN(panjang) || isNaN(lebar)) {
        document.getElementById("LuasPersegiPanjang").innerText = " Angkanya tidak ada coy";
        return;
    }

    let luas = panjang * lebar;
    document.getElementById("LuasPersegiPanjang").innerText = " Luas nya itu: " + luas;
}

// Ini buat ngitung persegi dia
function hitungPersegi() {
    let sisi = parseFloat(document.getElementById("S").value);

    if (isNaN(sisi)) {
        document.getElementById("LuasPersegi").innerText = " Dimana angkanya";
        return;
    }

    let luas = sisi * sisi;
    document.getElementById("LuasPersegi").innerText = " Nih hasil Luas: " + luas;
}

// Fungsi untuk menghitung luas segitiga
function hitungSegitiga() {
    let alas = parseFloat(document.getElementById("alas").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(alas) || isNaN(tinggi)) {
        document.getElementById("LuasTriangle").innerText = " Yang bener aja";
        return;
    }

    let luas = (alas * tinggi) / 2;
    document.getElementById("LuasTriangle").innerText = " Luasnyaaa: " + luas;
}

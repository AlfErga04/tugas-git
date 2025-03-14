// Ngitung luas persegi panjang dengan (panjang = 10, lebar = 5)
function hitungLuasPersegiPanjang() {
    let panjang = 10;
    let lebar = 5;
    let luas = panjang * lebar;

    document.getElementById("hasilPersegiPanjang").innerText = `Luas persegi panjangnya = ${luas}`;
}

// Menghitung luas persegi (sisi = 7)
function hitungLuasPersegi() {
    let sisi = 7;
    let luas = sisi * sisi;

    document.getElementById("hasilPersegi").innerText = `Luas persegi nih: ${luas}`;
}

// Menghitung luas segitiga (alas = 8, tinggi = 6)
function hitungLuasSegitiga() {
    let alas = 8;
    let tinggi = 6;
    let luas = (alas * tinggi) / 2;

    document.getElementById("hasilSegitiga").innerText = `Luas segitigasnya segini: ${luas}`;
}

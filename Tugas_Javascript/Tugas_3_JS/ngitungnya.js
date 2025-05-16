let produkToko = [
    { id: "001", nama: "Laptop", harga: 7000000, stok: 5, tanggal: "10/12/2024" },
    { id: "002", nama: "Mouse", harga: 200000, stok: 10, tanggal: "11/12/2024" },
    { id: "003", nama: "Keyboard", harga: 350000, stok: 7, tanggal: "12/12/2024" }
];

function getTanggalSekarang() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

function generateID() {
    return String(produkToko.length + 1).padStart(3, "0");
}

function tampilkanProduk() {
    const tbody = document.getElementById("produk-body");
    tbody.innerHTML = "";

    produkToko.forEach((produk) => {
        let row = `<tr>
            <td>${produk.id}</td>
            <td>${produk.nama}</td>
            <td>Rp ${produk.harga.toLocaleString('id-ID')}</td>
            <td>${produk.stok}</td>
            <td>${produk.tanggal}</td>
            <td><button class="btn-hapus" onclick="hapusProduk('${produk.id}')">Hapus</button></td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function tambahProduk(nama, harga, stok) {
    let idBaru = generateID();
    let tanggal = getTanggalSekarang();
    produkToko.push({ id: idBaru, nama, harga: Number(harga), stok: Number(stok), tanggal });
    tampilkanProduk();
}

function hapusProduk(id) {
    produkToko = produkToko.filter(produk => produk.id !== id);
    tampilkanProduk();
}

document.getElementById("btn-tambah").addEventListener("click", function () {
    document.getElementById("popup-form").style.display = "flex";
});

document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup-form").style.display = "none";
});

document.getElementById("form-produk").addEventListener("submit", function (event) {
    event.preventDefault();
    let nama = document.getElementById("nama").value;
    let harga = document.getElementById("harga").value;
    let stok = document.getElementById("stok").value;

    if (nama && harga > 0 && stok > 0) {
        tambahProduk(nama, harga, stok);
        document.getElementById("form-produk").reset();
        document.getElementById("popup-form").style.display = "none";
    } else {
        alert("Masukkan data yang valid!");
    }
});

tampilkanProduk();

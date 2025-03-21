const readline = require("readline");

class Transportasi {
    constructor(tipe, brand, nomorPolisi) {
        this.tipe = tipe; 
        this.brand = brand;
        this.nomorPolisi = nomorPolisi;
    }

    deskripsiKendaraan() {
        return `${this.tipe} - ${this.brand} (${this.nomorPolisi})`;
    }
}

class Penyewa {
    constructor(namaLengkap, kontak, kendaraan) {
        this.namaLengkap = namaLengkap;
        this.kontak = kontak;
        this.kendaraan = kendaraan;
    }

    detailPenyewa() {
        return `${this.namaLengkap} - ${this.kontak} - ${this.kendaraan.deskripsiKendaraan()}`;
    }
}

// Main sys
class SistemTransportasi {
    constructor() {
        this.daftarPenyewa = [];
    }

    tambahPenyewa(namaLengkap, kontak, kendaraan) {
        const penyewaBaru = new Penyewa(namaLengkap, kontak, kendaraan);
        this.daftarPenyewa.push(penyewaBaru);
        console.log(`${namaLengkap} berhasil menyewa ${kendaraan.deskripsiKendaraan()}\n`);
    }
    
    tampilkanPenyewa() {
        console.log("\nDaftar Penyewa Kendaraan:");
        if (this.daftarPenyewa.length === 0) {
            console.log("⚠ Belum ada penyewa yang terdaftar.");
        } else {
            this.daftarPenyewa.forEach((penyewa, index) => {
                console.log(`${index + 1}. ${penyewa.detailPenyewa()}`);
            });
        }
    }
}

const sistemRental = new SistemTransportasi();

const mobilSewa = new Transportasi("Mobil", "Suzuki Ertiga", "B 9876 DEF");
const motorSewa = new Transportasi("Motor", "Yamaha NMAX", "D 4321 XYZ");

// Make class nya buat menambahkan penyewa
sistemRental.tambahPenyewa("Rudi", "081298765432", mobilSewa);
sistemRental.tambahPenyewa("Sari", "085677889900", motorSewa);


sistemRental.tampilkanPenyewa();

// Ini buat baca input nya
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inputPenyewa() {
    rl.question("\nMasukkan Nama Penyewa: ", (nama) => {
        rl.question("Masukkan Nomor Telepon: ", (kontak) => {
            rl.question("Masukkan Jenis Kendaraan (Mobil/Motor/Bus): ", (tipe) => {
                rl.question("Masukkan Merek Kendaraan: ", (brand) => {
                    rl.question("Masukkan Nomor Polisi: ", (nomorPolisi) => {
                        const kendaraanBaru = new Transportasi(tipe, brand, nomorPolisi);
                        sistemRental.tambahPenyewa(nama, kontak, kendaraanBaru);
                        sistemRental.tampilkanPenyewa();
                        rl.close();
                    });
                });
            });
        });
    });
}

//input ajah sekali buat tes codenya
inputPenyewa();

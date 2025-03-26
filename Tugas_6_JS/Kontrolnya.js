document.addEventListener("DOMContentLoaded", () => {
    lihatData();

    document.getElementById("add-btn").addEventListener("click", () => {
        const nama = document.getElementById("nama").value;
        const umur = document.getElementById("umur").value;
        const alamat = document.getElementById("alamat").value;
        const email = document.getElementById("email").value;

        if (nama && umur && alamat && email) {
            tambahData(nama, parseInt(umur), alamat, email);
            document.getElementById("form-data").reset();
        } else {
            alert("Silakan isi semua bidang!");
        }
    });
});

function lihatData() {
    const dataContainer = document.getElementById("data-list");
    dataContainer.innerHTML = data.map((item, index) => 
        `<li>${item.nama} - ${item.umur} tahun - ${item.alamat} - ${item.email} 
            <button onclick="hapusData(${index})">Hapus</button>
        </li>`
    ).join("");
}

function tambahData(nama, umur, alamat, email) {
    data.push({ nama, umur, alamat, email });
    lihatData();
}

function hapusData(index) {
    data.splice(index, 1);
    lihatData();
}

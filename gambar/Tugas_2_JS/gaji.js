const pegawai = {
    nama: "Dodi Prayodi",
    umur: 25,
    jabatan: "Manajer",
    status: "Menikah"
};

let gajiPokok = pegawai.jabatan === "Manajer" ? 15000000 :
                pegawai.jabatan === "Asisten Manajer" ? 10000000 :
                pegawai.jabatan === "Staff" ? 5000000 : 0;

let tunjanganJabatan = 0.15 * gajiPokok;
let bpjs = 0.10 * gajiPokok;
let tunjanganKeluarga = pegawai.status === "Menikah" ? 0.20 * gajiPokok : 0;
let totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

document.getElementById("pegawai-data").innerHTML = `
    <tr>
        <td>${pegawai.nama}</td>
        <td>${pegawai.umur}</td>
        <td>${pegawai.jabatan}</td>
        <td>${pegawai.status}</td>
        <td>${gajiPokok.toLocaleString('id-ID')}</td>
        <td>${tunjanganJabatan.toLocaleString('id-ID')}</td>
        <td>${bpjs.toLocaleString('id-ID')}</td>
        <td>${tunjanganKeluarga.toLocaleString('id-ID')}</td>
        <td>${totalGaji.toLocaleString('id-ID')}</td>
    </tr>
`;
document.getElementById("total-gaji").textContent = totalGaji.toLocaleString('id-ID');

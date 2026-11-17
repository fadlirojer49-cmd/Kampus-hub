import dataMahasiswa from "./data.js";


// ========================================
// PENCARIAN MAHASISWA
// ========================================

const searchMahasiswa =
    document.getElementById("searchMahasiswa");

const hasilPencarian =
    document.getElementById("hasil-pencarian");

const detailMahasiswa =
    document.getElementById("detail-mahasiswa");


// Tampilkan semua mahasiswa saat halaman dibuka
tampilkanMahasiswa(dataMahasiswa);


// Pencarian langsung ketika mengetik
searchMahasiswa.addEventListener("input", function () {

    const kataKunci =
        searchMahasiswa.value.toLowerCase().trim();


    const hasil =
        dataMahasiswa.filter(function (mahasiswa) {

            return mahasiswa.nama
                .toLowerCase()
                .includes(kataKunci);

        });


    tampilkanMahasiswa(hasil);
});


// ========================================
// MENAMPILKAN DAFTAR MAHASISWA
// ========================================

function tampilkanMahasiswa(data) {

    hasilPencarian.innerHTML = "";

    if (data.length === 0) {

        hasilPencarian.innerHTML =
            "<p>Nama mahasiswa tidak ditemukan.</p>";

        return;
    }


    data.forEach(function (mahasiswa) {

        const item =
            document.createElement("div");

        item.className = "item-mahasiswa";

        item.textContent = mahasiswa.nama;


        item.addEventListener("click", function () {

            tampilkanDetail(mahasiswa);

        });


        hasilPencarian.appendChild(item);

    });
}


// ========================================
// MENAMPILKAN DETAIL MAHASISWA
// ========================================

function tampilkanDetail(mahasiswa) {

    detailMahasiswa.innerHTML = `

        <h3>Data Mahasiswa</h3>

        <p>
            <strong>Nama:</strong>
            ${mahasiswa.nama}
        </p>

        <p>
            <strong>NIM:</strong>
            ${mahasiswa.nim}
        </p>

        <p>
            <strong>Jurusan:</strong>
            ${mahasiswa.jurusan}
        </p>

        <p>
            <strong>Kelas:</strong>
            ${mahasiswa.kelas}
        </p>

        <p>
            <strong>Nilai:</strong>
            ${mahasiswa.nilai}
        </p>

    `;
}
// ==========================================
// DATA 30 MAHASISWA KAMPUSHUB
// ==========================================

const dataMahasiswa = [

    {
        nim: "2026001",
        nama: "Andi Pratama",
        jurusan: "Teknik Informatika",
        kelas: "TI-1A"
    },

    {
        nim: "2026002",
        nama: "Budi Santoso",
        jurusan: "Teknik Informatika",
        kelas: "TI-1A"
    },

    {
        nim: "2026003",
        nama: "Citra Lestari",
        jurusan: "Teknik Informatika",
        kelas: "TI-1A"
    },

    {
        nim: "2026004",
        nama: "Dimas Saputra",
        jurusan: "Teknik Informatika",
        kelas: "TI-1A"
    },

    {
        nim: "2026005",
        nama: "Eko Pratama",
        jurusan: "Teknik Informatika",
        kelas: "TI-1A"
    },

    {
        nim: "2026006",
        nama: "Fajar Ramadhan",
        jurusan: "Teknik Informatika",
        kelas: "TI-1A"
    },

    {
        nim: "2026007",
        nama: "Gilang Maulana",
        jurusan: "Teknik Informatika",
        kelas: "TI-1A"
    },

    {
        nim: "2026008",
        nama: "Hendra Wijaya",
        jurusan: "Teknik Informatika",
        kelas: "TI-1A"
    },

    {
        nim: "2026009",
        nama: "Indah Permata",
        jurusan: "Teknik Informatika",
        kelas: "TI-1A"
    },

    {
        nim: "2026010",
        nama: "Joko Susanto",
        jurusan: "Teknik Informatika",
        kelas: "TI-1A"
    },

    {
        nim: "2026011",
        nama: "Kiki Amelia",
        jurusan: "Teknik Informatika",
        kelas: "TI-1B"
    },

    {
        nim: "2026012",
        nama: "Lukman Hakim",
        jurusan: "Teknik Informatika",
        kelas: "TI-1B"
    },

    {
        nim: "2026013",
        nama: "Maya Sari",
        jurusan: "Teknik Informatika",
        kelas: "TI-1B"
    },

    {
        nim: "2026014",
        nama: "Nanda Putra",
        jurusan: "Teknik Informatika",
        kelas: "TI-1B"
    },

    {
        nim: "2026015",
        nama: "Oki Setiawan",
        jurusan: "Teknik Informatika",
        kelas: "TI-1B"
    },

    {
        nim: "2026016",
        nama: "Putri Ayu",
        jurusan: "Teknik Informatika",
        kelas: "TI-1B"
    },

    {
        nim: "2026017",
        nama: "Rian Kurniawan",
        jurusan: "Teknik Informatika",
        kelas: "TI-1B"
    },

    {
        nim: "2026018",
        nama: "Sinta Dewi",
        jurusan: "Teknik Informatika",
        kelas: "TI-1B"
    },

    {
        nim: "2026019",
        nama: "Taufik Hidayat",
        jurusan: "Teknik Informatika",
        kelas: "TI-1B"
    },

    {
        nim: "2026020",
        nama: "Umar Faruk",
        jurusan: "Teknik Informatika",
        kelas: "TI-1B"
    },

    {
        nim: "2026021",
        nama: "Vina Maharani",
        jurusan: "Teknik Informatika",
        kelas: "TI-1C"
    },

    {
        nim: "2026022",
        nama: "Wahyu Setiawan",
        jurusan: "Teknik Informatika",
        kelas: "TI-1C"
    },

    {
        nim: "2026023",
        nama: "Yogi Pratama",
        jurusan: "Teknik Informatika",
        kelas: "TI-1C"
    },

    {
        nim: "2026024",
        nama: "Zahra Aulia",
        jurusan: "Teknik Informatika",
        kelas: "TI-1C"
    },

    {
        nim: "2026025",
        nama: "Agus Salim",
        jurusan: "Teknik Informatika",
        kelas: "TI-1C"
    },

    {
        nim: "2026026",
        nama: "Bella Novita",
        jurusan: "Teknik Informatika",
        kelas: "TI-1C"
    },

    {
        nim: "2026027",
        nama: "Doni Firmansyah",
        jurusan: "Teknik Informatika",
        kelas: "TI-1C"
    },

    {
        nim: "2026028",
        nama: "Fitri Handayani",
        jurusan: "Teknik Informatika",
        kelas: "TI-1C"
    },

    {
        nim: "2026029",
        nama: "Rizky Maulana",
        jurusan: "Teknik Informatika",
        kelas: "TI-1C"
    },

    // ==========================================
    // MAHASISWA KAMU
    // ==========================================

    {
        nim: "20252210177",
        nama: "M Rojer Fadli",
        jurusan: "Teknik Informatika",
        kelas: "TI-1C"
    }

];


// ==========================================
// MENGAMBIL ELEMEN DARI HTML
// ==========================================

const searchInput = document.getElementById("search");
const hasilPencarian = document.getElementById("hasil-pencarian");
const btnCari = document.getElementById("btnCari");


// ==========================================
// FUNGSI PENCARIAN
// ==========================================

function cariMahasiswa() {

    // Mengambil tulisan dari kotak pencarian
    const kataKunci = searchInput.value
        .toLowerCase()
        .trim();


    // Kalau kotak pencarian kosong
    if (kataKunci === "") {

        hasilPencarian.innerHTML = `
            <div class="tidak-ditemukan">
                Silakan masukkan NIM atau nama mahasiswa.
            </div>
        `;

        return;
    }


    // Mencari berdasarkan NIM atau Nama
    const hasil = dataMahasiswa.filter(function (mahasiswa) {

        const nim = mahasiswa.nim.toLowerCase();
        const nama = mahasiswa.nama.toLowerCase();

        return nim.includes(kataKunci) ||
            nama.includes(kataKunci);

    });


    // Kalau tidak ditemukan
    if (hasil.length === 0) {

        hasilPencarian.innerHTML = `
            <div class="tidak-ditemukan">
                Mahasiswa dengan NIM atau nama
                "<strong>${searchInput.value}</strong>"
                tidak ditemukan.
            </div>
        `;

        return;
    }


    // ==========================================
    // MENAMPILKAN HASIL
    // ==========================================

    hasilPencarian.innerHTML = hasil.map(function (mahasiswa) {

        return `
            <div class="mahasiswa-card">

                <h3>${mahasiswa.nama}</h3>

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

            </div>
        `;

    }).join("");

}


// ==========================================
// TOMBOL CARI
// ==========================================

btnCari.addEventListener("click", cariMahasiswa);


// ==========================================
// PENCARIAN OTOMATIS SAAT MENGETIK
// ==========================================

searchInput.addEventListener("input", cariMahasiswa);
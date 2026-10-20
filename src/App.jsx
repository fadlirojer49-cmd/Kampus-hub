
import { useState } from "react";
import "./App.css";

function App() {
  const [halaman, setHalaman] = useState("beranda");

  return (
    < div className="app" >
      {/* HEADER */}
      < header className="header" >
        <h1>KampusHub</h1>
        <p>TOLONG DI TERIMA DAN TERIMA KASIH</p>
      </header >

      {/* NAVIGASI */}
      < nav className="navbar" >
        <button onClick={() => setHalaman("beranda")}>
          Beranda
        </button>

        <button onClick={() => setHalaman("tentang")}>
          About me
        </button>
      </nav >

      {/* HALAMAN 1 */}
      {
        halaman === "beranda" && (
          <main className="konten">
            <h2>Halaman Beranda</h2>
            <p>
              Selamat datang di website KampusHub
              Universitas Wahidiyah.
            </p>
            <p>
              Website ini menyediakan informasi akademik
              dan kegiatan mahasiswa.
            </p>

            <button
              className="tombol"
              onClick={() => setHalaman("tentang")}
            >
              Look about me
            </button>
          </main>
        )
      }

      {/* HALAMAN 2 */}
      {
        halaman === "tentang" && (
          <main className="konten">
            <h2>Tentang Kami</h2>
            <p>
              KampusHub adalah website informasi kampus
              untuk membantu mahasiswa mendapatkan informasi.
            </p>

            <h3>Data Mahasiswa</h3>
            <p>Nama: M Rojer Fadli ganteng</p>
            <p>Program Studi: Teknik Informatika</p>
            <p>NIM: 20252210177</p>

            <button
              className="tombol"
              onClick={() => setHalaman("beranda")}
            >
              BACK TO BBERANDA
            </button>
          </main>
        )
      }

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 KampusHub - Universitas Wahidiyah</p>
      </footer>
    </div >
  );
}

export default App;


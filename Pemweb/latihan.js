// Mendapatkan elemen yang dibutuhkan
const namaSiswaEl = document.getElementById("nama-siswa");
const tabelNilaiEl = document.getElementById("tabel-nilai");
const tambahDataEl = document.getElementById("tambah-data");

// Mendapatkan nama siswa dari local storage
let namaSiswa = localStorage.getItem("namaSiswa");

// Menampilkan nama siswa
if (namaSiswa) {
    namaSiswaEl.textContent = `Daftar Nilai ${namaSiswa}`;
} else {
    // Meminta nama siswa
    namaSiswa = prompt("Masukkan nama siswa:");
    localStorage.setItem("namaSiswa", namaSiswa);
    namaSiswaEl.textContent = `Daftar Nilai ${namaSiswa}`;
}

// Menambahkan event listener untuk tombol tambah data
tambahDataEl.addEventListener("click", () => {

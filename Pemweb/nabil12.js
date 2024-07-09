 // Mendapatkan elemen yang dibutuhkan
 const namaSiswaEl = document.getElementById("nama-siswa");
 const tabelNilaiEl = document.getElementById("tabel-nilai");
 const tbodyNilaiEl = document.getElementById("tbody-nilai");
 const tambahDataEl = document.getElementById("tambah-data");

 // Mendapatkan nama siswa dari local storage
 let namaSiswa = localStorage.getItem("namaSiswa");

 // Menampilkan nama siswa
 if (namaSiswa) {
     namaSiswaEl.textContent = namaSiswa;
 } else {
     // Meminta nama siswa
     namaSiswa = prompt("Masukkan nama siswa:");
     localStorage.setItem("namaSiswa", namaSiswa);
     namaSiswaEl.textContent = namaSiswa;
 }

 // Fungsi untuk menambahkan data ke dalam tabel
 function tambahData() {
     // Mengambil input dari pengguna
     const mataPelajaran = prompt("Masukkan mata pelajaran:");
     const nilai = parseInt(prompt("Masukkan nilai:"));

     // Menentukan indeks nilai
     let indeks;
     if (nilai >= 90) {
         indeks = "A";
     } else if (nilai >= 80) {
         indeks = "B";
     } else if (nilai >= 70) {
         indeks = "C";
     } else if (nilai >= 60) {
         indeks = "D";
     } else {
         indeks = "E";
     }

     // Membuat baris baru
     const baris = document.createElement("tr");
     const nomorEl = document.createElement("td");
     const mataPelajaranEl = document.createElement("td");
     const nilaiEl = document.createElement("td");
     const indeksEl = document.createElement("td");
     const aksiEl = document.createElement("td");

     // Menambahkan konten ke elemen
     nomorEl.textContent = tbodyNilaiEl.childElementCount + 1;
     mataPelajaranEl.textContent = mataPelajaran;
     nilaiEl.textContent = nilai;
     indeksEl.textContent = indeks;

     // Membuat tombol edit dan delete
     const editEl = document.createElement("button");
     const deleteEl = document.createElement("button");
     editEl.textContent = "Edit";
     deleteEl.textContent = "Delete";
     editEl.addEventListener("click", () => {
         // Mengambil input dari pengguna
         const mataPelajaranBaru = prompt("Masukkan mata pelajaran baru:");
         const nilaiBaru = parseInt(prompt("Masukkan nilai baru:"));

         // Menentukan indeks nilai baru
         let indeksBaru;
         if (nilaiBaru >= 90) {
             indeksBaru = "A";
         } else if (nilaiBaru >= 80) {
             indeksBaru = "B";
         } else if (nilaiBaru >= 70) {
             indeksBaru = "C";
         } else if (nilaiBaru >= 60) {
             indeksBaru = "D";
         } else {
             indeksBaru = "E";
         }

         // Mengubah nilai elemen
         mataPelajaranEl.textContent = mataPelajaranBaru;
         nilaiEl.textContent = nilaiBaru;
         indeksEl.textContent = indeksBaru;
     });
     deleteEl.addEventListener("click", () => {
         // Menghapus baris
         tbodyNilaiEl.removeChild(baris);
     });

     // Menambahkan elemen ke baris
     aksiEl.appendChild(editEl);
     aksiEl.appendChild(deleteEl);
     baris.appendChild(nomorEl);
     baris.appendChild(mataPelajaranEl);
     baris.appendChild(nilaiEl);
     baris.appendChild(indeksEl);
     baris.appendChild(aksiEl);

     // Menambahkan baris ke tabel
     tbodyNilaiEl.appendChild(baris);
 }

 // Memanggil fungsi tambahData saat tombol tambah data diklik
 tambahDataEl.addEventListener("click", tambahData);

 // Memeriksa apakah ada data yang tersimpan
 let dataNilai = localStorage.getItem("dataNilai");
 if (dataNilai) {
     dataNilai = JSON.parse(dataNilai);
     dataNilai.forEach(data => {
         // Membuat baris baru
         const baris = document.createElement("tr");
         const nomorEl = document.createElement("td");
         const mataPelajaranEl = document.createElement("td");
         const nilaiEl = document.createElement("td");
         const indeksEl = document.createElement("td");
         const aksiEl = document.createElement("td");

         // Menambahkan konten ke elemen
         nomorEl.textContent = tbodyNilaiEl.childElementCount + 1;
         mataPelajaranEl.textContent = data.mataPelajaran;
         nilaiEl.textContent = data.nilai;
         indeksEl.textContent = data.indeks;

         // Membuat tombol edit dan delete
         const editEl = document.createElement("button");
         const deleteEl = document.createElement("button");
         editEl.textContent = "Edit";
         deleteEl.textContent = "Delete";
         editEl.addEventListener("click", () => {
             // Mengambil input dari pengguna
             const mataPelajaranBaru = prompt("Masukkan mata pelajaran baru:");
             const nilaiBaru = parseInt(prompt("Masukkan nilai baru:"));

             // Menentukan indeks nilai baru
             let indeksBaru;
             if (nilaiBaru >= 90) {
                 indeksBaru = "A";
             } else if (nilaiBaru >= 80) {
                 indeksBaru = "B";
             } else if (nilaiBaru >= 70) {
                 indeksBaru = "C";
             } else if (nilaiBaru >= 60) {
                 indeksBaru = "D";
             } else {
                 indeksBaru = "E";
             }

             // Mengubah nilai elemen
             mataPelajaranEl.textContent = mataPelajaranBaru;
             nilaiEl.textContent = nilaiBaru;
             indeksEl.textContent = indeksBaru;

             // Menyimpan data yang diubah
             data.mataPelajaran = mataPelajaranBaru;
             data.nilai = nilaiBaru;
             data.indeks = indeksBaru;
             localStorage.setItem("dataNilai", JSON.stringify(dataNilai));
         });
         deleteEl.addEventListener("click", () => {
             // Menghapus baris dan data
             tbodyNilaiEl.removeChild(baris);
             dataNilai = dataNilai.filter(d => d !== data);
             localStorage.setItem("dataNilai", JSON.stringify(dataNilai));
         });

         // Menambahkan elemen ke baris
         aksiEl.appendChild(editEl);
         aksiEl.appendChild(deleteEl);
         baris.appendChild(nomorEl);
         baris.appendChild(mataPelajaranEl);
         baris.appendChild(nilaiEl);
         baris.appendChild(indeksEl);
         baris.appendChild(aksiEl);

         // Menambahkan baris ke tabel
         tbodyNilaiEl.appendChild(baris);
     });
 } else {
     // Menampilkan tulisan "Belum ada data"
     const baris = document.createElement("tr");
     const kolom = document.createElement("td");
     kolom.colSpan = 5;
     kolom.textContent = "Belum ada data";
     baris.appendChild(kolom);
     tbodyNilaiEl.appendChild(baris);
 }

 // Menyimpan data nilai ke dalam local storage
 localStorage.setItem("dataNilai", JSON.stringify(dataNilai));
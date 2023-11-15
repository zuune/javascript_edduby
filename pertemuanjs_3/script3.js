// Pengenalan Fungsi dan Definisi Fungsi
// Fungsi adalah blok kode yang dapat dipanggil dan digunakan kembali.

// Menulis dan Memanggil Fungsi
function sapa() {
    console.log("Halo! Selamat datang.");
  }
  
  sapa(); // Memanggil fungsi sapa.
  
  // Parameter dalam Fungsi
  function sapaNama(nama) {
    console.log("Halo, " + nama + "!");
  }
  
  sapaNama("John"); // Memanggil fungsi sapaNama dengan parameter "John".
  
  // Mengembalikan Nilai dari Fungsi
  function tambah(a, b) {
    return a + b;
  }
  
  let hasilPenambahan = tambah(3, 5);
  console.log("Hasil Penambahan:", hasilPenambahan);
  
  // Pengenalan Arrays, Membuat dan Mengakses Elemen
  // Array digunakan untuk menyimpan kumpulan nilai.
  
  let buah = ["Apel", "Jeruk", "Pisang"];
  
  console.log("Elemen ke-0:", buah[0]); // Mengakses elemen ke-0 (Apel).
  console.log("Elemen ke-1:", buah[1]); // Mengakses elemen ke-1 (Jeruk).
  
  // Iterasi melalui Array dengan for
  console.log("Iterasi dengan for:");
  for (let i = 0; i < buah.length; i++) {
    console.log("Elemen ke-" + i + ": " + buah[i]);
  }
  
  // Iterasi melalui Array dengan forEach
  console.log("Iterasi dengan forEach:");
  buah.forEach(function (item, index) {
    console.log("Elemen ke-" + index + ": " + item);
  });
  
// Mengambil elemen HTML menggunakan document.querySelector() dan document.getElementById().
let judul = document.getElementById("judul");
let paragraf = document.querySelector("#paragraf");

// Mengubah konten elemen menggunakan innerHTML dan textContent.
function ubahWarna() {
  judul.style.color = "blue";
  paragraf.innerHTML = "Warna teks telah diubah!";
}

// Menambahkan dan menghapus elemen.
function tambahParagraf() {
  let newParagraf = document.createElement("p");
  newParagraf.textContent = "Paragraf baru ditambahkan!";
  newParagraf.classList.add("highlight"); // Menambahkan kelas CSS

  document.body.appendChild(newParagraf);
}

function hapusParagraf() {
  let paragrafTerakhir = document.querySelector("p:last-child");
  if (paragrafTerakhir) {
    paragrafTerakhir.remove();
  }
}

// Menangani peristiwa (event) dengan JavaScript.
// Contoh: Mengubah warna teks saat di-klik.
judul.addEventListener("click", function() {
  judul.style.color = "green";
});

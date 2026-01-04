<script>
const params = new URLSearchParams(window.location.search);
const produk = params.get("produk") || "-";
const harga = params.get("harga") || "-";

document.getElementById("produk").innerText = produk;
document.getElementById("harga").innerText = harga;

const infoMessage = document.getElementById("infoMessage");
const inputs = document.querySelectorAll("input, textarea");

// hilangkan pesan saat mulai mengetik
inputs.forEach(el=>{
  el.addEventListener("input", ()=>{
    infoMessage.style.display = "none";
  });
});

function kirimWA(){
  const nama = document.getElementById("nama").value.trim();
  const wa = document.getElementById("wa").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const catatan = document.getElementById("catatan").value.trim();

  if(!nama || !wa || !alamat){
    infoMessage.style.display = "block";
    infoMessage.innerHTML = `
      ⚠️ <b>Data belum lengkap</b><br>
      Mohon lengkapi nama, nomor WhatsApp, dan alamat sebelum melanjutkan pemesanan.
    `;
    return;
  }

  const noAdmin = "62895339847320";

  const pesan =
`Halo, saya ingin memesan:

Produk: ${produk}
Harga: Rp ${harga}

Nama: ${nama}
No WA: ${wa}
Alamat: ${alamat}
Catatan: ${catatan || "-"}

Terima kasih`;

  const url = `https://wa.me/${noAdmin}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}
</script>

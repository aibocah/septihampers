function kirimWA(){
const nama=document.getElementById('nama').value;
const hp=document.getElementById('hp').value;
const alamat=document.getElementById('alamat').value;
const pesanan=document.getElementById('pesanan').value;
const catatan=document.getElementById('catatan').value;
if(!nama||!hp||!alamat||!pesanan){alert('Lengkapi data');return;}
let text=`Halo, saya ingin pesan hampers%0A
Nama: ${nama}%0A
HP: ${hp}%0A
Alamat: ${alamat}%0A
Pesanan: ${pesanan}%0A
Catatan: ${catatan}`;
window.location.href='https://wa.me/62895339847320?text='+text;
}
function kirimWA(){
  const data = [...document.querySelectorAll('input,textarea')]
    .map(e => `${e.placeholder}: ${e.value}`)
    .join('%0A');

  window.location.href =
  'https://wa.me/62895339847320?text=Halo%0A' + data;
}

const button = document.querySelector("#button");
runEvents();

function runEvents() {
  button.addEventListener("click", hesapla);
}

function hesapla() {
  const vize = document.querySelector("#vize").value;
  const proje = document.querySelector("#proje").value;
  const final = document.querySelector("#final").value;

  let vize_nmr = Number(vize);
  let proje_nmr = Number(proje);
  let final_nmr = Number(final);

  console.log(vize_nmr, proje_nmr, final_nmr);

  let ort = vize_nmr * 0.2 + proje_nmr * 0.2 + final_nmr * 0.6;

  if (ort >= 50) {
    alert("Tebrikler geçtiniz! Notunuz: " + ort);
  } else {
    alert("Seneye bir daha deneyin hahahahahahahahahahahahaha: " + ort);
  }
}

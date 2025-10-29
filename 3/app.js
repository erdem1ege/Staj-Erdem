function kontrolEt() {
  let yas = document.getElementById("yasInput").value;
  let sonuc = "";

  yas = Number(yas);

  if (yas >= 18) {
    sonuc = "Ehliyet alabilirsiniz.";
  } else if (yas === 17) {
    sonuc = "Bir yıl sonra ehliyet alabilirsiniz.";
  } else if (yas > 0 && yas < 17) {
    sonuc = "Ehliyet alamazsınız.";
  } else {
    sonuc = "Lütfen geçerli bir yaş giriniz.";
  }

  document.getElementById("sonuc").innerHTML = sonuc;
}

function showDiv(jenisTransaksi) {
  if (jenisTransaksi.value == "internal") {
    document.getElementById("eksternalTransaksi").style.display = "none";
    document.getElementById("internalTransaksi").style.display = "block";
  } else {
    document.getElementById("internalTransaksi").style.display = "none";
    document.getElementById("eksternalTransaksi").style.display = "block";
  }
}

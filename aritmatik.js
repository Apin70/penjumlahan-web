function cobainput(){
    var a=document.forms['masukaninput']['input1'].value;
    var b=document.forms['masukaninput']['input1'].value;

    a=Number(a)
    b=Number(b)

    var total = (a + b)

    var tabel = document.getElementById("keluaran");
    var baris = tabel.insertRow(1);
    var kol1 = baris.insertCell(0);

    kol1.innerHTML = total;

    // document.body.style.backgroundImage="none"
    document.body.style.backgroundColor="lightgreen"
}
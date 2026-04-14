let nama = document.getElementById("nama");
let barang = document.getElementById("barang");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan() {
    //jika local sotrage belum ada isi
    if (localStorage.getItem("daftar") === null) {
        //simpan array kosong[]
        localStorage.setItem("daftar", "[]")
    }

    //panggil local sotrage (konversi string => object)
    let data = JSON.parse(localStorage.getItem("daftar"))
    console.log(data)

    //simpan value npm dan nama ke dalam object data
    data.push({
        nama: nama.value,
        barang: barang.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value
    })
    console.log(data)

    //simpan data terbaru ke dalam local storage 
    // konversi dari object menjadi string
    localStorage.setItem("daftar", JSON.stringify(data))

    //panggil tampil()
    tampil()
}

function tampil(){
     //panggil dulu local storage nya
    let hasil = JSON.parse(localStorage.getItem("daftar"))
    // clear element ul id = list-mhs
    document.getElementById("daftar-belanja").innerHTML = ""
    //lakukan perulangan (foreach)
    hasil.forEach(element => {
        document.getElementById("daftar-belanja").innerHTML += `
        <div class="col-lg-3 col-md-6 mb-3">
                <div class="card-body">
                    <h4 class="text-primary">${element.nama}</h4>
                    <h6 class="text-primary">${element.barang}</h6>
                    <h6 class="text-primary">${element.keterangan}</h6>
                    <h6 class="text-primary">${element.jumlah}</h6>
                    
                </div>
        </div>`
    });
}

//jalankan function tampil
tampil()
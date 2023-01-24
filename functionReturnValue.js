// membuat function old dengan parameter umur 
function old(umur) {
    // input data umur menggunakan parsefloat untuk mengubah tipe data string ke number
    umur = parseFloat(prompt("Berapakah Umur Anda : ", umur));

    // melakukan pengkondisian jika dibawah umur 18 maka umur anda masih remaja
    if (umur <= 18) {
        alert("Umur Anda Masih Remaja");
        // jika dibawah umur 25 maka umur anda sudah remaja menuju dewasa 
    } else if (umur <= 25) {
        alert("Umur Anda Sudah Remaja Menuju Dewasa");
        // jika diatas 25 maka umur anda sudah dewasa
    } else {
        alert("Umur Anda Sudah Dewasa");
    }

    return umur;
}


// membuat function sayHello dengan parameter firstName dan lasName dengan return value;
function score(skor){
    // input data score menggunakan parsefloat untuk mengubah tipe data string ke number
    skor = parseFloat(prompt("Berapakah Score Anda : ",skor));

    // melakukan pengkondisian jika nilai diatas 90 maka indexnya A
    if (skor >= 90) {
        alert(`Nilai ${skor} Yaitu : A`);
    // jika nilainya diatas 80 maka indexnya AB
    } else if (skor >= 80){
        alert(`Nilai ${skor} Yaitu : AB`);
    // jika nilainya diatas 70 maka indexnya B
    } else if (skor >= 70) {
        alert(`Nilai ${skor} Yaitu : B`);
    // jika nilainya diatas 60 maka indexnya BC
    } else if (skor >= 60) {
        alert(`Nilai ${skor} Yaitu : BC`);
    // jika nilainya diatas 50 maka indxnya C
    } else if (skor >= 50) {
        alert(`Nilai ${skor} Yaitu : C`);
    // jika nilainya diatas 40 maka indexnya D
    } else if (skor >= 40) {
        alert(`Nilai ${skor} Yaitu : D`);
    // jika nilainya dibawah 40 maka indexnya E
    } else {
        alert(`Nilai ${skor} Yaitu : E`);
    }
}

// membuat function isContains dengan parameter array dan searchValue
function isContains(array, searchValue){
    // melakukan perulangan untuk mencari iterabel dari array
    for (const element of array) {
        // jika elemet tersebut sama dengan tipe datanya searchvalue
        if (element === searchValue) {
            // mengembalikan nilai true
            return true;
        }
    }
    // jika tidak maka mengembalikan nilai false
    return false;
}

// membuat variabel array serta valuenya dalam bentuk array
const array = [1,32,,4324,3,43,53,56,58,535,5,7];

// membuat variabel search untuk mencari apakah angka 3 ada di variabel array diatas
const search = 3;

// membuat variabel found untuk mencari array dan search
const found = isContains(array,search);

// menampilkan di console hasil dari variabel found
console.log(`${found}`);


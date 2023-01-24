# -LT-36_Function_Return_Value

Function return value di JavaScript adalah output yang dikembalikan oleh function setelah function tersebut dijalankan. Return value dapat digunakan untuk mengembalikan hasil dari operasi yang dilakukan dalam function atau untuk mengakhiri eksekusi function.

Return value didefinisikan menggunakan kata kunci `"return"` di dalam function. Contoh: 

    function add(a, b) {
        return a + b;
    }

Pada contoh di atas, function `"add"` akan menjumlahkan dua parameter yang diterima dan mengembalikan hasilnya. Return value dapat digunakan untuk menyimpan hasil dari function ke dalam variabel atau digunakan langsung dalam ekspresi lain. Contoh:

    let result = add(1, 2);
    console.log(result); // Output: 3
    console.log(add(3, 4) * 5); // Output: 25

Selain itu, jika tidak ada kata kunci return atau return value didefinisikan dalam function, function akan mengembalikan nilai default yaitu undefined. 

Secara keseluruhan, return value dalam function memungkinkan Anda untuk mengembalikan hasil dari operasi yang dilakukan dalam function dan digunakan dalam konteks lain. Ini membuat function lebih berguna dan dapat digunakan dalam berbagai situasi.

Selain itu, return value juga dapat digunakan untuk menghentikan eksekusi function dengan mengembalikan nilai yang sesuai. Contohnya, ketika fungsi menemukan kondisi tertentu yang memenuhi syarat, maka fungsi dapat mengembalikan nilai yang sesuai dan menghentikan eksekusi selanjutnya.

    function checkAge(age) {
        if (age < 18) {
            return "You are too young.";
        } 
        // code to be executed if age >= 18
    }
    console.log(checkAge(15)); // Output: "You are too young."

Pada contoh di atas, jika parameter age yang diterima kurang dari 18, function `"checkAge"` akan mengembalikan nilai `"You are too young."` dan menghentikan eksekusi function.

Secara keseluruhan, return value dalam function membuat function lebih berguna dan dapat digunakan dalam berbagai situasi. Return value dapat digunakan untuk mengembalikan hasil dari operasi yang dilakukan dalam function, menyimpan hasil dalam variabel, atau digunakan langsung dalam ekspresi lain. Ini membuat function lebih fleksibel dan dapat digunakan dalam berbagai konteks.

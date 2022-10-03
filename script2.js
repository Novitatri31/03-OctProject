// a. Penggunaan perulangan while, do while dan for;
// apabila menggunakan while maka syntaxnya adalah sbb;
// 1. Inisialisasi;
// 2. Kondisi;
// 3. Aksi;
// 4. Increment; dengan dontoh sbb;
// let i = 0 meurpakan inisialisasi;
// let nama = "Novita" ;
// while (i < 5) adalah kondisi {
//     console.log("Hello " + nama + i ) merupakan aksi;
//     i++; adalah increment
// }
// kemudian untuk aturan do while yaitu;
// 1. Inisialisasi;
// 2. aksi;
// 3.increment;
// 4. kondisi;
// let i = 0 adalah inisial;
// let nama = "Novita"; 
// do {
// console.log("Hello" + nama + (i +1)); adalah aksi;
// i++ adalah increment;
// }
// while (true) adalah kondisi;
// penggunaan (i +1) digunakan agar inisialisasi i;
//  berubah menjadi 1 bukan 0;
// # perbedaan antara do while dengan while adalah apabila;
// kondisi bernilai flase maka while tidak akan melakukan looping;
// namun jika menggunakan do while maka broweser akan melakukan looping;
// sebayak 1 kali setelah itu berhenti;

// for menggunaan syntax sbb;
// for (inisial, kondisi, increment) {
//     aksi
// }
// --> contoh;
// let nama = "Novita"
// for ( let i = 0; i < 5; i++) {
//     console.log( "Hello " + nama + (i+1))
// }
// --> contoh penggunaan decrement;
// let nama = "Novita"
// for ( let i = 5; i > 0; i--) {
//     console.log( "Hello " + nama + i)
// }
// # penggunaan while sama dengan for apabila kondisi bernilai salah;
// maka browser tidak akan melakukan looping;

// b. Menggunakan chrome developer tools
// let message ="Selamat anda sukses menjadi seorang programmer di RS"
// for(let i = 0; i < 5; i++) {
//     // if (i % 2 == 0) {
//     //     console.log(i + " adalah angka genap");
//     // }
//     // else {
//     //     console.log (i + " adalah angka ganjil");
//     // }
//     console.log(i % 2 == 0 ? (i + " adalah bilangan genap"):(i + " adalah bilangan ganjil"))
// // adalah contoh kondisional operator ternary;
// }
// console.log ("akhir script");
// untuk melihat debug tekan ctrl+shift+I;
// selanjutnya tekan source;kemudian source;
// dan pilih page;contoh --> <img src="js-debug.jpg">;
// kolom watch digunakan untuk mengontrol variabel;
// untuk mengisi cukup menekan variabelnya;
// contoh --> i atau message;
// breakpoint digunakan untuk pause debug;
// selanjutnya tekan f5 untuk mempause fungsi;
// scope di gunakan untuk melihat block pada variabel;
// apakah termasuk block global atau tidak
// syntax operator ternary adalah (kondisi ? kondisi benar:kondisi salah)

// c. Penggunaan break;
// apabila break tercantum pada looping maka browser;
// akan keluar dari looping;
// contoh -->
// let opening = "Pembuka code"
// for (let i= 0; i < 3; i++) {
//     console.log("Awal bilangan adalah " + i);
//     break;
//     console.log("Akhir bilangan adalah " + i);
// }
// console.log("Script berakhir");

// d. Penggunaan continue;
// apabila continue tercantum pada looping;
// browser tetap melakukan looping meyesuaikan kondisinya;
// hingga kondisinya berhenti;
// contoh -->
// for (let i= 0; i < 3; i++) {
//     console.log("Awal bilangan adalah " + i);
//     continue;
//     console.log("Akhir bilangan adalah " + i);
// }
// console.log("Script berakhir");

// apabila continue menggunakan while;
// let i = 0;
// while (i < 3) {
    //     console.log("Awal bilangan adalah " + i);
    // i++ increment harus diletakkan sebelum continue;
    // agar tidak terjadi infinit loop    
    // continue;
    //     console.log("Akhir bilangan adalah " + i);
    // }
    // console.log("Script berakhir");

// Latihan permainan FIZZ BUZZ
// Pernyataan :
// 1. Setiap angka yang habis dibagi 3 adalah FIZZ;
// 2. Setiap angka yang habis dibagi 5 adalah BUZZ;
// 3. Setiap angka yang habis dibagi 3&5 adalah FIZZ BUZZ;
// 4. Angka sampai dengan 30;

for(let i = 0; i <= 30; i++){
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FIZZ BUZZ " + i);
    }
    else if (i % 5 == 0) {
        console.log("BUZZ " + i);
    }
    else if (i % 3 == 0) {
        console.log("FIZZ " + i);
    }
    else {
        console.log(i);
    }
}

// // BELAJAR GIT BRANCH
// git branch: digunakan untu mengetahui setatus;
// dari sebuah repo apakah ada branch atau tidak;
// git -a (kepanjangan dari add) bisa digabungkan;
// dengan git -am "first commit";
// git log: digunakan untuk mengetahui commit apa saja;
// yang dilakukan pada sebuah repo;
// git log --all --decorate --oneline --graph:
// digunakan untuk menampilkan visualisasi perubahan;
// alias : digunkan untuk sbg variabel;
// contoh: git alias graph="--all --decorate --online --graph";
// git checkout <nama-file yg dituju> digunakan untuk memindah branch;
// merge terbagi menjadi 2;
// fast forward: terjadi path secara langsung;
// antara master dengan branch;
// perintah yang digunakan adalah;
// git merge <branch-yg-akan-dimerge>;
// three-way-merge/merge commit : tidak ada patch yg;
// terhubung scr lgsg pd mster;
// cara menghapus branc di git;
// dengan git branch -d <nama-branch-yg dihapus>;
// git branch --merged : berfungsi:
// mengecek setatus pada branch yg sudha di merge;




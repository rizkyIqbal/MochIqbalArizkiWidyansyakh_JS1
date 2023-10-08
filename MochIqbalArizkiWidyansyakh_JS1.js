//Moch Iqbal Arizki Widyansyakh
//Web A Afternoon

let username = "rizkyiqbal";
let password = "iqbal123";

let usn = "rizkyiqbal";
let psw = "iqbal123";

let repeat = 0

//do while
do{
  console.log("Repeat ke-", repeat+1)
  //if
  if (usn == username && password == psw) {
    let tampilkanMenu = 1
    //nested if
    if(tampilkanMenu == 1){
      console.log("Autentikasi Berhasil")
      console.log("Pilih Menu")
      console.log("1. Tidur")
      console.log("2. Makan")
      console.log("3. Tidur dan Makan")
      console.log("4. Logout")
      console.log("5. For Statement")
      console.log("6. While Statement")
    
      let input = 5

      switch (input){
          case 1:
            console.log("Anda Tidur")
            break
          case 2:
            console.log("Anda Makan")
            break
          case 3:
            console.log("Anda Tidur dan Makan")
            break
          case 4:
            console.log("Anda Logout")
            break
          case 5:
            const angka = [1,2,3,4,5]
            perulangan(angka)
            break
          case 6:
            const angkaSecond = [5,4,3,2,1]
            let inputSecond = 1
            let i = 0
            //while
            while(angkaSecond[i] != inputSecond){
              angkaSecond[i]
              console.log("Array = ", angkaSecond[i])
              i++
            }
            console.log("Array Yang Cocok dengan input adalah angka", angkaSecond[i])
            break
          default:
            console.log("gaada dong")
        }
    }else{
      console.log("Menu tidak ditampilkan!")
    }
    //else
  }else{
    console.log("Autentikasi Gagal")
  }
  repeat++
} while(repeat <= 1)

//function
function perulangan(angka){
  let input = 2
  //for
  for (let i = 0; i < angka.length; i++) {
    if(angka[i] == input){
      console.log("array = ", angka[i])
    }
  }
}

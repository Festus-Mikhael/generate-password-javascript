const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHJIKLMNOPQRSTUVXYZ";
const lowerCase = "abcdefghijklmnopqrstuvxyz";
const number = "01234556789";
const symbol = "!@#$%^&*()_";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    // Jika 4 kode dibawah ini dihapus maka password akan random 
    // tapi mungkin terjadi tidak adanya minimal satu karakter dari satu kategori
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars [Math.floor(Math.random() * allChars .length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            console.error('Error in copying text: ', err);
        });
}


document.getElementById("button").addEventListener("click", createPassword);
document.getElementById("copy").addEventListener("click", copyPassword);
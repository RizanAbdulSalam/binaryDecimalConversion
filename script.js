let decimalInput = document.getElementById("decimal-input");
let binaryInput = document.getElementById("binary-input");
let errorMsg = document.getElementById("error");

decimalInput.addEventListener("input", () => {
    let decimalValue = parseInt(decimalInput.value);
    //Converts The Decimal to Binary
    binaryInput.value = decimalValue.toString(2);
})
//Covert Binary to Decimal
binaryInput.addEventListener("input", () => {
    let binaryValue = binaryInput.value;
    //(if)Valid then Convert (else) snt a error msg
    if (binaryValidator(binaryValue)) {
      decimalInput.value = parseInt(binaryValue, 2);
      errorMsg.textContent = "";  
    } else {
        errorMsg.textContent = "Please Enter a Valid Binary"
    }
    //Binary = 1 and 0, entering other show error
    function binaryValidator(num){
        for(let i = 0; i < num.length; i++)
        if(num[i] =! "0" && num[i] != "1"){
            return false;
        } 
    }
    return true;
})

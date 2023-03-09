function temperatureConverterToC(val){
    //type casting string to number
    val = parseFloat(val);
    document.getElementById("inputCelsius").value =(val-32)/1.8;
}
function temperatureConverterToF(val){
    //type casting string to number
    val = parseFloat(val);
    document.getElementById("inputFahrenheit").value =(val*1.8)+32;
}

function eraseText(){
    document.getElementById("inputFahrenheit").value = "";
    document.getElementById("inputCelsius").value = "";

}
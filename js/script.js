function insert(num){
    let numero = document.getElementById('result').innerHTML;
    
    if (numero.length != null) {
        if (numero != 'void') {
            if (isNaN(numero[numero.length - 1]) && isNaN(num)) {
                document.getElementById('result').innerHTML = numero.replace(/.$/, num);
            } else {
                document.getElementById('result').innerHTML = numero + num;
            }
        } else {
            if (!isNaN(num)) {
                document.getElementById('result').innerHTML = num;
            }
        }
    }
}
function clean(){
    document.getElementById('result').innerHTML = "";
}
function back(){
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}
function calcular(){
    let result = document.getElementById('result').innerHTML;
    result ? document.getElementById('result').innerHTML = eval(result) : document.getElementById('result').innerHTML = "none"
}

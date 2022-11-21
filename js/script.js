function insert(num){
    let numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
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
    result ? document.getElementById('result').innerHTML = eval(result) : document.getElementById('result').innerHTML = "0"
}

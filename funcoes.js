var numSort = []
var numDigitados = []


function sorteioNum(){
    do{
        let sort = Math.ceil(Math.random() * 60)
        if(numSort.includes(sort))
           numSort.push(sort)
           

    } while(numSort.length <6 )

    document.getElementById("numSort").innerHTML = numSort
   
}

function getNum(valor,pos){
if(valor>60){
    alert("o valor é maior que 60")

}else if(valor <= 0){
alert("o valor nao pode sermenor que 0")

}else{
numDigitados[pos]=valor

}

}





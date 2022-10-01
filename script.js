function recuperar(){
    fetch("https://www.mercadobitcoin.net/api/ETH/ticker/")
        .then(res => res.json())
        .then(obj => exibe(obj));
}

function exibe(obj){
    let valor = parseFloat(obj.ticker.last);
    document.getElementById("cotacao").innerHTML = valor.toFixed(2);
}
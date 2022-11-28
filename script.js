function calcSal(){
    var saida = document.querySelector(".saida");

    var vsal = document.querySelector(".vsal").value;
    var vhtrab = document.querySelector(".vhtrab").value;

    var c= vsal * vhtrab;

    var vdia = (vsal / 30);
    var vh = (vdia / vhtrab);

    var dados = "<span class='dados'><span> Salário Base: <em>R$ " + vsal + "</em></span><span>Horas trabalhadas por dia: <em>" + vhtrab + "</em></span></span>";

    saida.innerHTML = " <span><b>Resultado: </b> <span class='rs flex cem'><b>Diária </b>R$ "  + vdia.toFixed(2) + "</span><span class='rs flex cem'> <b>Valor por Hora: </b>R$ " + vh.toFixed(2) + "</span></span>" + dados;
    //windows.alert(c);
};
function descobrir() {
    var res = document.querySelector("#res")
    const date = document.querySelector("#date").value
    res.innerHTML = ""
    const [ano, mes, dia] = new Date(date).toISOString().split("T")[0].split("-")
    if(!ano, mes, dia == "") alert('Você deve digitar uma data valida')
    console.log(mes)
    
   
    
    switch (mes) {
        case "01":
            res.innerHTML = Number(dia) <= 20 ? "Capricornio" : "Aquario"
            break;
        case "02":
            res.innerHTML = Number(dia) <= 18 ? "Aquario" : "Peixes"
            break;

        case "03":
            res.innerHTML = Number(dia) <= 20 ? "Peixes" : "Aries"
            break;

        case "04":
            res.innerHTML = Number(dia) <= 20 ? "Aries" : "Touro"
            break;

        case "05":
            res.innerHTML = Number(dia) <= 20 ? "Touro" : "Gemeos"
            break;

        case "06":
            res.innerHTML = Number(dia) <= 20 ? "Gemeos" : "Cancer"
            break;

        case "07":
            res.innerHTML = Number(dia) <= 22 ? "Cancer" : "Leão"
            break;

        case "08":
            res.innerHTML = Number(dia) <= 22 ? "Leão" : "Virgem"
            break;

        case "09":
            res.innerHTML = Number(dia) <= 22 ? "Virgem" : "Libra"
            break;

        case "10":
            res.innerHTML = Number(dia) <= 21 ? "Libra" : "Escorpião"
            break;

        case "11":
            res.innerHTML = Number(dia) <= 21 ? "Escorpião" : "Sargitario"
            break;

        case "12":
            res.innerHTML = Number(dia) <= 20 ? "Sargitario" : "Capricornio"
            break;

        default:
            break;
            
    }
}
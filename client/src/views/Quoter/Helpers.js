const calcularTotalPagar = (cantidad, plazo) => {
    let total 

    //Mientras mayor es la cantidad, menor es el interes

    if(cantidad < 5000){
        total = cantidad * 1
    }else if(cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1
    }else if(cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1
    }else{
        total = cantidad * 1
    }

    //Plazo,,   Mas plazo, mayor interes
    if(plazo === 15){
        total *= 1.25
    }else if(plazo === 30){
        total *= 1.4
    }else if(plazo === 3){
        total *=  1.75
    }else{
        total *= 2.2
    }
    return total
}

export {
    calcularTotalPagar 
}
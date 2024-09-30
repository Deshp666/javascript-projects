function fromCtoF(temperature){
    return temperature * 1.8 + 32
}

function fromFtoC(temperature){
    return (temperature - 32) / 1.8
}

console.log(fromCtoF(12));
console.log(fromFtoC(77));
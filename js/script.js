rain = prompt("How many inches of rain fell?")

let inches = "*"
console.log("Rainfall: " + inches.repeat(rain));

let yield = 50
if (rain >=20){
    yield = yield*.9
}
if (rain < 10) {
    yield = yield*.8
}
if (rain = 10-19){
    yield = yield
}

let fertilizer = prompt("Did you use fertilizer?");
if (fertilizer === "yes"){
    var type = prompt ("Did you use premium or regular fertilizer?")
}

if (fertilizer === "no"){
    console.log("The yield should be " + yield + " bushels per acre.")
}

if (type === "premium"){
    yield = yield*1.15;
    console.log("The yield should be " + yield + " bushels per acre.")
}
if (type === "regular"){
    yield = yield*1.10
    console.log("The yield should be " + yield + " bushels per acre.")
}
else{   
    log("The yield should be " + yield + " bushels per acre.")
}
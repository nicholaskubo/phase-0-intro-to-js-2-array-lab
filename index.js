const cats= ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}
function appendCat(name){
    const newCats= [...cats,"Broom"];
    return newCats;
}
function prependCat(name){
    const newCats2= ["Arnold", ...cats];
    return newCats2;
}
function removeLastCat(){
    const newCats3= cats.slice(0,2);
    return newCats3;
}
function removeFirstCat(){
    const newCats4= cats.slice(1);
    return newCats4;
}

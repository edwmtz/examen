let array = [5,5,3,3,4,6,7,8,9,2];
let pares = [];

let j=1;
for(let i= 0;i<array.length;i++){
    if(i % 2 ==0){
        console.log("no es par " + pares);
    }else{
        pares.push(array[i]);
    }
}

console.log("Los numeros pares son " + pares);

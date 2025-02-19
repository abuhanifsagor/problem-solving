function oddIndexOfArray(arrays){

    if(arrays.length === 0 || 
        !Array.isArray(arrays)){
        return "Invalid Array"
    }

    for (const number of arrays) {
        if(typeof number !== 'number'){
            return "Invalid Array "
        }
       
    }

    let newArray = []
    newArray.push(arrays[0]);

    for( let i = 0; i < arrays.length ; i++ ){
        i % 2 !== 0 ? newArray.push(arrays[i]) : null;
    }
    newArray.length < 3 ? newArray.push("DEVZEROONE") : newArray.unshift("DEVZEROONE");

 return newArray;
}

const num = [ 12, 15, 8];
const num2 = [12, 15, 8, 65, 20, 111];

console.log(oddIndexOfArray(num));
console.log(oddIndexOfArray(num2));
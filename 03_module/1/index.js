let isCardInATM = true
let avalibleSum = 400
let operationSum = prompt('Operation Sum: ')
console.log('Operation Sum: ', operationSum);
if (isCardInATM && avalibleSum >= operationSum){
    console.log('Operation accepted');
} else{
    console.log('Operation canceled');
}
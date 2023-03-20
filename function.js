function fizzBuzz(numbers) {
    let replace="";
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%3===0 && numbers[i]%5===0){
            replace+="fizzbuzz";
        }else if(numbers[i]%3===0){
            replace+="fizz";
        }else if(numbers[i]%5===0){
            replace+="buzz";
        }else{
            replace+="";
        }
    }
    return replace;
}

let i = fizzBuzz(29);
console.log(i);
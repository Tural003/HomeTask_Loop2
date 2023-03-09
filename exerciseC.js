let value = 4528
let total = 0
let x;
while(value){
    x = value % 10
    total = total + x
    value = Math.floor(value / 10)

}
console.log(total)
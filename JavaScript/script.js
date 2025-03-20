console.log("Lilly sri")
let a=100
let sum=0
let i
for(i=0;i<=a;i++)
{
    sum+=i
}
console.log(sum)

let j=0
let newsum=0
while(j<=100){
    newsum+=j
    j+=1
}
console.log(newsum)

let k=0
let sum2=0
do{
    sum2+=k
    k++
}while(k<=100)
console.log(sum2)   

let num=prompt("Enter number")
let l;
for(l=0;l<=num;l++)
{
    if(l%2==0)
    {
        console.log(l)
    }
}
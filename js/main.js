let len=parseInt(prompt("total number"))
let a=0;
for(i=1;i<=len;i++){
    let val=parseInt(prompt("enter the value"))
    if(val>0){
   a=val+a
    }
}
document.write(a);
document.body.addEventListener("click",function(){

let x = event.clientX;
let y = event.clientY;
console.log(x,y);
if(x%2==0&&y%2==0){

    document.body.style.background = "red";
}else{
    
    if(x%2!=0&&y%2!=0){

    document.body.style.background = "green";

}else{

    document.body.style.background = "blue";

}
}


})
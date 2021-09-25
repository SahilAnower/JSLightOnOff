// // const handleClick=()=>{
// //     document.getElementById("namaste").innerHTML="Hey i am here";
// // }

// const btn=document.querySelector("#but");
// const changepara=()=>{
//     const paraname=document.querySelector(".name");
//     paraname.innerHTML="Loading...";
//     setTimeout(()=>{
//         paraname.innerHTML="Sahil";
//     },1000);
// }

// btn.addEventListener("click",changepara);

const light=document.querySelector(".lightbulb");
const on=document.getElementById("on");
const off=document.getElementById("off");

on.addEventListener("click", ()=>{
    light.style.color="#FFB319";
});

off.addEventListener("click", ()=>{
    light.style.color="#FFF";
});
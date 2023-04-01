const spanvalue = document.querySelector("#incrementvalue")
// console.log(spanvalue)
const increse = document.querySelector("#increment")
// console.log(increse)
const decrese = document.querySelector("#decrement")
// console.log(decrese)
const reset = document.querySelector("#reset")
// console.log(reset)


//my method
increse.addEventListener("click",function(){
    spanvalue.innerText ++
    if(spanvalue.innerText > "0"){
        spanvalue.style.color ="green"
    }
    if(spanvalue.innerText == "0"){
        spanvalue.style.color = "black"
    }
})

decrese.addEventListener('click',function(){
    spanvalue.innerText --
    if(spanvalue.innerText <"0"){
        spanvalue.style.color ="red"
    }
    if(spanvalue.innerText == "0"){
        spanvalue.style.color = "black"
    }
})

reset.addEventListener('click',function(){
    spanvalue.innerText = "0";
    spanvalue.style.color="black"
        
})





// 2nd way
// const result =  document.querySelector('#incrementvalue')
// // console.log(result)
// const buttons = document.querySelectorAll('.btn')
// // console.log(buttons)

// for(i=0; i<buttons.length; i++){
//     // console.log(buttons[i])
//     function showall(e){
//         // console.log(e)
//         if(e.target.classList.contains('increase')){
//             console.log('value is increaed')
//             // let value1 = Number(result.innerText)
//             // console.log(value1)
//             result.innerText ++
//         }
//         if(e.target.classList.contains('decrease')){
//             // console.log('value is decreased')
//             // let value1 = Number(result.innerText)
//             // console.log(value1)
//             result.innerText --
//         }
//         if(e.target.classList.contains('reset')){
//             // console.log('value is reseted')
//             result.innerText = 0
//         }
//         if(Number(result.innerText) === 0){
//             result.style.color ="black"
//         }
//         else if(result.innerText>0){
//             result.style.color="green"
//         }
//         else{
//             result.style.color="red"
//         }
//     }
// buttons[i].addEventListener('click',showall)
// }






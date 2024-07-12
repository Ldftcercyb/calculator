// let container = document.querySelector('.container');

// // event = evt = e

// container.onclick = (event) => {
//     let target = event.target;
//     target.style = 'border-radius: 50%; background: green; transition: .5s;'
// }

let numbers = document.querySelectorAll('.numbers');
let xers = document.querySelector('.xers');
let ac = document.querySelector('.ac');
let c = document.querySelector('.c');
let total = document.querySelector('.total');
let tools = document.querySelectorAll(".tools");
let float = document.querySelector(".float");

let isTool = true;
let isFloat = true;

//    ==  '0'  0   '0.'  0  

numbers.forEach((number)=>{
    number.onclick = (e) => {
        let target = e.target;
        if (xers.value === "0") {
            xers.value = target.name;
        }
        else {
            if(xers.value)
            xers.value += target.name;
        }
        isTool = true;

    }
})

tools.forEach((tool)=>{
    tool.onclick = (e) => {
        let target = e.target;

        if(isTool){
            xers.value += target.name;
        }
        else {
            xers.value = xers.value.slice(0,-1) + target.name
        }

        isTool = false;
        isFloat = true;

    }
})

float.onclick = () => {
    // if(xers.value[xers.value.length - 1] != tools[2].name && xers.value[xers.value.length - 1] != tools[3].name  && xers.value[xers.value.length - 1] != tools[4].name  && xers.value[xers.value.length - 1] != tools[5].name  && xers.value[xers.value.length - 1] != tools[6].name && xers.value[xers.value.length - 1] != float.name )  {
    if(isTool && isFloat){
        xers.value += float.name;
        isFloat = false;
    }

}

ac.onclick = () => {
    xers.value = "0";
    isTool = true;
    isFloat = true;
}

c.onclick = () => {
    if(xers.value.length == 1){
        xers.value = "0";
    }
    else{
        xers.value = xers.value.slice(0,-1);
        if (!isFloat) {
            isTool = false;
        }
        else{
            isTool = true;
        }
    }
}

total.onclick = () => {
    xers.value = eval(xers.value);
}


window.addEventListener("keydown",(ev)=>{


    if(!Number.isNaN(+ev.key)){
        if (xers.value === "0") {
            xers.value = ev.key;
        }
        else {
            if(xers.value)
            xers.value += ev.key;
        }
        isTool = true;
    }

    if (ev.key === "+" || ev.key === "-" || ev.key === "*" || ev.key === "/" || ev.key === "%") {
        if(isTool){
            xers.value += ev.key;
        }
        else {
            xers.value = xers.value.slice(0,-1) + ev.key;
        }

        isTool = false;
        isFloat = true;
    }

    
    if ( ev.key === "Backspace") {
        if(xers.value.length == 1){
            xers.value = "0";
        }
        else{
            xers.value = xers.value.slice(0,-1);
            if (!isFloat) {
                isTool = false;
            }
            else{
                isTool = true;
            }
        }  
    }
    if (ev.key === "=" || ev.key === "Enter") {
        xers.value = eval(xers.value);
    }


})
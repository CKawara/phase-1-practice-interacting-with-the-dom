let countId;
let num = document.getElementById('counter')


function count(){
    countId = setInterval(addnum, 1000)
}

function addnum (){
    num.textContent = parseInt(num.textContent)+1
}
function manualCounter(){
    let add = document.getElementById('plus')
    let minus = document.getElementById('minus')
    add.addEventListener('click', ()=>{
        num.textContent = parseInt(num.textContent)+1
    })
    minus.addEventListener('click', ()=>{
        if(num.textContent != 0)
        num.textContent = parseInt(num.textContent)-1
    })
}
count()
manualCounter()
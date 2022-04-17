let countId;

function count(){
    countId = setInterval(addnum, 1000)
}

function addnum (){
    let num = document.getElementById('counter')
    num.textContent = parseInt(num.textContent)+1
}
count()
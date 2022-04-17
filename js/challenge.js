let countId;
let num = document.getElementById('counter')
let add = document.getElementById('plus')
let minus = document.getElementById('minus')
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')
let submit = document.getElementById('submit')



function count(){
    countId = setInterval(addnum, 1000)
}
count()

function addnum (){
    num.textContent = parseInt(num.textContent)+1
}
function counterFeatures(){
    add.addEventListener('click', ()=>{
        num.textContent = parseInt(num.textContent)+1
    })
    minus.addEventListener('click', ()=>{
        if(num.textContent != 0)
        num.textContent = parseInt(num.textContent)-1
    })
    heart.addEventListener('click', ()=>{
        let ul = document.querySelector('.likes')
        let li = document.createElement('li')
        li.textContent = `${num.textContent} was liked`
        ul.appendChild(li)
    })

}
counterFeatures()

function pauseNResume(){
    if(pause.innerText === 'pause'){
        clearInterval(countId)
        add.setAttribute('disabled', '')
        minus.setAttribute('disabled', '')
        heart.setAttribute('disabled', '')
        submit.setAttribute('disabled', '')
        pause.textContent = 'resume'
    }else if (pause.innerText === 'resume'){
        add.removeAttribute('disabled', '')
        minus.removeAttribute('disabled', '')
        heart.removeAttribute('disabled', '')
        submit.removeAttribute('disabled', '')
        pause.textContent = 'pause'
        count()
    }
}
pause.addEventListener('click', pauseNResume)
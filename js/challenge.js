
let counter = document.querySelector('#counter');
let plusBtn = document.querySelector('#plus');
let minusBtn = document.querySelector('#minus');
let heartBtn = document.querySelector('#heart');
let pauseBtn = document.querySelector('#pause');
let buttons = document.querySelectorAll('button');

let submit = document.querySelector('#submit');
let input = document.querySelector('#comment-input')

let numLikeCountList = document.querySelector('.likes');
let commentList = document.querySelector('#list');


let timer;

let likeTrackerObj = {}

function countUp(){
    timer = setInterval(() => {
        let currentNum = parseInt(counter.textContent);
        counter.textContent = currentNum + 1;
    }, 1000);
}


plusBtn.addEventListener('click', () => {
    let currentNum = parseInt(counter.textContent);
    counter.textContent = currentNum + 1;
})


minusBtn.addEventListener('click', () => {
    let currentNum = parseInt(counter.textContent);
    counter.textContent = currentNum - 1; 
})


heartBtn.addEventListener('click', () => {
    let currentNum = counter.textContent;
   
    if (!likeTrackerObj.hasOwnProperty(currentNum)){
        
        likeTrackerObj[currentNum] = 0
         
        likeTrackerObj[currentNum] += 1
        
        let li = document.createElement('li');
        li.id = currentNum;
        li.innerHTML = (`${currentNum} has been liked <span>1</span> time`);
        
        numLikeCountList.appendChild(li)
    } else { 
        
        likeTrackerObj[currentNum] += 1
        
        let theLi = document.getElementById(`${currentNum}`);
        
        theLi.innerHTML = (`${currentNum} has been liked <span>${likeTrackerObj[currentNum]}</span> time`)
    }
})


pauseBtn.addEventListener('click', () => {
    let currentStatus = pauseBtn.textContent
    if (currentStatus == 'resume'){
        // restarts the timer
        timer = setInterval(() => {
            let currentNum = parseInt(counter.textContent);
            counter.textContent = currentNum + 1;
        }, 1000);
        
        for (const button of buttons){
            button.disabled = false;
        };
       
        pauseBtn.textContent = 'pause';
    } else {
        
        clearInterval(timer);
       
        for (const button of buttons){
            button.disabled = true;
        };
        pauseBtn.disabled = false;
       
        pauseBtn.textContent = 'resume';
    }
})


submit.addEventListener('click', (e) => {
    e.preventDefault()
    let p = document.createElement('p')
    p.textContent = input.value;
    commentList.appendChild(p);
})


document.addEventListener('DOMContentLoaded', countUp);

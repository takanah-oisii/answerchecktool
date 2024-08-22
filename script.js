const btn = document.querySelector('.btn');
const message = document.querySelector('.message');
const next = document.querySelector('.next');
const a = ['あ','い','う']
const m = [
    
];


btn.addEventListener('click', () => {
    let element = document.getElementById('ans');
    for (let i = 1; i < 5; i++){
        if(element.value === a[i-1]){
            message.textContent = i+'匁正解！おめでとう！';
            next
        }
    }
});
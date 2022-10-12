let red = document.querySelector('.red')
let green = document.querySelector('.green')
let yellow = document.querySelector('.yellow')
let reset = document.querySelector('.btn1')
let random = document.querySelector('.random')
let random1 = document.querySelector('.random1')
let random2 = document.querySelector('.random2')

green.addEventListener('click', ()=> {
    console.log('Green');
    let time = setTimeout(()=> {
        green.style.backgroundColor = 'purple'
        console.log('Paint it Purple');
    },2000)
    reset.addEventListener('click',() => {
        green.style.backgroundColor = 'green'
        red.style.backgroundColor = 'red'
        yellow.style.backgroundColor = 'yellow'
        clearInterval(time)
    })
})
red.addEventListener('click', ()=> {
    console.log('Red');
    let time = setTimeout(()=> {
        red.style.backgroundColor = 'orange'
        console.log('Paint it orange');
    },2000)
    reset.addEventListener('click',() => {
        green.style.backgroundColor = 'green'
        red.style.backgroundColor = 'red'
        yellow.style.backgroundColor = 'yellow'
        clearInterval(time)
    })
})
yellow.addEventListener('click', ()=> {
    console.log('Yellow');
    let time = setTimeout(()=> {
        yellow.style.backgroundColor = 'white'
        console.log('Paint it white');
    },2000)
    reset.addEventListener('click',() => {
    green.style.backgroundColor = 'green'
    red.style.backgroundColor = 'red'
    yellow.style.backgroundColor = 'yellow'
    clearInterval(time)
    })
})
random.addEventListener('click', ()=> {
    console.log('aqua');
    let time = setTimeout(()=> {
        random.style.backgroundColor = `rgb(${Ransdom(0,1000)},${Ransdom1(0,1000)},${Ransdom2(0,1000)})`
        console.log('Which one will fall out?');
    },100)
    reset.addEventListener('click',() => {
    random.style.backgroundColor = 'aqua'
    clearInterval(time)
    })
})
random1.addEventListener('click', ()=> {
    console.log('cornflowerblue');
    let time = setTimeout(()=> {
        random1.style.backgroundColor = `rgb(${Ransdom(0,1000)},${Ransdom1(0,1000)},${Ransdom2(0,1000)})`
        console.log('Which one will fall out?');
    },100)
    reset.addEventListener('click',() => {
    random1.style.backgroundColor = 'cornflowerblue'
    clearInterval(time)
    })
})
random2.addEventListener('click', ()=> {
    console.log('violet');
    let time = setTimeout(()=> {
        random2.style.backgroundColor = `rgb(${Ransdom(0,1000)},${Ransdom1(0,1000)},${Ransdom2(0,1000)})`
        console.log('Which one will fall out?');
    },100)
    reset.addEventListener('click',() => {
    random2.style.backgroundColor = 'violet'
    clearInterval(time)
    })
})
let Ransdom = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let Ransdom1 = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let Ransdom2 = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



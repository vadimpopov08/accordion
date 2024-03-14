let parent = document.getElementById('parent')
let links = document.querySelectorAll('.link')
let text = document.querySelectorAll('.text')
let tabs = document.querySelectorAll('.tab')

parent.addEventListener('click', (event)=>{
    event.preventDefault();
    let target = event.target;
    for(let k = 0; k<tabs.length; k++) {
        tabs[k].classList.remove('active')
        target.classList.add('active')
    }
    console.log(target)
})
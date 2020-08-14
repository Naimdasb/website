const menu_btn = document.getElementsByClassName('menu_btn')[0]
const menu_ul = document.getElementsByClassName('menu_ul')[0]
const bar_a = document.getElementsByClassName('bar')[0]
const bar_b = document.getElementsByClassName('bar')[1]
const bar_c = document.getElementsByClassName('bar')[2]

menu_btn.addEventListener('click', ()=> {

    menu_ul.classList.toggle('appear')
    bar_a.classList.toggle('bar_a')
    bar_b.classList.toggle('bar_b')
    bar_c.classList.toggle('bar_c')
    
})




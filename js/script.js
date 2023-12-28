const btnFechar= document.querySelector('.btn_close')
const modal = document.querySelector('.modal')


btnFechar.addEventListener('click',()=>{
    modal.style.display='none'
    console.log('clicado')
})
const main_input=document.querySelector('.input')
const loading_gif=document.querySelector('.loading')
let result=document.querySelector('.result')
const container=document.querySelector('.container')
const warning=document.querySelector('.warning')
import { render_error_text } from "./render.js"
import { fetchMovieByTitle } from "./api.js"
import { render_items } from "./render.js"
import { clear_place } from "./render.js"
main_input.addEventListener('keydown',(e)=>{
    if (e.key=='Enter'){
        let name_film=main_input.value
        clear_place(name_film)
        fetchMovieByTitle(name_film)
        .then(data=>{
            let clear_text=document.querySelector('.warning_text')
            if (clear_text){
                clear_text.remove()
            }
            warning.style.display='none'

            render_items(data)
        })
        .catch(err=>{
            render_error_text(err)
        })
    }
})



container.addEventListener('click',(e)=>{
    
    if (e.target.parentElement.className=='result_item'){
        let current_id=e.target.parentElement.dataset.film_id
        location.href=`film_page.html?id=${current_id}`
    }
})
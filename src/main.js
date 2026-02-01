const main_input=document.querySelector('.input')
const loading_gif=document.querySelector('.loading')
let result=document.querySelector('.result')
const container=document.querySelector('.container')




main_input.addEventListener('keydown',(e)=>{


    if (e.key=='Enter'){
        let name_film=main_input.value
        let all_film=result.querySelectorAll('div')
        for (let film of all_film){
            film.remove()
        }
        if (name_film.trim().length!=0){
            loading_gif.style.display='flex'
        }

        fetch(`http://www.omdbapi.com/?apikey=48f59a08&s=${name_film}`)
        .then(r=>{
            console.log(r)
            return r.json()})
        .then(data=>{
            loading_gif.style.display='none'

            for (let movies of data.Search){
                console.log(movies)
                let result_item=document.createElement('div')
                result_item.classList.add('result_item')
                let img_for_result_item=document.createElement('img')
                img_for_result_item.src=movies.Poster
                img_for_result_item.classList.add('result_item_img')
                
                let name_film=document.createElement('p')
                name_film.textContent=movies.Title
                name_film.classList.add('result_item_text')

                let year_film=document.createElement('p')
                year_film.textContent=movies.Year
                year_film.classList.add('result_item_text')

                result_item.append(img_for_result_item,name_film,year_film)
                result_item.dataset.film_id=movies.imdbID
                result.append(result_item)
                result.style.display='grid'

            }
           
            })
        
    }
})


container.addEventListener('click',(e)=>{
    
    if (e.target.parentElement.className=='result_item'){
        let current_id=e.target.parentElement.dataset.film_id
        location.href=`film_page.html?id=${current_id}`
    }
})
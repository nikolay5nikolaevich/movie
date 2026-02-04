const main_input=document.querySelector('.input')
const loading_gif=document.querySelector('.loading')
let result=document.querySelector('.result')
const container=document.querySelector('.container')
const warning=document.querySelector('.warning')

export function clear_place(name_film){
    let all_film=result.querySelectorAll('div')
        for (let film of all_film){
            film.remove()
        }
        if (name_film.trim().length!=0){
            loading_gif.style.display='flex'
        }


}

export function render_items(data){
    loading_gif.style.display='none'
        
        for (let movies of data ){
            console.log(movies)
            let result_item=document.createElement('div')
            result_item.classList.add('result_item')
            let img_for_result_item=document.createElement('img')
            if (movies.Poster!='N/A'){
                img_for_result_item.src=movies.Poster
            }
            else{
                img_for_result_item.src="pict/not_found.webp"
            }

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
            
}


const container_page=document.querySelector('.container_page')
const url_id= new URLSearchParams(location.search).get('id')
export const render_page=(data1)=>{
console.log(data1)
  let pict=document.createElement('img')
  pict.src=data1.Poster
  if (data1.Poster!='N/A'){
    pict.src=data1.Poster
}
else{
    pict.src=data1.Poster="pict/not_found.webp"
}

  container_page.append(pict)

  for (const key in data1) {
    if (key=="Poster"){
      
    }
    else{
      const p = document.createElement('p');
      p.textContent = `${key}: ${data1  [key]}`;
      container_page.append(p);
    }
    
}

}


export function render_error_text(err){
    let clear_text = document.querySelector('.warning_text')
    if (clear_text){
        clear_text.remove()
    }

    let warning_text = document.createElement('p')
    warning_text.classList.add('warning_text')

    if (err.message === 'Too many results.'){
        warning_text.textContent =
        'Наш сервис предназначен для англоязычных фильмов, попробуйте на английском языке найти ваш фильм'
    }
    else{
        warning_text.textContent = err.message
    }

    warning.append(warning_text)
    warning.style.display = 'flex'
    loading_gif.style.display = 'none'
}

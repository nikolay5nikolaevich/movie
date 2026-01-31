const main_input=document.querySelector('.input')
const loading_gif=document.querySelector('.loading')

main_input.addEventListener('keydown',(e)=>{


    if (e.key=='Enter'){
        let name_film=main_input.value
        if (name_film.trim().length!=0){
            loading_gif.style.display='flex'
        }
        fetch(`http://www.omdbapi.com/?apikey=48f59a08&s=${name_film}`)
        .then(r=>{
            console.log(r)
            return r.json()})
        .then(data=>console.log(data))
    }
})
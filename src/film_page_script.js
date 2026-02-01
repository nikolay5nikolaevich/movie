const container=document.querySelector('.container')
const url_id= new URLSearchParams(location.search).get('id')
fetch(`http://www.omdbapi.com/?apikey=48f59a08&i=${url_id}`)
.then(data=>data.json())
.then(data1=>{
  console.log(data1)
  let pict=document.createElement('img')
  pict.src=data1.Poster
  container.append(pict)

  for (const key in data1) {
    if (key=="Poster"){
      
    }
    else{
      const p = document.createElement('p');
      p.textContent = `${key}: ${data1  [key]}`;
      container.append(p);
    }
    
}

})
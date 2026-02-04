const container_page=document.querySelector('.container_page')
const url_id= new URLSearchParams(location.search).get('id')
import { fetch_page } from "./api.js"
import { render_page } from "./render.js";
fetch_page(url_id)
.then(data=>{
  render_page(data)
  
})

.catch(err=>{
  container_page.textContent=err.message;
})
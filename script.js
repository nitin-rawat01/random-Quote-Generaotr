function generateQuote(){

const request_url = 'https://dummyjson.com/quotes/random';
const button = document.getElementById('button');
const quote = document.querySelector('.quote');

fetch(request_url)
.then(function(response){
  return response.json();
})
.then(function(data){
    quote.innerHTML = `
    <div class="quote_text">"${data.quote}"</div> 
    <div class="author">Author:<i>${data.author}</i></div>
`
})
.catch(function(error){
    console.log(error);
})   
}

button.addEventListener('click',generateQuote );
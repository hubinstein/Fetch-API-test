document.getElementById('get').addEventListener('click', ()=>{
  let fetch = fetch('https://hubinstein.github.io/Fetch-API-test/RPS.html/information'); 
  fetch.then(res=>res.json()); 
  fetch.then(data=>console.log(data.greeting));
});
document.getElementById('put').addEventListener('click', ()=>{fetch('https://hubinstein.github.io/Fetch-API-test/RPS.html/information', {
  method:'PUT',
  headers:{
    'Content-Type':'application/json'
  },
body: JSON.stringify({
  greeting:'hi'
})
});});

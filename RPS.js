
document.getElementById('get').addEventListener('click', ()=>{console.log(fetch('https://hubinstein.github.io/Fetch-API-test/RPS.html/information').json());});
document.getElementById('put').addEventListener('click', ()=>{fetch('https://hubinstein.github.io/Fetch-API-test/RPS.html/information', {
  method:'PUT',
  headers:{
    'Content-Type':'application/json'
  },
body: JSON.stringify({
  greeting:'hi'
})
});});
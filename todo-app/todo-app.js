const p = document.querySelectorAll('p')
p.forEach(function(p){
      if(p.textContent.includes('the')){
          p.remove()
      }
});
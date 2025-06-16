

const navTab=document.querySelectorAll(".navtab ul li");


// fetch(`html/home.html`)


//     .then(response => response.text())
//     .then(data => {
//       document.getElementById("content").innerHTML = data;
//     }
    
// )
// .catch(error => console.error("Fetch error:", error));    
// navTab.forEach(item => item.classList.remove('clicked-style'))
// document.getElementById('home').classList.add('clicked-style')

// document.getElementById('navDropButton').innerHTML="Home"
loadPage('project')




function changeContect(id){
    
    

loadPage(id)  


}

function loadPage(page) {
  fetch(`html/${page}.html`)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById('content');

      // Temporary div to parse HTML
      const temp = document.createElement('div');
      temp.innerHTML = html;

      // Extract and load scripts
      const scripts = temp.querySelectorAll('script');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.textContent = script.textContent;
        }
        document.body.appendChild(newScript);
        script.remove(); 
      });

      container.innerHTML = temp.innerHTML;
    });

  navTab.forEach(tab => tab.classList.remove('clicked-style'))
  document.getElementById(page).classList.add('clicked-style')
  document.getElementById('navDropButton').innerHTML=`${page}`.charAt(0).toUpperCase()+ `${page}`.slice(1).toLowerCase(); 
}



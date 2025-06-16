




function work(ele){
  ele.classList.add("selected-nav")
  document.querySelectorAll("#myList li ").forEach(element => {
    if (element != ele){
      element.classList.remove("selected-nav")
    }
    
  }); 
}


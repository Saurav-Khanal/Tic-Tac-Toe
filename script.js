let button=document.querySelectorAll("button");
button.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.textContent===""){
            e.target.textContent="X";
        }
    })
})
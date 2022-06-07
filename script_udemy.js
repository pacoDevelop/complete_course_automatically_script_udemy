
const tiempoEspera=60;

const iniciar=(status)=>{
    if(document.getElementsByTagName("video")[0]){
       document.getElementsByTagName("video")[0].currentTime=100000 
       setTimeout(()=>a(),3000);
    }else{
        if(document.querySelector('[data-purpose="dont-ask-button"]')){
            document.querySelector('[data-purpose="dont-ask-button"]').click();
            document.querySelectorAll('[data-purpose="dont-ask-button"]').forEach(el=>el.click());
            setTimeout(()=>a(),3000); 
            return;
        }
        if(!document.getElementById("go-to-next-item")&&document.querySelector('[data-purpose="go-to-next"]')){
            document.querySelectorAll('[data-purpose="go-to-next"]').forEach(el=>el.click());
            setTimeout(()=>a(),3000); 
            return;
        }
        if(document.getElementById("go-to-next-item")){
            if(status){
               document.getElementById("go-to-next-item").click();
               setTimeout(()=>a(),3000); 
            }else{
                setTimeout(()=>a(true),tiempoEspera*1000);
            }
        }else{
           setTimeout(()=>a(),3000);  
        }
        
    }
   
}

iniciar();

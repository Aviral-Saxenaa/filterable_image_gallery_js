console.log("kya hal chal");

(function(){
        var imagesdiv=document.querySelectorAll(".img");
        var buttons=document.querySelectorAll(".btn");
        buttons.forEach(function(button){
                button.addEventListener("click",function(e){
                        console.log(e);
                        e.preventDefault();
                        let filters=e.target.dataset.filter;
                        // console.log(filters);
                        
                        imagesdiv.forEach(function(imagediv){
                                if(filters==="all"){
                                        imagediv.style.display="block";
                                }
                                else{
                                        if(imagediv.classList.contains(filters)){
                                                imagediv.style.display="block";
                                        }
                                        else{
                                                imagediv.style.display="none";
                                        }
                                }
                        })
                })
        })

})();
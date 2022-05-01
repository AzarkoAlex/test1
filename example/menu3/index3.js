$(function() {

});






document.addEventListener('DOMContentLoaded', function(){ 

	  var ar=document.querySelectorAll(".menu ul li");
	  
	  ar.forEach(function(item){
		  var flag=item.querySelector("ul")==undefined;
		  
		  
			  if(!flag){
				  
				  item.classList.add("parent");
				  if(item.children.length==2)
					item.children[1].classList.add("child");
			  
				  
				    item.onclick=function(){
					  
					  if (item.matches('.selected'))
					    return;
					 
					   var ar=document.querySelectorAll(".menu .selected");
					   ar.forEach(function(item){
						   item.classList.remove("selected");
					   });
					   
					   item.classList.add("selected");
					   
				  
				    }
				  
				  }
			  
		        });  
		  
    });
   
 

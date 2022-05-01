




function setPagenum(text){
    var ar=document.querySelectorAll("content .items .item");
	ar.forEach(function(item){
	    var elt=item.querySelector(".text-wrapper span");
		elt.textContent="стp."+text;
	});		
	 
}

function setPaginator(){
	
	  var ar=document.querySelectorAll(".paginator span");
	  
	  ar.forEach(function(item){
		  
				item.onclick=function(){
				  
				  if (item.matches('.selected'))
					return false;
				 
				   var ar=document.querySelectorAll(".paginator .selected");
				   ar.forEach(function(item){
					   item.classList.remove("selected");
				   });
				   
				   item.classList.add("selected");
				   
			       setPagenum(item.textContent);
				}
				  
			       return false;
			  
		    });  
 };
	
	

function setCataloginfo(text){
	var el=document.querySelector("content .info .lev3");
    el.textContent=text;    
}



function setAccordion()
{
	
	  var ar=document.querySelectorAll(".menu-block a");
	  
	  ar.forEach(function(item){
		  var flag=item.parentElement.querySelector("ul")==undefined;

			  if(!flag){

				 //item.classList.add("parent");
				 //if(item.children.length==2)
				 //item.children[1].classList.add("child");

				item.onclick=function(){
				  
				  if (item.matches('.selected'))
					return false;
				 
				   var ar=document.querySelectorAll(".menu-block a.selected");
				   ar.forEach(function(item){
					   item.classList.remove("selected");
					   
				   });
				   
				   item.classList.add("selected");
				   setCataloginfo(item.text);
			       return false;
				}
				  
			  }else{
				 
                   item.onclick=function(){
				  
				    if (item.matches('.active'))
					    return false;
				 
				    var ar=document.querySelectorAll(".menu-block a.active");
				    ar.forEach(function(item){
					   item.classList.remove("active");
					});
				   
				    item.classList.add("active");
				    //var addr=item.getAttribute("href");
					//setItems(addr);
					//setCatalog();
			       return false;
				}

				 
			  }
			  
		    });  

	
	
}




$(function() {
	
	
	
$("a[href^='#']").click(function() {
var target=this.hash.substr(1);
    
	if(!target.length)
		return true;
	
    target="a[name="+target+"]";
    target = $(target);

if (target.length) {
window.scrollTo({ top: target.offset().top - 100,left:0,behavior: "smooth"});	
}

return false;


});
});


document.addEventListener('DOMContentLoaded', function(){
		
		var el=document.querySelector(".wrapper-logo .feedback  a");
		el.onclick= function(){
			document.getElementById('feedback-form').style.display='block';
			document.getElementById('fade').style.display='block'
			return false;
		 }

        el=document.querySelector(".feedback-form .closeform");
		el.onclick= function(){
			document.getElementById('feedback-form').style.display='none';
			document.getElementById('fade').style.display='none'
			return false;
		 }



        setAccordion();
		setPaginator();

});


function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }
function validate_field(classname,text){
    var r=true;
	var el=document.getElementById(classname);
	if (el.value==""){
        el.placeholder="Поле обязательно для заполнения";
		el.classList.add("err_text-field__input");
		r=false;
		}else{el.placeholder="Имя";
		el.classList.remove("err_text-field__input");	}
		
		
		if (r && classname.indexOf("-email")>0){
		   r= r && validateEmail(el.value);
	       if (!r){
		       alert("Непраильный ввод в поле email");
		       el.classList.add("err_text-field__input");
			   }
			 else{
			   el.classList.remove("err_text-field__input");
			   }
		}
		
	return r;
	
}
function validate_form(){
   
   var r=true;
   try{
   r = r && validate_field('feedback-name','Имя');
   r = r && validate_field('feedback-phone','Телефон');
   r = r && validate_field('feedback-email','email');
   }
   catch (e) { alert(e);r=false;}
   
   return r;
}
	

$(document).ready(function(){
	$("#header").html("this is the head");
	
	$(".spanclass").html("html for the span tag with class span class");
	
	$(".content").find("div").children("span").html("THIS SHOULD BE FOR SPAN IN DIV ONLY");
	
	//binding
	
	$("#header").click(function(){
		console.log("header clicked")
	})
	$("#header").mouseenter(function(){
		$("p").hide("slow", function(){
			console.log("The paragraph is now hidden");
		});
	})
	
});

/*
function myfun(a, b, c) {
  if(a>b && a>c)
    return a;
  else if(b>c)
    return b;
  else
    return c;
  }
  
  
 function Profile(name, desc){
	this.name = name
	this.description = desc
}
*/
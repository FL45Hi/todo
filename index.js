//check off by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

//click on X to Delete to-Do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Hitt Enter key
$("input[type='text']").keypress(function(event){
	if(event.which == 13){
		//new to-do
		var todo = $(this).val();
		$(this).val("");
		//create new li & add to li
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> "+ todo +"</li>");
	}
});
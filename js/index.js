function sub(){
	$('#addItem').submit( (event) => {
		event.preventDefault();
		let text = $('#itemText').val();

		let listLoc = $('#itemList');

		listLoc.append(`<li><fieldset> <p>${text}</p> <button type="button" id="check">check</button> <button type="button" id="del">delete</button></fieldset></li>`);

		$("#itemText").empty();
		//listLoc.append("<fieldset> <p> $(text) </p> <button type="button" id="check" class="itemButton"> check </button><button type="button" id="del" class="itemButton"> delete </button> </fieldset> ");
	});

	
}

function check(){
	$('#itemList').on('click','button', (event) => {
		if($(event.target)[0].id == "check"){
			if($(event.target).parents('fieldset').find('p').css("text-decoration") == "line-through solid rgb(0, 0, 0)")
				$(event.target).parents('fieldset').find('p').css("text-decoration","none");
			else 
				$(event.target).parents('fieldset').find('p').css("text-decoration","line-through");

			console.log($(event.target).parents('fieldset').find('p').css("text-decoration"));
			console.log($(event.target).parents('ul').children());	
			console.log($(event.target)[0].id);
		}
		if($(event.target)[0].id == "del"){
			console.log($(event.target)[0].id)
			$(event.target).parents('li').remove();
		}
		
		

	});
}

function init(){
	$( sub );
	$(check);
}

$(init);
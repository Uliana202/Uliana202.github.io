
//
$(function() {

	$('body').on('click', 'h4', function() {
	 
	  $( "#show-me" ).toggleClass('show-me');
	  $( "#show-me" ).toggleClass('hide-me');
	});
	 
	$('#show_form').on('click', function() {
		$('#add-team-form').toggleClass('show-me');
		$('#add-team-form').toggleClass('hide-me');
	 });



	$("#add_team").click(function(){
	  	event.preventDefault();
	  	$('#add-team-form').attr('class','hide-me');
	   	$("#team-message").text("thank you your team has been added");
	      console.log('test');
	});



});
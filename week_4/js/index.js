window.addEventListener('load', init);

function init(){
	// make a request for our own JSON file
	document.getElementById('text-field').addEventListener('change', getText);
}

function getText(event){

	var val = document.getElementById('text-field').value;
	// if there is no value, or it is an empty string, prompt the user
	if(!val || val=="");
	console.log("the value is " + val);	

	getWiki(val);

}

function getWiki(value){
	url ='https://en.wikipedia.org/wiki/'+value+'';
	addLinkCrap(value, url);
	// $.ajax({
	// 	type:'HEAD',
	// 	url:'https://en.wikipedia.org/wiki/'+value+'',
	// 	// type: 'GET',
	// 	failure: function(err){
	// 		return console.log ("There was no link");

	// 	},
	// 	success: function(response) {

	// 		// console.log("response = " response);
	// 		return addLink(response);
	// 	}
	// });
}	

function addLink(value, response){
	if ( response == null ){
		var htmlToAppend = 
		'<p>'+value+'</p>'  ;
  		return $(htmlToAppend).appendTo('.text-body')
	}
	else{
		var htmlToAppend = 
		'<a href="'+response+'">'+value+'</a>'  ;
  		return $(htmlToAppend).appendTo('.text-body')
  	}
}

function addLinkCrap(value, url){
	var htmlToAppend = 
	'<a href="'+url+'">'+value+'</a>';
	document.getElementById('text-field').value = '';
	return $(' ' + htmlToAppend).appendTo('.text-body');
}



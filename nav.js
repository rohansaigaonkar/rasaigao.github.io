$(document).ready(function(){	
	if ($('title').text().includes("Home")){
		$("#home").css("color", "#8b1aff");
	}
	
	else if($('title').text().includes("About")){
		$("#about").css("color", "#8b1aff");
	}
	else if($('title').text().includes("Projects")){
		$("#projects").css("color", "#8b1aff");
	}
	else if($('title').text().includes("Contact")){
		$("#contact").css("color", "#8b1aff");
	};
});


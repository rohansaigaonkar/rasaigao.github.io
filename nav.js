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

$(function() {
    function changeSlide( newSlide ) {        
        // change the currSlide value
        currSlide = newSlide;
        
        // make sure the currSlide value is not too low or high
        if ( currSlide > maxSlide ) currSlide = 0;
        else if ( currSlide < 0 ) currSlide = maxSlide;
        
        // animate the slide reel
        $slideReel.animate({
            left : currSlide * -900
        }, 400, 'swing', function() {
            // set new timeout if active
            if ( activeSlideshow ) slideTimeout = setTimeout(nextSlide, 1200);
        });
    }
    
    function nextSlide() {
        changeSlide( currSlide + 1 );
    }
    
    // define some variables / DOM references
    var activeSlideshow = true,
    currSlide = 0,
    slideTimeout,
    $slideshow = $('#slideshow'),
    $slideReel = $slideshow.find('#slideshow-reel'),
    maxSlide = $slideReel.children().length - 1;
    
    // start the animation
    slideTimeout = setTimeout(nextSlide, 1200);
});

//------- Progressbar js
$(document).ready(function(){
    $('#bar1').barfiller({barColor: "#0069D9"});
    $('#bar2').barfiller({barColor: "#0069D9"});
    $('#bar3').barfiller({barColor: "#0069D9"});
    $('#bar4').barfiller({barColor: "#0069D9"});
    $('#bar5').barfiller({barColor: "#0069D9"});
    $('#bar6').barfiller({barColor: "#0069D9"});
    $('#bar7').barfiller({barColor: "#0069D9"});
    $('#bar8').barfiller({barColor: "#0069D9"});
    $('#bar9').barfiller({barColor: "#0069D9"});
});

//------- testimonials - owl carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        autoHeight:true
    });
});

//------- mixitup
$(document).ready(function(){
    var mixer = mixitup('.portfolioProjects');
    var mixer = mixitup(containerEl);
    
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });
});


//------- Counter
$(document).ready(function(){
    $('.counter').counterUp();
});




//------- Desable Right Click on website
$(document).ready(function(){
    $('body').bind('cut copy past', function(e){
		e.preventDefault();
	})
	$('body').on('contextmenu', function(e){
		return false;
	})
});





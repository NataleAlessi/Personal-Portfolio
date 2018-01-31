var landingHeightFull   = $("#top").height();
var landingHeightMobile = $("div.row.spacer.main-img-theme").height();

$(document).scroll(function(e){

	var scrollTop 		= $(document).scrollTop();
	var mobileModeOff   = $("#landing-image").css("display");

	if(mobileModeOff === "block"){
		if (scrollTop > landingHeightFull){
			$(".navbar").removeClass("navbar-static-top").addClass("navbar-fixed-top");
		} else {
			$(".navbar").removeClass("navbar-fixed-top").addClass("navbar-static-top");
		}
	} else if (mobileModeOff === "none") {
		if (scrollTop > landingHeightMobile){
			$(".navbar").removeClass("navbar-static-top").addClass("navbar-fixed-top");
		} else {
			$(".navbar").removeClass("navbar-fixed-top").addClass("navbar-static-top");
		}
	}
});

function sendMail() {
	var link = "mailto:natale.alessi.90@gmail.com"
			+ "?cc= n.alessi@live.it;"
			+ "&subject=" + escape("Hello!")
			+ "&body=" + escape(
				document.getElementById('message').value + 
				"\n\nPlease, contact me back through the followings\nPhone Number: " + 
				document.getElementById('phone').value +
				"\nMail Address: " +
				document.getElementById('mail').value);

	window.location.href = link;
}

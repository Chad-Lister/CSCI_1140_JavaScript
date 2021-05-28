/*
 *	File:  services.js
 *	Author:  Chad Lister
 *	Date:  05/18/2021
 *	
 *	Runs the services.html listeners for my CSCI 1140 Final Project.  Has't been validated or ADA tested.
*/


/*
 *	Function:  slab()
 *	Changes paragraph text, picture and attribute to slab.
*/

function slab() {
	var paragraph = document.querySelector("#slab");
	paragraph.addEventListener("click", changeToSlab(), false);
	
	function changeToSlab() {
		document.querySelector("#text").innerHTML = "&quotWe offer concrete slab work for all your needs.  Whether it's a sidewalk or driveway, let our employee's handle it for you!&quot";
		
		// For testing only
		document.querySelector("#picture").setAttribute("src", "./images/construction.jpg");
		
		// Online source
//		document.querySelector("#picture").setAttribute("src", "https://cdn.pixabay.com/photo/2020/07/05/12/56/construction-5372898_960_720.jpg");
		
		document.querySelector("#attribute").innerHTML = "Image by <a href='https://pixabay.com/users/memorycatcher-168384/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5372898'>Siggy Nowak</a> from <a href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5372898'>Pixabay</a>";
	}
}

/*
 *	Function:  pumping()
 *	Changes paragraph text, picture and attribute to pumping.
*/

function pumping() {
	var paragraph = document.querySelector("#pumping");
	paragraph.addEventListener("click", changeToPumping(), false);
	
	function changeToPumping() {
		document.querySelector("#text").innerHTML = "&quotWhether it's a foundation, a new fence or a retaining wall.  We have the equipement and people you need!&quot";
		
		// Testing only.
		document.querySelector("#picture").setAttribute("src", "./images/concrete pump.jpg");
		
		// Online source.
//		document.querySelector("#picture").setAttribute("src", "https://cdn.pixabay.com/photo/2017/04/11/18/30/concrete-pump-2222450_960_720.jpg");
		
		document.querySelector("#attribute").innerHTML = "Image by <a href='https://pixabay.com/users/annawaldl-3773640/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2222450'>annawaldl</a> from <a href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2222450'>Pixabay</a>";
	}
}

/*
 *	Function:  decorative()
 *	Changes paragraph text, picture and attribute to decorative.
*/

function decorative() {
		var paragraph = document.querySelector("#decorative");
		paragraph.addEventListener("click", changeToDecorative(), false);
		
		function changeToDecorative() {
			document.querySelector("#text").innerHTML = "&quot;When you need a mow strip or any other landscaping barrier.  We can accommodate!&quot";
			
			//Testing only.
			document.querySelector("#picture").setAttribute("src", "./images/the money pit edging.jpg");
			
			// Online source.
//			document.querySelector("#picture").setAttribute("src", "https://media.improvenet.craftjack.io/media/Default/landscaping/Concrete%20Edging%20Material%20Costs.jpg");
			
			document.querySelector("#attribute").innerHTML = "<a href='https://media.improvenet.craftjack.io'>media.improvenet.craftjack.io</a>";
	}	
}
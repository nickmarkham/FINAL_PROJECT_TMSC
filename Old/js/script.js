// - Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded

$(document).ready(function () {

// - Prevent a form submission with the ```event.preventDefault()``` function
// - Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler

    $(".blueButton").click(function () {
        alert("Sorry, We're Not Ready For Sign-Ups. Check Back Soon!");
    });
    $(".yellowButton").click(function () {
        event.preventDefault();
    });

// If a user clicks "Read More" on the primary column:
		$(".read-more").click(reveal);

		function reveal(){
		$(".hide").slideDown();
		}

// - If a user clicks "Read Less" on the primary column:
		$(".read-less").click(unreveal);

		function unreveal(){
		$(".hide").slideUp();
		}

// - If a user clicks the "Learn More" link in the sidebar,
    $(".learn-more").click(revealLearn);

    function revealLearn(){
    $(".hide").slideDown();
    }

});

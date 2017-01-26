
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	
	$("#testjs").click(function(e) {
		$("#testjs").text("please wait");
		$(".jumbotron h1").text("JavaScript is connected");
		$(".jumbotron p").addClass("active");
});
	
 
	$("a.thumbnail").click(projectClick);
	
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}


function projectClick(e){
	e.preventDefault();
	// var containingProject = $(this).closest(".project");
     //containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    	$(".project-description p").hide();
	}


}


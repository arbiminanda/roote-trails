//Show Tab Content for Review
$("#reviewTab").click(function(){
	activaTab('review');
});
//Show Tab Content for Review
$("#rphotosTab").click(function(){
	activaTab('photos');
});
//Function to Show Tab Content
function activaTab(tab){
	$('.nav-tabs a[href="#' + tab + '"]').tab('show');
};
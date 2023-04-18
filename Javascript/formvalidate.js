function validateForm()
{
	var fname = document.forms['feedbackform']['fname'].value;
	var cont = document.forms['feedbackform']['cont'].value;
	var mail = document.forms['feedbackform']['mail'].value;
	var sub = document.forms['feedbackform']['sub'].value;
	var message = document.forms['feedbackform']['message'].value;
	if (fname == "" || cont == "" || mail == "" || sub == "" || message == "")
	{
		alert("Empty field found.");
	}
	else{
		alert("Thank you for contacting with us.");
	}
}
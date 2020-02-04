function main() {
	

	var url = "http://localhost:8080/WebAppExercises/studentUpdate";

	
	
	
	var requestParameters = "id=" + form["id"].value + "&firstname="
	+ form["firstname"].value + "&lastname=" + form["lastname"].value
	+ "&streetaddress=" + form["streetaddress"].value + "&postcode="
	+ form["postcode"].value + "&postoffice="
	+ form["postoffice"].value;

	

	
	var requestOptions = {
		method : "POST",
		headers : {
			"Content-Type" : "application/x-www-form-urlencoded"},
		body : requestParameters
	};
	
	
	

	postDataToServer(url, requestOptions, processResponseStatus);


	document.getElementById("studentForm").reset();
	

}





function processResponseStatus(status) {
	
	if (status.errorCode === 0) {
		alert("Student updated.")
location.replace("WebAppAsignment.html")
		} else if (status.errorCode === 1) {
		alert("Nothing updated.");
		location.replace("WebAppAsignment.html")
	} else {
		alert("Nothing updated. An unknown error occurred.");
		location.replace("WebAppAsignment.html")
	
		}
}
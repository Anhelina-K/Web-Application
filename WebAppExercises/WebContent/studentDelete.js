function main() {

	var url = "http://localhost:8080/WebAppExercises/deleteStudent";
	var form = document.forms["formStudent"];
	
	var requestParameters = "id=" + form["id"].value;
		
	var requestOptions = {
		method : "POST",
		headers : {
			"Content-Type" : "application/x-www-form-urlencoded"},
		body : requestParameters
	};

	postDataToServer(url, requestOptions, processResponseStatus);

}


function processResponseStatus(status) {
	
	if (status.errorCode === 0) {
		alert("Student deleted.");
	} else if (status.errorCode === 1) {
		alert("Nothing to delete. Unknown student id");
	} else {
		alert("The database is temporary unavailable.");
	}
}



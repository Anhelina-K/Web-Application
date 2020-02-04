 
function getDataFromServer(url, printStudents){
	
		 fetch(url)
		 
		 .then(response => {
		 if (response.ok) { 
		 return response.json(); 
		 } else {
			 throw "HTTP status code is " + response.status;
		 }
		 })
		 .then(studentList => printStudents(studentList)) 
		 .catch(errorText =>  alert("getDataFromServer failed: " + errorText));
		
	
}

function postDataToServer(url, requestOptions, processResponseStatus) {
	
	fetch(url, requestOptions)
	 .then(response =>  {
	  if (response.ok) {
		  processResponseStatus(response);
		
	 } else {
		 throw "HTTP status code is " + response.status;
		
	  }
	 })	
	  .then(status => processResponseStatus(status))
	    .catch(errorText =>  alert("postDataToServer " + errorText));
}





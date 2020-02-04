function main() {
	getDataFromServer("http://localhost:8080/WebAppExercises/students", printStudents)
	.then(response => response.json()) 
	.then(studentList  => printStudents(studentList)); 

}

function printStudents(studentList) {
	
	var outputText= "";
 for (var student of studentList) { 
		outputText += "<tr>" + "<td>" + student.id +"</td>"  + 
		"<td>" + student.lastname + "</td>" +
		"<td>" + student.firstname + "</td>" +
		"<td>" + student.streetaddress + "</td>"
		+ "<td>" + student.postcode + "</td>" + 
		"<td>" + student.postoffice + "</td>" + 
		"<td >" + createUpdateDeleteLinks(student.id) +"</td>"+ "</tr>";
 	document.getElementById("rows").innerHTML = outputText;
 
 }
}
function addStudent() {
	location.replace("studentAdd.html");
	
}

function createUpdateDeleteLinks(studentId) {
	 return "<span class='link' onclick='updateStudent(" + studentId + ")' id=22 >Update</span>" +
	 "&nbsp;&nbsp;" +
	 "<span class='link' onclick='deleteStudent(" + studentId + ")'id=22 >Delete</span>";
}

function updateStudent(studentId){
	location.replace("updateStudent.html?id=" + studentId);
}


function deleteStudent(studentId) {
	var url = "http://localhost:8080/WebAppExercises/deleteStudent";
	
	var requestParameters =  "id=" + studentId;
	
	if (confirm("Delete student " + studentId + "?") == true) {
	

		var requestOptions = {
			method : "POST",
			headers : {
				"Content-Type" : "application/x-www-form-urlencoded"
			},
			body : requestParameters
		};
		
		postDataToServer(url, requestOptions, processResponseStatus);
	}else{
		alert("You press cancel! Bey")
		
	}
	
	// Reload the current document:
	location.reload();
	

}

function processResponseStatus(status) {
	
	if (status.errorCode === 0) {
		alert("Student deleted.");
	} else if (status.errorCode === 1) {
		alert("Nothing to delete. The student id does not exist");
	} else {
		alert("Nothing to delete. An unknown error occurred.");
	}
	
	
	
	}


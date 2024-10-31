    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

let nput = document.getElementById("inputField")

document.getElementById("myForm").addEventListener("submit", okitime2validate)

ermgex = /^[a-zA-Z0-9]+$/;

function okitime2validate() {
  if (!ermgex.test(nput.value)){
    alert("NO!");
    okitime2validate.preventDefault()
  }
  else {
    alert("valid :3")
  }
}
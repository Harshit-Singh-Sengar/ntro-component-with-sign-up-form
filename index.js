const form = document.querySelector("#forms")
var fName = document.querySelector("#fName")
const lName = document.querySelector("#lName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const inputs = document.querySelectorAll("input")


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    inputs.forEach((input) => {
    // console.log(input.value)
    let inputValue = input.value;
    
    if (!inputValue) {
        input.parentElement.classList.add("error");      
    } else {
        input.parentElement.classList.remove("error")
        // console.log(inputValue.type);
        if (inputValue == "email") {
            if (validateEmail(inputValue)) {
                input.parentElement.classList.remove("error")
            }else{
                input.parentElement.classList.add("error")
            }

            
        }
    }


});

})





function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

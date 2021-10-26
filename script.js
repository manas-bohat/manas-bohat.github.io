var input1 = document.querySelectorAll("input")[0]
var input2 = document.querySelectorAll("input")[1]
var body = document.querySelector("body")
var css = document.querySelector("h3")

function setGradient(element)
{
	// background: linear-gradient(to right, purple , skyblue); 
	body.style.background = "linear-gradient(to right, " + input1.value + " , " + input2.value + ")"
	css.textContent = "linear-gradient(to right, " + input1.value + " , " + input2.value + ")"

	// innerHTML requires the parse tree to be re created and may break references to stuff and is also
	// susceptible to some attacks, which is a security concern.
}

// event listener input is really cool.
input1.addEventListener("input", setGradient)

input2.addEventListener("input", setGradient)


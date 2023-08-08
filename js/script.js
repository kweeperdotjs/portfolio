
var input = document.getElementById('main');
var response = document.getElementById('response');
var i = 0
var txt = "Welcome to Kweeper's portfolio."
var speed = 30
var commands = ["help", "about", "contact", "source", "skills", "ui"]
var responses = ["Here is a list of commands:<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>help</span> - Displays this menu.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>about</span> - Tells you about me.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>contact</span> - Get information on how to contact me.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>source</span> - Redirects you to the source of this web page.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>ui</span> - Redirects to the UI version of this page..<br>List of extra commands:<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>clear</span> - Clears the terminal.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>echo</span> [input] - Echos your input back.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>quote</span> - Gets a random quote from the internet.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>rps</span> [choice] - Plays rock paper scissors with you (the output is completely random)", "About Me:<br>Hello, visitor! My name is Kweeper, and I'm a passionate programmer who has been on an exciting coding journey since 2019.<br>", "Contact info:<br>&nbsp&nbsp&nbsp&nbspEmail - kweeper@protonmail.com<br>&nbsp&nbsp&nbsp&nbspDiscord - kweeper<br>&nbsp&nbsp&nbsp&nbspTelegram - t.me/NotKweeper<br>&nbsp&nbsp&nbsp&nbspV3rm - MentalBreakdown<br>&nbsp&nbsp&nbsp&nbspGithub - kweeperdotjs"]
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
function help() {
  response.innerHTML = responses[0];
}
function about() {
  response.innerHTML = responses[1];
}
function contact() {
  response.innerHTML = responses[2];
}
function unknown(cmd) {
  response.innerHTML = `The command "${cmd}" doesn't exist.`;
}
function quote() {
	fetch('https://dummyjson.com/quotes/random')
	.then(res => res.json())
	.then(res => {
		response.innerHTML = `${res.quote}<br>${res.author}`;
	});
}
function rps(choice) {
	if (!choice) return response.innerHTML = `You forgot to include your choice. Example: rps paper`;
	const j = ["rock", "paper", "scissor"]
	const rand = j[Math.floor(Math.random() * j.length)];
	if (choice == "rock") {
		if (rand == "rock") {
			response.innerHTML = `It's a tie. We both chose rock.`;
		}
		if (rand == "paper") {
			response.innerHTML = `You lost. I chose paper.`;
		}
		if (rand == "scissor") {
			response.innerHTML = `You won. I choose scissor.`;
		}
	} else if(choice == "paper") {
		if (rand == "paper") {
			response.innerHTML = `It's a tie. We both chose paper.`;
		}
		if (rand == "rock") {
			response.innerHTML = `You won. I chose rock.`;
		}
		if (rand == "scissor") {
			response.innerHTML = `You lost. I chose scissor.`;
		}
	} else if(choice == "scissor") {
		if (rand == "paper") {
			response.innerHTML = `You won. I chose paper.`;
		}
		if (rand == "rock") {
			response.innerHTML = `You lost. I chose rock.`;
		}
		if (rand == "scissor") {
			response.innerHTML = `It's a tie. I chose scissor.`;
		}
	}
}
function echo(input) {
	response.innerHTML = input;
}
function clear() {
	response.innerHTML = `Clearing...`;
	location.reload()
}
function ui() {
  response.innerHTML = `Redirecting...`;
	window.open('/ui.html', '_blank')
}
function source() {
  response.innerHTML = `Redirecting...`;
	window.open('https://github.com/kweeperdotjs/portfolio', '_blank')
}
function typeWriter(callback) {
  console.log(txt.length)
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function show() {
  const collection = document.getElementsByClassName("d-none");
  const elementsArray = Array.from(collection);
  elementsArray.forEach((element) => {
    console.log("hey")
    element.classList.remove("d-none")
  });
}
typeWriter()
setTimeout(show, 1000)
function handleprompts(event) {
      /*
      if (event.key === 'Enter') {
      console.log('Enter key pressed!');
      if (input.value == "help") {
        help()
      } else if (input.value == "about") {
        about()
      } else if (input.value == "contact") {
        contact()
      } else if (input.value == "ui") {
        contact()
      } else {
        unknown(input.value)
      }
      */
    if (event.key.length === 1 || event.key === "Backspace" || event.keyCode == 13) {
        	const userInput = event.key;
        	if (userInput === "Backspace") {
        		input.value = input.value.slice(0, -1);
        	} else if(event.keyCode == 13) {
      if (input.value == "help") {
        help()
      } else if (input.value == "about") {
        about()
      } else if (input.value == "contact") {
        contact()
      } else if (input.value == "ui") {
        ui()
      } else if(input.value.startsWith("rps")){
				const args = input.value.split(" ")
				const choice = args[1]
				rps(choice)
			} else if(input.value == "clear"){
				clear()
			} else if(input.value.startsWith("echo")){
				const args = input.value.split(" ")
				args.shift()
				const sen = args.join(" ")
				echo(sen)
			} else if(input.value == "quote"){
				quote()
			} else if(input.value == "source"){
				source()
			} else {
        unknown(input.value)
      }
      			var originalElement = document.getElementById('browhat');
      			var clonedElement = originalElement.cloneNode(true);
      			originalElement.removeAttribute('id')
      			document.getElementById("prompt").appendChild(clonedElement);
      			input.setAttribute('disabled', true)
      			input.removeAttribute('id')
      			response.removeAttribute('id')
      			input = document.getElementById('main')
      			response = document.getElementById('response')
      			response.innerHTML = ''
      			input.value = ''
      			refreshEventListener()
					} else {
            input.value += userInput;
        	}
    	}

    }
function refreshEventListener() {
  //var inp = document.getElementById('main');

  // Remove existing event listener
  document.removeEventListener('keydown', handleprompts);

  // Add the updated event listener
  document.addEventListener('keydown', handleprompts);
}

window.addEventListener('DOMContentLoaded', function() {
	const isMobile = navigator.userAgentData.mobile;
	if (isMobile) {
		alert("Your device is not supported. You will be redirected to the UI version")
		location.replace("/ui.html")
	}
  document.addEventListener('keydown', handleprompts);

});

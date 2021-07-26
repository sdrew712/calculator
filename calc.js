const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	let solution;

	if (mathSymbol === "+"){
		solution = num1 + num2;
	}
	else if (mathSymbol === "-"){
		solution = num1 - num2;
	}
	else if (mathSymbol === "*"){
		solution = num1 * num2;
	}
	else if (mathSymbol === "/"){
		solution = num1 / num2;
	}
	else if (mathSymbol === "v"){
		solution = Math.sqrt(num1);
	}
	else if (mathSymbol === "^"){
		solution = num1 ** num2;
	}
	else if (mathSymbol === "%"){
		solution = num1 % num2;
	}
	else{
		solution = "You must've typed something wrong, because I cannot calculate this.";
	}

	console.log(solution);

	// This line closes the connection to the command line interface.
	reader.close()

});
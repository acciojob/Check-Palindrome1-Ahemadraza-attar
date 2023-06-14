// complete the given function

function palindrome(str){
 let str2=str.split("").reverse().join("");
	if (str2===str) 
	{
		console.log(true);
	}
	else
	{
		console.log(false);
	}
}
module.exports = palindrome

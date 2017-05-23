function breakIt()
{
	//Counter
	var i = 0;
	
	//ATTENTION:No parse error even without body, but will not work without semicolon
	while(split(i++));
	
}



//Soll den String in einzelne Buchstaben unterteilen
function split(i)
{
	//Preparing all Elements 
	var usrInput = document.getElementById('user_input').value; 
	var tag		 = document.createElement('LI');
	var node	 = document.createTextNode(usrInput.charAt(i));
	var result	 = document.getElementById('result');
	
	
	if(i === usrInput.length)
	{	
		alert("DONE!");
		
		//When all string characters were iterated
		return false
	}
	else
	{
		//Create new tag and put a string character as tag-content
		tag.appendChild(node);
		result.appendChild(tag);
				
		return true;
		
	}
}
//your code here
document.getElementById('addTodoBtn').addEventListener('click',
			()=> {

let input = document.getElementById("newTodoInput");
				if(input.value != "")
					
				{const node = document.createElement("li");
document.getElementById('todoList').appendChild(node).innerText=input.value;
				input.value = "";}
				else
					window.alert("please input something!")
				
});


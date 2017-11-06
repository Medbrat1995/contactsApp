

function addNewContact(){
	let name = document.getElementById("name").value,
	surname = document.getElementById("surname").value,
	phoneNumber = document.getElementById("phoneNumber").value;
	var newObj = {
		"name" : name,
		"surname" : surname,
		"phoneNumber" : phoneNumber
	};
	contacts.push(newObj);
	console.log(contacts);
	renderContact(newObj);
}



function renderContacts(conts){
	for(obj of conts){
		renderContact(obj);
	}
}


function renderContact(obj){
	console.log(obj);
		let tr = document.createElement('tr');
		table.appendChild(tr);
		for(prop in obj){
			let pro = document.createElement('td');
			pro.innerHTML = obj[prop];
			tr.appendChild(pro);
		}
		let dltBTN = document.createElement('button');
		dltBTN.innerHTML='Удалить';
		dltBTN.onclick = function(e){
			e.preventDefault();
			this.parentNode.remove();
		}
		tr.appendChild(dltBTN);
}

function getAllContacts(){
	fetch('./contacts.txt')
	.then(function(response){
		if(response.status !== 200){
			
		}
		else
			{
				return response.json();
			}
		})
	.then ((conts) => {
		contacts.push(conts);
		renderContacts(conts)})
	.catch(function(){alert("Experiencing some problems with getting contacts.");})
}


let addBTN = document.getElementById("add-button");
addBTN.onclick = function(e){
	e.preventDefault();
	addNewContact();
}
var contacts = [];
getAllContacts();

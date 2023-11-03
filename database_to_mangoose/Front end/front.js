const dataFrom=document.getElementById('data-from');
const FirstnameInput=document.getElementById('fname');
const LastnameInput=document.getElementById('lname');
const EmailInput=document.getElementById('email');
const phonenumberInput=document.getElementById('phone');
const dataList = document.getElementById("data-list");

const apiUrl = "http://localhost:1000/get";


// function to fetch render data

function fetchData(){
    fetch(apiUrl)
    .then(response =>response.json())
    .then(data=>{
        dataList.innerHtml ="";
        data.forEach(item => {
            const itemDiv =document.createElement("div");
            itemDiv.innerHTML=`
            <p><strong>Firstname:</strong>${item.Firstname}</p>
            <p><strong>Lastname:</strong>${item.Lastname}</p>
            <p><strong>Email:</strong>${item.Email}</p>
            <p><strong>phonenumber:</strong>${item.phonenumber}</p>
            <button onclick="editItem('${item._id}')">Edit</button>
            <button onclick="editItem('${item._id}')">Edit</button>
            `;
            dataList.appendChild(itemDiv);
        });
    })
    .catch(error =>console.log("Error fetching data:",error));
}


//function to add a new item
function addItem(){
    const Firstname =FirstnameInput.value;
    const Lastname =LastnameInput.value;
    const Email =EmailInput.value;
    const phonenumber =phonenumber.value;
    const data ={Firstname,Lastname,Email,phonenumber};
    console.log(data);
       fetch('http://localhost:1000/post',{
        method:"POST",
        body:JSON.stringify(data),
        header:{
            "content-type":"application/json: charset=UTF-8"
        }
    })
    .then(response =>response.json())
    .then(()=>{
        fetchData();
        clearForm();
    })
    .catch (errpr=> console.error("Error adding data:", error));
}


// Function to clear the form
function clearForm() {
    FirstnameInput.value = "";
    LastnameInput.value = "";
    EmailInput.value = "";
    phonenumberInput.value = "";

}

// Event listener for form submission
dataForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addItem();
});

// Initial fetching of data
fetchData();
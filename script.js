

function generateCard()
{
    let fName=localStorage.getItem("fName");


if(fName!=null)
{
    document.getElementById("fname").innerText=fName;
   
}
else{
     let firstName = prompt("Please enter your first name:");
     if(firstName==="")
        {
            alert("Please Enter a valid Value");
            generateCard()
            return;
            
        }
     
    localStorage.setItem("fName",firstName);
    document.getElementById("fname").innerText=localStorage.getItem("fName");
}
let lName=localStorage.getItem("lName");


if(lName!=null)
{
    document.getElementById("lname").innerText=lName;
   
}
else{
     let lastName = prompt("Please enter your Last name:");
     if(lastName==="")
        {
            alert("Please Enter a valid Value");
            generateCard()
            return;
        }
    localStorage.setItem("lName",lastName);
    document.getElementById("lname").innerText=localStorage.getItem("lName");
}
let country=localStorage.getItem("country");


if(country!=null)
{
    document.getElementById("country").innerText=country;
   
}
else{
     let country = prompt("Please enter your country name:");
     if(country==="")
        {
            alert("Please Enter a valid Value");
            generateCard()
            return;
            
        }
    localStorage.setItem("country",country);
    document.getElementById("country").innerText=localStorage.getItem("country");
}
let phoneNo=localStorage.getItem("phoneNo");


if(phoneNo!=null)
{
    document.getElementById("phoneNo").innerText=phoneNo;
   
}
else{
     let phoneNo = prompt("Please enter your phoneNo:");
     if(phoneNo==="")
        {
            alert("Please Enter a valid Value");
            generateCard()
            return;
        }
    localStorage.setItem("phoneNo",phoneNo);
    document.getElementById("phoneNo").innerText=localStorage.getItem("phoneNo");
}
let state=localStorage.getItem("state");


if(state!=null)
{
    document.getElementById("state").innerText=state;
   
}
else{
     let state = prompt("Please enter your state:");
     if(state==="")
        {
            alert("Please Enter a valid Value");
            generateCard()
            return;
        }
    localStorage.setItem("state",state);
    document.getElementById("state").innerText=localStorage.getItem("state");
}

let city=localStorage.getItem("city");


if(city!=null)
{
    document.getElementById("city").innerText=city;
   
}
else{
     let city = prompt("Please enter your city:");
     if(city==="")
        {
            alert("Please Enter a valid Value");
            generateCard()
            return;
        }
    localStorage.setItem("city",city);
    document.getElementById("city").innerText=localStorage.getItem("city");
}
let village=localStorage.getItem("village");


if(village!=null)
{
    document.getElementById("village").innerText=village;
   
}
else{
     let village = prompt("Please enter your village:");
     if(city==="")
        {
            alert("Please Enter a valid Value");
            generateCard()
            return;
        }
    localStorage.setItem("village",village);
    document.getElementById("village").innerText=localStorage.getItem("village");
}
}
generateCard();
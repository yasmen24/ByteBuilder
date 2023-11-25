
function validate(){

    var empt="";

            //name
            var name = document.getElementById("name");
            if (name.value === empt) {
                alert("Please enter the kid's name.");
                return false;
            }


            //name Start With Letter
            if (/^[0-9]/.test(name.value)) {
                alert("Kid's name cannot start with a number.");
                return false;
            }

            //dob validate
            var dob = document.getElementById("dob");
            var dobValue = new Date(dob.value);
            if (dobValue.getFullYear() > 2017) {
                alert("Children under the age of 6 are not accepted, sorry!");
                return false;
            }

            //gender validate
            var genderTemp = document.querySelector('input[name="gender"]:checked');
            if (!genderTemp) {
                alert("Please select the kid's gender.");
                return false;
            }
            var gender = document.querySelector('input[name="gender"]:checked').value;

            // var gender =document.getElementsByName('gender')
            // gender.forEach(function(radio){
            //     radio.addEventListener('change',function(){
            //         if(radio.checked){
            //             localStorage('Gendeer',radio.checked)
            //         }
            //     });
            // });

            // gender.checked ? gender="Male" : gender="Female";


            var fileInput = document.getElementById("img");
            if (fileInput.value === empt) {
                alert("Please upload a file.");
                return false;
            }


            //phone number validate
            var phone = document.getElementById("phone");
            if (phone.value === empt) {
                alert("Please enter the phone number.");
                return false;
            }
            if (phone.value.length !== 10) {
                alert("Phone number should be 10 digits.");
                return false;
            }

            //email validate
            var email = document.getElementById("email");
            if (email.value === empt) {
                alert("Please enter your email address.");
                return false;
            }

            var names = name.value;
            var storedNames = JSON.parse(localStorage.getItem('names') || '[]');
            storedNames.push(names);
            localStorage.setItem('names', JSON.stringify(storedNames));

            // var registeredNames = JSON.parse(localStorage.getItem('registeredNames')) || [];
            // registeredNames.push(name);
            // localStorage.setItem('registeredNames', JSON.stringify(registeredNames));

            // printChildInfo(name);

            // localStorage.setItem('name',name.value);
            // localStorage.setItem('DOB',dob.value);
            // localStorage.setItem('Gender',gender);
            // localStorage.setItem('Phone',phone.value);
            // localStorage.setItem('Email',email.value);
            // var file = fileInput.files[0];
            // var reader = new FileReader();

            //     reader.onload = function (event) {
            //     var imageData = event.target.result;
            //     localStorage.setItem("imageData", imageData);
            //     };

            // reader.readAsDataURL(file);
            printChildInfo(name.value, dob.value, gender, phone.value, email.value, fileInput.files[0]);

  return true;
            
        }

        function printChildInfo(name, dob, gender, phone, email, file) {
            var printContent = '<div style="border: 1px solid black; padding:5px;">';
            printContent += '<img src="' + URL.createObjectURL(file) + '" alt="Uploaded File" style="max-width: 200px;"><br>';
            printContent += "<p>Child Name: " + name + "</p>";
            printContent += "<p>DOB: " + dob + "</p>";
            printContent += "<p>Gender: " + gender + "</p>";
            printContent += "<p>Phone: " + phone + "</p>";
            printContent += "<p>Email: " + email + "</p>";
            printContent += "</div>";
          
            var printWindow = window.open("", "_blank");
            printWindow.document.write('<html><head><title>Print Page</title></head><body>'+ printContent +'</body></html>');
            printWindow.document.close();
          
            printWindow.onload = function() {
              printWindow.print();
            };
          }

//   function printChildInfo(name) {
//     var childInfoPrint = document.createElement("div");
  
//     // Display the registered names as an array
//     var registeredNames = JSON.parse(localStorage.getItem('registeredNames')) || [];
//     childInfoPrint.innerHTML = `
//       <h3>Registered Names</h3>
//       <p>${registeredNames}</p>
//     `;
  
//     // Retrieve the uploaded file
//     var uploadedFile = document.getElementById("img").files[0];
//     var fileURL = URL.createObjectURL(uploadedFile);
  
//     // Display the uploaded file
//     childInfoPrint.innerHTML += `
//       <h3>Uploaded File</h3>
//       <img src="${fileURL}" alt="Uploaded File">
//     `;
  
//     // Create a new window for printing
//     var printWindow = window.open("", "_blank");
//     printWindow.document.open();
  
//     // Write the child information to the print window
//     printWindow.document.write("<html><head><title>Child Information</title></head><body>");
//     printWindow.document.write("<h3>Child Information</h3>");
//     printWindow.document.write(childInfoPrint.innerHTML);
//     printWindow.document.write("</body></html>");
  
//     printWindow.document.close();
  
//     // Trigger the print dialog
//     printWindow.print();
//     printWindow.close();
//   }

        

    
//     // let name = document.forms["myForm"]["name"].value;
//     // if (name.value.match(/[0-9]*/)) {
//     //   alert("Name must not contain numbers");
//     //   return false;}
    

//     // let phone = document.forms["myForm"]["phone"].value;
//     // if(!phone==10){
//     //     alert("Phone number should be 10 digits");
//     //     return false;}
    
//     // let dob=document.forms["myForm"]["phone"].value;
//     // if(dob.getFullYear() > 2017){
//     //     alert("Children under the age of 6 are not accepted- sorry!");
//     //     return false;
//     // }
    
//     // }

//     // //let phone=document.getElementById("phone").value;
//     // let phoneRe= /\d{10}/;
//     // let valid=phoneRe.test(phone);

//     // if (valid===false){
//     //     alert("Phone number should be 10 digits");
//     //     return false;
//     // }
//     // return true;//

  
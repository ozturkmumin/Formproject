let formitems = document.getElementById("form-items");
let formitems2 = document.getElementById("form-items2");
let formitems3 = document.getElementById("form-items3");
let formitems4 = document.getElementById("form-items4");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let form = document.querySelector("form");
let form2 = document.getElementById("form-2");
let form3 = document.getElementById("form-3");
let modal = document.getElementById("form-modal");
var input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
var phone = document.getElementById("phone");
const email = document.getElementById("email");
var money = document.getElementById("money");
const submitBtn = document.getElementById("submitBtn");
const submitBtn2 = document.getElementById("submitBtn2");

input1.onblur = function () {
     const inputcontrol = this.value;
     console.log(inputcontrol);
     if (inputcontrol === "") {
          input1.style.borderColor = "Red";
     } else if (inputcontrol.length > 2) {
          input1.style.borderColor = "Green";
     } else {
          input1.style.borderColor = "Red";
     }
};

input2.onblur = function () {
     const inputcontrol = this.value;
     console.log(inputcontrol);
     if (inputcontrol === "") {
          input2.style.borderColor = "Red";
     } else if (inputcontrol.length > 2) {
          input2.style.borderColor = "Green";
     } else {
          input2.style.borderColor = "Red";
     }
};
phone.onblur = function () {
     const inputcontrol = this.value;
     console.log(inputcontrol);
     if (inputcontrol === "") {
          phone.style.borderColor = "Red";
     } else if (inputcontrol.length > 9) {
          phone.style.borderColor = "Green";
     } else {
          phone.style.borderColor = "Red";
     }
};
email.onblur = function () {
     const inputcontrol = this.value;
     console.log(inputcontrol);
     if (inputcontrol === "") {
          email.style.borderColor = "Red";
     } else if (inputcontrol.length > 8) {
          email.style.borderColor = "Green";
     } else {
          email.style.borderColor = "Red";
     }
};
money.onblur = function () {
     const inputcontrol = this.value;
     console.log(inputcontrol);
     if (inputcontrol === "") {
          email.style.borderColor = "Red";
     } else if (inputcontrol.length > 8) {
          email.style.borderColor = "Green";
     } else {
          email.style.borderColor = "Red";
     }
};
input1.addEventListener("input", checkInputs);
input2.addEventListener("input", checkInputs);
phone.addEventListener("input", checkInputs2);
email.addEventListener("input", checkInputs2);
money.addEventListener("input", checkInputs3);
function checkInputs() {
     if (input1.value.length > 2 && input2.value.length > 2) {
          submitBtn.disabled = false;
     } else {
          submitBtn.disabled = true;
     }
}
function checkInputs2() {
     if (phone.value.length > 9 && email.value.length > 9) {
          submitBtn2.disabled = false;
     } else {
          submitBtn2.disabled = true;
     }
}
function checkInputs3() {
     if (money.value.length > 2) {
          submitBtn3.disabled = false;
     } else {
          submitBtn3.disabled = true;
     }
}
// function checkInputs2() {
//      var phoneRegex = /^\d{3}-\d{3}-\d{4}$/; // phone number must match "XXX-XXX-XXXX" format
//      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // email must match "example@domain.com" format

//      if (phoneRegex.test(phone) && emailRegex.test(email)) {
//           submitBtn2.disabled = false;
//           console.log("true");
//      } else {
//           submitBtn2.disabled = true;
//      }
// }

submitBtn.addEventListener("click", function () {
     form.style.display = "none";
     form2.style.display = "block";
     formitems.style.borderColor = "#ec5b70";
     formitems2.style.borderColor = "#ec5b70";
     line1.style.borderColor = "#ec5b70";
});
submitBtn2.addEventListener("click", function () {
     form2.style.display = "none";
     form3.style.display = "block";
     formitems.style.borderColor = "#ec5b70";
     formitems2.style.borderColor = "#ec5b70";
     formitems3.style.borderColor = "#ec5b70";
     line1.style.borderColor = "#ec5b70";
     line2.style.borderColor = "#ec5b70";
});
submitBtn3.addEventListener("click", function () {
     document.getElementById("myModal").style.display = "block";
     form3.style.display = "none";
     formitems.style.borderColor = "#ec5b70";
     formitems2.style.borderColor = "#ec5b70";
     formitems3.style.borderColor = "#ec5b70";
     formitems4.style.borderColor = "#ec5b70";
     line1.style.borderColor = "#ec5b70";
     line2.style.borderColor = "#ec5b70";
     line3.style.borderColor = "#ec5b70";
});
function closeModal() {
     document.getElementById("myModal").style.display = "none";
     form.style.display = "block";
     formitems.style.borderColor = "#ec5b70";
     formitems2.style.borderColor = "#dfe2e6";
     formitems3.style.borderColor = "#dfe2e6";
     formitems4.style.borderColor = "#dfe2e6";
     line1.style.borderColor = "#dfe2e6";
     line2.style.borderColor = "#dfe2e6";
     line3.style.borderColor = "#dfe2e6";
}
function saveData() {
     // Get form values
     var name = document.getElementById("input1").value;
     var surname = document.getElementById("input2").value;
     var phone = document.getElementById("phone").value;
     var email = document.getElementById("email").value;
     // Save data to local storage
     localStorage.setItem("name", name);
     localStorage.setItem("surname", surname);
     localStorage.setItem("phone", phone);
     localStorage.setItem("email", email);
}
function clearstorage() {
     localStorage.clear();
}
var data = [{ name: localStorage.getItem("name") }];
var surname = [{ surname: localStorage.getItem("surname") }];
var phonedata = [{ phone: localStorage.getItem("phone") }];
var emaildata = [{ emaildata: localStorage.getItem("email") }];
var nameSpan = document.getElementById("name");
var surnamelocal = document.getElementById("surname");
var phonelocal = document.getElementById("Phonedata");
var emaillocal = document.getElementById("Emaildata");

// Set data
nameSpan.innerHTML = data[0].name;
surnamelocal.innerHTML = surname[0].surname;
phonelocal.innerHTML = phonedata[0].phone;
emaillocal.innerHTML = emaildata[0].emaildata;

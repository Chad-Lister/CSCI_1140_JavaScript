/*
	File:  contact.js
	Author:  Chad Lister
	Date: 05/13/2021
	
	Handles form data for future mailing list and quote for Final Project for CSCI 1140 Intro to JavaScript.
	
	Copied and modified from Chapter # 28 (?) assignment.
	
*/

function validate() {

			// Custmer name
			if (document.myForm.Name.value == "") {
				alert( "Please provide your name!" );
				document.myForm.Name.focus();
				return false;
			}
			
			// Address line 1
			if (document.myForm.Address1.value == "") {
				alert( "Please provide your address!" );
				document.myForm.Address1.focus();
				return false;
			}

			// Customer city
			if (document.myForm.City.value == "") {
				alert("Please provide your city!");
				document.myForm.City.focus();
				return false;
			}
			
			// Email address
			if (document.myForm.EmailAddress.value == "") {
				alert( "Please provide your Email address!" );
				document.myForm.EmailAddress.focus();
				return false;
			}
			
			// Record to console log or mailing list
			console.log("Name is: " + myForm.Name.value);
			console.log("Address line # 1: " + myForm.Address1.value);
			
			// If second line isn't blank
			if (document.myForm.Address2.value != "") {
				console.log("                : " + myForm.Address2.value);
			}
			
			console.log("City is: " + myForm.City.value);
			console.log("Phone number is: " + myForm.PhoneNumber.value);
			console.log("E-mail is: " + myForm.EmailAddress.value);
						
			// If additional informmation isn't blank
			if (document.myForm.Additional.value != "") {
				console.log("Additional Info: " + myForm.Additional.value);
			}
			
			document.querySelector("#thankyou").innerHTML = "Thank you.\nOur staff will respond as soon as possible.";

			return( true );
		}
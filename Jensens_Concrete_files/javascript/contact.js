/*
	File:  contact.js
	Author:  Chad Lister
	Date: 05/18/2021
	
	Handles form data for future mailing list and quote for Final Project for CSCI 1140 Intro to JavaScript.
	
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

			// Customer prefix
			if (document.myForm.Prefix.value == "" || document.myForm.Prefix.value.length != 3) {
				alert("Please provide a valid prefix!");
				document.myForm.Prefix.focus();
				return false;
			}
			
			// Customer phone number
			if (document.myForm.PhoneNumber.value == "" || document.myForm.PhoneNumber.value.length != 4) {
				alert("Please provide a valid phone number!");
				document.myForm.PhoneNumber.focus();
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
			
			console.log("Phone number is: " + myForm.Prefix.value + " - " + myForm.PhoneNumber.value);
			console.log("E-mail is: " + myForm.EmailAddress.value);
						
			// If additional informmation isn't blank
			if (document.myForm.Additional.value != "") {
				console.log("Additional Info: " + myForm.Additional.value);
			}
			
			document.querySelector("#thankyou").innerHTML = 'Thank you!<br>Our staff will respond as soon as possible.';

			return( true );
		}
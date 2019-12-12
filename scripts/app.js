
// const firstName = document.querySelector('#first');
// const lastName = document.querySelector('#last');
// const email = document.querySelector('#email');
// const why = document.querySelector('#why');
// const message = document.querySelector('#message');

// const inputs = [ 
//     firstName,
//     lastName,
//     email,
//     why,
//     message
//  ];

// const sendButton = document.querySelector('.form-button');
// // console.log(firstName, lastName, email, why, message, sendButton)

// function sendMail(e) {
//     if (e.which == 13 || e.keyCode == 13) {
//         const firstNameValue = firstName.value;
//         const lastNameValue = lastName.value;
//         const emailValue = email.value;
//         const whyValue = why.value;
//         const messageValue = message.value;

//         if (firstNameValue === '' || lastNameValue === '' || emailValue === '' || whyValue === '' || messageValue === '' ) {
//             alert('Please fill out all fields');
//             return;
//         } 
//         else {
//             let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//             if (reg.test(emailValue) == false) 
//             {
//                 alert('Please enter a valid email address.');
//                 return;
//             }
//         }

        

        

//         // for (let i = 0; i < 5; i++) {
//         //     console.log(
//         //     inputs[i]
//         //     );
//         // }

//         // console.log(firstNameValue)
//         // console.log(lastNameValue)
//         // console.log(emailValue)
//         // console.log(whyValue)
//         // console.log(messageValue)
//     }
// }

// // sendButton.addEventListener('click', sendMail);
// sendButton.addEventListener('keyup', sendMail);



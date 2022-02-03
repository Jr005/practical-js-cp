
// .ONLOAD - ONCE EVERYTHING HAS LOADED THEN WERE GOING TO RUN OUR JAVASCRIPT

// DOCUMENT - HAVE ACCESS TO THE WHOLE DOM DOCUMENT BY USING THE WORD "DOCUMENT" IN CONSOLE LOG


// FUNCTION TO LOAD POP UP WINDOW

window.onload = function () {

    // VARIABLE - MAKE POP INTO BOOLEON
    let emailState = false

    // VARIABLE - GET THE CLASS NAME FOR POPUP MODAL
    let emailModal = document.getElementsByClassName('email-modal') [0]

    // VARIABLE - GET THE CLASS NAME TO CLOSE MODAL
    let closeModal = document.getElementsByClassName('email-modal__close-btn') [0]

    // VARIABLE - INPUT EMAIL
    let emailInput = document.getElementsByClassName('email-modal__input') [0]

    // VARIABLE - EMAIL BUTTON
    let emailButton = document.getElementsByClassName('email-modal__button') [0]


    // EMAIL IS VALID FUNCTION
    function emailIsValid (email) {
        return /\S+@\S+\.\S+/.test(email)
      }

    // EMAIL VALIDATION INPUT BUTTON FUNCTION
    emailButton.addEventListener('click', () => {
        if (emailIsValid(emailInput.value)) {

            console.log(emailInput.value)
        } else {
            alert('this is not a valid email')
        }
    })



    // VARIABLE - SHOW MODAL FUNCTION
    let showModal = () => {
    // USEING IF TO MAKE SURE MODAL DOES NOT OPEN AGAIN AFTER IT GETS CLOSED OUT
        if(emailState == false) {
            // VARIABLE - ADDING A CLASS
            emailModal.classList.add('email-modal--visible');
            emailState = true
        }
    }

    closeModal.addEventListener('click', () => {
        emailModal.classList.remove('email-modal--visible');
    } )
                // FUNCTION FOR WHEN MOUSE LEAVES PAGE
        document.body.addEventListener('mouseleave', () => {
            // TRIGGER THE FUNCTION
            showModal();
        })

    
    console.log(window.document)
}

    // USE CONSOLE LOG TO SHOW WHAT THE CLOSEMODAL VARIABLE IS DOING
    // console.log(closeModal)
    
    // USE CONSOLE LOG TO SHOW WHAT THE EMAILMODAL VARIABLE IS DOING
    // console.log(emailModal)
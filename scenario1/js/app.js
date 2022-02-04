
// .ONLOAD - ONCE EVERYTHING HAS LOADED THEN WERE GOING TO RUN OUR JAVASCRIPT

// DOCUMENT - HAVE ACCESS TO THE WHOLE DOM DOCUMENT BY USING THE WORD "DOCUMENT" IN CONSOLE LOG


// FUNCTION TO LOAD POP UP WINDOW

window.onload = function () {

    let emailState = false

    let emailModal = document.getElementsByClassName('email-modal') [0]

    let closeButton = document.getElementsByClassName('email-modal__close-btn') [0]

    let emailInput = document.getElementsByClassName('email-modal__input') [0]

    let emailButton = document.getElementsByClassName('email-modal__button') [0]

    let thankContainer = document.getElementsByClassName('email-modal_thank') [0]


     // VARIABLE - SHOW MODAL FUNCTION
 let showModal = () => {
    // USEING IF STATEMENT TO MAKE SURE MODAL DOES NOT OPEN AGAIN AFTER IT GETS CLOSED OUT BY USING BOOLEAN (TURNING EMAIL STATE FROM FALSE TO TRUE)
        if(emailState == false) {
            // VARIABLE - ADDING A CLASS
            emailModal.classList.add('email-modal--visible');
            emailState = true
        }
    }



    // ADD ERRORS FUNCTION

    let addErrors = () => {
        document.getElementsByClassName('email-modal__form-group')[0].classList.add('email-modal__form-group--error')
            
        document.getElementsByClassName('email-modal__error-message')[0].classList.add('email-modal__error-message--active')

    }

    // REMOVE ERRORS FUNCTION

    let removeErrors = () => {
        document.getElementsByClassName('email-modal__form-group')[0].classList.remove('email-modal__form-group--error')
            
        document.getElementsByClassName('email-modal__error-message')[0].classList.remove('email-modal__error-message--active')

    }

    // REMOVE ERROR WARNING AFTER USER CLICKS ON INPUT
    emailInput.addEventListener('click', () => {
        // REMOVE ERRORS FUNCTION
        removeErrors ();
    } )
    


    // EMAIL IS VALID FUNCTION
    function emailIsValid (email) {
        return /\S+@\S+\.\S+/.test(email)
      }

    // FUNCTION TO CLOSE MODAL
    let closeModal = () => {
        emailModal.classList.remove('email-modal--visible');
    }

    // EMAIL VALIDATION INPUT BUTTON FUNCTION
    emailButton.addEventListener('click', () => {
        if (emailIsValid(emailInput.value)) {

            console.log(emailInput.value)
        } else {
            
            addErrors()
     
        }
    })



   

        closeButton.addEventListener('click', () => {
            closeModal()
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
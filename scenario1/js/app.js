
// .ONLOAD - ONCE EVERYTHING HAS LOADED THEN WERE GOING TO RUN OUR JAVASCRIPT

// DOCUMENT - HAVE ACCESS TO THE WHOLE DOM DOCUMENT BY USING THE WORD "DOCUMENT" IN CONSOLE LOG

// GOOGLE - FIND ELEMENT BY CLASS

// ANONYMOUS FUNCTION
window.onload = function () {

    // VARIABLE TO GET THE CLASS NAME FOR POPUP MODAL
    let emailModal = document.getElementsByClassName('email-modal') [0]

    // VARIABLE TO GET THE CLASS NAME TO CLOSE MODAL
    let closeModal = document.getElementsByClassName('email-modal__close-btn') [0]

    console.log(closeModal)

    console.log(emailModal)

    // FUNCTION FOR WHEN MOUSE LEAVES PAGE
    document.addEventListener('mouseleave', () => {


        // VARIABLE - ADDING A CLASS
        emailModal.classList.add('email-modal--visible');
        
    })
    console.log(window.document)
}
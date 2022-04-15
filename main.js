/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    logIn = document.getElementById('login'),
    logUp = document.getElementById('logup')

signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    logIn.classList.remove('block')
    logUp.classList.remove('none')
    
    // Add classes
    logIn.classList.toggle('none')
    logUp.classList.toggle('block')
})
    
signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    logIn.classList.remove('none')
    logUp.classList.remove('block')
    
    // Add classes
    logIn.classList.toggle('block')
    logUp.classList.toggle('none')
})
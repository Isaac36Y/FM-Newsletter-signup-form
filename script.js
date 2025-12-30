const btn = document.getElementById('submit-button')
const form = document.getElementById('form')
const emailInput = document.getElementById('email')
const main = document.getElementById('card')
const success = document.getElementById('success')
const span = document.getElementById('span')
const successBtn = document.getElementById('success__btn')


const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData)

    console.log(data)

    span.textContent = data.email;
    
    if (data.email === '') {
        alert("Please enter a valid email address")
    }else if (data.email !== '') {
        main.classList.toggle('hidden')
        success.classList.toggle('hidden')
    }
}


form.addEventListener('submit', handleSubmit)
successBtn.addEventListener('click', () => {
        form.reset();
        span.textContent = ''
        main.classList.toggle('hidden')
        success.classList.toggle('hidden')
})
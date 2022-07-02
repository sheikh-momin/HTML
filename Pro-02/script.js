let form =document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    let isvalid = false
    let formData = {}
    ;[...this.elements].forEach(el => {
        if (el.type != 'submit'){
            isvalid = validator(el)
            if (isvalid){
                formData[el.name] = el.value
            }else{
                // elements.classList.add('is-invalid')
                alert(`${el.name} is Required`)
                
            }
        }
    })
    if(isvalid){
        console.log(formData)
        this.reset()
        alert('Thank You For Geving Your Information')
        
    }
    
})

function validator(el){
    if(!el.value){
        return false
    }

    return true
}
// listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
     event.preventDefault();


     //type assertion
     const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;   
     const nameElement = document.getElementById('name') as HTMLInputElement;
     const emailElement = document.getElementById('email') as HTMLInputElement;
     const phoneElement = document.getElementById('phone') as HTMLInputElement;
     const educationElement = document.getElementById('education') as HTMLInputElement;
     const experienceElement = document.getElementById('experience') as HTMLInputElement;
     const skillsElement = document.getElementById('skills') as HTMLInputElement;


    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
 
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education= educationElement.value;
        const experience = experienceElement.value;
        const skills= skillsElement.value;


      // picture elements 
 const profilePictureFile = profilePictureInput.files?.[0]
 const profilePictureURL = profilePictureFile? URL.createObjectURL(profilePictureFile) : "";



     //create resume Output
     const resumeOutput = `
     <h2>Resume</h2>
     ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture"> ` : ''}
     <p><strong>Name:</strong> <span id="edit-name" Class="editable"> ${name} </span> </p>
     <p><strong>Email:</strong> <span id="edit-email" Class="editable">  ${email} </span> </p>
     <p><strong>Phone:</strong> <span id="edit-phone" Class="editable"> ${phone} </span> </p>

     <h3>Education</h3>
     <p id="edit-education" Class="editable">  ${education}</p>

     <h3>Experience</h3>
     <p id="edit-experience" Class="editable"> ${experience}</p>

     <h3>skills</h3>
     <p id="edit-skills" Class="editable"> ${skills}</p>
     `;



   
     const resumeOutputElement = document.getElementById(`resumeOutput`)
     if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
        makeEditable();
     } else {
        console.error(`the resume output elements are missing`)
     }
} else {
   console.error(`one or more output are elements are missing`)
}
         
})

function makeEditable(){
   const editableElements = document.querySelectorAll('.editable');
   editableElements.forEach(element => {
      element.addEventListener('click' , function(){
         const currentElement = element as HTMLElement;
         const currentValue = currentElement.textContent || "";

         //replace content
         if(currentElement.tagName === "p" ||  currentElement.tagName === 'SPAN'){
            const input = document.createElement('input')
            input.type = 'text'
            input.value = currentValue
            input.classList.add('editing-input')

            

            currentElement.style.display = 'none'
            currentElement.parentNode?.insertBefore(input,currentElement)
            input.focus()
          }

         })
    })
}

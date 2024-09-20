var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // picture elements 
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        //create resume Output
        var resumeOutput = "\n     <h2>Resume</h2>\n     ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\"> ") : '', "\n     <p><strong>Name:</strong> <span id=\"edit-name\" Class=\"editable\"> ").concat(name_1, " </span> </p>\n     <p><strong>Email:</strong> <span id=\"edit-email\" Class=\"editable\">  ").concat(email, " </span> </p>\n     <p><strong>Phone:</strong> <span id=\"edit-phone\" Class=\"editable\"> ").concat(phone, " </span> </p>\n\n     <h3>Education</h3>\n     <p id=\"edit-education\" Class=\"editable\">  ").concat(education, "</p>\n\n     <h3>Experience</h3>\n     <p id=\"edit-experience\" Class=\"editable\"> ").concat(experience, "</p>\n\n     <h3>skills</h3>\n     <p id=\"edit-skills\" Class=\"editable\"> ").concat(skills, "</p>\n     ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error("the resume output elements are missing");
        }
    }
    else {
        console.error("one or more output are elements are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}

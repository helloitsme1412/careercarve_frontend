document.addEventListener("DOMContentLoaded", function () {
    const sortable = new Sortable(document.getElementById("sortable"), {
      animation: 150,
    });
  
    const editButtons = document.getElementsByClassName("edit-btn");
    for (let i = 0; i < editButtons.length; i++) {
      editButtons[i].addEventListener("click", function () {
        const section = this.parentNode;
        const sectionName = section.getElementsByClassName("section-name")[0];
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = sectionName.innerText;
        section.replaceChild(inputField, sectionName);
        inputField.focus();
        inputField.addEventListener("blur", function() {
          const newName = inputField.value;
          section.replaceChild(sectionName, inputField);
          
          if (newName && newName !== sectionName.innerText) {
            sectionName.innerText = newName;
            enableSaveButton();
          }
        });
      });
    }
    
  

const saveButton = document.querySelector('.save-btn');
saveButton.style.display = 'none';
const inputs = document.querySelectorAll('input[type="checkbox"]');
inputs.forEach(input => {
  input.addEventListener('change', showSaveButton);
});


function showSaveButton() {
  saveButton.style.display = 'block';
}
saveButton.addEventListener('click', () => {
  alert('Changes Saved');
});
const liElements = document.querySelectorAll('li.section');
liElements.forEach(li => {
  const toggleSwitch = li.querySelector('.toggle-input');
  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      li.style.backgroundColor = 'lightgray';
    } else {
      li.style.backgroundColor = '';
    }
  });
});


const sectionDescriptions = {
  'Profile Summary': 'If you are a career changer or have many years of experience, craft a powerful summary to highlight your accomplishments and skills. Show the employer, at a glance, why you are qualiﬁed for the job!',
  'Academic and Cocurricular Achievement': 'Add any Academic and co-curricular achievements or research papers/patents',
  'Summer Internship Experience': 'Write your Summer Internship Experience, where you have worked and what you did',
  'Work Experience': 'If you are a working professional please add your Work Experience',
  'Projects': 'Add your personal Projects or anything you worked on, it could also be your research papers',
  'Certifications': 'Add certifications that you achieved from different organisations',
  'Leadership Positions': 'Add Leadership Positions if any',
  'Extracurricular': 'Add any Extracurricular activities that you have taken part in.',
  'Education': 'Add your Education/schooling.'
};

const infoButtons = document.querySelectorAll('.info-btn');
infoButtons.forEach(infoButton => {
  infoButton.addEventListener('click', () => {
    const li = infoButton.parentNode;
    const sectionName = li.querySelector('.section-name').textContent;
    const description = sectionDescriptions[sectionName];
    //const descriptionDiv = li.querySelector('.descriptionDiv');
    alert(description);
    //descriptionDiv.textContent = description;
    //if (descriptionDiv.style.display === 'none') {
     // descriptionDiv.style.display = 'block';
    //} else {
     // descriptionDiv.style.display = 'none';
    //}
  });
});

});
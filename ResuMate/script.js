
function generateResume() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const details = document.getElementById("details").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;
  const hobbies = document.getElementById("hobbies").value;
  const template = document.getElementById("template").value;

  const resumeDiv = document.getElementById("resumePreview");
  resumeDiv.innerHTML = `
    <div class="resume ${template}">
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>About Me:</strong> ${details}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <ul>${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
      <h3>Hobbies</h3>
      <ul>${hobbies.split(',').map(hobby => `<li>${hobby.trim()}</li>`).join('')}</ul>
    </div>
  `;
}

function printResume() {
  const printContents = document.getElementById("resumePreview").innerHTML;
  const originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}

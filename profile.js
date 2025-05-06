fetch('profile.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('fName').textContent = data.fName;
    document.getElementById('lName').textContent = data.lName;
    document.getElementById('email').textContent = data.email;
    if (document.getElementById('age')) {
      document.getElementById('age').textContent = data.age;
    }
  })
  .catch(error => console.error('JSON laadimise viga:', error));

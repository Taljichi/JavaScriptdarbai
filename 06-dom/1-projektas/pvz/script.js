document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const content = document.getElementById('content');
  
    form.addEventListener('change', function () {
      const selectedValue = document.querySelector('input[name="group"]:checked').value;
  
  
      if (selectedValue === 'option1') {
        content.style.display = 'none';
      } else if (selectedValue === 'option2') {
        content.style.display = 'block';
      }
    });
  });
  
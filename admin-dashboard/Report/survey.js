document.addEventListener("DOMContentLoaded", function() {
    const rangeInputs = document.querySelectorAll("input[type='range']");
    rangeInputs.forEach(input => {
      input.addEventListener("input", function() {
        const valueSpan = document.getElementById(`${this.id}Value`);
        valueSpan.textContent = this.value;
      });
    });
  
    const form = document.getElementById("satisfactionForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      // Handle form submission (e.g., send data to server)
      alert("Form submitted successfully!");
    });
  });
  
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
  });
  
  document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("popup")) {
      document.getElementById("popup").style.display = "none";
    }
  });
  
  document.getElementById("submitButton").addEventListener("click", function() {
    const inputs = document.querySelectorAll(".form input, .form textarea");
    let output = {};
    inputs.forEach(input => {
      output[input.placeholder] = input.value;
    });
    document.getElementById("output").textContent = JSON.stringify(output);
    document.getElementById("popup").style.display = "none";
  });
  
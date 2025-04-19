document.addEventListener("DOMContentLoaded", function () {
    // Function to update date and time
    function updateDateTime() {
      const now = new Date();
      const formattedDateTime = now.toLocaleString();
      document.getElementById("datetime").innerText = formattedDateTime;
    }
  
    setInterval(updateDateTime, 1000);
    updateDateTime();
  
    // Image Slider Functionality
    let index = 0;
    const slides = document.querySelectorAll("#slider .slide");
  
    function showSlide(n) {
      slides.forEach((slide, i) => {
        slide.style.display = i === n ? "block" : "none";
      });
    }
  
    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }
  
    showSlide(index);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  
    
  });
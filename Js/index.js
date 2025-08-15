document.addEventListener("DOMContentLoaded", () => {
  const counterSection = document.getElementById("count");
  const numberElements = document.querySelectorAll("#count h2");
  
  function runCounters() {
    numberElements.forEach(numberEl => {
      numberEl.textContent = "0"; 
      
      const finalNumber = +numberEl.getAttribute("data-target");
      const totalTime = 2000; // مدة العد كاملة
      const updateDelay = 20; // كل كم مللي ثانية يتحدث الرقم
      const totalSteps = totalTime / updateDelay;
      const stepAmount = finalNumber / totalSteps;
      let currentNumber = 0;
      
      const counterInterval = setInterval(() => {
        currentNumber += stepAmount;
        if (currentNumber >= finalNumber) {
          clearInterval(counterInterval);
          numberEl.textContent = finalNumber;
        } else {
          numberEl.textContent = Math.floor(currentNumber);
        }
      }, updateDelay);
    });
  }
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounters();
      }
    });
  }, { threshold: 0.5 });
  
  sectionObserver.observe(counterSection);
});



let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll === 0) {
    navbar.classList.remove("scrolled-up", "scrolled-down");
    navbar.classList.add("default-color");
  } else if (currentScroll > lastScrollTop) {
    navbar.classList.remove("scrolled-up", "default-color");
    navbar.classList.add("scrolled-down");
  } else {
    navbar.classList.remove("scrolled-down", "default-color");
    navbar.classList.add("scrolled-up");
  }

  lastScrollTop = currentScroll;
});



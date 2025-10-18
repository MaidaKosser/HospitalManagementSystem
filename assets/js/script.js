 const header = document.getElementById("mainHeader");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  const backToTop = document.getElementById('backToTop');
  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {  
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  });
  // Smooth scroll to top
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  const form = document.getElementById("appointmentForm");
  const toastEl = document.getElementById("apptToast");
  const toastBody = document.getElementById("toastBody");
  const toast = new bootstrap.Toast(toastEl);

  form.addEventListener("submit", function(e) {
  e.preventDefault(); 
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  // Customize toast message
  toastBody.innerText = `Appointment booked for ${name} on ${date}!`;
  // Show toast
  toast.show();
  // Close modal
  const modalEl = bootstrap.Modal.getInstance(document.getElementById("appointmentModal"));
  modalEl.hide();
  // Reset form
  form.reset();
  });

   
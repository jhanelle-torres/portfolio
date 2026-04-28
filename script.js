const navLinks = document.querySelectorAll('.sidebar nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  const skillBars = document.querySelectorAll('.progress-bar span');
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom > 0){
      const width = bar.getAttribute('data-progress');
      bar.style.width = width;
    }
  });
});


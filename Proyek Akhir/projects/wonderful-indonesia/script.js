document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      // Dapatkan tinggi header
      const headerHeight = document.querySelector('header').offsetHeight;
  
      // Scroll ke elemen target dengan smooth behavior, dikurangi dengan tinggi header
      window.scrollTo({
        // top: targetElement.offsetTop,
        top: targetElement.offsetTop - (headerHeight + 20),
        behavior: 'smooth'
      });
    });
  });
  
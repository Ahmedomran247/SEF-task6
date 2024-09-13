document.querySelectorAll('.copyButton').forEach(function(button) {
    button.addEventListener('click', function() {
      alert('تم نسخ الرابط!');
      const copyText = document.getElementById('copyText');
      copyText.style.opacity = 1;
      setTimeout(function() {
        copyText.style.opacity = 0;
      }, 2000);
    });
  
    button.addEventListener('mouseenter', function() {
      this.classList.add('btn-success');
    });
  
    button.addEventListener('mouseleave', function() {
      this.classList.remove('btn-success');
    });
  });
  document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-section').classList.remove('hidden');
  });
  
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('login-section').classList.add('hidden');
  });
  
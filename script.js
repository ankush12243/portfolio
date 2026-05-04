function goToProjects() {
  window.location.href = "projects.html";
}

function checkFadeElements() {
  var fadeElements = document.querySelectorAll('.fade-in');
  for (var i = 0; i < fadeElements.length; i++) {
    var element = fadeElements[i];
    var rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      element.classList.add('visible');
    }
  }
}

// Run on scroll
window.addEventListener('scroll', checkFadeElements);

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  checkFadeElements();
});

// Form handling
var forms = document.querySelectorAll('form');
for (var i = 0; i < forms.length; i++) {
  forms[i].addEventListener('submit', function(e) {
    e.preventDefault();
    var button = this.querySelector('button');
    if (!button) return;
    var originalText = button.textContent;
    button.textContent = 'Message Sent!';
    button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    setTimeout(function() {
      button.textContent = originalText;
      button.style.background = 'linear-gradient(135deg, #22d3ee, #3b82f6)';
      e.target.reset();
    }, 3000);
  });
}

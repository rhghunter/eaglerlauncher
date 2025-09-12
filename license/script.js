// Simple animation for page elements
document.addEventListener('DOMContentLoaded', function() {
    // Animate the license container on load
    const licenseContainer = document.querySelector('.license-container');
    licenseContainer.style.opacity = '0';
    licenseContainer.style.transform = 'translateY(20px)';
            
    setTimeout(() => {
        licenseContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        licenseContainer.style.opacity = '1';
        licenseContainer.style.transform = 'translateY(0)';
    }, 300);
            
    // Add click event to navigation buttons for smooth transition
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
                    
            // Animate out
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
                    
            // Navigate after animation
            setTimeout(() => {
                window.location.href = target;
            }, 300);
        });
    });
});
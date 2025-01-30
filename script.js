document.addEventListener('DOMContentLoaded', function() {
    const openIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-xmark');
    const sidemenu = document.getElementById('sideMenu');
    const navLinks = document.querySelectorAll('#sideMenu li a');

    openIcon.addEventListener('click', function() {
        sidemenu.style.right = '0';
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        sidemenu.style.right = '-200px';
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            closemenu(); // Close the side menu on mobile
            handleNavLinkClick(event); // Handle navigation link click
        });
    });

    function openmenu() {
        if(window.innerWidth <= 768) {
            sidemenu.style.right = '0';
            openIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        }
    }

    function closemenu() {
        if(window.innerWidth <= 768) {
            sidemenu.style.right = '-200px';
            openIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    }

    // Handle window resizing
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidemenu.style.right = '0';
            openIcon.style.display = 'none';
            closeIcon.style.display = 'none';
        } else {
            sidemenu.style.right = '-200px';
            openIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });

    function handleNavLinkClick(event) {
        event.preventDefault(); // Prevent default anchor behavior

        const mainScreen = document.getElementById('main-screen');
        const newScreen = document.getElementById('new-screen');
        const newScreen2 = document.getElementById('new-screen2');

        // Show the main screen and hide other screens
        showScreen(mainScreen, newScreen, newScreen2);

        // Scroll to the respective section
        const targetId = event.target.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function showScreen(show, hide1, hide2) {
        if (show) show.classList.remove('hidden');
        if (hide1) hide1.classList.add('hidden');
        if (hide2) hide2.classList.add('hidden');
    }

    document.getElementById('train').addEventListener('click', function(){
        console.log("Train button clicked");
        const mainScreen = document.getElementById('main-screen');
        const newScreen = document.getElementById('new-screen');
        const newScreen2 = document.getElementById('new-screen2');
        
        showScreen(newScreen, mainScreen, newScreen2);
    });
    
    document.getElementById('class').addEventListener('click', function(){
        console.log("Class button clicked");
        const mainScreen = document.getElementById('main-screen');
        const newScreen = document.getElementById('new-screen');
        const newScreen2 = document.getElementById('new-screen2');
        
        showScreen(newScreen2, mainScreen, newScreen);
    });
    
      
});

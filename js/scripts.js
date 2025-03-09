/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

   
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function() {
    var nav = document.getElementById('mainNav');
    
    function checkScroll() {
        if (window.scrollY > window.innerHeight * 0.7) {
            nav.style.position = 'fixed';
            nav.style.top = '0';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.zIndex = '1030';
            nav.classList.add('navbar-shrink');
            document.body.style.paddingTop = nav.offsetHeight + 'px';
        } else {
            nav.style.position = 'relative';
            nav.classList.remove('navbar-shrink');
            document.body.style.paddingTop = '0';
        }
    }


    nav.style.position = 'relative';
    nav.style.width = '100%';
    nav.style.transition = 'all 0.3s ease-in-out';

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenPortfolio = document.querySelector('.hidden-portfolio');

    showMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        hiddenPortfolio.style.display = 'flex';
        hiddenPortfolio.style.opacity = '0';
        setTimeout(() => {
            hiddenPortfolio.style.opacity = '1';
        }, 10);
        
        showMoreBtn.style.opacity = '0';
        setTimeout(() => {
            showMoreBtn.style.display = 'none';
        }, 300);
    });
});

const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme);

function toggleText() {
    const shortText = document.getElementById('shortText');
    const fullText = document.getElementById('fullText');
    const button = document.getElementById('readMoreBtn');

    if (shortText.style.display !== 'none') {
        shortText.style.opacity = '0';
        setTimeout(() => {
            shortText.style.display = 'none';
            fullText.style.display = 'block';
            setTimeout(() => {
                fullText.style.opacity = '1';
            }, 50);
        }, 300);
        button.innerHTML = '-- Weniger anzeigen --';
    } else {
        fullText.style.opacity = '0';
        setTimeout(() => {
            fullText.style.display = 'none';
            shortText.style.display = 'block';
            setTimeout(() => {
                shortText.style.opacity = '1';
            }, 50);
        }, 300);
        button.innerHTML = '-- Mehr lesen --';
    }
}



function switchLanguage(lang) {

    document.querySelectorAll('.faq-content').forEach(content => {
        content.style.display = 'none';
    });
    

    document.getElementById(`faq-${lang}`).style.display = 'block';
    

    document.querySelectorAll('.language-selector .btn-link').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`${lang.toLowerCase()}-btn`).classList.add('active');
}





document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');
    let isHidden = false;


    document.addEventListener('mousemove', function(e) {
        if (isHidden) {
            cursor.style.opacity = '1';
            isHidden = false;
        }
        

        requestAnimationFrame(() => {
            cursor.style.transform = `translate(${e.clientX - 9}px, ${e.clientY - 60}px)`; 
            
        });
    });


    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
        isHidden = true;
    });

    document.addEventListener('mouseenter', function() {
        cursor.style.opacity = '1';
        isHidden = false;
    });


    document.addEventListener('mousedown', function() {
        cursor.style.transform += ' scale(0.9)';
    });

    document.addEventListener('mouseup', function() {
        const currentTransform = cursor.style.transform;
        cursor.style.transform = currentTransform.replace(' scale(0.9)', '');
    });


    const interactiveElements = document.querySelectorAll('a, button, input[type="submit"], .btn, [role="button"]');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            const currentTransform = cursor.style.transform;
            cursor.style.transform = currentTransform + ' scale(1.2)';
        });
        
        element.addEventListener('mouseout', () => {
            const currentTransform = cursor.style.transform;
            cursor.style.transform = currentTransform.replace(' scale(1.2)', '');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var nav = document.getElementById('mainNav');
    
    function checkScroll() {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#212529';
            nav.classList.add('navbar-shrink');
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.classList.remove('navbar-shrink');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');

    // Prüfe, ob bereits eine Cookie-Entscheidung existiert
    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.classList.add('active');
        document.body.classList.add('cookie-modal-open');
    }

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.classList.remove('active');
        document.body.classList.remove('cookie-modal-open');
    });

    declineBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        cookieConsent.classList.remove('active');
        document.body.classList.remove('cookie-modal-open');
    });
});
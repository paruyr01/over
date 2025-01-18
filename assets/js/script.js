function loadLanguage(langCode) {
    let langFile = '/assets/languages/lang-en.json'; 
    document.body.classList.remove('br-lang', 'es-lang');
    if (langCode === 'BR') {
        langFile = '/assets/languages/lang-pt.json';
        document.body.classList.add('br-lang');
    } else if (langCode === 'ES') {
        langFile = '/assets/languages/lang-es.json'; 
        document.body.classList.add('es-lang');
    }
    fetch(langFile)
        .then(response => response.json())
        .then(data => {
            applyTranslations(data); 
        })
        .catch(error => {
            console.error("Error loading language file:", error);
        });
}

function applyTranslations(translations) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.innerText = translations[key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
            element.placeholder = translations[key];
        }
    });
}
function getCountryCode() {
    fetch('https://ipinfo.io/json')
        .then(response => response.json())
        .then(data => {
            // const countryCode = data.country;
            const savedLanguage = JSON.parse(localStorage.getItem("selectedLanguage"));
            let countryCode = "BR";
            if(savedLanguage && savedLanguage.lang){
                countryCode = savedLanguage.lang;
            }
            
            loadLanguage(countryCode);
        })
        .catch(error => {
            console.error("Error fetching geolocation data:", error);
            loadLanguage('EN'); 
        });
}

getCountryCode();



document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    dropdownButton.addEventListener('click', () => {
      const isOpen = dropdownMenu.style.display === 'block';
      dropdownMenu.style.display = isOpen ? 'none' : 'block';
      dropdownButton.classList.toggle('open', !isOpen);
    });
  

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.custom-dropdown')) {
        dropdownMenu.style.display = 'none';
        dropdownButton.classList.remove('open');
      }
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const textElement = document.querySelector(".dropdown-button .text");
    const menuItems = document.querySelectorAll(".dropdown-menu li span");

    const savedLanguage = JSON.parse(localStorage.getItem("selectedLanguage"));

    console.log(savedLanguage);
    
    if (savedLanguage) {
      textElement.textContent = savedLanguage.name;
    }

    menuItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const selectedLanguage = {
            name: e.target.textContent,
            lang: e.target.getAttribute("data-lang"),
        };

        textElement.textContent = selectedLanguage.name;
        localStorage.setItem("selectedLanguage", JSON.stringify(selectedLanguage));
        dropdownMenu.classList.remove("open");
        location.reload();
      });
    });
  
    document.addEventListener("click", (e) => {
      if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("open");
      }
    });
  });
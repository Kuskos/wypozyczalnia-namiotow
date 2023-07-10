// Pobranie referencji do elementów menu
const homeLink = document.querySelector('.link_menu[href="#home"]');
const offerLink = document.querySelector('.link_menu[href="#offer"]');
const contactLink = document.querySelector('.link_menu[href="#contact"]');

// Pobranie referencji do sekcji
const homeSection = document.getElementById('home');
const offerSection = document.getElementById('offer');
const contactSection = document.getElementById('contact');

// Dodanie nasłuchiwaczy zdarzeń do poszczególnych linków
homeLink.addEventListener('click', scrollToElement.bind(null, homeSection));
offerLink.addEventListener('click', scrollToElement.bind(null, offerSection));
contactLink.addEventListener('click', scrollToElement.bind(null, contactSection));

// Funkcja do płynnego przewijania strony do wybranego elementu
function scrollToElement(targetElement, event) {
  event.preventDefault();
  const targetId = `#${targetElement.id}`; // Pobranie identyfikatora docelowego elementu
  const targetOffset = targetElement.offsetTop; // Obliczenie odległości od góry strony

  // Animacja przewijania strony do docelowego elementu
  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth'
  });

  // Ustawienie aktywnego tła dla odpowiedniego linku
  removeActiveBackground(); // Usunięcie aktywnego tła z poprzedniego linku
  event.target.style.backgroundColor = '#333'; // Ustawienie aktywnego tła dla klikniętego linku
}

// Funkcja do usuwania aktywnego tła z linków
function removeActiveBackground() {
  const links = document.querySelectorAll('.link_menu');
  links.forEach(link => {
    link.style.backgroundColor = '';
  });
}

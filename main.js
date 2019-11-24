// Sprawdź czy wpisane w input hasło pasuje do któregoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)
// PS. nie skupiaj się na niczym innym w zadaniu niż porównanie i wyświetlenie ( nie rób czyszczenia inputa itp. nie są potrzebne, chyba że masz ochotę)

// 1st way - quick
/*
const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['oNE', 'TwO'];
const messages = ["Super", "Work!"];

const showMessage = (e) => {
  const text = e.target.value;
  passwords.forEach((password, i) => {
    if (text.toLowerCase() === password.toLowerCase()) {
      div.textContent = messages[i];
      e.target.value = '';
    }
  })
}
input.addEventListener("input", showMessage)
*/

// 2nd way - change an existing array
/*
const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['oNE', 'TwO'];
const messages = ["Super", "Work!"];

passwords.forEach((password, index) => {
  passwords[index] = password.toUpperCase();
})

const showMessage = (e) => {
  const text = e.target.value.toUpperCase();
  passwords.forEach((password, i) => {
    if (text === password) {
      div.textContent = messages[i];
      e.target.value = '';
    }
  })
}
input.addEventListener("input", showMessage)
*/

// 3rd way - use map to make new array to work on 
const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['oNE', 'TwO'];
const messages = ["Super", "Work!"];

const lowPassword = passwords.map(password => password.toLowerCase());

const showMessage = (e) => {
  const text = e.target.value.toLowerCase();
  
  for (let i = 0; i < lowPassword.length; i++) {
    if (text === lowPassword[i]) {
      div.textContent = messages[i];
      e.target.value = '';
    }
  }
}
input.addEventListener("input", showMessage)
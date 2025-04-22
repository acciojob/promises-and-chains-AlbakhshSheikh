// Get form and input elements
const form = document.getElementById('votingForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get input values and trim whitespace from name
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);

  // Validate inputs
  if (!name || isNaN(age)) {
    alert('Please enter valid details.');
    return;
  }

  // Create a promise to check voting eligibility
  const votingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });

  // Handle promise resolution or rejection
  votingPromise
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });
});
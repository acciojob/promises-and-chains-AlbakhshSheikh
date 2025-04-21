document.getElementById('votingForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  // Validation for empty fields
  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  // Convert age to a number
  const numericAge = Number(age);

  // Create a promise that resolves/rejects after 4 seconds
  const checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numericAge > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle the promise outcome
  checkEligibility
    .then(message => alert(message))
    .catch(errorMessage => alert(errorMessage));
});
//your JS code here. If required.
document.getElementById('votingForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  // Validation for empty fields
  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  // Convert age to a number
  const numericAge = Number(age);

  // Create a promise that resolves/rejects after 4 seconds
  const checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numericAge > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle the promise outcome
  checkEligibility
    .then(message => alert(message))
    .catch(errorMessage => alert(errorMessage));
});

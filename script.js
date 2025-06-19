//your JS code here. If required.
document.getElementById("votingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form refresh

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  // Convert age to number
  const ageNumber = Number(age);

  checkEligibility(name, ageNumber)
    .then((message) => alert(message))
    .catch((error) => alert(error));
});

function checkEligibility(name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
}

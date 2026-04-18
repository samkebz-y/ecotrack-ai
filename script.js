function calculateScore() {
  const carKm = document.getElementById("carKm").value || 0;
  const meatMeals = document.getElementById("meatMeals").value || 0;
  const electricityHours = document.getElementById("electricityHours").value || 0;

  const score =
    (carKm * 0.2) +
    (meatMeals * 5) +
    (electricityHours * 0.5);

  let message = "";

  if (score < 20) {
    message = "🌱 Earth Hero! Keep it up!";
  } else if (score < 50) {
    message = "⚠️ You're doing okay, but can improve.";
  } else {
    message = "🔥 High impact! Time to reduce your footprint.";
  }

  document.getElementById("result").innerHTML =
    `<h3>Your Green Score: ${score.toFixed(2)}</h3><p>${message}</p>`;
}
const angieProfile = {
  skills: ["Python", "SQL", "Power BI", "SAP", "BigQuery", "GCP"],
  softSkills: ["Analytical thinking", "Communication", "Planning"],
  languages: ["Spanish", "English", "Chinese"],
  cloud: ["GCP", "BigQuery"],
  mlops: ["Deployment", "Automation"]
};

const form = document.getElementById("simulatorForm");
const resultContainer = document.getElementById("resultContainer");
const matchHistory = document.getElementById("matchHistory");

function calculateMatch(selectedOptions) {
  let score = 0;
  if (selectedOptions.includes("Python")) score++;
  if (selectedOptions.includes("SQL")) score++;
  if (selectedOptions.includes("Power BI")) score++;
  if (selectedOptions.includes("English")) score++;
  if (selectedOptions.includes("Soft Skills")) score++;
  if (selectedOptions.includes("Cloud")) score++;
  if (selectedOptions.includes("MLOps")) score++;
  return ((score / 7) * 100).toFixed(2);
}

function showResult(name, percentage) {
  resultContainer.classList.remove("d-none", "alert-success", "alert-warning", "alert-danger");
  let message = `Match result with ${name}: ${percentage}%`;

  if (percentage >= 80) {
    resultContainer.classList.add("alert-success");
    message += "\n✅ Angie is a perfect match for your team!";
  } else if (percentage >= 50) {
    resultContainer.classList.add("alert-warning");
    message += "\n🟡 Angie has strong potential. A conversation might be worth it.";
  } else {
    resultContainer.classList.add("alert-danger");
    message += "\n🔴 The profile might not align with your current role, but could be a fit for other opportunities.";
  }

  resultContainer.textContent = message;
}

function saveToLocalStorage(name, percentage) {
  const previous = JSON.parse(localStorage.getItem("matches")) || [];
  previous.push({ name, percentage, date: new Date().toISOString() });
  localStorage.setItem("matches", JSON.stringify(previous));
}

function loadHistory() {
  const previous = JSON.parse(localStorage.getItem("matches")) || [];
  matchHistory.innerHTML = "";
  previous.reverse().forEach(match => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${match.name} - ${match.percentage}% (${new Date(match.date).toLocaleString()})`;
    matchHistory.appendChild(li);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("recruiterName").value.trim();
  if (!name) return;

  const selectedOptions = [];
  for (let i = 1; i <= 7; i++) {
    const checkbox = document.getElementById(`q${i}`);
    if (checkbox.checked) selectedOptions.push(checkbox.value);
  }

  const percentage = calculateMatch(selectedOptions);
  showResult(name, percentage);
  saveToLocalStorage(name, percentage);
  loadHistory();
});

// Load previous matches on page load
window.addEventListener("DOMContentLoaded", loadHistory);

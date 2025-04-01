const angieProfile = {
    skills: ["Python", "SQL", "Power BI", "SAP", "BigQuery", "GCP"],
    softSkills: ["Analytical thinking", "Communication", "Planning"],
    languages: ["Spanish", "English", "Chinese"],
    cloud: ["GCP", "BigQuery"],
    mlops: ["Deployment", "Automation"]
  };
  
  function askYesNo(question) {
    let answer;
    do {
      answer = prompt(`${question} (Yes/No)`);
      if (answer === null) return null; // User canceled
      answer = answer.trim().toLowerCase();
    } while (answer !== "yes" && answer !== "no");
    return answer === "yes";
  }
  
  function startSimulator() {
    alert("Simulator: Is Angie the right fit for your company?");
  
    const recruiterName = prompt("Welcome! What is your name or your company's name?");
    if (!recruiterName) {
      alert("No name entered. Simulation cancelled.");
      return;
    }
  
    const q1 = askYesNo("Do you need someone with Python skills?");
    const q2 = askYesNo("Do you require data analysis and SQL experience?");
    const q3 = askYesNo("Do you work with Power BI, Tableau, or other BI tools?");
    const q4 = askYesNo("Is English proficiency important for the role?");
    const q5 = askYesNo("Do you value soft skills such as analytical thinking and communication?");
    const q6 = askYesNo("Do you need someone with cloud experience in Data Science?");
    const q7 = askYesNo("Do you expect knowledge not only in model development but also in deployment to production?");
  
    let score = 0;
    if (q1 && angieProfile.skills.includes("Python")) score++;
    if (q2 && angieProfile.skills.includes("SQL")) score++;
    if (q3 && angieProfile.skills.includes("Power BI")) score++;
    if (q4 && angieProfile.languages.includes("English")) score++;
    if (q5 && angieProfile.softSkills.includes("Analytical thinking")) score++;
    if (q6 && angieProfile.cloud.length > 0) score++;
    if (q7 && angieProfile.mlops.includes("Deployment")) score++;
  
    const percentage = ((score / 7) * 100).toFixed(2);
    let message = `🔍 Match result with ${recruiterName}: ${percentage}%\n\n`;
  
    if (percentage >= 80) {
      message += "✅ Angie is a perfect match for your team!";
    } else if (percentage >= 50) {
      message += "🟡 Angie has strong potential. A conversation might be worth it.";
    } else {
      message += "🔴 The profile might not align with your current role, but could be a fit for other opportunities.";
    }
  
    alert(message);
    console.log("Recruiter:", recruiterName);
    console.log("Score:", score);
    console.log("Match Percentage:", percentage);
  }
  
// ===============================
// Civil Success Chapter Engine
// Version 2.0
// ===============================

// Read chapter id from URL
const params = new URLSearchParams(window.location.search);
const chapterId = params.get("id");

// HTML Elements
const chapterTitle = document.getElementById("chapterTitle");
const subjectName = document.getElementById("subjectName");
const chapterSummary = document.getElementById("chapterSummary");
const topics = document.getElementById("topics");

const notesBtn = document.getElementById("notesBtn");
const pdfBtn = document.getElementById("pdfBtn");
const mcqBtn = document.getElementById("mcqBtn");
const testBtn = document.getElementById("testBtn");

// Load Database
async function loadChapter(){

try{

const response = await fetch("content.json");

if(!response.ok){

throw new Error("Database not found");

}

const data = await response.json();

let chapter = null;
let subject = null;

// Find Subject & Chapter

for(const s of data.subjects){

const found = s.chapters.find(c=>c.id===chapterId);

if(found){

chapter = found;
subject = s;

break;

}

}

if(!chapter){

chapterTitle.innerHTML="Chapter Not Found";
subjectName.innerHTML="";
chapterSummary.innerHTML="No data available.";
topics.innerHTML="<li>Please check content.json</li>";

return;

}
  // ===============================
// Fill Page Data
// ===============================

chapterTitle.textContent = chapter.title;
subjectName.textContent = subject.name;
chapterSummary.textContent =
  chapter.summary || "Complete notes, PDF, MCQ and Mock Test available.";

// Clear old topics
topics.innerHTML = "";

// Show topics if available
if (chapter.topics && chapter.topics.length > 0) {

  chapter.topics.forEach(topic => {

    const li = document.createElement("li");
    li.textContent = topic;
    topics.appendChild(li);

  });

} else {

  topics.innerHTML = "<li>Topics will be added soon.</li>";

}

// ===============================
// Buttons
// ===============================

// Notes
notesBtn.href = chapter.notes
  
// ===============================
// End of loadChapter()
// ===============================

} catch (error) {

    console.error(error);

    chapterTitle.textContent = "Error Loading Chapter";
    subjectName.textContent = "Civil Success";
    chapterSummary.textContent =
        "Unable to load chapter data. Please try again later.";

    topics.innerHTML = `
        <li>Database not found.</li>
        <li>Check content.json file.</li>
        <li>Make sure chapter ID exists.</li>
    `;

    notesBtn.removeAttribute("href");
    pdfBtn.removeAttribute("href");
    mcqBtn.removeAttribute("href");
    testBtn.removeAttribute("href");

}

}

// ===============================
// Start Application
// ===============================

loadChapter();

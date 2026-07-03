const params = new URLSearchParams(window.location.search);
const chapterId = params.get("id");

async function loadChapter() {

  try {

    const response = await fetch("content.json");
    const data = await response.json();

    let chapter = null;
    let subject = null;

    for (const s of data.subjects) {
      const found = s.chapters.find(c => c.id === chapterId);
      if (found) {
        chapter = found;
        subject = s;
        break;
      }
    }

    if (!chapter) {
      document.getElementById("chapterTitle").textContent = "Chapter Not Found";
      return;
    }

    document.getElementById("chapterTitle").textContent = chapter.title;
    document.getElementById("subjectName").textContent = subject.name;

    document.getElementById("chapterSummary").textContent =
      chapter.summary || "Study Notes, PDF, MCQ and Mock Test.";

    const topics = document.getElementById("topics");
    topics.innerHTML = "";

    if (chapter.topics && chapter.topics.length) {

      chapter.topics.forEach(topic => {

        const li = document.createElement("li");
        li.textContent = topic;
        topics.appendChild(li);

      });

    } else {

      topics.innerHTML = "<li>Topics will be updated soon.</li>";

    }

    document.getElementById("notesBtn").href = chapter.notes || "#";

    document.getElementById("pdfBtn").href = chapter.pdf || "#";
    document.getElementById("pdfBtn").target = "_blank";

    document.getElementById("mcqBtn").href = chapter.mcq || "#";

    document.getElementById("testBtn").href = chapter.test || "#";

  }

  catch (err) {

    console.error(err);

    document.getElementById("chapterTitle").textContent = "Error";

    document.getElementById("chapterSummary").textContent =
      "Unable to load chapter.";

  }

}

loadChapter();

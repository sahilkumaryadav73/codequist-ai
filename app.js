const quests = [
  {
    id: "python-variables",
    tier: "beginner",
    icon: "🐍",
    category: "Python · Beginner",
    title: "Your first variable",
    duration: "3 min",
    subtitle: "A friendly robot needs a name tag. Give it one using Python.",
    prompt: "Which line creates a variable called `robot_name` with the text \"Ada\"?",
    code: null,
    options: [
      "robot_name = \"Ada\"",
      "\"Ada\" = robot_name",
      "text robot_name \"Ada\"",
      "robot_name == \"Ada\""
    ],
    answer: 0,
    hint: "In Python, you give a variable a value with a single equals sign: name = value.",
    explanation: "Exactly! The `=` sign stores a value in a variable. Here, robot_name now remembers the text \"Ada\"."
  },
  {
    id: "python-loops",
    tier: "beginner",
    icon: "🔁",
    category: "Python · Beginner",
    title: "Repeat the magic",
    duration: "4 min",
    subtitle: "Help the robot deliver a message three times without repeating yourself.",
    prompt: "What does this code print?",
    code: "for i in range(3):\n    print(\"Hi!\")",
    options: ["Hi! one time", "Hi! three times", "The number 3", "It prints nothing"],
    answer: 1,
    hint: "`range(3)` gives the loop three turns: 0, 1, and 2.",
    explanation: "You got it! The loop runs once for each of the three values in range(3), so \"Hi!\" prints three times."
  },
  {
    id: "python-conditions",
    tier: "beginner",
    icon: "🚦",
    category: "Python · Beginner",
    title: "Make a smart choice",
    duration: "4 min",
    subtitle: "Teach a traffic light to react when the light turns green.",
    prompt: "Which condition checks whether `light` contains the text \"green\"?",
    code: null,
    options: [
      "if light = \"green\":",
      "if light == \"green\":",
      "when light is \"green\":",
      "if \"green\" light:"
    ],
    answer: 1,
    hint: "To compare two things in Python, use two equals signs: ==.",
    explanation: "Correct! `==` compares values. A single `=` assigns a value, while `==` asks whether the values match."
  },
  {
    id: "git-commit",
    tier: "beginner",
    icon: "🌿",
    category: "Git · Beginner",
    title: "Save your progress",
    duration: "3 min",
    subtitle: "You made a change to your project. Save a snapshot so you can find it later.",
    prompt: "Which Git command saves your staged changes with a message?",
    code: null,
    options: [
      "git save \"my change\"",
      "git push \"my change\"",
      "git commit -m \"my change\"",
      "git stage -m \"my change\""
    ],
    answer: 2,
    hint: "A commit is a saved snapshot. The `-m` option adds a message to it.",
    explanation: "That's it! `git commit -m \"my change\"` saves the changes you've staged and labels the snapshot."
  },
  {
    id: "git-status",
    tier: "beginner",
    icon: "🔎",
    category: "Git · Beginner",
    title: "Check what changed",
    duration: "3 min",
    subtitle: "Before saving, you want to see which files have been changed.",
    prompt: "Which command shows the current state of your Git project?",
    code: null,
    options: ["git look", "git status", "git check-all", "git files"],
    answer: 1,
    hint: "This command's name is exactly what you want to know: the project's current status.",
    explanation: "`git status` shows which files are changed, staged, or not yet tracked. It's a great command to run often."
  },
  {
    id: "terminal-navigation",
    tier: "beginner",
    icon: "⌘",
    category: "Terminal · Beginner",
    title: "Find your way around",
    duration: "3 min",
    subtitle: "You're in the terminal and want to see the files in your current folder.",
    prompt: "Which command lists the files and folders here?",
    code: null,
    options: ["show", "where", "ls", "open"],
    answer: 2,
    hint: "It's a short, two-letter command. On Windows PowerShell, `dir` also works.",
    explanation: "`ls` lists files and folders. The same command works in macOS, Linux, and PowerShell."
  },
  {
    id: "python-functions",
    tier: "intermediate",
    icon: "🧩",
    category: "Python · Intermediate",
    title: "Build a reusable tool",
    duration: "5 min",
    subtitle: "Turn a calculation into a function you can use whenever you need it.",
    prompt: "Which line correctly defines a function named `double`?",
    code: null,
    options: ["function double(x):", "def double(x):", "make double(x):", "double def(x):"],
    answer: 1,
    hint: "Python function definitions start with `def`, followed by the function name and parentheses.",
    explanation: "`def double(x):` defines a function named double with one parameter, x. You can use `return x * 2` inside it."
  },
  {
    id: "python-lists",
    tier: "intermediate",
    icon: "📋",
    category: "Python · Intermediate",
    title: "Pick an item from a list",
    duration: "5 min",
    subtitle: "A list of tools is ready. Python counts list positions starting at zero.",
    prompt: "What does `tools[1]` give you?",
    code: 'tools = ["editor", "browser", "terminal"]',
    options: ["editor", "browser", "terminal", "The second item does not exist"],
    answer: 1,
    hint: "List positions start at 0, so index 1 points to the second item.",
    explanation: "`tools[1]` is \"browser\". Python lists start counting at zero: tools[0] is editor, tools[1] is browser."
  },
  {
    id: "git-branch",
    tier: "intermediate",
    icon: "🌱",
    category: "Git · Intermediate",
    title: "Work on a new idea",
    duration: "5 min",
    subtitle: "You want to experiment without changing the main version of your project.",
    prompt: "Why create a Git branch for your new feature?",
    code: null,
    options: [
      "To safely work on changes separately from the main branch",
      "To permanently delete the main branch",
      "To automatically publish the project online",
      "To make a backup of your computer"
    ],
    answer: 0,
    hint: "Think of a branch as a separate path for trying changes without disturbing the main path.",
    explanation: "A branch lets you develop and test a feature separately. When it is ready, you can merge it into the main branch."
  },
  {
    id: "terminal-cd",
    tier: "intermediate",
    icon: "📂",
    category: "Terminal · Intermediate",
    title: "Move into a project folder",
    duration: "4 min",
    subtitle: "Your project lives in a folder called `my-app`. Navigate there in the terminal.",
    prompt: "Which command changes your current folder to `my-app`?",
    code: null,
    options: ["ls my-app", "cd my-app", "mv my-app", "pwd my-app"],
    answer: 1,
    hint: "`cd` means change directory. Add the folder name after it.",
    explanation: "`cd my-app` moves the terminal into the my-app folder. Use `cd ..` to move back up one folder."
  },
  {
    id: "html-structure",
    tier: "intermediate",
    icon: "🧱",
    category: "Web · Intermediate",
    title: "Give a page structure",
    duration: "5 min",
    subtitle: "Make your webpage easier for browsers and people to understand.",
    prompt: "Which HTML element is best for the main, unique content of a page?",
    code: null,
    options: ["<main>", "<blink>", "<big>", "<frame>"],
    answer: 0,
    hint: "Choose the semantic element whose name describes the primary content.",
    explanation: "`<main>` identifies the page's primary content. Semantic HTML helps assistive technology and makes pages easier to understand."
  },
  {
    id: "css-selector",
    tier: "intermediate",
    icon: "🎨",
    category: "Web · Intermediate",
    title: "Style a class",
    duration: "4 min",
    subtitle: "A button has the class name `primary`. Select it in CSS to change its color.",
    prompt: "Which CSS selector targets an element with the class `primary`?",
    code: null,
    options: ["#primary", ".primary", "primary()", "*primary"],
    answer: 1,
    hint: "CSS class selectors begin with a dot. IDs use a hash symbol.",
    explanation: "`.primary` selects elements with class=\"primary\". The `#primary` selector would target an element by its ID instead."
  },
  {
    id: "python-errors",
    tier: "advanced",
    icon: "🛠️",
    category: "Python · Advanced",
    title: "Handle a possible error",
    duration: "6 min",
    subtitle: "A user might type something that is not a number. Keep your program ready.",
    prompt: "Which Python structure lets you handle an error when code fails?",
    code: null,
    options: ["if / repeat", "try / except", "for / each", "def / return"],
    answer: 1,
    hint: "The first block tries an operation; the second catches an exception if it fails.",
    explanation: "`try` runs code that might fail, and `except` handles a matching error so your program can respond gracefully."
  },
  {
    id: "python-dictionaries",
    tier: "advanced",
    icon: "🗂️",
    category: "Python · Advanced",
    title: "Look up data by name",
    duration: "5 min",
    subtitle: "A student record stores values under labels like `name` and `year`.",
    prompt: 'Given `student = {"name": "Mina", "year": 1}`, how do you get the name?',
    code: null,
    options: ['student.name', 'student["name"]', 'student(0)', 'student->name'],
    answer: 1,
    hint: "Dictionaries look up a value using its key inside square brackets.",
    explanation: '`student["name"]` uses the key \"name\" to look up and return \"Mina\" from the dictionary.'
  },
  {
    id: "git-merge",
    tier: "advanced",
    icon: "🔀",
    category: "Git · Advanced",
    title: "Bring your feature together",
    duration: "6 min",
    subtitle: "Your feature branch is ready. Combine its changes with the main branch.",
    prompt: "After switching to `main`, which command merges your feature branch into it?",
    code: null,
    options: ["git combine feature", "git merge feature", "git commit feature", "git branch --delete feature"],
    answer: 1,
    hint: "The Git command uses the everyday word for bringing two paths together.",
    explanation: "Run `git merge feature` while on main to combine the feature branch's changes into your current branch."
  },
  {
    id: "sql-parameters",
    tier: "advanced",
    icon: "🛡️",
    category: "Databases · Advanced",
    title: "Query a database safely",
    duration: "6 min",
    subtitle: "Your app needs to search for a user by a name they typed.",
    prompt: "What is the safest way to put user input into a database query?",
    code: null,
    options: [
      "Join the input directly into the SQL string",
      "Use a parameterized query with a placeholder",
      "Remove all spaces from the input",
      "Ask the user to type SQL code"
    ],
    answer: 1,
    hint: "Let the database driver send the value separately from the query text.",
    explanation: "Parameterized queries keep user values separate from SQL instructions, helping prevent SQL injection and handling special characters safely."
  },
  {
    id: "http-status",
    tier: "advanced",
    icon: "🌐",
    category: "Web · Advanced",
    title: "Read the server's reply",
    duration: "5 min",
    subtitle: "Your app asks a server for a page, and it replies with status code 404.",
    prompt: "What does HTTP status code 404 usually mean?",
    code: null,
    options: ["The request succeeded", "The page or resource was not found", "The server is starting", "The internet is disconnected"],
    answer: 1,
    hint: "This status is commonly shown when a requested page cannot be found.",
    explanation: "HTTP 404 means the server could not find the requested resource. A 2xx status usually indicates success."
  },
  {
    id: "docker-basics",
    tier: "advanced",
    icon: "📦",
    category: "DevOps · Advanced",
    title: "Package an app consistently",
    duration: "5 min",
    subtitle: "A teammate wants to run your app with the same setup you use.",
    prompt: "In Docker, what is the difference between an image and a container?",
    code: null,
    options: [
      "An image is a recipe/template; a container is a running instance made from it",
      "An image is a running app; a container is its source code",
      "They are two names for the same thing",
      "A container is used only to store database backups"
    ],
    answer: 0,
    hint: "Think of an image as a recipe and a container as the thing made from that recipe.",
    explanation: "A Docker image packages the app and its dependencies. A container is an isolated running instance created from that image."
  }
];

const stages = [
  { id: "beginner", label: "Beginner", description: "Start with the fundamentals" },
  { id: "intermediate", label: "Intermediate", description: "Combine skills into real workflows" },
  { id: "advanced", label: "Advanced", description: "Tackle practical engineering problems" }
];

const STORAGE_KEY = "codequest-progress-v1";
const TUTOR_MODEL_KEY = "codequest-tutor-model-v1";
const DEFAULT_TUTOR_MODEL = "qwen2.5-coder:1.5b";
const questList = document.querySelector("#quest-list");
const missionCard = document.querySelector("#mission-card");
let activeQuestId = quests[0].id;
let selectedAnswer = null;
let hintVisible = false;
let answeredCorrectly = false;
let hasCheckedAnswer = false;
let storageWarning = "";
let progress = loadProgress();
let tutorModel = loadTutorModel();
let tutorOpen = false;
let tutorBusy = false;
let tutorError = "";
let tutorRequest = null;
const tutorConversations = new Map();

function loadTutorModel() {
  try {
    return localStorage.getItem(TUTOR_MODEL_KEY) || DEFAULT_TUTOR_MODEL;
  } catch (error) {
    console.warn("Could not load the saved AI tutor model.", error);
    return DEFAULT_TUTOR_MODEL;
  }
}

function saveTutorModel(model) {
  try {
    localStorage.setItem(TUTOR_MODEL_KEY, model);
  } catch (error) {
    console.warn("Could not save the AI tutor model.", error);
  }
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const completed = Array.isArray(saved.completed)
      ? saved.completed.filter((id) => quests.some((quest) => quest.id === id))
      : [];
    return { completed: [...new Set(completed)] };
  } catch (error) {
    console.warn("Could not load saved CodeQuest progress.", error);
    return { completed: [] };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn("Could not save CodeQuest progress.", error);
    storageWarning = "Progress could not be saved in this browser. Your current session still works.";
  }
}

function showNotice(message) {
  let notice = document.querySelector("#save-notice");
  if (!notice) {
    notice = document.createElement("p");
    notice.id = "save-notice";
    notice.className = "feedback retry";
    notice.setAttribute("role", "status");
    missionCard.prepend(notice);
  }
  notice.textContent = message;
}

function getUnlockedStageIndex() {
  for (let index = 0; index < stages.length - 1; index += 1) {
    const stageQuests = quests.filter((quest) => quest.tier === stages[index].id);
    if (!stageQuests.every((quest) => progress.completed.includes(quest.id))) return index;
  }
  return stages.length - 1;
}

function isStageUnlocked(tier) {
  return stages.findIndex((stage) => stage.id === tier) <= getUnlockedStageIndex();
}

function renderQuestList() {
  questList.innerHTML = stages.map((stage, index) => {
    const stageQuests = quests.filter((quest) => quest.tier === stage.id);
    const unlocked = isStageUnlocked(stage.id);
    const completed = stageQuests.filter((quest) => progress.completed.includes(quest.id)).length;
    return `
      <section class="quest-stage ${unlocked ? "" : "locked"}" aria-label="${stage.label} level">
        <div class="stage-heading">
          <div>
            <span class="stage-label">${String(index + 1).padStart(2, "0")} · ${stage.label}</span>
            <span class="stage-description">${unlocked ? stage.description : "Complete the previous level to unlock"}</span>
          </div>
          <span class="stage-progress">${unlocked ? `${completed}/${stageQuests.length}` : "🔒"}</span>
        </div>
        ${stageQuests.map((quest) => {
          const complete = progress.completed.includes(quest.id);
          const active = quest.id === activeQuestId;
          return `
            <button class="quest-button" type="button" data-quest-id="${quest.id}" ${active ? 'aria-current="step"' : ""} ${unlocked ? "" : "disabled"}>
              <span class="quest-icon" aria-hidden="true">${quest.icon}</span>
              <span class="quest-copy">
                <span class="quest-title">${quest.title}</span>
                <span class="quest-meta">${quest.category.split(" · ")[0]} &middot; ${quest.duration}</span>
              </span>
              <span class="quest-status ${complete ? "complete" : ""}" aria-label="${complete ? "Completed" : unlocked ? "Not completed" : "Locked"}">${complete ? "✓" : unlocked ? "›" : "🔒"}</span>
            </button>`;
        }).join("")}
      </section>`;
  }).join("");
  questList.querySelectorAll("[data-quest-id]:not(:disabled)").forEach((button) => {
    button.addEventListener("click", () => selectQuest(button.dataset.questId));
  });
}

function renderProgress() {
  const completed = progress.completed.length;
  const xp = completed * 100;
  const stageIndex = getUnlockedStageIndex();
  const stage = stages[stageIndex];
  document.querySelector("#quest-count").textContent = `${completed} / ${quests.length}`;
  document.querySelector("#level-label").textContent = `LEVEL ${stageIndex + 1} · ${stage.label.toUpperCase()}`;
  document.querySelector("#level-number").innerHTML = `${String(stageIndex + 1).padStart(2, "0")} <span>${stage.label} learner</span>`;
  document.querySelector("#progress-label").textContent = `${completed} of ${quests.length} quests complete`;
  document.querySelector("#xp-label").textContent = `${xp} XP`;
  document.querySelector("#progress-fill").style.width = `${(completed / quests.length) * 100}%`;
  document.querySelector(".progress-track").setAttribute("aria-valuemax", String(quests.length));
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(completed));
}

function selectQuest(id) {
  const quest = quests.find((item) => item.id === id);
  if (!quest || !isStageUnlocked(quest.tier)) return;
  if (tutorRequest) {
    tutorRequest.controller.abort();
    tutorRequest = null;
    tutorBusy = false;
  }
  activeQuestId = id;
  selectedAnswer = null;
  hintVisible = false;
  answeredCorrectly = false;
  hasCheckedAnswer = false;
  tutorOpen = false;
  tutorError = "";
  render();
}

function renderMission() {
  if (progress.completed.length === quests.length) {
    showAllComplete();
    return;
  }
  const quest = quests.find((item) => item.id === activeQuestId);
  const complete = progress.completed.includes(quest.id);
  if (complete) {
    tutorOpen = false;
    missionCard.innerHTML = `
      <div class="complete-panel">
        <div class="complete-icon" aria-hidden="true">🏆</div>
        <p class="eyebrow">${quest.category}</p>
        <h2>Quest complete!</h2>
        <p>You earned 100 XP for ${quest.title.toLowerCase()}. Ready to keep going? Your progress is saved on this device.</p>
        <button class="action-button primary" type="button" data-action="next">Choose another quest &rarr;</button>
      </div>`;
    missionCard.querySelector('[data-action="next"]').addEventListener("click", selectNextQuest);
    return;
  }

  const answers = quest.options.map((option, index) => {
    let state = "";
    if (answeredCorrectly && index === quest.answer) state = "correct";
    else if (answeredCorrectly && index === selectedAnswer) state = "incorrect";
    else if (index === selectedAnswer) state = "selected";
    return `
      <button type="button" class="answer-option ${state}" data-answer="${index}" ${answeredCorrectly ? "disabled" : ""}>
        <span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>
      </button>`;
  }).join("");

  missionCard.innerHTML = `
    <div class="mission-header">
      <div>
        <span class="mission-category">${quest.category}</span>
        <h2 class="mission-title">${quest.title}</h2>
        <p class="mission-subtitle">${quest.subtitle}</p>
      </div>
      <span class="reward-pill">✦ 100 XP</span>
    </div>
    <p class="challenge-label">YOUR CHALLENGE</p>
    <div class="challenge-box">
      <p class="challenge-prompt">${quest.prompt}</p>
      ${quest.code ? `<pre class="code-block"><code>${quest.code}</code></pre>` : ""}
      <div class="answer-list" role="group" aria-label="Choose your answer">${answers}</div>
    </div>
    ${hintVisible ? `<p class="hint-text" role="status">💡 ${quest.hint}</p>` : ""}
    ${answeredCorrectly ? `<div class="feedback success" role="status">✓ ${quest.explanation}</div>` : ""}
    ${hasCheckedAnswer && !answeredCorrectly ? `<div class="feedback retry" role="status">Not quite — take another look, or use a hint. You’ve got this!</div>` : ""}
    <details class="tutor-panel" ${tutorOpen ? "open" : ""}>
      <summary><span><span aria-hidden="true">✳</span> Ask your local AI study buddy</span><span class="tutor-badge">OLLAMA · OPTIONAL</span></summary>
      <div class="tutor-content">
        <p class="tutor-intro">Get a beginner-friendly explanation about this quest. Your messages go to Ollama running on your own computer.</p>
        <label class="tutor-label" for="tutor-model">Local model name</label>
        <input class="tutor-model" id="tutor-model" name="model" type="text" value="${escapeAttribute(tutorModel)}" autocomplete="off" spellcheck="false">
        <div class="tutor-messages" id="tutor-messages" role="log" aria-live="polite" aria-relevant="additions">
          <p class="tutor-welcome">Try asking: “Can you explain this idea without giving me the answer?”</p>
        </div>
        <form class="tutor-form" id="tutor-form">
          <label class="visually-hidden" for="tutor-question">Ask the study buddy about this quest</label>
          <textarea id="tutor-question" name="question" rows="2" maxlength="500" placeholder="Ask about this quest…" required ${tutorBusy ? "disabled" : ""}></textarea>
          <button class="action-button primary" type="submit" ${tutorBusy ? "disabled" : ""}>${tutorBusy ? "Thinking…" : "Ask tutor"}</button>
        </form>
        <p class="tutor-status ${tutorError ? "tutor-error" : ""}" id="tutor-status" role="status">${tutorError ? escapeHtml(tutorError) : tutorBusy ? "Your local model is thinking…" : 'Setup: <a href="https://ollama.com/download" target="_blank" rel="noreferrer">install Ollama</a> and run <code>ollama pull qwen2.5-coder:1.5b</code>. In the project folder, run <code>py -m http.server 8000</code>, then open <code>http://localhost:8000</code>. Keep Ollama running.'}</p>
      </div>
    </details>
    <div class="mission-actions">
      <button class="action-button" type="button" data-action="hint">${hintVisible ? "Hide hint" : "💡 Get a hint"}</button>
      <div class="action-group">
        ${answeredCorrectly
          ? '<button class="action-button primary" type="button" data-action="complete">Complete quest &rarr;</button>'
          : '<button class="action-button primary" type="button" data-action="check" disabled>Check answer</button>'}
      </div>
    </div>`;

  missionCard.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedAnswer = Number(button.dataset.answer);
      hasCheckedAnswer = false;
      renderMission();
    });
  });
  const tutorPanel = missionCard.querySelector(".tutor-panel");
  tutorPanel.addEventListener("toggle", () => {
    tutorOpen = tutorPanel.open;
  });
  const messages = tutorConversations.get(quest.id) || [];
  const tutorMessageList = missionCard.querySelector("#tutor-messages");
  if (messages.length > 0) {
    tutorMessageList.innerHTML = "";
    messages.forEach((message) => {
      const bubble = document.createElement("p");
      bubble.className = `tutor-message ${message.role === "assistant" ? "tutor-reply" : "tutor-question"}`;
      bubble.textContent = message.content;
      tutorMessageList.append(bubble);
    });
  }
  missionCard.querySelector("#tutor-model").addEventListener("change", (event) => {
    const model = event.currentTarget.value.trim();
    if (!model) {
      event.currentTarget.value = tutorModel;
      return;
    }
    tutorModel = model;
    saveTutorModel(tutorModel);
  });
  missionCard.querySelector("#tutor-form").addEventListener("submit", askLocalTutor);
  missionCard.querySelector('[data-action="hint"]').addEventListener("click", () => {
    hintVisible = !hintVisible;
    renderMission();
  });
  const checkButton = missionCard.querySelector('[data-action="check"]');
  if (checkButton) {
    checkButton.disabled = selectedAnswer === null;
    checkButton.addEventListener("click", checkAnswer);
  }
  const completeButton = missionCard.querySelector('[data-action="complete"]');
  if (completeButton) completeButton.addEventListener("click", completeQuest);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function getTutorConversation(questId) {
  if (!tutorConversations.has(questId)) tutorConversations.set(questId, []);
  return tutorConversations.get(questId);
}

async function askLocalTutor(event) {
  event.preventDefault();
  if (tutorBusy) return;

  const form = event.currentTarget;
  const questionField = form.querySelector("#tutor-question");
  const modelField = missionCard.querySelector("#tutor-model");
  const question = questionField.value.trim();
  const model = modelField.value.trim();
  if (!question || !model) return;

  const quest = quests.find((item) => item.id === activeQuestId);
  const questId = quest.id;
  tutorModel = model;
  saveTutorModel(model);
  tutorOpen = true;
  tutorError = "";
  tutorBusy = true;
  const conversation = getTutorConversation(questId);
  conversation.push({ role: "user", content: question });
  renderMission();

  const controller = new AbortController();
  tutorRequest = { controller, questId };
  const timeout = window.setTimeout(() => controller.abort(), 60000);
  try {
    const response = await fetch("http://127.0.0.1:11434/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        model,
        stream: false,
        messages: [
          {
            role: "system",
            content: `You are a patient coding study buddy for a beginner learning software skills. The current quest is "${quest.title}" (${quest.category}). Quest context: ${quest.subtitle} Challenge: ${quest.prompt}${quest.code ? ` Example code: ${quest.code}` : ""}. Give concise, accurate explanations in plain language. Prefer hints and guiding questions over giving quiz answers. Do not claim to run code.`
          },
          ...conversation.slice(-10)
        ]
      })
    });
    const result = await response.json();
    if (!response.ok) {
      const detail = typeof result.error === "string" ? result.error : `Ollama returned HTTP ${response.status}.`;
      throw new Error(detail);
    }
    const answer = result.message && result.message.content;
    if (typeof answer !== "string" || !answer.trim()) {
      throw new Error("The model returned an empty reply. Try asking a shorter question.");
    }
    conversation.push({ role: "assistant", content: answer.trim() });
  } catch (error) {
    if (error.name === "AbortError" && tutorRequest && tutorRequest.controller === controller) {
      tutorError = "The request timed out after 60 seconds. Try again or choose a smaller model.";
    } else if (error.name !== "AbortError") {
      console.warn("The local AI tutor request failed.", error);
      tutorError = error.message.includes("Failed to fetch")
        ? "Could not reach Ollama. Start Ollama and run `ollama pull qwen2.5-coder:1.5b`. For browser access, serve this project with `py -m http.server 8000` and open `http://localhost:8000`."
        : `Ollama couldn't answer: ${error.message}`;
    }
  } finally {
    window.clearTimeout(timeout);
    if (tutorRequest && tutorRequest.controller === controller) {
      tutorRequest = null;
      tutorBusy = false;
      if (activeQuestId === questId) renderMission();
    }
  }
}

function checkAnswer() {
  const quest = quests.find((item) => item.id === activeQuestId);
  if (selectedAnswer === null) return;
  hasCheckedAnswer = true;
  if (selectedAnswer === quest.answer) {
    answeredCorrectly = true;
  }
  renderMission();
}

function completeQuest() {
  if (!progress.completed.includes(activeQuestId)) {
    progress.completed.push(activeQuestId);
    saveProgress();
  }
  render();
}

function selectNextQuest() {
  const next = quests.find((quest) => isStageUnlocked(quest.tier) && !progress.completed.includes(quest.id));
  if (next) {
    selectQuest(next.id);
    return;
  }
  showAllComplete();
}

function showAllComplete() {
  missionCard.innerHTML = `
    <div class="complete-panel">
      <div class="complete-icon" aria-hidden="true">🎉</div>
      <p class="eyebrow">ALL QUESTS COMPLETE</p>
      <h2>You’re a CodeQuest champion!</h2>
      <p>You completed every quest and earned ${progress.completed.length * 100} XP. Try them again any time to keep practicing.</p>
      <button class="action-button" type="button" data-action="reset">Start over</button>
    </div>`;
  missionCard.querySelector('[data-action="reset"]').addEventListener("click", () => {
    progress.completed = [];
    saveProgress();
    selectQuest(quests[0].id);
  });
}

function render() {
  renderQuestList();
  renderProgress();
  renderMission();
  if (storageWarning) showNotice(storageWarning);
}

render();

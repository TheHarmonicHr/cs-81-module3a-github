// Greet a user by name
function greet(name) {
    return "Hello, " + name + "!";
    }
function addEntry(entry) {
    return "New journal entry added: " + entry;
    }
function summarizeMood(mood) {
    return "Today you're feeling: " + mood + ". Take note.";
    }
function listGratitudes(gratitudes) {
    return "Grateful for: " + gratitudes.join(", ");
    }
function askReflectionQuestion() {
  const prompts = [
    "What challenged you today?",
    "What are you proud of?",
    "What do you want to improve tomorrow?"
  ];
    return prompts[Math.floor(Math.random() * prompts.length)];
}
console.log(greet("Harmony"));
console.log(addEntry("Wrote my first JavaScript functions today!"));
console.log(summarizeMood("curious"));
console.log(listGratitudes(["matcha", "internet", "games"]));

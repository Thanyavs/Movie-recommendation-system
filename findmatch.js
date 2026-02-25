// Coin HUD sync
document.getElementById("coinCount").innerText =
  localStorage.getItem("flixcoins") || "0";

// Home button
document.getElementById("homeBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});

// Main elements
const startPanel = document.getElementById("matchStart");
const loadingScreen = document.getElementById("matchLoading");
const foundScreen = document.getElementById("matchFound");

const startMatchBtn = document.getElementById("startMatchBtn");
const chatbox = document.getElementById("chatbox");
const messageInput = document.getElementById("messageInput");
const sendMessageBtn = document.getElementById("sendMessageBtn");
// NEW: typing indicator reference
const typingIndicator = document.getElementById("typingIndicator");


let coins = parseInt(localStorage.getItem("flixcoins") || "0");

// Spend 100 coins to begin
startMatchBtn.addEventListener("click", () => {

  if (coins < 100) {
    alert("Not enough FlixCoins!");
    return;
  }

  coins -= 100;
  localStorage.setItem("flixcoins", coins);
  document.getElementById("coinCount").innerText = coins;

  startPanel.classList.add("hidden");
  loadingScreen.classList.remove("hidden");

  // Fake matching delay
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    foundScreen.classList.remove("hidden");
  }, 3000);
});

// Send chat message
sendMessageBtn.addEventListener("click", () => {
  const msg = messageInput.value.trim();
  if (!msg) return;

  appendMessage(msg, "me");
  messageInput.value = "";

  // temporary mock reply (Gemini API goes here later)
  setTimeout(() => {
      // NEW: Fake reply with typing animation
    simulateReply("That’s interesting! What movies have you liked recently?");

  }, 800);
});

function appendMessage(text, type) {
  const msg = document.createElement("div");
  msg.classList.add("chat-message", type);
  msg.innerText = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}
// NEW: typing animation + smooth reply
function simulateReply(text) {

  // Show typing indicator
  typingIndicator.classList.remove("hidden");

  // “Typing” delay
  setTimeout(() => {
    typingIndicator.classList.add("hidden");
    appendMessage(text, "them");
  }, 1400); 
}

const MOVIES = [
  { id: 1, title: "Inside Out 2", year: 2024, genre: "Animation", length: 96, mood: "uplifting" },
  { id: 2, title: "Deadpool & Wolverine", year: 2024, genre: "Action", length: 128, mood: "chaotic" },
  { id: 3, title: "Dune: Part Two", year: 2024, genre: "Sci-Fi", length: 166, mood: "epic" },
  { id: 4, title: "Godzilla x Kong: The New Empire", year: 2024, genre: "Action", length: 115, mood: "adrenaline" },
  { id: 5, title: "Moana 2", year: 2024, genre: "Adventure", length: 102, mood: "feel-good" },
  { id: 6, title: "Despicable Me 4", year: 2024, genre: "Comedy", length: 94, mood: "funny" },
  { id: 7, title: "Kingdom of the Planet of the Apes", year: 2024, genre: "Sci-Fi", length: 145, mood: "intense" },
  { id: 8, title: "The Fall Guy", year: 2024, genre: "Action", length: 126, mood: "energetic" },
  { id: 9, title: "IF", year: 2024, genre: "Family", length: 104, mood: "wholesome" },
  { id: 10, title: "Wicked", year: 2024, genre: "Fantasy", length: 160, mood: "magical" },

  { id: 11, title: "The Hunger Games: The Ballad of Songbirds & Snakes", year: 2023, genre: "Action", length: 158, mood: "dark" },
  { id: 12, title: "Wonka", year: 2023, genre: "Family", length: 116, mood: "sweet" },
  { id: 13, title: "Aquaman and the Lost Kingdom", year: 2023, genre: "Superhero", length: 124, mood: "energetic" },
  { id: 14, title: "Napoleon", year: 2023, genre: "Drama", length: 158, mood: "historic" },
  { id: 15, title: "Barbie", year: 2023, genre: "Comedy", length: 114, mood: "fun" },
  { id: 16, title: "Oppenheimer", year: 2023, genre: "Drama", length: 180, mood: "serious" },
  { id: 17, title: "Spider-Man: Across the Spider-Verse", year: 2023, genre: "Animation", length: 140, mood: "stylish" },
  { id: 18, title: "John Wick: Chapter 4", year: 2023, genre: "Action", length: 169, mood: "violent" },
  { id: 19, title: "The Batman", year: 2022, genre: "Mystery", length: 176, mood: "dark" },
  { id: 20, title: "Avatar: The Way of Water", year: 2022, genre: "Sci-Fi", length: 192, mood: "epic" },

  { id: 21, title: "Black Panther: Wakanda Forever", year: 2022, genre: "Superhero", length: 161, mood: "heroic" },
  { id: 22, title: "Top Gun: Maverick", year: 2022, genre: "Action", length: 130, mood: "high-energy" },
  { id: 23, title: "Doctor Strange in the Multiverse of Madness", year: 2022, genre: "Superhero", length: 126, mood: "trippy" },
  { id: 24, title: "Guardians of the Galaxy Vol. 3", year: 2023, genre: "Superhero", length: 150, mood: "emotional" },
  { id: 25, title: "The Marvels", year: 2023, genre: "Superhero", length: 105, mood: "colorful" },
  { id: 26, title: "Fast X", year: 2023, genre: "Action", length: 141, mood: "adrenaline" },
  { id: 27, title: "Transformers: Rise of the Beasts", year: 2023, genre: "Action", length: 127, mood: "thrilling" },
  { id: 28, title: "Wish", year: 2023, genre: "Animation", length: 95, mood: "whimsical" },
  { id: 29, title: "Ghostbusters: Frozen Empire", year: 2024, genre: "Comedy", length: 115, mood: "fun" },
  { id: 30, title: "Madame Web", year: 2024, genre: "Superhero", length: 116, mood: "mysterious" },

  { id: 31, title: "Kraven the Hunter", year: 2024, genre: "Action", length: 128, mood: "violent" },
  { id: 32, title: "The Garfield Movie", year: 2024, genre: "Comedy", length: 101, mood: "light" },
  { id: 33, title: "Kung Fu Panda 4", year: 2024, genre: "Animation", length: 94, mood: "fun" },
  { id: 34, title: "Civil War", year: 2024, genre: "Thriller", length: 109, mood: "tense" },
  { id: 35, title: "The Iron Claw", year: 2023, genre: "Drama", length: 132, mood: "emotional" },
  { id: 36, title: "Poor Things", year: 2023, genre: "Fantasy", length: 141, mood: "weird" },
  { id: 37, title: "The Holdovers", year: 2023, genre: "Drama", length: 133, mood: "warm" },
  { id: 38, title: "The Creator", year: 2023, genre: "Sci-Fi", length: 133, mood: "thoughtful" },
  { id: 39, title: "The Black Phone", year: 2022, genre: "Horror", length: 103, mood: "scary" },
  { id: 40, title: "Creed III", year: 2023, genre: "Sports", length: 117, mood: "motivational" },

  { id: 41, title: "A Quiet Place: Day One", year: 2024, genre: "Horror", length: 100, mood: "tense" },
  { id: 42, title: "The Beekeeper", year: 2024, genre: "Action", length: 105, mood: "revenge" },
  { id: 43, title: "Twisters", year: 2024, genre: "Thriller", length: 122, mood: "chaotic" },
  { id: 44, title: "Speak No Evil", year: 2024, genre: "Horror", length: 110, mood: "disturbing" },
  { id: 45, title: "The Substance", year: 2024, genre: "Horror", length: 140, mood: "shocking" },
  { id: 46, title: "Alien: Romulus", year: 2024, genre: "Sci-Fi", length: 130, mood: "dark" },
  { id: 47, title: "The Crow", year: 2024, genre: "Action", length: 121, mood: "dark" },
  { id: 48, title: "Beetlejuice Beetlejuice", year: 2024, genre: "Fantasy", length: 112, mood: "quirky" },
  { id: 49, title: "Red One", year: 2024, genre: "Action", length: 130, mood: "fun" },
  { id: 50, title: "Gladiator II", year: 2024, genre: "Drama", length: 158, mood: "epic" }
];



// --- App state ---
const state = {
  queue: [...MOVIES].reverse(), // reversed so first movie appears on top
  liked: [],
  disliked: [],
  preference: {}, // counts by genre (could expand)
  feed: [],
  flixcoins: 0,
  challenge: { target: 10, progress: 0 },
  undoStack: [],
  dailyGoalAchieved: false
  
};

// --- DOM references ---
const cardDeck = document.getElementById('cardDeck');
const likesCount = document.getElementById('likesCount');
const dislikesCount = document.getElementById('dislikesCount');
const topGenre = document.getElementById('topGenre');
const feedList = document.getElementById('feedList');
const challengeProgress = document.getElementById('challengeProgress');
const wildcardBtn = document.getElementById('wildcardBtn');
const undoBtn = document.getElementById('undoBtn');
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const groupBtn = document.getElementById('groupBtn');
const groupResult = document.getElementById('groupResult');
const dailyRewardPopup = document.getElementById('dailyRewardPopup');
const rewardCloseBtn = document.getElementById('rewardCloseBtn');
const matchBtn = document.getElementById("matchBtn");

matchBtn.addEventListener("click", () => {
  window.location.href = "findmatch.html";
});

document.getElementById('loginBtn').addEventListener('click', () => {
  window.location.href = "login.html";
});




// --- Helper: seeded poster via picsum.photos ---

// --- Build cards ---
// --- Build cards (FIXED VERSION WITH TMDB POSTERS) ---
async function renderDeck() {
  cardDeck.innerHTML = '';

  for (let idx = 0; idx < state.queue.length; idx++) {
    const m = state.queue[idx];

    const card = document.createElement('div');
    card.className = 'movie-card';
    if (idx === state.queue.length - 1) card.classList.add('top');
    card.dataset.id = m.id;
    card.style.zIndex = idx;

    // Poster container
    const poster = document.createElement('div');
    poster.className = 'poster';

    // 🔥 Fetch TMDB poster
    fetchPosterForMovie(m).then(url => {
      poster.style.backgroundImage = `
        linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.02)),
        url('${url}')
      `;
    });
    // Update blurred background to match current movie
    if (idx === state.queue.length - 1 && m.poster_path) {
      const bg = document.getElementById("backgroundBlur");
      bg.style.backgroundImage = `url(${m.poster_path})`;
    }


    // Movie meta
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `
      <div class="movie-title">${m.title}</div>
      <div class="movie-sub">${m.year} • ${m.genre} • ${m.length}m</div>
    `;

    // Badges
    const likeBadge = document.createElement('div');
    likeBadge.className = 'badge-like';
    likeBadge.innerText = 'LIKE';

    const dislikeBadge = document.createElement('div');
    dislikeBadge.className = 'badge-dislike';
    dislikeBadge.innerText = 'NOPE';

    card.appendChild(likeBadge);
    card.appendChild(dislikeBadge);

    poster.appendChild(meta);
    card.appendChild(poster);

    // Layering effect
    const offset = (state.queue.length - 1 - idx) * 8;
    card.style.transform = `translateY(${offset}px) scale(${1 - (state.queue.length - 1 - idx) * 0.02})`;

    cardDeck.appendChild(card);

    // Only top card is draggable
    if (idx === state.queue.length - 1) {
      makeDraggable(card, m);
    }
  }
}


function showDailyRewardPopup() {
  dailyRewardPopup.classList.remove("hidden");

  // reward
  state.flixcoins += 100;
  localStorage.setItem("flixcoins", state.flixcoins);

  updateCoinDisplay();

  // add to feed
  pushFeed("🎉 Daily swipe goal reached! +100 FlixCoins");

  // auto-close after 4 seconds
  setTimeout(() => {
    dailyRewardPopup.classList.add("hidden");
  }, 4000);
}


// --- Preference update ---
function updatePreferences(movie, liked=true){
  if(liked) state.liked.push(movie);
  else state.disliked.push(movie);

  // update genre counts
  state.preference[movie.genre] = (state.preference[movie.genre] || 0) + (liked ? 1 : 0);

  // challenge progress
  state.challenge.progress = Math.min(state.challenge.progress + 1, state.challenge.target);
  challengeProgress.style.width = (state.challenge.progress / state.challenge.target * 100) + '%';
  document.querySelector('.challenge-meta').innerText = `${state.challenge.progress} / ${state.challenge.target} swipes`;
  // Check daily goal
  // Check daily goal (only once)
  if (state.challenge.progress === state.challenge.target && !state.dailyGoalAchieved) {
      state.dailyGoalAchieved = true;  // prevent repeated rewards
      showDailyRewardPopup();
  }


  likesCount.innerText = state.liked.length;
  dislikesCount.innerText = state.disliked.length;

  // top genre
  const top = Object.entries(state.preference).sort((a,b)=>b[1]-a[1])[0];
  topGenre.innerText = top ? `${top[0]} (${top[1]})` : '—';
  // reward coins
  state.flixcoins += liked ? 5 : 1;  
  updateCoinDisplay();

}

// --- Feed ---
function pushFeed(text){
  state.feed.unshift({t:Date.now(), msg:text});
  renderFeed();
}
function renderFeed(){
  feedList.innerHTML = '';
  state.feed.slice(0,8).forEach(f=>{
    const li = document.createElement('li');
    const d = new Date(f.t);
    li.innerText = `${f.msg} • ${d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    feedList.appendChild(li);
  });
}

// --- Undo ---
undoBtn.addEventListener('click', ()=>{
  const last = state.undoStack.pop();
  if(!last) return pushFeed('Nothing to undo');
  if(last.action === 'swipe'){
    // put movie back on queue
    state.queue.push(last.movie);
    if(last.liked){
      state.liked.pop();
      state.preference[last.movie.genre] = Math.max((state.preference[last.movie.genre]||1)-1, 0);
    } else {
      state.disliked.pop();
    }
    state.challenge.progress = Math.max(state.challenge.progress - 1, 0);
    challengeProgress.style.width = (state.challenge.progress / state.challenge.target * 100) + '%';
    document.querySelector('.challenge-meta').innerText = `${state.challenge.progress} / ${state.challenge.target} swipes`;
    renderDeck();
    pushFeed(`Undo: restored "${last.movie.title}"`);
    likesCount.innerText = state.liked.length;
    dislikesCount.innerText = state.disliked.length;
    const top = Object.entries(state.preference).sort((a,b)=>b[1]-a[1])[0];
    topGenre.innerText = top ? `${top[0]} (${top[1]})` : '—';
  }
});

// --- Wildcard: get a random surprise pick (brings a card to top) ---
wildcardBtn.addEventListener('click', ()=>{
  if(state.queue.length === 0) return;
  const rIdx = Math.floor(Math.random() * state.queue.length);
  const [m] = state.queue.splice(rIdx,1);
  state.queue.push(m);
  renderDeck();
  pushFeed(`Wildcard: "${m.title}" moved to the top.`);
});

// --- Like / Dislike buttons ---
likeBtn.addEventListener('click', ()=> simulateSwipe(true));
dislikeBtn.addEventListener('click', ()=> simulateSwipe(false));
function simulateSwipe(isLike){
  const top = state.queue[state.queue.length-1];
  if(!top) return;
  animateSwipeCard(isLike ? 1 : -1, top);
}

// --- Group match demo (simple simulated overlap) ---
groupBtn.addEventListener('click', ()=>{
  // pick three random swipes from sample (sim)
  const samples = [
    state.queue[Math.floor(Math.random()*state.queue.length)],
    MOVIES[Math.floor(Math.random()*MOVIES.length)],
    MOVIES[Math.floor(Math.random()*MOVIES.length)]
  ].filter(Boolean);
  if(samples.length === 0) return;
  // pick movie with most genre overlap with user's likes (simple heuristic)
  const preferredGenres = new Set(state.liked.map(m=>m.genre));
  const candidate = MOVIES.slice().sort((a,b)=>{
    const aScore = (preferredGenres.has(a.genre)?1:0) + samples.filter(s=>s.genre===a.genre).length;
    const bScore = (preferredGenres.has(b.genre)?1:0) + samples.filter(s=>s.genre===b.genre).length;
    return bScore - aScore;
  })[0];
  groupResult.innerText = candidate ? `${candidate.title} (${candidate.genre})` : 'No match';
  pushFeed(`Group match suggested "${candidate.title}"`);
});

// --- Drag / swipe logic ---
function makeDraggable(card, movie){
  let startX=0, startY=0, currentX=0, currentY=0, isDragging=false;
  const likeBadge = card.querySelector('.badge-like');
  const dislikeBadge = card.querySelector('.badge-dislike');

  function onStart(e){
    isDragging = true;
    const point = e.touches ? e.touches[0] : e;
    startX = point.clientX;
    startY = point.clientY;
    card.style.transition = 'none';
    card.style.willChange = 'transform';
  }
  function onMove(e){
    if(!isDragging) return;

    const point = e.touches ? e.touches[0] : e;           // FIRST get the point
    currentX = point.clientX - startX;                     // THEN compute deltas
    currentY = point.clientY - startY;

    // --- spawn trail (throttled) ---
    const now = performance.now();
    if(!onMove._last || now - onMove._last > 28){          // ~35 fps
      spawnSwipeTrail(point.clientX, point.clientY, currentX > 0);
      onMove._last = now;
    }

    const rot = currentX/18;
    card.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rot}deg)`;

    const opacity = Math.min(Math.abs(currentX) / 160, 1);
    if(currentX > 20){
      likeBadge.style.opacity = opacity;
      dislikeBadge.style.opacity = 0;
    } else if(currentX < -20){
      dislikeBadge.style.opacity = Math.min(opacity,1);
      likeBadge.style.opacity = 0;
    } else {
      likeBadge.style.opacity = 0;
      dislikeBadge.style.opacity = 0;
    }
  }

  function onEnd(){
    if(!isDragging) return;
    isDragging = false;
    card.style.transition = 'transform .28s cubic-bezier(.2,.8,.2,1), opacity .18s ease';
    const threshold = 120;
    if(currentX > threshold){
      // liked
      animateSwipeCard(1, movie);
    } else if(currentX < -threshold){
      animateSwipeCard(-1, movie);
    } else {
      // return to stack
      card.style.transform = '';
      likeBadge.style.opacity = 0;
      dislikeBadge.style.opacity = 0;
    }
    startX = startY = currentX = currentY = 0;
  }

  // pointer events
  card.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);
  // touch events
  card.addEventListener('touchstart', onStart, {passive:true});
  window.addEventListener('touchmove', onMove, {passive:true});
  window.addEventListener('touchend', onEnd);
}
// ---- SWIPE TRAIL (fixed + centered + throttled) ----
function spawnSwipeTrail(x, y, liked = true) {
  const trail = document.createElement("div");
  trail.classList.add("swipe-trail");

  // color based on direction (right = like, left = dislike)
  const glow = liked ? "#39ffb6" : "#ff5b5b";
  trail.style.background = `radial-gradient(circle, ${glow}, transparent)`;
  trail.style.boxShadow = `0 0 20px ${glow}`;

  // center the 18x18 circle on the pointer
  trail.style.left = x - 9 + "px";
  trail.style.top  = y - 9 + "px";

  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 450);
}

// animate card flying away and process result
function animateSwipeCard(direction, movie){
  // Burst from card center
  const cardEl = document.querySelector(`.movie-card[data-id="${movie.id}"]`);
  if(cardEl){
    const r = cardEl.getBoundingClientRect();
    spawnSwipeTrail(r.left + r.width/2, r.top + r.height/2, direction === 1);
  }

  // direction: 1 => like, -1 => dislike
  const card = document.querySelector(`.movie-card[data-id="${movie.id}"]`);
  if(!card) return;
  card.style.transition = 'transform .45s cubic-bezier(.22,.9,.2,1), opacity .3s ease';
  const offX = direction * (window.innerWidth * 0.8);
  const rotate = direction * 25;
  card.style.transform = `translate(${offX}px, -40px) rotate(${rotate}deg)`;
  card.style.opacity = 0;
  setTimeout(()=>{
    // remove from queue
    state.queue = state.queue.filter(m=>m.id !== movie.id);
    // push to undo stack
    state.undoStack.push({ action:'swipe', movie, liked: direction===1});
    updatePreferences(movie, direction===1);
    pushFeed(`${direction===1 ? 'Liked' : 'Disliked'} "${movie.title}"`);
    renderDeck();
  }, 420);
}
function updateCoinDisplay() {
  document.getElementById("coinCount").innerText = state.flixcoins;
  localStorage.setItem("flixcoins", state.flixcoins);

}



// initial render
renderDeck();
renderFeed();
updateCoinDisplay();


// seed some feed activity
pushFeed("Welcome to FlixSwipe! Start swiping to build taste.");

// small niceties: keyboard shortcuts
window.addEventListener('keyup', (e)=>{
  if(e.key === 'ArrowRight') simulateSwipe(true);
  if(e.key === 'ArrowLeft') simulateSwipe(false);
  if(e.key === 'z') undoBtn.click();
});

// small visual cue for top card
cardDeck.addEventListener('mouseover', ()=> {
  const top = document.querySelector('.movie-card.top');
  if(top) top.classList.add('hover');
});
cardDeck.addEventListener('mouseleave', ()=>{
  const top = document.querySelector('.movie-card.top');
  if(top) top.classList.remove('hover');
});

rewardCloseBtn.addEventListener("click", () => {
  dailyRewardPopup.classList.add("hidden");
});


// Hide splash after animation
setTimeout(() => {
  const splash = document.getElementById('splash');
  splash.style.display = 'none';
}, 2600);
// --- PROFILE & AUTH HANDLING ---

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your Firebase config (same as in login.html)
const firebaseConfig = {
  apiKey: "AIzaSyCxTmf4I6F_IjKeVOZlNdE4A21p9QEAJXk",
  authDomain: "flixswipe-30468.firebaseapp.com",
  projectId: "flixswipe-30468",
  storageBucket: "flixswipe-30468.firebasestorage.app",
  messagingSenderId: "127173962149",
  appId: "1:127173962149:web:632ff474e1d6e598e3e04c",
  measurementId: "G-4QXLG25WWJ"
};

// Initialize Firebase Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get UI elements
const loginBtn = document.getElementById("loginBtn");
const profileContainer = document.getElementById("profileContainer");
const profilePic = document.getElementById("profilePic");
const profileEmail = document.getElementById("profileEmail");
const profileDropdown = document.getElementById("profileDropdown");
const logoutBtn = document.getElementById("logoutBtn");

// Redirect to login page if clicked
loginBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

// Dropdown toggle
profileContainer.addEventListener("click", () => {
  profileDropdown.classList.toggle("hidden");
});

// Logout functionality
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  localStorage.removeItem("flixUser");
  alert("You have logged out!");
  window.location.reload();
});

// Check login state
onAuthStateChanged(auth, (user) => {
  const greeting = document.getElementById("welcomeGreeting");

  if (user) {
    // Show profile UI
    loginBtn.classList.add("hidden");
    profileContainer.classList.remove("hidden");

    // Update profile info
    profileEmail.textContent = user.email;
    profilePic.src = user.photoURL || "https://cdn-icons-png.flaticon.com/512/1077/1077012.png";

    // Save session locally
    localStorage.setItem("flixUser", JSON.stringify({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid
    }));

    // 🧠 Show welcome greeting (only if just logged in)
    if (!localStorage.getItem("greetedUser")) {
      const displayName = user.displayName || "Movie Lover";
      greeting.textContent = `Welcome, ${displayName}! 🍿`;
      greeting.classList.remove("hidden");
      setTimeout(() => greeting.classList.add("show"), 100);
      setTimeout(() => {
        greeting.classList.remove("show");
        setTimeout(() => greeting.classList.add("hidden"), 600);
      }, 4000);

      localStorage.setItem("greetedUser", "true");
    }

  } else {
    // Logged out state
    profileContainer.classList.add("hidden");
    loginBtn.classList.remove("hidden");

    // Reset greeting flag
    localStorage.removeItem("greetedUser");
  }
});
// --- Group Match Link Generator ---
document.getElementById("createGroupBtn").addEventListener("click", () => {
  // Generate random room code
  const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  const shareLink = `${window.location.origin}/findmatch.html?room=${roomCode}`;

  // Copy link to clipboard
  navigator.clipboard.writeText(shareLink)
    .then(() => {
      alert(`Group match link copied!\n\n${shareLink}`);
    })
    .catch(() => {
      alert("Could not copy link. Try manually:\n" + shareLink);
    });
});

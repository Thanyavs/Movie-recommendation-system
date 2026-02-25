// 🔥 ENTER YOUR TMDB API KEY HERE
const TMDB_API_KEY = "db4e0b4de13e8d04a8d36badf79b6aa1";

// TMDB base poster URL
const TMDB_POSTER_BASE = "https://image.tmdb.org/t/p/w500";

// Load poster_cache from localStorage
let posterCache = JSON.parse(localStorage.getItem("poster_cache") || "{}");

// Save cache helper
function savePosterCache() {
    localStorage.setItem("poster_cache", JSON.stringify(posterCache));
}

// Fetch poster from TMDB automatically
async function fetchPosterForMovie(movie) {
    // If cached → return instantly
    if (posterCache[movie.title]) {
        return posterCache[movie.title];
    }

    try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movie.title)}&year=${movie.year}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.results && data.results.length > 0 && data.results[0].poster_path) {
            const posterUrl = `${TMDB_POSTER_BASE}${data.results[0].poster_path}`;
            
            // Cache it
            posterCache[movie.title] = posterUrl;
            savePosterCache();

            return posterUrl;
        }

        // ❌ No results → fallback poster
        return "fallback.jpg";   // use any local fallback image

    } catch (err) {
        console.error("TMDB error:", err);
        return "fallback.jpg";
    }
}

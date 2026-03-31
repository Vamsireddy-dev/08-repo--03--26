

window.checkPassword = function() {
    const correctPassword = "vyshvam";
    const entered = document.getElementById("passwordInput").value;

    if (entered === correctPassword) {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("website").style.display = "block";
    } 
    else if (entered === "040705") {
        document.getElementById("errorMsg").innerText = " - This is not the password, but I appreciate your effort. please Don't try again";
    }
    else {
        document.getElementById("errorMsg").innerText = " - Incorrect password. Please Don't try again.";
    }
};

const text = "I want to tell you something important. I feel I may not be capable of making our relationship perfect, but I need you to know my feelings.";
let index = 0;

function startTyping() {
    const typingEl = document.getElementById("typing");
    typingEl.innerHTML = "";
    index = 0;

    function type() {
        if (index < text.length) {
            typingEl.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 40);
        }
    }

    type();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

setTimeout(() => {
    document.querySelectorAll(".hidden").forEach(el => {
        observer.observe(el);
    });
}, 500);
const music = document.getElementById("bgMusic");

function playMusicLoop(seconds) {
    if (!music) return;

    function startMusic() {
        music.currentTime = 0;
        music.play().catch(() => {});

        setTimeout(() => {
            music.pause();
            // 1-second gap before replay
            setTimeout(startMusic, 1000);
        }, seconds * 1000);
    }

    startMusic();
}

// Manual toggle
window.toggleMusic = function() {
    if (!music) return;

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
};

window.openLetter = function() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("content").style.display = "block";

    startTyping();

    // Play music 60 seconds then auto-replay
    playMusicLoop(60);
};

// ========== CONFIG ==========
const CUSTOM_MESSAGE = `Happy Birthday meri jaan <b>Riddhuu</b>! ❤️<br><br>
14 September – aaj ka din sirf tumhara hai.<br><br>
Tumhare saath guzra har pal itna special hai ki dil bhar aata hai. Tumhari muskaan, tumhari baatein, aur tumhara pyaar… sab kuch meri duniya hai.<br><br>
Tumhare liye dua hai ki zindagi hamesha khushiyon se bhari rahe, har sapna pura ho, aur main hamesha tumhare saath rahoon.<br><br>
I love you so much ❤️<br>
Hamesha tumhara...`;

document.getElementById('wishMessage').innerHTML = CUSTOM_MESSAGE;

// ========== PAGE NAVIGATION ==========
function goToPage(num) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page' + num);
    page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== BALLOONS ==========
const balloonColors = ['#ff6b9d', '#ffd166', '#4ecdc4', '#a78bfa', '#f472b6', '#60a5fa', '#34d399', '#fb7185', '#f9a8d4'];

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.animationDuration = (9 + Math.random() * 9) + 's';
    balloon.style.animationDelay = Math.random() * 3 + 's';
    balloon.style.width = (42 + Math.random() * 38) + 'px';
    balloon.style.height = (58 + Math.random() * 38) + 'px';
    document.getElementById('balloons').appendChild(balloon);
    setTimeout(() => balloon.remove(), 18000);
}

for (let i = 0; i < 12; i++) setTimeout(createBalloon, i * 350);
setInterval(createBalloon, 1100);

// ========== PETALS ==========
function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (5 + Math.random() * 7) + 's';
    const hues = ['#ff6b9d', '#ff9a9e', '#fad0c4', '#ffd166', '#c084fc', '#f9a8d4'];
    petal.style.background = hues[Math.floor(Math.random() * hues.length)];
    document.getElementById('petals').appendChild(petal);
    setTimeout(() => petal.remove(), 13000);
}

for (let i = 0; i < 15; i++) setTimeout(createPetal, i * 250);
setInterval(createPetal, 380);

// ========== MUSIC ==========
const music = document.getElementById('bgMusic');
const playBtn = document.getElementById('playMusic');
let isPlaying = false;

function playMusic() {
    music.play().then(() => {
        isPlaying = true;
        if (playBtn) playBtn.textContent = '⏸️ Pause Song';
    }).catch(() => {
        // Autoplay blocked - user will need to click
    });
}

if (playBtn) {
    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            playBtn.textContent = '🎵 Play Song';
            isPlaying = false;
        } else {
            playMusic();
        }
    });
}

// ========== BLOW CANDLES ==========
const blowBtn = document.getElementById('blowCandles');
const flames = document.querySelectorAll('.flame');
const cakeText = document.getElementById('cakeText');
const nextBtn = document.getElementById('nextBtn');

blowBtn.addEventListener('click', () => {
    // Blow out flames
    flames.forEach(f => f.classList.add('off'));
    
    // Big confetti
    createConfettiBurst();
    
    // Auto play song
    playMusic();
    
    // Update text
    cakeText.innerHTML = "Wish granted! ✨<br>Happy Birthday meri jaan Riddhuu ❤️";
    
    // Hide blow button, show next
    blowBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    
    // Extra hearts
    createHearts();
});

// ========== CONFETTI ==========
function createConfettiBurst() {
    const colors = ['#ff6b9d', '#ffd166', '#4ecdc4', '#a78bfa', '#fb7185', '#60a5fa', '#ffffff', '#f9a8d4'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = (7 + Math.random() * 9) + 'px';
        confetti.style.height = (7 + Math.random() * 9) + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = '50%';
        confetti.style.top = '42%';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        confetti.style.zIndex = '200';
        confetti.style.pointerEvents = 'none';
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 100 + Math.random() * 160;
        let vx = Math.cos(angle) * velocity;
        let vy = Math.sin(angle) * velocity - 70;
        
        document.body.appendChild(confetti);
        
        let x = 0, y = 0, opacity = 1;
        const animate = () => {
            x += vx * 0.02;
            y += vy * 0.02;
            vy += 3.8;
            opacity -= 0.011;
            confetti.style.transform = `translate(${x}px, ${y}px) rotate(${x * 3}deg)`;
            confetti.style.opacity = opacity;
            if (opacity > 0) requestAnimationFrame(animate);
            else confetti.remove();
        };
        requestAnimationFrame(animate);
    }
}

// ========== HEARTS ==========
function createHearts() {
    for (let i = 0; i < 18; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = (30 + Math.random() * 40) + '%';
            heart.style.top = '50%';
            heart.style.fontSize = (18 + Math.random() * 22) + 'px';
            heart.style.zIndex = '150';
            heart.style.pointerEvents = 'none';
            heart.style.opacity = '1';
            heart.style.transition = 'all 2.5s ease-out';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.transform = `translateY(-${180 + Math.random() * 120}px) scale(1.3)`;
                heart.style.opacity = '0';
            }, 50);
            
            setTimeout(() => heart.remove(), 2800);
        }, i * 90);
    }
}

// ========== STARS ==========
function createStar() {
    const star = document.createElement('div');
    star.style.position = 'fixed';
    star.style.width = (1.5 + Math.random() * 2) + 'px';
    star.style.height = star.style.width;
    star.style.background = '#fff';
    star.style.borderRadius = '50%';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.opacity = 0.3 + Math.random() * 0.5;
    star.style.zIndex = '0';
    star.style.pointerEvents = 'none';
    star.style.boxShadow = '0 0 6px #fff';
    document.getElementById('particles').appendChild(star);
}
for (let i = 0; i < 60; i++) createStar();

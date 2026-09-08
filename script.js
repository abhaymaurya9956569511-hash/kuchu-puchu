// ========== CONFIG ==========
const DEFAULT_NAME = "Riddhuu";
const CUSTOM_MESSAGE = `Happy Birthday meri jaan <b>Riddhuu</b>! ❤️<br><br>
14 September – aaj ka din sirf tumhara hai.<br><br>
Tumhare saath guzra har pal itna special hai ki dil bhar aata hai. Tumhari muskaan, tumhari baatein, aur tumhara pyaar… sab kuch meri duniya hai.<br><br>
Tumhare liye dua hai ki zindagi hamesha khushiyon se bhari rahe, har sapna pura ho, aur main hamesha tumhare saath rahoon.<br><br>
I love you so much ❤️<br>
Hamesha tumhara...`;

// Set message
document.getElementById('wishMessage').innerHTML = CUSTOM_MESSAGE;

// ========== PAGE NAVIGATION ==========
function goToPage(num) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + num).classList.add('active');
    window.scrollTo(0, 0);
}

// ========== BALLOONS ==========
const balloonColors = ['#ff6b9d', '#ffd166', '#4ecdc4', '#a78bfa', '#f472b6', '#60a5fa', '#34d399', '#fb7185'];

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.animationDuration = (8 + Math.random() * 8) + 's';
    balloon.style.animationDelay = Math.random() * 4 + 's';
    balloon.style.width = (40 + Math.random() * 35) + 'px';
    balloon.style.height = (55 + Math.random() * 35) + 'px';
    document.getElementById('balloons').appendChild(balloon);
    setTimeout(() => balloon.remove(), 16000);
}

for (let i = 0; i < 10; i++) setTimeout(createBalloon, i * 400);
setInterval(createBalloon, 1400);

// ========== PETALS ==========
function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (5 + Math.random() * 6) + 's';
    const hues = ['#ff6b9d', '#ff9a9e', '#fad0c4', '#ffd166', '#c084fc'];
    petal.style.background = hues[Math.floor(Math.random() * hues.length)];
    document.getElementById('petals').appendChild(petal);
    setTimeout(() => petal.remove(), 12000);
}

for (let i = 0; i < 12; i++) setTimeout(createPetal, i * 300);
setInterval(createPetal, 450);

// ========== MUSIC ==========
const music = document.getElementById('bgMusic');
const playBtn = document.getElementById('playMusic');
let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        playBtn.textContent = '🎵 Play Song';
        isPlaying = false;
    } else {
        music.play().then(() => {
            playBtn.textContent = '⏸️ Pause Song';
            isPlaying = true;
        }).catch(() => {
            alert('Song play nahi ho raha. Browser autoplay block kar raha hai ya file missing hai.');
        });
    }
});

// ========== BLOW CANDLES ==========
const blowBtn = document.getElementById('blowCandles');
const flames = document.querySelectorAll('.flame');
const cakeText = document.getElementById('cakeText');
const nextBtn = document.getElementById('nextBtn');

blowBtn.addEventListener('click', () => {
    flames.forEach(f => f.classList.add('off'));
    createConfettiBurst();
    
    cakeText.innerHTML = "Wish granted! ✨<br>Happy Birthday Riddhuu ❤️";
    blowBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
});

// ========== CONFETTI ==========
function createConfettiBurst() {
    const colors = ['#ff6b9d', '#ffd166', '#4ecdc4', '#a78bfa', '#fb7185', '#60a5fa', '#ffffff'];
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = (6 + Math.random() * 8) + 'px';
        confetti.style.height = (6 + Math.random() * 8) + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = '50%';
        confetti.style.top = '45%';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        confetti.style.zIndex = '100';
        confetti.style.pointerEvents = 'none';
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 90 + Math.random() * 140;
        let vx = Math.cos(angle) * velocity;
        let vy = Math.sin(angle) * velocity - 60;
        
        document.body.appendChild(confetti);
        
        let x = 0, y = 0, opacity = 1;
        const animate = () => {
            x += vx * 0.02;
            y += vy * 0.02;
            vy += 3.5;
            opacity -= 0.012;
            confetti.style.transform = `translate(${x}px, ${y}px) rotate(${x * 2}deg)`;
            confetti.style.opacity = opacity;
            if (opacity > 0) requestAnimationFrame(animate);
            else confetti.remove();
        };
        requestAnimationFrame(animate);
    }
}

// ========== STARS ==========
function createStar() {
    const star = document.createElement('div');
    star.style.position = 'fixed';
    star.style.width = '2px';
    star.style.height = '2px';
    star.style.background = '#fff';
    star.style.borderRadius = '50%';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.opacity = Math.random() * 0.7;
    star.style.zIndex = '0';
    star.style.pointerEvents = 'none';
    star.style.boxShadow = '0 0 6px #fff';
    document.getElementById('particles').appendChild(star);
}
for (let i = 0; i < 50; i++) createStar();

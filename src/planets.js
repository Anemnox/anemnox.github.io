const I_HATE_THIS = false;
const sunImg = new Image();
const ICK1 = new Image();
const ICK2 = new Image();
const ICK3 = new Image();
const ICK4 = new Image();
const ICK5 = new Image();
const ICK6 = new Image();

sunImg.src =  '/sun2.png';
ICK1.src = "/IMG_0191.png";
ICK2.src = "/IMG_9192.png";
ICK3.src = "/IMG_9607.png";
ICK4.src = "/IMG_9645.jpg";
ICK5.src = "/IMG_9954.png";
ICK6.src = "/IMG_9450.png";

const CURSED_IMAGES = [
    sunImg,
    ICK1,
    ICK2,
    ICK3,
    ICK4,
    ICK5,
    ICK6
]

let dt = 100
let full_scale = 300;
let y_tilt = 0.2;
let y_pos = 150;

const SUN = 8
const planets = [
    { name: 'Mercury', a: 0.39, period: 88, ecc: 0.206, size: 2.4, color: '#aaa' },
    { name: 'Venus',   a: 0.72, period: 225, ecc: 0.007, size: 3, color: '#f3c87f' },
    { name: 'Earth',   a: 1.00, period: 365, ecc: 0.017, size: 4, color: '#3fa9f5' },
    { name: 'Mars',    a: 1.52, period: 687, ecc: 0.093, size: 3.2, color: '#e07b39' },
    { name: 'Jupiter', a: 5.20, period: 4331, ecc: 0.049, size: 7, color: '#d2b48c' },
    { name: 'Saturn',  a: 9.58, period: 10747, ecc: 0.056, size: 6, color: '#ffe4a1' },
    { name: 'Uranus',  a: 19.2, period: 30589, ecc: 0.046, size: 5, color: '#8ce0ff' },
    { name: 'Neptune', a: 30.1, period: 59800, ecc: 0.010, size: 5, color: '#6b9fff' },
];

function darken(hex, percent = 20) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    r = Math.floor(r * (1 - percent / 100));
    g = Math.floor(g * (1 - percent / 100));
    b = Math.floor(b * (1 - percent / 100));

    return `rgb(${r}, ${g}, ${b})`;
}

function initAndDraw() {
    const canvas = document.getElementById('solarCanvas');
    const ctx = canvas.getContext('2d');

    let w, h, cx, cy;
    let time = Date.now();

    function syncCanvasSizeToCSS(canvas) {
        const dpr = 1; //window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function resize() {
        syncCanvasSizeToCSS(canvas);
        
        w = canvas.width;
        h = canvas.height;
        cx = w / 2;
        cy = h / 2 + y_pos;
    }

    function draw() {
        time += dt;
        const t = time / 1000;

        //y_tilt = ((Math.cos(t * 0.05) + 1) / 2);

        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.translate(cx, cy);

        const drawQueue = [
            {name: "Sun", a: 0, period: 0, ecc: 0, size: SUN, color: "#ffd54f", orbitA: 0, orbitB: 0, x: 0, y: 0}
        ];

        planets.forEach(p => {
            const b = (p.a * full_scale * y_tilt) * Math.sqrt(1 - p.ecc * p.ecc);
            const angle = (t * (2 * Math.PI / p.period)) % (2 * Math.PI);
            const x = Math.cos(angle) * p.a * full_scale;
            const y = Math.sin(angle) * b;

            drawQueue.push({ ...p, x, y, orbitA: p.a * full_scale, orbitB: b });
        });

        drawQueue.sort((a, b) => a.y - b.y);

        drawQueue.forEach(p => {
            if (I_HATE_THIS && p.name === 'Sun') {
                let idx = Math.floor(t / 40) % (CURSED_IMAGES.length);

                console.log(idx);
                const img = CURSED_IMAGES[idx];

                const imgSize = 1000 * ((Math.cos(t * 0.3) + 1) / 2) + 100;
                ctx.beginPath();
                ctx.arc(0, 0, imgSize / 2, 0, Math.PI * 2);
                ctx.closePath();
                ctx.clip();

                ctx.drawImage(img, p.x - imgSize / 2, p.y - imgSize / 2, imgSize, imgSize);
                return;
            }

            ctx.strokeStyle = 'rgba(255,255,255,0.05)';
            ctx.beginPath();
            ctx.ellipse(0, 0, p.orbitA, p.orbitB, 0, 0, 2 * Math.PI);
            ctx.stroke();

            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * (full_scale / 40), 0, Math.PI * 2);

            ctx.strokeStyle = darken(p.color, 40);
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.fill();
        })

        ctx.restore();
        requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
}

export {
    initAndDraw
}
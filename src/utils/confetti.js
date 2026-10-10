// Custom lightweight high-performance Confetti & Heart burst engine

export function triggerConfetti(options = {}) {
  const {
    particleCount = 70,
    origin = { x: 0.5, y: 0.5 },
    spread = 360,
    colors = ['#ff4757', '#ff6b81', '#ffa502', '#2ed573', '#1e90ff', '#eccc68', '#ff78c4', '#a55eea'],
    shapes = ['square', 'circle', 'heart', 'star'],
    duration = 2800,
  } = options;

  let canvas = document.getElementById('celebration-confetti-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'celebration-confetti-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  const startX = origin.x * width;
  const startY = origin.y * height;

  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    const angle = (Math.random() * spread - spread / 2) * (Math.PI / 180) - (spread < 360 ? Math.PI / 2 : 0);
    const speed = 4 + Math.random() * 11;
    particles.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed * (0.8 + Math.random() * 0.4),
      vy: Math.sin(angle) * speed * (0.8 + Math.random() * 0.4),
      size: 5 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      alpha: 1,
      decay: 0.008 + Math.random() * 0.008,
      gravity: 0.25 + Math.random() * 0.15,
      wobble: Math.random() * 10,
    });
  }

  const startTime = performance.now();

  function render(now) {
    const elapsed = now - startTime;
    ctx.clearRect(0, 0, width, height);

    let activeCount = 0;

    for (let p of particles) {
      if (p.alpha <= 0) continue;
      activeCount++;

      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.rotationSpeed;
      p.alpha -= p.decay;
      p.wobble += 0.1;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;

      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'heart') {
        ctx.font = `${p.size * 1.5}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('💖', 0, 0);
      } else if (p.shape === 'star') {
        drawStar(ctx, 0, 0, 5, p.size * 0.8, p.size * 0.4);
        ctx.fill();
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.2);
      }

      ctx.restore();
    }

    if (activeCount > 0 && elapsed < duration) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, width, height);
    }
  }

  requestAnimationFrame(render);
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
}

// Special heart shower
export function triggerHeartShower() {
  triggerConfetti({
    particleCount: 50,
    origin: { x: 0.5, y: 0.4 },
    spread: 360,
    colors: ['#ff4d6d', '#ff758f', '#ff8fa3', '#ffb3c1', '#f72585'],
    shapes: ['heart', 'star'],
    duration: 3200,
  });
}

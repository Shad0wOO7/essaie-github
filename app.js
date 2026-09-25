let count = 0;
const counterSpan = document.getElementById('counter');
const counterBtn = document.getElementById('counter-btn');
const colorBtn = document.getElementById('color-btn');

counterBtn.addEventListener('click', () => {
  count++;
  counterSpan.textContent = count;
});

const themes = [
  { accent: '#6366f1', glow: 'rgba(99, 102, 241, 0.4)' },
  { accent: '#ec4899', glow: 'rgba(236, 72, 153, 0.4)' },
  { accent: '#10b981', glow: 'rgba(16, 185, 129, 0.4)' },
  { accent: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)' },
  { accent: '#06b6d4', glow: 'rgba(6, 182, 212, 0.4)' }
];

let themeIndex = 0;

colorBtn.addEventListener('click', () => {
  themeIndex = (themeIndex + 1) % themes.length;
  const currentTheme = themes[themeIndex];
  
  document.documentElement.style.setProperty('--accent-color', currentTheme.accent);
  document.documentElement.style.setProperty('--accent-glow', currentTheme.glow);
});

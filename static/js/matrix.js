// Mathematical Formula Background - Inspired by Pi (1998)
class MathematicalBackground {
    constructor() {
        this.canvas = document.getElementById('matrix-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.fontSize = 12;
        this.equations = [
            'π = 3.14159265358979323846...',
            'e^(iπ) + 1 = 0',
            'Σ(n=1 to ∞) 1/n² = π²/6',
            '∫₀^∞ e^(-x²) dx = √π/2',
            'φ = (1 + √5)/2 ≈ 1.618',
            'sin²(x) + cos²(x) = 1',
            'lim(n→∞) (1 + 1/n)^n = e',
            'f(x) = x² + bx + c',
            'dy/dx = lim(h→0) [f(x+h) - f(x)]/h',
            'P(A∩B) = P(A) × P(B|A)',
            '∇²φ = ∂²φ/∂x² + ∂²φ/∂y²',
            'λ = h/p = h/mv',
            'E = mc²',
            'F = ma',
            'a² + b² = c²',
            'log₂(n) = log(n)/log(2)',
            'Σ(k=0 to n) C(n,k) = 2^n',
            'det(A) = ad - bc',
            'tr(A) = a₁₁ + a₂₂ + ... + aₙₙ',
            'rank(A) ≤ min(m,n)'
        ];
        this.drops = [];
        
        this.init();
        this.animate();
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        const columns = Math.floor(this.canvas.width / (this.fontSize * 8));
        
        for (let i = 0; i < columns; i++) {
            this.drops[i] = {
                y: Math.random() * -200,
                equation: this.equations[Math.floor(Math.random() * this.equations.length)],
                speed: 0.3 + Math.random() * 0.7,
                opacity: 0.3 + Math.random() * 0.4
            };
        }
    }
    
    animate() {
        // Clear canvas with very subtle fade
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.font = `${this.fontSize}px 'JetBrains Mono', monospace`;
        this.ctx.textAlign = 'left';
        
        for (let i = 0; i < this.drops.length; i++) {
            const drop = this.drops[i];
            const x = i * (this.fontSize * 8);
            const y = drop.y;
            
            // Set opacity and color
            this.ctx.fillStyle = `rgba(255, 255, 255, ${drop.opacity})`;
            
            // Draw equation
            this.ctx.fillText(drop.equation, x, y);
            
            // Update position
            drop.y += drop.speed;
            
            // Reset drop when it goes off screen
            if (y > this.canvas.height + 50) {
                drop.y = Math.random() * -200;
                drop.equation = this.equations[Math.floor(Math.random() * this.equations.length)];
                drop.speed = 0.3 + Math.random() * 0.7;
                drop.opacity = 0.2 + Math.random() * 0.3;
            }
        }
        
        requestAnimationFrame(() => this.animate());
    }
    
    resize() {
        this.init();
    }
}

// Initialize Mathematical Background
const mathBackground = new MathematicalBackground();

// Handle window resize
window.addEventListener('resize', () => {
    mathBackground.resize();
});

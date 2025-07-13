// Mathematical Formula Background - Inspired by Pi (1998)
class MathematicalBackground {
    constructor() {
        this.canvas = document.getElementById('matrix-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.fontSize = 12;
        this.equations = [
            'def fibonacci(n): return n if n <= 1 else fibonacci(n-1) + fibonacci(n-2)',
            'SELECT * FROM users WHERE id = ?',
            'function quickSort(arr) { if (arr.length <= 1) return arr; }',
            'class Node { constructor(data) { this.data = data; this.next = null; } }',
            'O(n log n) // Time complexity',
            'git commit -m "Initial commit"',
            'import tensorflow as tf',
            'const express = require("express");',
            'void setup() { Serial.begin(9600); }',
            'algorithm BFS(graph, start):',
            'npm install react',
            'pip install flask',
            'docker run -p 5000:5000 app',
            'if __name__ == "__main__":',
            'try { await fetch("/api/data"); } catch (e) {}',
            'CREATE TABLE portfolio (id INT PRIMARY KEY);',
            'machine learning model.fit(X_train, y_train)',
            'IoT sensor.read_temperature()',
            'API response.json()',
            'while (true) { loop(); delay(1000); }'
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
        // Get current theme
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        
        // Clear canvas with theme-appropriate fade
        if (isDark) {
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        } else {
            this.ctx.fillStyle = 'rgba(248, 249, 250, 0.03)';
        }
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.font = `${this.fontSize}px 'JetBrains Mono', monospace`;
        this.ctx.textAlign = 'left';
        
        for (let i = 0; i < this.drops.length; i++) {
            const drop = this.drops[i];
            const x = i * (this.fontSize * 8);
            const y = drop.y;
            
            // Set opacity and color based on theme
            if (isDark) {
                this.ctx.fillStyle = `rgba(255, 255, 255, ${drop.opacity})`;
            } else {
                this.ctx.fillStyle = `rgba(0, 0, 0, ${drop.opacity})`;
            }
            
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

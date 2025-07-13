// Mathematical Formula Background - Inspired by Pi (1998)
class MathematicalBackground {
    constructor() {
        this.canvas = document.getElementById('matrix-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.fontSize = 12;
        this.devices = [
            '💻', '🖥️', '📱', '⌨️', '🖱️', '🎮', '💾', '📀', '🔌', '🖨️',
            '📟', '📞', '📺', '📻', '🎧', '🔊', '📷', '📹', '💿', '📼',
            '🕹️', '⚡', '🔋', '💡', '🔌', '📡', '🛰️', '🌐', '💳', '🏧',
            '⏰', '📠', '📽️', '🎬', '🎤', '🎚️', '🎛️', '📟', '📞', '📱',
            '💻', '🖥️', '📟', '📱', '🖱️', '⌨️', '🖨️', '📷', '📹', '🎮'
        ];
        
        this.codeSnippets = [
            'def fibonacci(n):', 'SELECT * FROM users', 'function quickSort()',
            'class Node:', 'O(n log n)', 'git commit -m', 'import tensorflow',
            'const express = require', 'void setup()', 'algorithm BFS',
            'npm install react', 'pip install flask', 'docker run -p',
            'if __name__ == "__main__":', 'try { await fetch', 'CREATE TABLE',
            'machine learning model', 'IoT sensor.read()', 'API response.json()',
            'while (true) { loop(); }', 'System.out.println', 'console.log',
            'print("Hello World")', 'public static void main', 'int main()',
            'for (int i = 0; i < n; i++)', 'std::cout << "Hello"',
            'from flask import Flask', 'app = Flask(__name__)',
            'const app = express()', 'public class Main'
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
            const isDevice = Math.random() < 0.4; // 40% chance to show device, 60% for code
            this.drops[i] = {
                y: Math.random() * -200,
                content: isDevice ? 
                    this.devices[Math.floor(Math.random() * this.devices.length)] :
                    this.codeSnippets[Math.floor(Math.random() * this.codeSnippets.length)],
                speed: 0.3 + Math.random() * 0.7,
                opacity: 0.3 + Math.random() * 0.4,
                isDevice: isDevice
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
            
            // Set font size based on content type
            if (drop.isDevice) {
                this.ctx.font = `${this.fontSize * 1.5}px 'JetBrains Mono', monospace`;
            } else {
                this.ctx.font = `${this.fontSize}px 'JetBrains Mono', monospace`;
            }
            
            // Draw content
            this.ctx.fillText(drop.content, x, y);
            
            // Update position
            drop.y += drop.speed;
            
            // Reset drop when it goes off screen
            if (y > this.canvas.height + 50) {
                drop.y = Math.random() * -200;
                const isDevice = Math.random() < 0.4;
                drop.content = isDevice ? 
                    this.devices[Math.floor(Math.random() * this.devices.length)] :
                    this.codeSnippets[Math.floor(Math.random() * this.codeSnippets.length)];
                drop.speed = 0.3 + Math.random() * 0.7;
                drop.opacity = 0.2 + Math.random() * 0.3;
                drop.isDevice = isDevice;
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

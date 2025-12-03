/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // O fundo escuro profundo
        background: '#020617', 
        // Azul Ciano Neon (para textos e brilhos)
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        // Azul Royal (para botões e gradientes)
        blue: {
          600: '#2563eb',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)',
      },
      // --- ANIMAÇÕES ADICIONADAS PARA O EFEITO ORBITAL ---
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
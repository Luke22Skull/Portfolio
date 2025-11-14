module.exports = {
  content: ['./*.html', './js/**/*.js', './components/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1c1c42',
        'primary-solid': '#1a1a40',
        'text-light': '#fafafa',
        'text-dark': '#333333',
        'accent-purple': '#8a2be2',
        'accent-cyan': '#00ffff'
      },
      fontFamily: {
        infra: ['Infra-Font', 'sans-serif'],
        'infra-bold': ['Infra-Font-Bold', 'sans-serif'],
        'infra-regular': ['Infra-Font-Regular', 'sans-serif'],
        'infra-light': ['Infra-Font-Light', 'sans-serif'],
        'infra-medium': ['Infra-Font-Medium', 'sans-serif'],
        'infra-semibold': ['Infra-Font-SemiBold', 'sans-serif'],
        'infra-thin': ['Infra-Font-Thin', 'sans-serif']
      },
      fontSize: {
        'step--2': 'clamp(0.78rem, 0.77rem + 0.03vw, 0.8rem)',
        'step--1': 'clamp(0.94rem, 0.92rem + 0.11vw, 1rem)',
        'step-0': 'clamp(1.13rem, 1.08rem + 0.22vw, 1.25rem)',
        'step-1': 'clamp(1.35rem, 1.28rem + 0.37vw, 1.56rem)',
        'step-2': 'clamp(1.62rem, 1.50rem + 0.58vw, 1.95rem)',
        'step-3': 'clamp(1.94rem, 1.77rem + 0.87vw, 2.44rem)',
        'step-4': 'clamp(2.33rem, 2.08rem + 1.25vw, 3.05rem)',
        'step-5': 'clamp(2.80rem, 2.45rem + 1.77vw, 3.82rem)'
      },
      spacing: {
        'space-xs': 'clamp(0.88rem, 0.85rem + 0.11vw, 0.94rem)',
        'space-s': 'clamp(1.13rem, 1.08rem + 0.22vw, 1.25rem)',
        'space-m': 'clamp(1.69rem, 1.62rem + 0.33vw, 1.88rem)',
        'space-l': 'clamp(2.25rem, 2.16rem + 0.43vw, 2.50rem)',
        'space-xl': 'clamp(3.38rem, 3.24rem + 0.65vw, 3.75rem)',
        'space-2xl': 'clamp(4.50rem, 4.33rem + 0.87vw, 5.00rem)',
        'space-3xl': 'clamp(6.75rem, 6.49rem + 1.30vw, 7.50rem)',
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'hover-lift': 'hoverLift 0.3s ease-out',
        'focus-scale': 'focusScale 0.2s ease',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'typing': 'typing 3s steps(30) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        hoverLift: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-5px)' }
        },
        focusScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(138, 43, 226, 0.6)' }
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    }
  },
  plugins: []
}
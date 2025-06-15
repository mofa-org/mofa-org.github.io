/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 主要马卡龙色系
        'mondrian-red': '#FF513B',      // 马卡龙珊瑚红
        'mondrian-blue': '#69CED1',     // 马卡龙薄荷蓝
        'mondrian-yellow': '#73D0D3',   // 马卡龙青绿色
        'mondrian-black': '#2D3748',    // 柔和的深灰色
        'mondrian-white': '#FFFFFF',
        'mondrian-gray': '#E2E8F0',     // 柔和的浅灰色
        
        // 扩展马卡龙色系
        'macaron-peach': '#FFB5A7',     // 马卡龙桃粉色
        'macaron-lavender': '#C7CEEA',  // 马卡龙薰衣草紫
        'macaron-mint': '#A8E6CF',      // 马卡龙薄荷绿
        'macaron-lemon': '#FFE4B3',     // 马卡龙柠檬黄
        'macaron-rose': '#F8BBD9',      // 马卡龙玫瑰粉
        'macaron-sky': '#B3E5FC',       // 马卡龙天空蓝
        'macaron-coral': '#FFAB91',     // 马卡龙珊瑚橙
        'macaron-sage': '#C8E6C9',      // 马卡龙鼠尾草绿
        
        'mofa-primary': '#FF513B',      // 主色调：珊瑚红
        'mofa-secondary': '#69CED1',    // 次要色：薄荷蓝  
        'mofa-accent': '#73D0D3',       // 强调色：青绿色
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'grid-float': 'gridFloat 20s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gridFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.mondrian-blue'),
              '&:hover': {
                color: theme('colors.mondrian-red'),
              },
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 
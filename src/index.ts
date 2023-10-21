import plugin from 'tailwindcss/plugin'

export default plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'grid-cols-fill': (value) => {
        if (typeof value === 'function') {
          value = value({})
        }
        return {
          'grid-template-columns': `repeat(auto-fill, minmax(${value}, 1fr))`,
        }
      },
      'grid-cols-fit': (value) => {
        if (typeof value === 'function') {
          value = value({})
        }
        return {
          'grid-template-columns': `repeat(auto-fit, minmax(${value}, 1fr))`,
        }
      },
      'grid-rows-fill': (value) => {
        if (typeof value === 'function') {
          value = value({})
        }
        return {
          'grid-template-rows': `repeat(auto-fill, minmax(${value}, 1fr))`,
        }
      },
      'grid-rows-fit': (value) => {
        if (typeof value === 'function') {
          value = value({})
        }
        return {
          'grid-template-rows': `repeat(auto-fit, minmax(${value}, 1fr))`,
        }
      },
    },
    { values: theme('spacing') },
  )
})

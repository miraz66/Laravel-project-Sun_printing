import forms from '@tailwindcss/forms';

function withOpacity(variableName) {
    return ({ opacityValue }) => {
      if (opacityValue !== undefined) {
        return `rgba(var(${variableName}), ${opacityValue})`;
      }
      return `rgb(var(${variableName}))`;
    };
  }

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
                handle: ["Handlee", "sans-serif"],
                playfair: ["Playfair Display", "serif"],
                display: ["Montserrat", "sans-serif"],
              },
              backgroundColor: {
                primary: withOpacity("--background-primary-color"),
                secondary: withOpacity("--background-secondary-color"),
                muted: withOpacity("--background-muted-color"),
              },
              textColor: {
                primary_color: withOpacity("--text-primary-color"),
                current_color: withOpacity("--text-current-color"),
                secondary_color: withOpacity("--text-secondary-color"),
                muted_color: withOpacity("--text-muted-color"),
              },
        },
    },

    plugins: [
      require('@tailwindcss/typography'),
    ],
};

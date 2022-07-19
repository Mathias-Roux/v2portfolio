import postcss from 'rollup-plugin-postcss';
import csso from 'postcss-csso';


export default {
    input: './src/app.js',
    output: {
        file: './dist/app.min.js',
        format: 'iife',
        name: 'app'
    },
    plugins: [
      postcss({
        plugins: [
          csso(),
          require('autoprefixer')
        ],
        extract: 'dist/style.css'
      })
    ]
}

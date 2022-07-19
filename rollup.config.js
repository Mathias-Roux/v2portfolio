import postcss from 'rollup-plugin-postcss';
import postcss_plugins from './postcss.config.js';

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
          postcss_plugins,
          require('autoprefixer')
        ],
        extract: 'dist/style.css'
      })
    ]
}

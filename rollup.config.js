import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
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
        extract: 'style.css',
        modules: true,
        minimize: true,
        plugins: [
          postcssPresetEnv({ autoprefixer: {} }),
          csso({
            restructure: false
          })
        ]
      })
    ]
}

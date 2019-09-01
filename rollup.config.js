import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import postcssNested from 'postcss-nested';

export default [{
  input: './src/main.ts',
  plugins: [
    typescript(),
    postcss({
      plugins: [postcssNested]
    })
  ],
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  }
}]

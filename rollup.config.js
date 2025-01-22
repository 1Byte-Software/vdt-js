const typescript = require('rollup-plugin-typescript2');
const pkg = require('./package.json');
const { string } = require('rollup-plugin-string');
const copy = require('rollup-plugin-copy');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    typescript(),
    string({
      include: '**/*.svg', // Xử lý tất cả các file SVG
    }),
    copy({
      targets: [
        { src: 'src/assets/icons/*.svg', dest: 'dist/assets/icons' }, // Copy file SVG vào thư mục dist
      ],
    }),
  ],
};
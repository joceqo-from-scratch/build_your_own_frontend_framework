export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/fe-fwk.js',
      format: 'esm',
    },
    {
      file: 'dist/fe-fwk.min.js',
      format: 'esm',
    },
  ],
}
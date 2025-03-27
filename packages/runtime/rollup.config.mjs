import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  plugins:[commonjs(), nodeResolve()],
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
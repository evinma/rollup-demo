// rollup.config.js
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { version } from './package.json';

export default {
    input: 'src/main.js',
    output: {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'MyBundle',
      /* 全局变量
       */
      globals: {
        jquery: '$',
        lodash: '_'
      },
      banner: '/* my-library version ' + version + ' */',
      footer: '/* follow me on Twitter! @rich_harris */',
      // 打包后注入代码
      intro: 'var ENVIRONMENT = "production";',
      sourcemap: true,
    },
    plugins: [
        resolve({
            // 将自定义选项传递给解析插件
            customResolveOptions: {
              moduleDirectory: 'node_modules'
            }
        }),
        commonjs(),
        json(),
        babel({
          exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ],
    // 指出应将哪些模块视为外部模块
    external: ['lodash'],
    watch: {
      include: 'src/**'
    }
  };
# rollup 打包
## input 入口文件
## output 输出文件
- file 文件名
- format 文件类型
- name iife 场景下需要
- globals 定义全局变量 eg：jquery
- banner 头部注释
- footer 尾部注释
- intro 注入代码

```
    intro: 'var ENVIRONMENT = "production";',
```
- sourcemap map文件

## plugins
- rollup-plugin-json 解析json文件
- rollup-plugin-node-resolve 定义第三方文件查找路径
- rollup-plugin-commonjs 帮助解析非es2015模块的第三方模块
- rollup-plugin-babel 不用说了吧。

## external 指出应将哪些模块视为外部模块
## watch 指定监听哪些文件的改动


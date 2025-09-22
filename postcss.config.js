import postcssPresetEnv from 'postcss-preset-env';
import pixelToRemVw from 'postcss-pixel-to-remvw';
// import cssnano from 'cssnano';

export default {
  plugins: [
    postcssPresetEnv({
      autoprefixer: {
        grid: true,
      },
      stage: 3,
      features: {
        'nesting-rules': true,
        clamp: true,
      },
    }),
    pixelToRemVw({
      baseSize: {
        // rem: 75, // 10rem = 750px
        vw: 7.5, // 100vw = 750px
      },
      unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      exclude: /-web(\.module)?\.(c|le)ss$/i,
    }),
    // cssnano({
    //   preset: [
    //     'default',
    //     {
    //       discardComments: {
    //         removeAll: false,
    //         // 保留包含 disable-convert 的注释，删除其它注释
    //         remove: (comment: any) => !/disable-convert/.test(comment),
    //       },
    //     },
    //   ],
    // }),
  ],
};

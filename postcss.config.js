import postcssPresetEnv from 'postcss-preset-env';
import pixelToRemVw from 'postcss-pixel-to-remvw';
// import cssnano from 'cssnano';

export default {
  plugins: [
    pixelToRemVw({
      baseSize: {
        // rem: 75, // 10rem = 750px
        vw: 7.5, // 100vw = 750px
      },
      unitPrecision: 5,
      minPixelValue: 1,
      // exclude: /-web(\.module)?\.(c|le)ss$/i,
    }),
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
    // cssnano({
    //   preset: [
    //     'default',
    //     {
    //       discardComments: {
    //         removeAll: false,
    //         remove: (comment: any) => !/disable-convert/.test(comment),
    //       },
    //     },
    //   ],
    // }),
  ],
};

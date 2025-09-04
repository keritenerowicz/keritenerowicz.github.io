import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    autoprefixer,
    postcssPresetEnv({
      features: {
        'nesting-rules': true,
      },
    }),
  ]
};

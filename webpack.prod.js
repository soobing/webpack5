const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // 프로덕션에서 inline-***과 eval-***은 번들 크기가 커질 수 있으므로 전체 성능을 향상을 위해 사용하지 않습니다.
});
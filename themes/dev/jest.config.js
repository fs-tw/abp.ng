module.exports = {
  name: 'dev',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/themes/dev',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

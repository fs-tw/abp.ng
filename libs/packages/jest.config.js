module.exports = {
  name: 'packages',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/packages',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

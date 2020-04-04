module.exports = {
  name: 'identity',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/identity',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

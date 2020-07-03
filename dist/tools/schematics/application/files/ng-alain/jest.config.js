module.exports = {
  name: 'test-app1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/test-app1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

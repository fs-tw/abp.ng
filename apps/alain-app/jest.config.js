module.exports = {
  name: 'alain-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/alain-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

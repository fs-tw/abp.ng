module.exports = {
  name: 'alain',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/alain',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

module.exports = {
  name: 'account',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/account',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

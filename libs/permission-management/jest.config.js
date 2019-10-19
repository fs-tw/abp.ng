module.exports = {
  name: 'permission-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/permission-management',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

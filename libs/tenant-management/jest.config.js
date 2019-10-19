module.exports = {
  name: 'tenant-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/tenant-management',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

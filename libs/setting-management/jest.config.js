module.exports = {
  name: 'setting-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/setting-management',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

module.exports = {
  name: 'permission-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/permission-management',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

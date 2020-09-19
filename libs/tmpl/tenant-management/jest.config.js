module.exports = {
  name: 'tenant-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/tenant-management',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

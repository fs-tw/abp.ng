module.exports = {
  name: 'setting-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/setting-management',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

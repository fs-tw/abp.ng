module.exports = {
  name: 'feature-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-management',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

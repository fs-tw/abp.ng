module.exports = {
  name: 'identity',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/identity',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

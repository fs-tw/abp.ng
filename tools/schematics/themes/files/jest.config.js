module.exports = {
  name: 'the-project',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/the-project',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

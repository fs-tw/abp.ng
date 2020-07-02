module.exports = {
  name: 'account',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/account',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

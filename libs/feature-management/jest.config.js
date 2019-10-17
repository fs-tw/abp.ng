module.exports = {
  name: 'feature-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-management',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

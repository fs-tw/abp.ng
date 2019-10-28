module.exports = {
  name: 'ngx-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/themes/ngx-admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

module.exports = {
  name: 'ngx-admin-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngx-admin-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

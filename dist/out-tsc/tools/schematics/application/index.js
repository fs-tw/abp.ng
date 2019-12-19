"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schematics_1 = require("@angular-devkit/schematics");
function default_1(schema) {
    return schematics_1.chain([
        schematics_1.externalSchematic('@nrwl/angular', 'app', {
            name: schema.name,
            e2eTestRunner: 'none',
            routing: true
        })
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const envConfig = () => ({
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    mongodb: process.env.MONGODB_URI,
    defaultLimit: process.env.DEFAULT_LIMIT || 7,
});
exports.envConfig = envConfig;
//# sourceMappingURL=env.config.js.map
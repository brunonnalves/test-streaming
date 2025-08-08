import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var _b;
    var mode = _a.mode;
    // Carrega as variáveis de ambiente com o modo especificado
    var env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [vue()],
        server: {
            port: parseInt((_b = env.VITE_PORT) !== null && _b !== void 0 ? _b : '3000'),
        },
    };
});

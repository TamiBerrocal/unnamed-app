module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: 'airbnb-base',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        "indent": [2, "tab"],
        "max-len": 0,
        "no-tabs": 0,
    },
};

// eslint.config.js
export default [
    {
        languageOptions: {
            globals: {
                // Esto le avisa al linter que reconozca variables de Node
                process: "writable"
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error"
        }
    }
];
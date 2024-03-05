module.exports = {
    "env": {
        "browser": true,
    },
    "parserOptions": {
        "ecmaVersion": 2021
    },
    "extends": [
        "eslint:recommended",
        // "plugin:vue/vue3-recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
}

module.exports = {
    "parser": "vue-eslint-parser",
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "airbnb-base",
        "plugin:vue/recommended"
    ],
    "rules": {
        "arrow-body-style": "off",
        "comma-dangle": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "indent": ["error", 4],
        "no-new": "off",
        "no-underscore-dangle": "off"
    },
    "globals": {
        "google": true
    }
}

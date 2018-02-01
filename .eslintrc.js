module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "airbnb-base",
    "rules": {
        "arrow-body-style": "off",
        "comma-dangle": "off",
        "indent": ["error", 4],
        "no-new": "off",
        "no-underscore-dangle": "off"
    },
    "globals": {
        "google": true
    }
}

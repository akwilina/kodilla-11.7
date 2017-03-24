module.exports = {
    "env": {
        "browser": true,
        "jquery": true
    },
    "plugins": [
        "dollar-sign",
        "jquery"
    ],
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
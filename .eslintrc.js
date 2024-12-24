// import config from "./eslint.config.js";
// export default config;

export default {
  overrides: [
    {
      files: ["*.config.js"], // Tous les fichiers de configuration
      env: {
        node: true, // Active les règles Node.js
      },
      rules: {
        "no-undef": "off", // Désactive les erreurs pour `require` et `module`
      },
    },
  ],
};

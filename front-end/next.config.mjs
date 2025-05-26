/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Desabilita o ESLint no processo de build
      ignoreDuringBuilds: true,
    },
    webpack(config, { isServer }) {
      // Ignora todos os warnings durante o build
      config.ignoreWarnings = [
        (warning) => true, // Isso ignora todos os warnings
      ];
      return config;
    },
  };

export default {
    typescript: {
      // Ignora todos os erros de tipo durante o build
      ignoreBuildErrors: true,
    },
    eslint: {
      // Ignora todos os erros de linting durante o build
      ignoreDuringBuilds: true,
    },
  };
  
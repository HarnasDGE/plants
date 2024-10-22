const nextConfig = {
  webpack(config) {
    // Znalezienie istniejącej reguły dla plików SVG
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Reaplikacja istniejącej reguły, ale tylko dla svg kończących się ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Przekształcanie pozostałych plików *.svg na komponenty React
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer || { and: [/\.[jt]sx?$/] }, // Bezpieczna wartość domyślna dla issuer
          resourceQuery: { not: [/url/] },
          use: ["@svgr/webpack"],
        }
      );

      // Modyfikacja istniejącej reguły, aby ignorowała pliki *.svg
      fileLoaderRule.exclude = /\.svg$/i;
    } else {
      console.warn(
        "Nie znaleziono reguły dla plików SVG. Upewnij się, że konfiguracja Webpacka zawiera odpowiednią regułę."
      );
    }

    return config;
  },
};

export default nextConfig;

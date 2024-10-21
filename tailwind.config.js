/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        cta: "border-radius: 34% 0% 0% 65% / 100% 61% 97% 25%",
      },
      colors: {
        background: "#ffffff",
        backgroundSecond: "#fff8f1",
        backgroundThird: "#D9F1E0",
        popUpMenu: "rgba(255,255,255,0.9)",
        projectBackground: "#EAEAEA",
        main: "var(--color-main)",
        second: "var(--color-second)",
        inputBorder: "var(--color-input-border)",
        inputSearchBorder: "var(--color-search-border)",
        textareaBorder: "var(--color-search-border)",
        menuDivider: "#c5c5c5",
        mobileMenuDivider: "#959595",
        postBorder: "#E3E3E3",
        commentBorder: "#E3E3E3",
        divider: "#c5c5c5",
        blogHighlistDivider: "#c5c5c5",
        footerDivider: "#c5c5c5",
        textMedium: "#989898",
        textLight: "#ffffff",
        textDark: "#212529",
        gradient1: "var(--color-gradient1)",
        gradient2: "var(--color-gradient2)",
        disabled: "var(--color-search-border)",
        ctaLight: "#E7D962",
        blockqouteBg: "#F6F6F6",
        authorBg: "#f6f6f6",
        google: "#367CFF",
        twitter: "#009FEE",
        pinterest: "#EF1408",
        linkedIn: "#0079B2",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(80deg, rgba(0, 115, 12, 0.81) -39.14%, rgba(251, 246, 238, 0) 90.23%)",
        "custom-gradient2":
          "linear-gradient(73deg, #00730C -83.5%, #F9F9F9 93.84%)",
        "custom-gradient3": "linear-gradient(180deg, #FFF8F1 0%, #CBE5CE 100%)",
        "custom-gradient4":
          "linear-gradient(90deg, transparent 0%, #FFF8F1 100%)",
        "service-gradient":
          "linear-gradient(172deg, #FFF -10.79%, #FFF 94.04%)",
        "staff-gradient":
          "linear-gradient(7deg, #00730C 4.95%, rgba(251, 246, 238, 0.00) 264.79%)",
        "review-gradient": "linear-gradient( #F9F9F9 -83.5%, #00730C 93.84%)",
        "review-background-gradient":
          "linear-gradient(rgb(202, 240, 206) 0%, rgb(202, 240, 206) 74%, #fff 75%, #fff 100%)",
        facebook: "linear-gradient(  #395795, #2E4980)",
      },
      maxWidth: {
        maxWidth: "1600px",
      },
      fontSize: {
        sm: "0.875rem", //14px
        base: "1rem", //16px
        xl: "1.125rem", //18px
        "2xl": "1.5rem", //24px
        "3xl": "2.063rem", //33px
        "4xl": "2.813rem", //45px
        "5xl": "3.625rem", //58px
        "6xl": "4.875rem", //78px
      },
      boxShadow: {
        service: "2px 11px 30px 0px rgba(51, 51, 51, 0.08)",
        review: "2px 11px 30px 0px rgba(51, 51, 51, 0.08)",
        normal: "2px 11px 30px 0px rgba(51, 51, 51, 0.08)",
        category: "0px 0px 20px 0px rgba(0, 0, 0, 0.15)",
        blogHighlist: "2px 0px 30px 2px rgba(51, 51, 51, 0.08)",
        progressBar: "0px 1px 7px 0px rgba(0, 0, 0, 0.18)",
        project:
          "-0.935px -10.688px 10.728px 0px #E5E5E5 inset, 0.935px 10.688px 10.728px 0px rgba(120,120,120,0.2) inset, 4.166px 47.618px 95.6px 0px rgba(51, 51, 51, 0.10)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./containers/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            boxShadow: {
                activeState: "8px 8px 40px rgba(12, 27, 58, 0.06)"
            },
            fontFamily: {
                "bold": ["GilroyBold", "sans-serif"],
                "semibold": ["GilroySemibold", "sans-serif"],
                "medium": ["GilroyMedium", "sans-serif"],
                "normal": ["GilroyRegular", "sans-serif"],
            },
            screens: {
                iphone: { min: "300px", max: "767px" },
                tablet: { min: "1024px", max: "1280px" },
                desktop: { min: "1280px" },
                largeDesktop: { min: "1536px" }
            },
            fontSize: {
                "heading-1": ["64px", "1.2"],
                "heading-2": ["48px", "1.2"],
                "heading-3": ["40px", "1.2"],
                "heading-4": ["32px", "1.3"],
                "heading-5": ["24px", "1.5"],
                "heading-6": ["20px", "1.5"],
                "text-l": ["18px", "1.5"],
                "text-m": ["16px", "1.5"],
                "text-s": ["14px", "1.5"],
                "text-xs": ["12px", "1.5"]
            },
            colors: {
                primary: {
                    main: "#6F3AFA",
                    surface: "#65A8FB",
                    hover: "#3A8EF6",
                    focus: "#3D93FF",
                    sky: "#F3F3FD"
                },
                secondary: {
                    main: "#FEE2C5",
                    surface: "#FFF9F3",
                    border: "#FFF3E8",
                    hover: "#FFF1E2",
                    pressed: "#E5CBB1",
                    focus: "#FFF6EE"
                },
                semantic: {
                    success: {
                        main: "#37C99E",
                        surface: "#EBFAF5",
                        border: "#AFE9D8",
                        hover: "#87DFC5",
                        pressed: "#32B58E",
                        focus: "#D7F4EC"
                    },
                    info: {
                        main: "#0099FF",
                        surface: "#E6F5FF",
                        border: "#99D6FF",
                        hover: "#66C2FF",
                        pressed: "#007ACC",
                        focus: "#CCEBFF"
                    },
                    warning: {
                        main: "#FFDA54",
                        surface: "#FFFBEE",
                        border: "#FFF0BB",
                        hover: "#FFE998",
                        pressed: "#E6C44C",
                        focus: "#FFF8DD"
                    },
                    danger: {
                        main: "#FE585B",
                        surface: "#FFEEEF",
                        border: "#FFBCBD",
                        hover: "#FE8A8C",
                        pressed: "#E54F52",
                        focus: "#FFDEDE"
                    }
                },
                neutral: {
                    10: "#FFFFFF",
                    20: "#F7F7F8",
                    30: "#E7E8EB",
                    40: "#B9BDC6",
                    50: "#868D9D",
                    60: "#6D7689",
                    70: "#555F75",
                    80: "#3D4961",
                    90: "#24324E",
                    100: "#0C1B3A"
                },
                porcellana: "#FFC1AD",
                nightshow: "#ADC4FF",
                palekingsblue: "#AAF0E8",
                adventureislandpink: "#F87853"
            }
        }
    },
    plugins: []
}
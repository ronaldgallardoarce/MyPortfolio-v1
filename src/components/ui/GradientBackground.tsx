const GradientBackground = () => {
    return (
        <div className="fixed h-screen w-full inset-0 z-0 bg-background-light dark:bg-background-dark rotate-x-180">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1220 810"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <g clipPath="url(#clip0_186_1134)">
                    <mask
                        id="mask0_186_1134"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="-1"
                        width="100%"
                        height="100%"
                    >
                    </mask>

                    <g filter="url(#filter0_f_186_1134)">
                        <path
                            d="M1447.45 -87.0203V-149.03H1770V1248.85H466.158V894.269C1008.11 894.269 1447.45 454.931 1447.45 -87.0203Z"
                            fill="url(#paint1_linear_186_1134)"
                        />
                    </g>

                    <g filter="url(#filter1_f_186_1134)">
                        <path
                            d="M1383.45 -151.02V-213.03H1706V1184.85H402.158V830.269C944.109 830.269 1383.45 390.931 1383.45 -151.02Z"
                            fill="url(#paint2_linear_186_1134)"
                            fillOpacity="0.69"
                        />
                    </g>

                    <g style={{ mixBlendMode: "lighten" }} filter="url(#filter2_f_186_1134)">
                        <path
                            d="M1567.45 -231.02V-293.03H1890V1104.85H586.158V750.269C1128.11 750.269 1567.45 310.931 1567.45 -231.02Z"
                            fill="url(#paint3_linear_186_1134)"
                        />
                    </g>

                    <g style={{ mixBlendMode: "overlay" }} filter="url(#filter3_f_186_1134)">
                        <path
                            d="M65.625 750.269H284.007C860.205 750.269 1327.31 283.168 1327.31 -293.03H1650V1104.85H65.625V750.269Z"
                            fill="url(#paint4_radial_186_1134)"
                            fillOpacity="0.64"
                        />
                    </g>
                </g>

                <defs>
                    <filter
                        id="filter0_f_186_1134"
                        x="147.369"
                        y="-467.818"
                        width="1941.42"
                        height="2035.46"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="159.394" result="effect1_foregroundBlur_186_1134" />
                    </filter>
                    <filter
                        id="filter1_f_186_1134"
                        x="-554.207"
                        y="-1169.39"
                        width="3216.57"
                        height="3310.61"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="478.182" result="effect1_foregroundBlur_186_1134" />
                    </filter>
                    <filter
                        id="filter2_f_186_1134"
                        x="426.762"
                        y="-452.424"
                        width="1622.63"
                        height="1716.67"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="79.6969" result="effect1_foregroundBlur_186_1134" />
                    </filter>
                    <filter
                        id="filter3_f_186_1134"
                        x="-253.163"
                        y="-611.818"
                        width="2221.95"
                        height="2035.46"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="159.394" result="effect1_foregroundBlur_186_1134" />
                    </filter>

                    <linearGradient
                        id="paint2_linear_186_1134"
                        x1="1054.08"
                        y1="-213.03"
                        x2="1054.08"
                        y2="1184.85"
                        gradientUnits="userSpaceOnUse"
                        className="hidden sm:block"
                    >
                        <stop stopColor="var(--foreground)" />
                        <stop offset="0.578125" stopColor="var(--header-primary-light)" />
                        <stop offset="1" stopColor="var(--header-primary)" />
                    </linearGradient>
                    <radialGradient
                        id="paint4_radial_186_1134"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(989.13 557.24) rotate(47.9516) scale(466.313 471.424)"
                    >
                        <stop stopColor="var(--foreground)" />
                        <stop offset="0.157789" stopColor="var(--header-primary-light)" />
                        <stop offset="1" stopColor="var(--header-primary)" />
                    </radialGradient>
                    <clipPath id="clip0_186_1134">
                        <rect width="1220" height="810" rx="16" fill="var(--foreground)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default GradientBackground;
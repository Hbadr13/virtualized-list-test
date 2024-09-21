import React from 'react'



const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
    <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
</svg>
const NotPossible = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#f6633c" fill="none">
    <path d="M11.5 2H10.0039C6.72304 2 5.08264 2 3.91983 2.81382C3.48962 3.1149 3.11544 3.48891 2.81421 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81421 16.0811C3.11544 16.5111 3.48962 16.8851 3.91983 17.1862C5.08264 18 6.72304 18 10.0039 18H14.0058C17.2866 18 18.927 18 20.0898 17.1862C20.52 16.8851 20.8942 16.5111 21.1954 16.0811C21.8241 15.1837 21.9674 14.0017 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 2L18.5 5.5M18.5 5.5L22 9M18.5 5.5L22 2M18.5 5.5L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>
const LoadingIcon = ({ width, height }: { width: number, height: number }) => <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 150'><path fill='none' stroke='#F6633C' strokeWidth='15' strokeLinecap='round' strokeDasharray='300 385' strokeDashoffset='0' d='M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z'><animate attributeName='stroke-dashoffset' calcMode='spline' dur='2' values='685;-685' keySplines='0 0 1 1' repeatCount='indefinite'></animate></path></svg>

const NotificationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M5.15837 11.491C5.08489 12.887 5.16936 14.373 3.92213 15.3084C3.34164 15.7438 3 16.427 3 17.1527C3 18.1508 3.7818 19 4.8 19H19.2C20.2182 19 21 18.1508 21 17.1527C21 16.427 20.6584 15.7438 20.0779 15.3084C18.8306 14.373 18.9151 12.887 18.8416 11.491C18.6501 7.85223 15.6438 5 12 5C8.35617 5 5.34988 7.85222 5.15837 11.491Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 3.125C10.5 3.95343 11.1716 5 12 5C12.8284 5 13.5 3.95343 13.5 3.125C13.5 2.29657 12.8284 2 12 2C11.1716 2 10.5 2.29657 10.5 3.125Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
const MenuIcon = () => <svg width="35" height="35" viewBox="0 0 104 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M88.0962 9.48668L57.6477 1.32793C45.7422 -1.86208 35.4955 4.35077 32.1642 16.7831L24.4761 45.4756C21.1542 57.8727 26.9219 68.3767 38.8274 71.5667L69.2759 79.7254C81.1812 82.9154 91.393 76.6931 94.7148 64.296L102.403 35.6035C105.734 23.1713 100.002 12.6767 88.0962 9.48668Z" fill="url(#paint0_linear_1_19)" />
    <g opacity="0.5">
        <path d="M43.3551 19.4L35.0623 45.6833C33.1257 51.8209 36.5314 58.3663 42.669 60.3028L68.7656 68.5367C74.9032 70.4733 81.4486 67.0676 83.3851 60.93L91.678 34.6467C93.6145 28.5091 90.2088 21.9637 84.0712 20.0272L57.9746 11.7933C51.837 9.85674 45.2916 13.2624 43.3551 19.4Z" fill="#8237FF" />
    </g>
    <path d="M61.0781 15.2706H25.157C11.1117 15.2706 1.66532 25.1313 1.66532 39.798V73.6476C1.66532 88.2729 11.1117 98.1336 25.157 98.1336H61.0781C75.1233 98.1336 84.5283 88.2729 84.5283 73.6476V39.798C84.5283 25.1313 75.1233 15.2706 61.0781 15.2706Z" fill="#BA90FF" fillOpacity="0.35" />
    <mask id="mask0_1_19" maskUnits="userSpaceOnUse" x="0" y="14" width="87" height="87">
        <path d="M0.5 14.1053H86.7336V100.339H0.5V14.1053Z" fill="white" />
        <path d="M61.0781 15.2706H25.157C11.1117 15.2706 1.66532 25.1313 1.66532 39.798V73.6476C1.66532 88.2729 11.1117 98.1336 25.157 98.1336H61.0781C75.1233 98.1336 84.5283 88.2729 84.5283 73.6476V39.798C84.5283 25.1313 75.1233 15.2706 61.0781 15.2706Z" fill="black" />
    </mask>
    <g mask="url(#mask0_1_19)">
        <path d="M61.0781 16.4359C61.7217 16.4359 62.2434 15.9142 62.2434 15.2706C62.2434 14.627 61.7217 14.1053 61.0781 14.1053V16.4359ZM61.0781 14.1053C60.4345 14.1053 59.9128 14.627 59.9128 15.2706C59.9128 15.9142 60.4345 16.4359 61.0781 16.4359V14.1053ZM61.0781 14.1053H25.157V16.4359H61.0781V14.1053ZM25.157 14.1053C17.8514 14.1053 11.6627 16.6762 7.30261 21.2283C2.94673 25.7759 0.5 32.2122 0.5 39.798H2.83064C2.83064 32.7173 5.10709 26.8898 8.98573 22.8404C12.8602 18.7954 18.4173 16.4359 25.157 16.4359V14.1053ZM0.5 39.798L0.5 73.6476H2.83064V39.798H0.5ZM0.5 73.6476C0.5 81.2137 2.94725 87.6395 7.3031 92.1817C11.663 96.7281 17.8515 99.2989 25.157 99.2989V96.9682C18.4173 96.9682 12.8598 94.6088 8.98524 90.5685C5.10657 86.5239 2.83064 80.7068 2.83064 73.6476H0.5ZM25.157 99.2989H61.0781V96.9682H25.157V99.2989ZM61.0781 99.2989C68.3838 99.2989 74.5625 96.7278 78.9122 92.1807C83.2576 87.638 85.6936 81.2123 85.6936 73.6476H83.3629C83.3629 80.7082 81.0965 86.5255 77.228 90.5696C73.364 94.6091 67.8176 96.9682 61.0781 96.9682V99.2989ZM85.6936 73.6476V39.798H83.3629V73.6476H85.6936ZM85.6936 39.798C85.6936 32.2135 83.2581 25.7775 78.9127 21.2294C74.5628 16.6765 68.3838 14.1053 61.0781 14.1053V16.4359C67.8176 16.4359 73.3637 18.7951 77.2275 22.8394C81.0959 26.8883 83.3629 32.7159 83.3629 39.798H85.6936Z" fill="url(#paint1_linear_1_19)" />
    </g>
    <path fillRule="evenodd" clipRule="evenodd" d="M19.5633 56.7027C19.5633 59.4373 21.8006 61.6746 24.5351 61.6746C27.2696 61.6746 29.5069 59.4373 29.5069 56.7027C29.5069 53.9683 27.2696 51.7351 24.5351 51.7351C21.8006 51.7351 19.5633 53.9683 19.5633 56.7027ZM43.0976 61.6749C40.363 61.6749 38.1257 59.4376 38.1257 56.7032C38.1257 53.9687 40.363 51.7356 43.0976 51.7356C45.832 51.7356 48.0693 53.9687 48.0693 56.7032C48.0693 59.4376 45.832 61.6749 43.0976 61.6749ZM61.6589 61.6754C58.9244 61.6754 56.6872 59.4381 56.6872 56.7037C56.6872 53.9691 58.9244 51.736 61.6589 51.736C64.3934 51.736 66.5892 53.9691 66.5892 56.7037C66.5892 59.4381 64.3934 61.6754 61.6589 61.6754Z" fill="url(#paint2_linear_1_19)" />
    <mask id="mask1_1_19" maskUnits="userSpaceOnUse" x="19" y="51" width="48" height="11">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.5633 56.7027C19.5633 59.4373 21.8006 61.6746 24.5351 61.6746C27.2696 61.6746 29.5069 59.4373 29.5069 56.7027C29.5069 53.9683 27.2696 51.7351 24.5351 51.7351C21.8006 51.7351 19.5633 53.9683 19.5633 56.7027ZM43.0976 61.6749C40.363 61.6749 38.1257 59.4376 38.1257 56.7032C38.1257 53.9687 40.363 51.7356 43.0976 51.7356C45.832 51.7356 48.0693 53.9687 48.0693 56.7032C48.0693 59.4376 45.832 61.6749 43.0976 61.6749ZM61.6589 61.6754C58.9244 61.6754 56.6872 59.4381 56.6872 56.7037C56.6872 53.9691 58.9244 51.736 61.6589 51.736C64.3934 51.736 66.5892 53.9691 66.5892 56.7037C66.5892 59.4381 64.3934 61.6754 61.6589 61.6754Z" fill="white" />
    </mask>
    <g mask="url(#mask1_1_19)">
        <path d="M24.5351 61.2084C22.0581 61.2084 20.0295 59.1797 20.0295 56.7027H19.0972C19.0972 59.6947 21.5431 62.1407 24.5351 62.1407V61.2084ZM29.0408 56.7027C29.0408 59.1797 27.0121 61.2084 24.5351 61.2084V62.1407C27.527 62.1407 29.973 59.6947 29.973 56.7027H29.0408ZM24.5351 52.2012C27.0126 52.2012 29.0408 54.2262 29.0408 56.7027H29.973C29.973 53.7103 27.5264 51.269 24.5351 51.269V52.2012ZM20.0295 56.7027C20.0295 54.2262 22.0575 52.2012 24.5351 52.2012V51.269C21.5437 51.269 19.0972 53.7103 19.0972 56.7027H20.0295ZM37.6596 56.7032C37.6596 59.6952 40.1056 62.1411 43.0976 62.1411V61.2088C40.6204 61.2088 38.5918 59.1802 38.5918 56.7032H37.6596ZM43.0976 51.2694C40.1062 51.2694 37.6596 53.7108 37.6596 56.7032H38.5918C38.5918 54.2267 40.62 52.2017 43.0976 52.2017V51.2694ZM48.5354 56.7032C48.5354 53.7108 46.0889 51.2694 43.0976 51.2694V52.2017C45.5751 52.2017 47.6031 54.2267 47.6031 56.7032H48.5354ZM43.0976 62.1411C46.0894 62.1411 48.5354 59.6952 48.5354 56.7032H47.6031C47.6031 59.1802 45.5746 61.2088 43.0976 61.2088V62.1411ZM56.221 56.7037C56.221 59.6955 58.667 62.1415 61.6589 62.1415V61.2093C59.1819 61.2093 57.1533 59.1807 57.1533 56.7037H56.221ZM61.6589 51.2699C58.6675 51.2699 56.221 53.7112 56.221 56.7037H57.1533C57.1533 54.2271 59.1813 52.2022 61.6589 52.2022V51.2699ZM67.0553 56.7037C67.0553 53.7163 64.6554 51.2699 61.6589 51.2699V52.2022C64.1313 52.2022 66.1231 54.222 66.1231 56.7037H67.0553ZM61.6589 62.1415C64.6558 62.1415 67.0553 59.6905 67.0553 56.7037H66.1231C66.1231 59.1858 64.1309 61.2093 61.6589 61.2093V62.1415Z" fill="url(#paint3_linear_1_19)" />
    </g>
    <defs>
        <linearGradient id="paint0_linear_1_19" x1="72.8544" y1="5.40258" x2="54.034" y2="75.6413" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BC94FF" />
            <stop offset="1" stopColor="#9F66FF" />
        </linearGradient>
        <linearGradient id="paint1_linear_1_19" x1="14.8558" y1="24.9242" x2="67.7135" y2="90.3899" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_1_19" x1="63.2551" y1="53.5302" x2="12.0356" y2="61.4306" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="paint3_linear_1_19" x1="27.049" y1="52.8932" x2="29.2005" y2="65.4989" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
    </defs>
</svg>
// Ensure that these are valid React components
const icons = {
    LoadingIcon,
    MenuIcon,
    NotificationIcon,
    UserIcon,
    NotPossible,
};

interface IIconProps extends React.SVGProps<SVGSVGElement> {
    name: keyof typeof icons;
    width?: number;
    height?: number;
    color?: string;
}

const Icons = ({ color, width, height, name, ...props }: IIconProps) => {
    const SelectedIcon = icons[name];

    if (!SelectedIcon) {
        return null;
    }

    return (
        <SelectedIcon
            fill={color || "#9599a0"}
            width={width || 24}
            height={height || 24}
            {...props}
        />
    );
};

export default Icons;
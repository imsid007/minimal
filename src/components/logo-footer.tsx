import { forwardRef } from 'react';
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
}

const FooterLogo = forwardRef<any, Props>(({ disabledLink = false, sx }, ref) => {
  const theme = useTheme();
  // const PRIMARY_LIGHT = theme.palette.primary.light;
  // const PRIMARY_MAIN = theme.palette.primary.main;
  // const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box ref={ref} sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}>
      <svg
        width="193"
        height="32"
        viewBox="0 0 193 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51.42 10.73V8.54H62.7V10.73H58.36V23H55.92V10.73H51.42ZM64.5089 23V8.14H66.9089V14.16C67.1622 13.7733 67.5322 13.4133 68.0189 13.08C68.5122 12.74 69.1722 12.57 69.9989 12.57C70.6589 12.57 71.2622 12.6967 71.8089 12.95C72.3556 13.2033 72.7922 13.57 73.1189 14.05C73.4456 14.5233 73.6089 15.09 73.6089 15.75V23H71.1689V16.16C71.1689 15.6267 70.9789 15.2133 70.5989 14.92C70.2189 14.6267 69.7456 14.48 69.1789 14.48C68.5989 14.48 68.0789 14.63 67.6189 14.93C67.1656 15.2233 66.9389 15.6667 66.9389 16.26V23H64.5089ZM78.1181 18.39C78.1115 19.27 78.3248 19.9933 78.7581 20.56C79.1981 21.12 79.8348 21.4 80.6681 21.4C81.2415 21.4 81.7381 21.2733 82.1581 21.02C82.5848 20.76 82.8681 20.3667 83.0081 19.84H85.2381C85.1115 20.56 84.8215 21.17 84.3681 21.67C83.9215 22.17 83.3748 22.55 82.7281 22.81C82.0881 23.07 81.4215 23.2 80.7281 23.2C79.7281 23.2 78.8481 22.99 78.0881 22.57C77.3348 22.1433 76.7448 21.5367 76.3181 20.75C75.8981 19.9633 75.6881 19.0267 75.6881 17.94C75.6881 16.88 75.8815 15.94 76.2681 15.12C76.6548 14.2933 77.2115 13.6433 77.9381 13.17C78.6648 12.6967 79.5448 12.46 80.5781 12.46C82.1048 12.46 83.2681 12.9367 84.0681 13.89C84.8681 14.8367 85.2681 16.09 85.2681 17.65V18.39H78.1181ZM78.1181 16.88H82.9681C82.9681 16.1333 82.7715 15.5033 82.3781 14.99C81.9848 14.47 81.3815 14.21 80.5681 14.21C80.0348 14.21 79.5848 14.34 79.2181 14.6C78.8515 14.86 78.5748 15.1967 78.3881 15.61C78.2015 16.0167 78.1115 16.44 78.1181 16.88ZM92.2227 23V8.54H101.783L101.773 10.63H94.6727V14.68H100.943V16.74H94.6527V20.88L101.923 20.89V23H92.2227ZM113.974 23H111.394L108.674 19.32L105.964 23H103.384L107.354 17.62L103.714 12.66H106.294L108.684 15.89L111.074 12.66H113.664L109.994 17.62L113.974 23ZM115.818 26.22V12.66H118.248L118.268 14.29C118.541 13.8367 118.954 13.42 119.508 13.04C120.061 12.6533 120.744 12.46 121.558 12.46C122.751 12.46 123.728 12.89 124.487 13.75C125.254 14.6033 125.638 15.9267 125.638 17.72C125.638 19.5533 125.241 20.9267 124.448 21.84C123.654 22.7467 122.618 23.2 121.338 23.2C120.551 23.2 119.904 23 119.398 22.6C118.891 22.2 118.511 21.7667 118.258 21.3V26.22H115.818ZM120.798 21.38C121.524 21.38 122.128 21.09 122.608 20.51C123.094 19.93 123.338 19.0133 123.338 17.76C123.338 16.68 123.111 15.83 122.658 15.21C122.211 14.5833 121.591 14.27 120.798 14.27C119.944 14.27 119.304 14.6 118.878 15.26C118.451 15.9133 118.238 16.7467 118.238 17.76C118.238 18.4133 118.331 19.0167 118.518 19.57C118.711 20.1167 118.994 20.5567 119.368 20.89C119.748 21.2167 120.224 21.38 120.798 21.38ZM129.7 18.39C129.693 19.27 129.907 19.9933 130.34 20.56C130.78 21.12 131.417 21.4 132.25 21.4C132.823 21.4 133.32 21.2733 133.74 21.02C134.167 20.76 134.45 20.3667 134.59 19.84H136.82C136.693 20.56 136.403 21.17 135.95 21.67C135.503 22.17 134.957 22.55 134.31 22.81C133.67 23.07 133.003 23.2 132.31 23.2C131.31 23.2 130.43 22.99 129.67 22.57C128.917 22.1433 128.327 21.5367 127.9 20.75C127.48 19.9633 127.27 19.0267 127.27 17.94C127.27 16.88 127.463 15.94 127.85 15.12C128.237 14.2933 128.793 13.6433 129.52 13.17C130.247 12.6967 131.127 12.46 132.16 12.46C133.687 12.46 134.85 12.9367 135.65 13.89C136.45 14.8367 136.85 16.09 136.85 17.65V18.39H129.7ZM129.7 16.88H134.55C134.55 16.1333 134.353 15.5033 133.96 14.99C133.567 14.47 132.963 14.21 132.15 14.21C131.617 14.21 131.167 14.34 130.8 14.6C130.433 14.86 130.157 15.1967 129.97 15.61C129.783 16.0167 129.693 16.44 129.7 16.88ZM142.908 23.2C141.542 23.2 140.468 22.73 139.688 21.79C138.908 20.85 138.518 19.5133 138.518 17.78C138.518 16.16 138.872 14.87 139.578 13.91C140.285 12.9433 141.322 12.46 142.688 12.46C143.542 12.46 144.242 12.6467 144.788 13.02C145.335 13.3933 145.715 13.7767 145.928 14.17V8.14H148.368V23H146.568L146.298 20.88C146.192 21.2067 146.012 21.55 145.758 21.91C145.512 22.27 145.158 22.5767 144.698 22.83C144.238 23.0767 143.642 23.2 142.908 23.2ZM143.408 21.41C144.282 21.41 144.918 21.1267 145.318 20.56C145.725 19.9867 145.928 19.04 145.928 17.72C145.915 16.5933 145.712 15.7367 145.318 15.15C144.925 14.5633 144.298 14.27 143.438 14.27C142.705 14.27 142.102 14.54 141.628 15.08C141.155 15.62 140.918 16.5 140.918 17.72C140.918 18.9333 141.135 19.8533 141.568 20.48C142.002 21.1 142.615 21.41 143.408 21.41ZM153.768 8.55V10.85H151.358V8.55H153.768ZM153.738 12.66V23H151.398V12.66H153.738ZM162.557 14.38H160.247L160.257 20.31C160.257 20.77 160.337 21.0567 160.497 21.17C160.657 21.2767 160.937 21.33 161.337 21.33H162.607V22.87C162.474 22.9233 162.27 22.97 161.997 23.01C161.724 23.0567 161.364 23.08 160.917 23.08C160.097 23.08 159.464 22.9733 159.017 22.76C158.57 22.5467 158.257 22.24 158.077 21.84C157.904 21.4333 157.817 20.9533 157.817 20.4V14.38H156.137V12.66H157.887L158.497 9.59H160.247V12.65H162.557V14.38ZM167.479 8.55V10.85H165.069V8.55H167.479ZM167.449 12.66V23H165.109V12.66H167.449ZM174.678 23.2C173.191 23.2 172.004 22.7333 171.118 21.8C170.231 20.86 169.788 19.5533 169.788 17.88C169.788 16.8 169.981 15.8533 170.368 15.04C170.761 14.2267 171.321 13.5933 172.048 13.14C172.781 12.6867 173.661 12.46 174.688 12.46C176.161 12.46 177.338 12.94 178.218 13.9C179.098 14.86 179.538 16.1867 179.538 17.88C179.538 18.9267 179.348 19.85 178.968 20.65C178.594 21.45 178.044 22.0767 177.318 22.53C176.598 22.9767 175.718 23.2 174.678 23.2ZM174.688 21.35C175.521 21.35 176.138 21.0167 176.538 20.35C176.944 19.6833 177.148 18.8367 177.148 17.81C177.148 17.1767 177.068 16.5933 176.908 16.06C176.748 15.5267 176.488 15.1 176.128 14.78C175.768 14.4533 175.288 14.29 174.688 14.29C173.834 14.29 173.201 14.6167 172.788 15.27C172.381 15.9233 172.178 16.77 172.178 17.81C172.178 18.4367 172.258 19.02 172.418 19.56C172.584 20.0933 172.851 20.5267 173.218 20.86C173.584 21.1867 174.074 21.35 174.688 21.35ZM181.696 23V12.66H184.076V14.14C184.316 13.74 184.686 13.3733 185.186 13.04C185.693 12.7067 186.36 12.54 187.186 12.54C187.826 12.54 188.42 12.6667 188.966 12.92C189.52 13.1733 189.963 13.57 190.296 14.11C190.636 14.65 190.806 15.3467 190.806 16.2V23H188.366V16.49C188.366 15.8167 188.176 15.3133 187.796 14.98C187.423 14.6467 186.956 14.48 186.396 14.48C185.81 14.48 185.283 14.6267 184.816 14.92C184.356 15.2133 184.126 15.6567 184.126 16.25V23H181.696Z"
          fill="#F4F6F8"
        />
        <path
          d="M20.8999 11.9941C20.1319 11.9941 19.3811 12.222 18.7427 12.6489C18.1042 13.0757 17.6068 13.6824 17.3133 14.392C17.0197 15.1017 16.9433 15.8825 17.0937 16.6356C17.2441 17.3887 17.6145 18.0803 18.1581 18.6228C18.7018 19.1654 19.394 19.5344 20.1475 19.6832C20.9009 19.8321 21.6816 19.7542 22.3907 19.4591C23.0998 19.1642 23.7054 18.6655 24.1309 18.0262C24.5565 17.3869 24.7827 16.6357 24.7812 15.8676C24.7791 14.8396 24.3693 13.8544 23.6416 13.1282C22.914 12.402 21.9279 11.9941 20.8999 11.9941Z"
          fill="#F4F6F8"
        />
        <path
          d="M8.76172 15.8677C8.76172 15.1 8.5341 14.3496 8.10763 13.7113C7.68107 13.073 7.0749 12.5756 6.36573 12.2818C5.65648 11.988 4.87605 11.9111 4.12312 12.0609C3.37026 12.2107 2.67869 12.5804 2.13585 13.1231C1.59302 13.666 1.22334 14.3575 1.07359 15.1105C0.923832 15.8634 1.00068 16.6438 1.29445 17.353C1.58822 18.0623 2.08572 18.6684 2.72402 19.0949C3.36232 19.5214 4.11274 19.749 4.88037 19.749C5.90979 19.749 6.89702 19.3401 7.62489 18.6122C8.35276 17.8843 8.76172 16.8971 8.76172 15.8677Z"
          fill="#F4F6F8"
        />
        <path
          d="M24.7812 27.7818C24.7812 27.014 24.5536 26.2636 24.1271 25.6254C23.7006 24.9871 23.0944 24.4896 22.3852 24.1958C21.676 23.9021 20.8956 23.8252 20.1426 23.975C19.3898 24.1247 18.6981 24.4944 18.1554 25.0372C17.6125 25.58 17.2429 26.2716 17.0931 27.0245C16.9434 27.7774 17.0202 28.5579 17.314 29.267C17.6078 29.9763 18.1053 30.5825 18.7436 31.0089C19.3818 31.4354 20.1322 31.6631 20.8999 31.6631C21.9292 31.6631 22.9166 31.2541 23.6444 30.5263C24.3723 29.7983 24.7812 28.8111 24.7812 27.7818Z"
          fill="#F4F6F8"
        />
        <path
          d="M33.2373 15.8676C33.2357 16.6357 33.4621 17.3869 33.8876 18.0262C34.3132 18.6655 34.9188 19.1642 35.6279 19.4591C36.337 19.7542 37.1176 19.8321 37.871 19.6832C38.6244 19.5344 39.3168 19.1654 39.8604 18.6228C40.404 18.0803 40.7744 17.3887 40.9248 16.6356C41.0753 15.8825 40.9988 15.1017 40.7053 14.392C40.4118 13.6824 39.9143 13.0757 39.2759 12.6489C38.6374 12.222 37.8867 11.9941 37.1187 11.9941C36.0907 11.9941 35.1046 12.402 34.3769 13.1282C33.6493 13.8544 33.2394 14.8396 33.2373 15.8676Z"
          fill="#F4F6F8"
        />
        <path
          d="M21.3452 7.76263C22.1129 7.76263 22.8633 7.53501 23.5016 7.10854C24.1398 6.68206 24.6373 6.0759 24.9311 5.36665C25.2249 4.6574 25.3017 3.87704 25.152 3.12411C25.0022 2.37118 24.6326 1.6796 24.0897 1.13677C23.547 0.594006 22.8554 0.224334 22.1025 0.07458C21.3495 -0.075174 20.5691 0.00166811 19.8599 0.29544C19.1507 0.589213 18.5445 1.08672 18.118 1.72494C17.6915 2.36324 17.4639 3.11366 17.4639 3.88129C17.4639 4.91071 17.8728 5.89793 18.6007 6.62588C19.3286 7.35375 20.3159 7.76263 21.3452 7.76263Z"
          fill="#F4F6F8"
        />
        <path
          d="M15.6091 24.6977C17.0061 23.3092 18.8958 22.5299 20.8654 22.5299C22.8351 22.5299 24.7248 23.3092 26.1217 24.6977C26.6652 25.239 27.3568 25.6071 28.1092 25.7557C28.8618 25.9042 29.6414 25.8264 30.3497 25.5322C31.058 25.238 31.6633 24.7405 32.0891 24.1025C32.515 23.4646 32.7422 22.7148 32.7422 21.9477C32.7422 21.1807 32.515 20.4309 32.0891 19.793C31.6633 19.155 31.058 18.6575 30.3497 18.3634C29.6414 18.0691 28.8618 17.9913 28.1092 18.1398C27.3568 18.2884 26.6652 18.6565 26.1217 19.1978C25.4307 19.8953 24.6083 20.4489 23.702 20.8268C22.7958 21.2045 21.8237 21.3991 20.8419 21.3991C19.86 21.3991 18.8879 21.2045 17.9817 20.8268C17.0755 20.4489 16.2531 19.8953 15.562 19.1978C15.0186 18.6565 14.3269 18.2884 13.5745 18.1398C12.8219 17.9913 12.0424 18.0691 11.334 18.3634C10.6257 18.6575 10.0204 19.155 9.59459 19.793C9.16875 20.4309 8.94152 21.1807 8.94152 21.9477C8.94152 22.7148 9.16875 23.4646 9.59459 24.1025C10.0204 24.7405 10.6257 25.238 11.334 25.5322C12.0424 25.8264 12.8219 25.9042 13.5745 25.7557C14.3269 25.6071 15.0186 25.239 15.562 24.6977L15.6091 24.6977Z"
          fill="#F4F6F8"
        />
        <path
          d="M13.3476 13.5282C14.3666 13.524 15.3443 13.124 16.074 12.4125C17.4709 11.024 19.3606 10.2447 21.3303 10.2447C23.2999 10.2447 25.1895 11.024 26.5866 12.4125C27.13 12.9539 27.8216 13.322 28.5741 13.4705C29.3266 13.619 30.1062 13.5413 30.8145 13.247C31.5229 12.9528 32.1281 12.4553 32.554 11.8174C32.9797 11.1794 33.207 10.4296 33.207 9.66258C33.207 8.89558 32.9797 8.14579 32.554 7.5078C32.1281 6.86989 31.5229 6.37239 30.8145 6.07814C30.1062 5.78398 29.3266 5.70619 28.5741 5.85469C27.8216 6.00327 27.13 6.37137 26.5866 6.91263C25.8956 7.60892 25.0737 8.16158 24.1682 8.53871C23.2627 8.91585 22.2915 9.10999 21.3106 9.10999C20.3297 9.10999 19.3585 8.91585 18.453 8.53871C17.5474 8.16158 16.7255 7.60892 16.0347 6.91263C15.5809 6.46581 15.024 6.13746 14.4133 5.95667C13.8027 5.77588 13.1569 5.74807 12.5329 5.87582C11.909 6.00358 11.3261 6.2829 10.8356 6.68918C10.345 7.09546 9.9621 7.61614 9.72041 8.20542C9.47873 8.79469 9.3857 9.43433 9.44966 10.068C9.51361 10.7017 9.73251 11.3099 10.0871 11.839C10.4416 12.368 10.9209 12.8018 11.4827 13.1018C12.0444 13.4019 12.6714 13.5592 13.3083 13.5596L13.3476 13.5282Z"
          fill="#F4F6F8"
        />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
});

export default FooterLogo;
const theme = {
  colors: {
    primary: '#0d4031', // 그린
    secondary: '#377510', // 그린
    deepOrange :'#d55e02', // 주황
    orangeMain : '#fb7e2a', // 주황
    third: '#d5e1ed', // 회색푸른빗
    info: '#2F80ED',
    success: '#27AE60',
    warning: '#E2B93B',
    danger: '#EB5757',
    white: '#ffffff',
    black1: '#000000',
    black2: '#1D1D1D',
    black3: '#282828',
    error: '#e53935',
    gray: {
      1: '#333333',
      2: '#4F4F4F',
      3: '#828282',
      4: '#BDBDBD',
      5: '#E0E0E0',
      6: '#f3f3f3',
    },
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1400px',
  },
  spacing: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
    40: '160px',
    48: '192px',
    56: '224px',
    64: '256px',
  },
  borderRadius: {
    none: '0px',
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  },
  shadows: {
    sm: '1px 1px 2px 0 rgba(0.05, 0.05, 0.05, 0.05)', // 작은 그림자
    base: '0 0 4px 0 rgba(0, 0, 0, 0.1)', // 기본 그림자
    md: '0 0 6px 1px rgba(0, 0, 0, 0.1)', // 중간 그림자
    lg: '0 0 10px 3px rgba(0, 0, 0, 0.1)', // 큰 그림자
    xl: '0 0 20px 5px rgba(0, 0, 0, 0.1)', // 매우 큰 그림자
    '2xl': '0 0 50px 12px rgba(0, 0, 0, 0.25)', // 확산 그림자
    inner: 'inset 0 0 4px 0 rgba(0, 0, 0, 0.06)', // 내부 그림자
    none: 'none', // 그림자 없음
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
};

export default theme;

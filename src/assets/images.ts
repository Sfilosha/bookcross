// src/assets/images.ts

const images = {
  empty: {
    library: require('./images/emptystates/man-library.png'),
    scan: require('./images/emptystates/phone-scan.png'),
  },
  placeholder: {
    bookCover: require('./images/placeholders/bookcover.png'),
  },
} as const;

export default images;

const images = {
  appIcon: require('./images/icon.png'),
  empty: {
    library: require('./images/emptystates/man-library.png'),
    scan: require('./images/emptystates/phone-scan.png'),
    error: require('./images/emptystates/no-connection.png'),
  },
  placeholder: {
    bookCover: require('./images/placeholders/bookcover.png'),
  },
} as const;

export default images;

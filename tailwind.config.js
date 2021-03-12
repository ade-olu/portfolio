module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: '#FD5531',
        light: '#F4F6FB',
        white: '#FAFAFA',
        black: '#0F1221',
        grey: '#3F4551',
        grey2: '#999DA5',
        lightorange: '#FAD0C7'
      },
      fontFamily: {
        body: ['Eudoxus Sans']
      },
      fontSize: {
        fsize: '2.125rem',
        tfsize: '2.5rem',
        lfsize: '2.8rem',
        xlfsize: '3.125rem'
      },
      lineHeight: {
        lht: '3rem',
        lglht: '3.75rem',
        xlglht: '3.85rem'
      },
      width: {
        mwh: '10.938rem',
        wh: '9.5rem',
        sz: '3.125rem',
        sz2: '3.85rem',
        wt: '2.85rem'
      },
      height: {
        ht: '6rem',
        bsz: '3.625rem',
        bht: '4.5rem',
        bht2: '4.75rem',
      },
      lineHeight: {
        lht: '3rem',
        lglht: '3.75rem',
        xlglht: '3.85rem'
      },
      padding: {
        logo: '4.125rem'
      },
      screens: {
        'phone': {'min': '411px'},
        'mob': {'min': '412px'},
        'tab': {'min': '768px'},
        'large': {'min': '1024px'},
        'xlarge': {'min': '1280px'},
        '2xlarge': {'min': '1536px'}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

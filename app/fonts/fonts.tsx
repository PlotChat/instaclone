import localFont from 'next/font/local';

// 1. Main Instagram Sans Family
export const instagramSans = localFont({
  src: [
    {
      path: './fonts/Instagram Sans Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Instagram Sans.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Instagram Sans Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Instagram Sans Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-instagram-sans',
  display: 'swap',
});

// 2. Instagram Sans Headline (Display / Story / Logo font)
export const instagramHeadline = localFont({
  src: './fonts/Instagram Sans Headline.woff2',
  weight: '700',
  style: 'normal',
  variable: '--font-instagram-headline',
  display: 'swap',
});

// 3. SF Pro Display Family
export const sfProDisplay = localFont({
  src: [
    {
      path: './fonts/SFPRODISPLAYTHINITALIC.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/SFPRODISPLAYULTRALIGHTITALIC.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/SFPRODISPLAYLIGHTITALIC.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/SFPRODISPLAYREGULAR.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SFPRODISPLAYMEDIUM.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SFPRODISPLAYSEMIBOLDITALIC.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/SFPRODISPLAYBOLD.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/SFPRODISPLAYHEAVYITALIC.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: './fonts/SFPRODISPLAYBLACKITALIC.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-sf-pro',
  display: 'swap',
});
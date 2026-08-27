import localFont from 'next/font/local';

// 1. Main Instagram Sans Family
export const instagramSans = localFont({
  src: [
    {
      path: './Instagram Sans Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Instagram Sans.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Instagram Sans Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Instagram Sans Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-instagram-sans',
  display: 'swap',
});

// 2. Instagram Sans Headline (Display / Story / Logo font)
export const instagramHeadline = localFont({
  src: './Instagram Sans Headline.woff2',
  weight: '700',
  style: 'normal',
  variable: '--font-instagram-headline',
  display: 'swap',
});

// 3. SF Pro Display Family
export const sfProDisplay = localFont({
  src: [
    {
      path: './SFPRODISPLAYTHINITALIC.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: './SFPRODISPLAYULTRALIGHTITALIC.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: './SFPRODISPLAYLIGHTITALIC.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './SFPRODISPLAYREGULAR.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SFPRODISPLAYMEDIUM.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './SFPRODISPLAYSEMIBOLDITALIC.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './SFPRODISPLAYBOLD.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './SFPRODISPLAYHEAVYITALIC.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: './SFPRODISPLAYBLACKITALIC.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-sf-pro',
  display: 'swap',
});
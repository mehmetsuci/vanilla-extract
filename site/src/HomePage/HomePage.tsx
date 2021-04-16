import React, { ReactNode } from 'react';
import dedent from 'dedent';
import { Box, Stack, ContentBlock, Columns } from '../system';
import { NewWindow } from '../NewWindow/NewWindow';
import { Heading } from '../Typography/Heading';
import { Chevron } from '../Chevron/Chevron';
import Link from '../Typography/Link';
import Text from '../Typography/Text';
import Logo from '../Logo/Logo';
import Code from '../Code/Code';
import InlineCode from '../InlineCode/InlineCode';
import * as styles from './HomePage.css';

export const HomePage = () => {
  return (
    <>
      <Box paddingY="xxxlarge" className={styles.skewedContainer}>
        <ContentBlock size="large" guttersOnMobile>
          <Box paddingY={{ mobile: 'medium', desktop: 'xxlarge' }}>
            <Columns space="xxlarge" collapseOnMobile alignY="center">
              <Stack space="xxlarge">
                <Logo size={100} />
                <Heading level="1" branded>
                  Zero-runtime
                  <br />
                  Stylesheets in
                  <br />
                  TypeScript.
                </Heading>
                <Text>
                  Write your styles in TypeScript (or JavaScript) with locally
                  scoped class names and CSS Variables, then generate static CSS
                  files at build time.
                </Text>
                <Box display="flex" alignItems="center">
                  <Box paddingRight="xlarge">
                    <Link variant="button" to="/documentation">
                      Documentation <Chevron direction="right" />
                    </Link>
                  </Box>
                  <Link to="https://github.com/seek-oss/vanilla-extract">
                    GitHub <NewWindow />
                  </Link>
                </Box>
              </Stack>
              <Code language="tsx">
                {dedent`// Set up the theme via CSS Variables
                  export const themeVars = createGlobalTheme(':root', {
                    color: {
                      brand: 'blue'
                    },
                    font: {
                      body: 'comic sans ms'
                    }
                  });

                  // Consume the theme
                  export const exampleStyle = style({
                    backgroundColor: themeVars.color.brand,
                    fontFamily: themeVars.font.body,
                    color: 'white',
                    padding: '10px'
                  });`}
              </Code>
            </Columns>
          </Box>
        </ContentBlock>
      </Box>

      <Stack space="xxxlarge">
        <ContentBlock guttersOnMobile>
          <Box
            padding={{ mobile: 'xlarge', desktop: 'xxlarge' }}
            borderRadius="large"
            background="body"
            style={{
              boxShadow: '0 0 50px -10px #24966180',
              fontFamily: '"Roboto Mono", Menlo, monospace',
            }}
          >
            $ npm install{' '}
            <span style={{ whiteSpace: 'nowrap' }}>--save-dev</span>{' '}
            <span style={{ whiteSpace: 'nowrap' }}>@vanilla-extract/css</span>
          </Box>
        </ContentBlock>

        <ContentBlock guttersOnMobile size="large">
          <Box paddingY="xlarge">
            <Columns space="xxlarge" collapseOnMobile>
              <Feature title="Type-safe preprocessor">
                All styles generated at build time — just like{' '}
                <Link to="https://sass-lang.com" size="small">
                  Sass
                </Link>
                ,{' '}
                <Link to="http://lesscss.org)" size="small">
                  LESS
                </Link>
                , etc, but with a type-safe contract.
              </Feature>

              <Feature title="Local scoped CSS">
                The power of deterministic, scoped styles using CSS Modules —
                extended to CSS variables, keyframes and font-faces.
              </Feature>

              <Feature title="High-level theming">
                Supports multiple themes simultaneously via first class scoping
                of CSS variables. No globals!
              </Feature>

              <Feature title="Utilities">
                Provides type-safe utilities for generating variable-based
                &ldquo;calc&rdquo; expressions.
              </Feature>
            </Columns>
          </Box>
        </ContentBlock>

        <ContentBlock guttersOnMobile size="large">
          <Columns space="xlarge" collapseOnMobile>
            <Stack space="xxlarge">
              <Heading level="3">Scoped Themed Variables</Heading>
              <Text>
                Easily create themed variables, scoped to a class, by providing
                your theme structure to <InlineCode>createTheme</InlineCode>.
              </Text>
              <Text>
                The returned class can be applied to an element, allowing themed
                CSS variables to be referenced through the provided theme
                structure.
              </Text>
            </Stack>

            <Code language="tsx">
              {dedent`export const [themeClass, themeVars] = createTheme({
                  color: {
                    brand: 'aquamarine'
                  },
                });

                export const exampleStyle = style({
                  backgroundColor: themeVars.color.brand,
                  padding: 10
                });

                // app.ts
                import { themeClass, exampleStyle } from './styles.css.ts';

                document.write(\`
                  <section class="${'${themeClass}'}">
                    <h1 class="${'${exampleStyle}'}">Hello world!</h1>
                  </section>
                \`);`}
            </Code>
          </Columns>
        </ContentBlock>

        <Box paddingY="xxxlarge">
          <Box
            paddingTop="xlarge"
            paddingBottom="xxlarge"
            background="blue"
            className={styles.skewedContainerSecondary}
          >
            <Stack space="xxlarge">
              <ContentBlock size="large" guttersOnMobile>
                <Heading level="3">Community vibes</Heading>
              </ContentBlock>
              <Box
                display="flex"
                paddingX="large"
                style={{ gap: 60, overflow: 'auto' }}
              >
                <Tweet
                  handle="@lorvsso"
                  name="Jack Lo Russo"
                  avatar="https://pbs.twimg.com/profile_images/1365062529622282240/UqZdoTJL_200x200.jpg"
                  url="https://twitter.com/lorvsso/status/1375592486182084613"
                >
                  I love this ✨ The first time I made a decision at work about
                  CSS architecture, years ago now, CSS Modules was what I ended
                  up recommending and implementing. This is CSS Modules for the
                  new decade ❤️😍
                </Tweet>

                <Tweet
                  handle="@jevakallio"
                  name="Macbook Miller"
                  avatar="https://pbs.twimg.com/profile_images/1260968240504856576/FNIWLC0A_200x200.jpg"
                  url="https://twitter.com/jevakallio/status/1375362320122183684"
                >
                  You had me at vanilla-extract
                </Tweet>

                <Tweet
                  handle="@lorvsso"
                  name="Jack Lo Russo"
                  avatar="https://pbs.twimg.com/profile_images/1365062529622282240/UqZdoTJL_200x200.jpg"
                  url="https://twitter.com/lorvsso/status/1375592486182084613"
                >
                  I love this ✨ The first time I made a decision at work about
                  CSS architecture, years ago now, CSS Modules was what I ended
                  up recommending and implementing. This is CSS Modules for the
                  new decade ❤️😍
                </Tweet>

                <Tweet
                  handle="@markdalgleish"
                  name="Mark Dalgleish"
                  avatar="https://pbs.twimg.com/profile_images/754886061872979968/BzaOWhs1_200x200.jpg"
                  url="https://twitter.com/markdalgleish/status/1375371778306887681"
                >
                  Huge shout out to @peduarte for his amazing work on
                  @stitchesjs, leading the way and showing everyone how
                  first-class CSS Variables can be a core feature of modern
                  CSS-in-JS libraries.
                </Tweet>

                <Tweet
                  handle="@lorvsso"
                  name="Jack Lo Russo"
                  avatar="https://pbs.twimg.com/profile_images/1365062529622282240/UqZdoTJL_200x200.jpg"
                  url="https://twitter.com/lorvsso/status/1375592486182084613"
                >
                  I love this ✨ The first time I made a decision at work about
                  CSS architecture, years ago now, CSS Modules was what I ended
                  up recommending and implementing. This is CSS Modules for the
                  new decade ❤️😍
                </Tweet>

                <Tweet
                  handle="@kbrock84"
                  name="Kevin Brock"
                  avatar="https://pbs.twimg.com/profile_images/1127929844241555456/bbEpS1z6_200x200.jpg"
                  url="https://twitter.com/kbrock84/status/1375457568793845764"
                >
                  Whoever thought of the name vanilla extract for a css in js
                  framework is a fucking genius. Just when you think all the
                  good js lib names have been taken.
                </Tweet>
              </Box>
            </Stack>
          </Box>
        </Box>

        <ContentBlock guttersOnMobile size="large">
          <Columns space="xlarge" collapseOnMobile>
            <Stack space="xxlarge">
              <Heading level="3">Scoped Themed Variables</Heading>
              <Text>
                Easily create themed variables, scoped to a class, by providing
                your theme structure to <InlineCode>createTheme</InlineCode>.
              </Text>
              <Text>
                The returned class can be applied to an element, allowing themed
                CSS variables to be referenced through the provided theme
                structure.
              </Text>
            </Stack>

            <Box borderRadius="large" style={{ overflow: 'hidden' }}>
              <Code language="tsx">
                {dedent`export const [themeClass, themeVars] = createTheme({
                  color: {
                    brand: 'aquamarine'
                  },
                });

                export const exampleStyle = style({
                  backgroundColor: themeVars.color.brand,
                  padding: 10
                });

                // app.ts
                import { themeClass, exampleStyle } from './styles.css.ts';

                document.write(\`
                  <section class="${'${themeClass}'}">
                    <h1 class="${'${exampleStyle}'}">Hello world!</h1>
                  </section>
                \`);`}
              </Code>
            </Box>
          </Columns>
        </ContentBlock>

        <ContentBlock guttersOnMobile size="large">
          <Columns space="xlarge" collapseOnMobile>
            <Stack space="xxlarge">
              <Heading level="3">Scoped Themed Variables</Heading>
              <Text>
                Easily create themed variables, scoped to a class, by providing
                your theme structure to <InlineCode>createTheme</InlineCode>.
              </Text>
              <Text>
                The returned class can be applied to an element, allowing themed
                CSS variables to be referenced through the provided theme
                structure.
              </Text>
            </Stack>

            <Box borderRadius="large" style={{ overflow: 'hidden' }}>
              <Code language="tsx">
                {dedent`export const [themeClass, themeVars] = createTheme({
                  color: {
                    brand: 'aquamarine'
                  },
                });

                export const exampleStyle = style({
                  backgroundColor: themeVars.color.brand,
                  padding: 10
                });

                // app.ts
                import { themeClass, exampleStyle } from './styles.css.ts';

                document.write(\`
                  <section class="${'${themeClass}'}">
                    <h1 class="${'${exampleStyle}'}">Hello world!</h1>
                  </section>
                \`);`}
              </Code>
            </Box>
          </Columns>
        </ContentBlock>

        <ContentBlock guttersOnMobile size="standard">
          <Box paddingY="xxxlarge">
            <Stack space="xlarge" align="center">
              <Heading level="4">Related work from the team</Heading>
              <Link to="https://seek-oss.github.io/braid-design-system/">
                <Text color="secondary">Braid Design System</Text>
              </Link>
              <Link to="https://seek-oss.github.io/capsize/">
                <Text color="secondary">Capsize</Text>
              </Link>
              <Link to="https://github.com/seek-oss/playroom">
                <Text color="secondary">Playroom</Text>
              </Link>
              <Link to="https://seek-oss.github.io/treat/">
                <Text color="secondary">Treat</Text>
              </Link>
            </Stack>
          </Box>
        </ContentBlock>
      </Stack>
    </>
  );
};

interface TweetProps {
  handle: string;
  name: string;
  avatar: string;
  url: string;
  children: ReactNode;
}

const Tweet = ({ handle, name, avatar, url, children }: TweetProps) => (
  <Link to={url}>
    <Box
      padding="xlarge"
      borderRadius="large"
      background="body"
      style={{ width: 400, boxShadow: '0 0 30px -10px lightblue' }}
    >
      <Stack space="xlarge">
        <Box display="flex" alignItems="center" style={{ gap: 10 }}>
          <Box
            borderRadius="full"
            style={{
              background: `url(${avatar}) no-repeat center center / cover`,
              height: 60,
              width: 60,
              overflow: 'hidden',
            }}
          />
          <Stack space="medium">
            <Text weight="strong" size="small">
              {name}
            </Text>
            <Text color="secondary" size="small">
              {handle}
            </Text>
          </Stack>
        </Box>
        <Text size="small">{children}</Text>
      </Stack>
    </Box>
  </Link>
);

const Feature = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <Box style={{ position: 'relative' }} paddingLeft="xlarge">
    <Box
      style={{ position: 'absolute' }}
      className={styles.featureKeyLine}
      paddingLeft="xsmall"
      marginTop={{ mobile: '-small', desktop: '-medium' }}
      borderRadius="medium"
    />
    <Stack space="xlarge">
      <Heading level="4">{title}</Heading>
      <Text size="small">{children}</Text>
    </Stack>
  </Box>
);
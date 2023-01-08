'use client';

import { useEmotionCache, ColorScheme } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';
import { createClient, Provider } from 'urql';
import { ThemeProvider } from '@/desing-system/ThemeProvider';

const client = createClient({
  url: 'http://localhost:8080/graphql',
});

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  /*

 */
  return (
    <Provider value={client}>
      <ThemeProvider>
        <>{children}</>
      </ThemeProvider>
    </Provider>
  );
}

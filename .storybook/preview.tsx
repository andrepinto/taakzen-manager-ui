import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from '@/desing-system/ThemeProvider';


export const parameters = { layout: 'fullscreen' };

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <div style={{ margin: '3em' }}>
    <ThemeProvider dark={useDarkMode()}><>{props.children}</></ThemeProvider>
    </div>
  );
}

export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];

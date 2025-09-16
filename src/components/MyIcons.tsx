import * as Icons from '@/icons';

const iconMap: Record<string, React.ComponentType> = {
  HTML: Icons.HTMLIcon,
  CSS: Icons.CSSIcon,
  JavaScript: Icons.JavaScriptIcon,
  TypeScript: Icons.TypeScriptIcon,
  React: Icons.ReactIcon,
  NextJS: Icons.NextJSIcon,
  NodeJS: Icons.NodeJSIcon,
  TailwindCSS: Icons.TailwindCSSIcon,
  Mantine: Icons.MantineIcon,
  microCMS: Icons.MicroCMSIcon,
  GitHub: Icons.GitHubIcon,
  SCSS: Icons.SCSSIcon,
  Python: Icons.PythonIcon,
  Django: Icons.DjangoIcon,
  Figma: Icons.FigmaIcon,
  Info: Icons.InfoIcon,
  Hashtag: Icons.HashtagIcon,
};

export default function MyIcons({ iconName }: { iconName: string }) {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent /> : null;
}

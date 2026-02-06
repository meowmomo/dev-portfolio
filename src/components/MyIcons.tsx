import { HTMLIcon } from '@/icons/HTMLIcon';
import { CSSIcon } from '@/icons/CSSIcon';
import { JavaScriptIcon } from '@/icons/JavaScriptIcon';
import { TypeScriptIcon } from '@/icons/TypeScriptIcon';
import { ReactIcon } from '@/icons/ReactIcon';
import { NextJSIcon } from '@/icons/NextJSIcon';
import { TailwindCSSIcon } from '@/icons/TailwindCSSIcon';
import { MantineIcon } from '@/icons/MantineIcon';
import { MicroCMSIcon } from '@/icons/MicroCMSIcon';
import { SCSSIcon } from '@/icons/SCSSIcon';
import { PythonIcon } from '@/icons/PythonIcon';
import { DjangoIcon } from '@/icons/DjangoIcon';
import { FigmaIcon } from '@/icons/FigmaIcon';
import { NodeJSIcon } from '@/icons/NodeJSIcon';
import { InfoIcon, InfoIconHover } from '@/icons/InfoIcon';
import { HashtagIcon } from '@/icons/HashtagIcon';
import { MongoDBIcon } from '@/icons/MongoDBIcon';

const iconMap: Record<string, React.ComponentType> = {
  HTML: HTMLIcon,
  CSS: CSSIcon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  React: ReactIcon,
  NextJS: NextJSIcon,
  NodeJS: NodeJSIcon,
  TailwindCSS: TailwindCSSIcon,
  Mantine: MantineIcon,
  microCMS: MicroCMSIcon,
  SCSS: SCSSIcon,
  Python: PythonIcon,
  Django: DjangoIcon,
  Figma: FigmaIcon,
  Info: InfoIcon,
  InfoHover: InfoIconHover,
  Hashtag: HashtagIcon,
  MongoDB: MongoDBIcon,
};

export default function MyIcons({ iconName }: { iconName: string }) {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent /> : null;
}

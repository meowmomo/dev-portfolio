import Hero from '@/app/home/components/Hero';
import FeaturesCarousel from '@/app/home/components/FeaturesCarousel';
import { Text, Card } from '@mantine/core';
import ProfileCard from '@/app/home/components/ProfileCard';

export default function Home() {
  const skillsets = [
    'React',
    'Redux',
    'TypeScript',
    'NextJS',
    'NodeJS',
    'NestJS',
    'TailwindCSS',
    'Bootstrap',
    'Python',
    'Django',
    'C#.NET',
    'VBA',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Figma',
    'Vercel',
    'Heroku',
    'Cloudflare',
    'Jira',
    'Confluence',
    'Backlog',
    'Slack',
    'MS Office',
    'Git',
    'GitHub',
    'TortoiseSVN',
    'Postman',
    'WinSCP',
    'Virtualbox',
    'TestCafe',
    'Jest',
    'WSL',
    'Ubuntu',
    'Datadog',
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-baseZero">
      <Hero />
      <FeaturesCarousel />

      <div className="flex flex-col pt-4 my-4 text-baseZero items-center w-full gap-4">
        <Text className="text-5xl font-ranchers tracking-wide">Sneak peek of me</Text>

        {/* Responsive grid: 1 col on mobile, 3 cols on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-8xl">
          {/* Profile */}
          <div className="flex justify-center">
            <ProfileCard />
          </div>

          {/* Experience */}
          <Card
            shadow="xl"
            padding="lg"
            radius="md"
            className="bg-baseOne text-baseZero flex flex-col justify-start"
          >
            <Text className="text-2xl font-reggae font-semibold mb-4">Experience</Text>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <span className="font-bold">Studied Japanese</span> – Tokyo Waseda Foreign Language
                School (2018 - 2020)
              </li>
              <li>
                <span className="font-bold">Graduated</span> – Tokyo Information Creator College
                (2020 - 2022)
              </li>
              <li>
                <span className="font-bold">Back End Developer</span> – Geographic & Spatial
                Information Services System Development (2022 - 2024)
              </li>
              <li>
                <span className="font-bold">Front End Developer</span> – Mobile & Internet Services
                System Development (2024 - Present)
              </li>
            </ul>
          </Card>

          {/* Skillsets */}
          <Card
            shadow="xl"
            padding="lg"
            radius="md"
            className="bg-baseOne text-baseZero flex flex-col justify-start"
          >
            <Text className="text-2xl font-reggae font-semibold mb-4">Tools & Technologies</Text>
            <div className="flex flex-wrap gap-2">
              {skillsets.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-primaryOne text-baseZero text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

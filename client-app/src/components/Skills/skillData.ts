import cSharpIcon from '../../assets/skills/csharp.png';
import cssIcon from '../../assets/skills/css.png';
import dockerIcon from '../../assets/skills/docker.png';
import dotNetIcon from '../../assets/skills/dotnet.png';
import htmlIcon from '../../assets/skills/html.png';
import jsTsIcon from '../../assets/skills/js-ts.png';
import reactIcon from '../../assets/skills/react.png';
import muiIcon from '../../assets/skills/materialui.png';
import mauiIcon from '../../assets/skills/dotnet-maui.png';
import javaIcon from '../../assets/skills/java.png';
import jfxIcon from '../../assets/skills/javafx.png';
import pythonIcon from '../../assets/skills/python.png';
import pgsqlIcon from '../../assets/skills/postgresql.png';

export type Skill = {
  image: string;
  imageAltText: string;
  text: string;
  yearLearned: number;
};

export const frontendSkills: Skill[] = [
  {
    image: jsTsIcon,
    imageAltText: 'JavaScript / TypeScript',
    text: 'JavaScript / TypeScript',
    yearLearned: 2021,
  },
  { image: reactIcon, imageAltText: 'React', text: 'React', yearLearned: 2021 },
  {
    image: muiIcon,
    imageAltText: 'Material UI',
    text: 'Material UI',
    yearLearned: 2021,
  },
  {
    image: mauiIcon,
    imageAltText: '.NET MAUI',
    text: '.NET MAUI',
    yearLearned: 2024,
  },
  { image: jfxIcon, imageAltText: 'JavaFX', text: 'JavaFX', yearLearned: 2016 },
];

export const backendSkills: Skill[] = [
  { image: cSharpIcon, imageAltText: 'C Sharp', text: 'C#', yearLearned: 2020 },
  {
    image: dotNetIcon,
    imageAltText: 'ASP.NET Core',
    text: 'ASP.NET Core',
    yearLearned: 2021,
  },
  {
    image: pythonIcon,
    imageAltText: 'Python',
    text: 'Python',
    yearLearned: 2016,
  },
  { image: javaIcon, imageAltText: 'Java', text: 'Java', yearLearned: 2015 },
];

export const otherSkills: Skill[] = [
  {
    image: htmlIcon,
    imageAltText: 'HTML',
    text: 'HTML',
    yearLearned: 2014,
  },
  {
    image: cssIcon,
    imageAltText: 'CSS',
    text: 'CSS',
    yearLearned: 2014,
  },
  {
    image: pgsqlIcon,
    imageAltText: 'PostgreSQL',
    text: 'PostgreSQL',
    yearLearned: 2021,
  },
  {
    image: dockerIcon,
    imageAltText: 'Docker',
    text: 'Docker',
    yearLearned: 2021,
  },
];

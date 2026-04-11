import { Box, Typography, Grid } from '@mui/material';
import { customTheme } from '../../styles/customTheme';
import SkillItem from './SkillItem';
import { type Skill } from './skillData';

interface Props {
  title: string;
  content: Skill[];
}

export default function SkillList(props: Props) {
  const { title, content } = props;

  return (
    <Box
      sx={{
        maxWidth: '30em',
        height: '100%',
        padding: 5,
        background: 'hsl(212, 35%, 8%)',
        border: `1px solid ${customTheme.palette.secondary.main}`,
        borderRadius: '10px',
        boxShadow: `0 0 15px 0 ${customTheme.palette.secondary.main}`,
      }}
    >
      <Typography
        variant='h3'
        color='secondary'
        align='center'
        paddingBottom={3}
      >
        {title}
      </Typography>
      <Grid container>
        {content.map((skill) => (
          <Grid size={{ xs: 6, md: 12 }} key={skill.text}>
            <SkillItem
              image={skill.image}
              imageAltText={skill.imageAltText}
              text={skill.text}
              yearLearned={skill.yearLearned}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

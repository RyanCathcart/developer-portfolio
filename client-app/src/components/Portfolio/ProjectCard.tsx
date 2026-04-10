import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import HiddenButton from './HiddenButton';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Props {
  title: string;
  description: string;
  image?: string;
  imageAltText?: string;
  demoLink: string;
  repoLink: string;
}

export default function ProjectCard(props: Props) {
  const { title, description, image, imageAltText, demoLink, repoLink } = props;

  const cardMediaHeight = '15rem';
  const transition = '0.4s ease';

  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Card
        raised
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <Box
          height={image ? cardMediaHeight : 0}
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            justifyContent: 'center',
            backgroundColor: 'hsl(0, 0%, 98%)',
            '&:hover .cardMedia': {
              filter: 'blur(0.2em)',
              transform: 'scale(1.1)',
              transition: transition,
            },
            '&:hover .hidden-button': {
              visibility: 'visible',
              pointerEvents: 'auto',
              touchAction: 'auto',
              backgroundColor: 'hsla(0, 0%, 95%, 90%)',
              filter: 'opacity(100%)',
              transition: transition,
            },
          }}
        >
          {image && (
            <>
              <CardMedia
                className='cardMedia'
                component='img'
                image={image}
                alt={imageAltText}
                draggable={false}
                sx={{
                  height: cardMediaHeight,
                  position: 'absolute',
                  objectPosition: '50% 0',
                  filter: 'blur(0)',
                  transition: transition,
                }}
              />
              <HiddenButton
                icon={<LinkIcon />}
                link={demoLink}
                transition={transition}
              >
                View Demo
              </HiddenButton>
              <HiddenButton
                icon={<GitHubIcon />}
                link={repoLink}
                transition={transition}
              >
                GitHub
              </HiddenButton>
            </>
          )}
        </Box>

        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography gutterBottom variant='h3'>
            {title}
          </Typography>
          <Typography variant='body2'>{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

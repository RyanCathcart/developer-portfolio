import { Box, Card, CardHeader, CardMedia, Grid } from "@mui/material";
import HiddenButton from "./HiddenButton";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  imageAltText: string;
  demoLink: string;
  repoLink: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, image, imageAltText, demoLink, repoLink } = props;

  const cardMediaHeight = 240;
  const transition = "0.4s ease";

  return (
    <Grid item xs={12} md={6}>
      <Card raised sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardHeader title={title} subheader={description} sx={{ flexGrow: 1 }} />
        <Box
          height={image ? cardMediaHeight : 0}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            justifyContent: "center",
            backgroundColor: "hsl(0, 0%, 98%)",
            "&:hover .cardMedia": {
              filter: "blur(0.2em)",
              transform: "scale(1.1)",
              transition: transition,
            },
            "&:hover .hidden-button": {
              visibility: "visible",
              pointerEvents: "auto",
              touchAction: "auto",
              backgroundColor: "hsla(0, 0%, 95%, 90%)",
              filter: "opacity(100%)",
              transition: transition,
            },
          }}
        >
          {image && (
            <>
              <CardMedia
                className="cardMedia"
                component="img"
                height={cardMediaHeight}
                image={image}
                alt={imageAltText}
                draggable={false}
                sx={{
                  position: "absolute",
                  objectPosition: "50% 0",
                  filter: "blur(0)",
                  transition: transition,
                }}
              />
              <HiddenButton label="View Demo" icon={<LinkIcon />} link={demoLink} transition={transition} />
              <HiddenButton label="GitHub" icon={<GitHubIcon />} link={repoLink} transition={transition} />
            </>
          )}
        </Box>
      </Card>
    </Grid>
  );
}

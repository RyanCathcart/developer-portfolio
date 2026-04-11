import {
  Fab,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InsightsIcon from '@mui/icons-material/Insights';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import { Link } from 'react-scroll';

const pages = [
  { name: 'Home', icon: HomeIcon },
  { name: 'About', icon: PersonIcon },
  { name: 'Skills', icon: InsightsIcon },
  { name: 'Portfolio', icon: PermMediaIcon },
  { name: 'Contact', icon: EmailIcon },
];

export default function FloatingNav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Fab
        id='button'
        aria-controls={open ? 'menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
        color='secondary'
        sx={{
          position: 'fixed',
          top: '10%',
          right: '5%',
          zIndex: 1000,
          boxShadow: '0 0 10px rgb(0, 180, 216), 0 0 15px rgb(0, 180, 216)',
        }}
      >
        <MenuIcon />
      </Fab>
      <Popper
        open={open}
        anchorEl={anchorEl}
        role={undefined}
        placement='top-end'
        transition
        disablePortal
        sx={{ zIndex: 1000 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'right top' : 'right bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='menu'
                  aria-labelledby='button'
                >
                  {pages.map((page) => (
                    <Link key={page.name} to={page.name} smooth={true}>
                      <MenuItem onClick={handleClose} sx={{ p: 1.5 }}>
                        <ListItemIcon>
                          <page.icon />
                        </ListItemIcon>
                        {page.name}
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

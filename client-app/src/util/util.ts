export const handleClick = (link: string) => {
  if (link === '/') window.location.replace(link);
  else window.open(link);
};

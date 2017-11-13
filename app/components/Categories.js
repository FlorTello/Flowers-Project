import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
       marginTop: 30,
  },
  image: {
    position: 'relative',
    height: 300,
    width: '100% !important', // Overrides inline-style
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const categories = [
  {
    url: 'https://image.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg',
    title: 'Design',
    width: '40%',
  },
  {
    url: 'https://tr2.cbsistatic.com/hub/i/r/2017/10/16/eea1415d-b05a-46ba-aba7-7adc472f6a1d/resize/770x/cf16b9e0914c54f918ca8f3eacf691fc/database.jpg',
    title: 'Programing',
    width: '30%',
  },
  {
    url: 'https://tr2.cbsistatic.com/hub/i/r/2016/02/23/081e5075-5499-4f93-afbe-22830aacd56a/resize/770x/b55caf346264ae7134deb0d3b7859bfc/ai.jpg',
    title: 'Artificial Intelligence',
    width: '30%',
  },
  {
    url: 'https://www.ayokasystems.com/wp-content/uploads/database.jpg',
    title: 'Data Base',
    width: '30%'
  },
  {
    url: 'http://statistica.io/wordpress/wp-content/uploads/ndaa-analytics.jpg',
    title: 'Data Science',
    width: '30%'
  },
  {
    url: 'https://getcrm.com/uploads/machine_learning.jpg',
    title: 'Machine Learning',
    width: '30%'
  }
];

function Categories(props) {
  const { classes } = props;

  return (
    <Grid container spacing={24} className={classes.root}>
      {categories.map(image => (
      <Grid item xs={6} sm={6}>
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          style={{
            width: image.width,
          }}
        >
          <div
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              type="subheading"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </ButtonBase>
        </Grid>
      ))}
    </Grid>
  );
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Categories);

const DateTask = ({ date }) => {
  const classes = ['px-6', 'py-3'];
  return <div className={classes.join(' ')}>Date: {date}</div>;
};

export default DateTask;

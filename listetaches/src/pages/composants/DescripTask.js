const DescripTask = ({ description }) => {
  const classes = [
    'block rounded-lg',
    'bg-white',
    'shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]',
    'dark:bg-neutral-700',
    'p-3',
  ];
  return (
    <div className={classes.join(' ')}>
      Descrition:
      <div>{description}</div>
    </div>
  );
};

export default DescripTask;

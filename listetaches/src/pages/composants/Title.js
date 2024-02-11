const Tilte = ({ title }) => {
  return (
    <div>
      <h3
        className={
          'mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center'
        }
      >
        {title}
      </h3>
    </div>
  );
};

export default Tilte;

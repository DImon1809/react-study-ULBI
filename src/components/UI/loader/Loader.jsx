import classes from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={classes.loader}>
      <p>Загрузка</p>
    </div>
  );
}

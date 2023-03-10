import Button from "./button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>welcome</h1>
      <Button text="hi" />
    </div>
  );
}

export default App;

import styles4mobile from './App.module.css';
import styles4web from './App-web.module.css';

const ua = navigator.userAgent.toLowerCase();
const isMobile = /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(ua);
const styles = isMobile ? styles4mobile : styles4web;

function App() {
  return <div className={styles.app}></div>;
}

export default App;

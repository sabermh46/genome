
import styles from '@/app/css/util.module.css'
import {useWindowDimensions} from "./util/useWindowDimension";
import { Suspense } from 'react';
import Content from './components/Content';
import Loading from './loading';

export default function Home() {

  
  
  return (
    <main>
      <div className={styles.container}>
          Hello World

          <Content />
        </div>
    </main>
  );
}

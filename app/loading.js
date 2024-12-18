// 'use client';

// import { useEffect, useState } from 'react';
// import styles from '@/app/css/loading.module.css';

// export default function Loading() {
//   const [isExiting, setIsExiting] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     // When the component is about to unmount, trigger the fade-out
//     const timer = setTimeout(() => {
//       setIsExiting(true);
//       // After the fade-out duration, hide the loader completely
//       setTimeout(() => setIsVisible(false), 500); // 500ms matches the CSS transition duration
//     }, 1500); // Ensures the loader is shown for at least 1.5 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <div className={`${styles.loader} ${isExiting ? styles.fadeOut : ''}`}>
//       <div className={styles.spinner}></div>
//       <p>Loading...</p>
//     </div>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import styles from '@/app/css/loading.module.css';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1500); // Show loader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.loader} ${!isLoading && styles.fadeOut}`}> 
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
}
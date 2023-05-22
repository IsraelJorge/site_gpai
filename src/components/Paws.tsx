import { FaPaw } from 'react-icons/fa';

import clsx from 'clsx';
import { motion } from 'framer-motion';

const initialState = { opacity: 0, scale: 0.5, rotateX: '90' };
const animate = { opacity: 1, scale: 1 };

export function Paws() {
  return (
    <div className="py-10 flex items-start flex-wrap text-5xl text-primary">
      {new Array(10).fill('').map((_, index) => (
        <motion.div
          initial={initialState}
          animate={animate}
          transition={{ delay: index * 0.35, duration: 0.5 }}
          className={clsx('rotate-90', {
            '-translate-y-12': index % 2 !== 0,
          })}
        >
          <FaPaw />
        </motion.div>
      ))}
    </div>
  );
}

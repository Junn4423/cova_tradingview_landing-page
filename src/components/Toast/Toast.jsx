import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, CheckCircle, AlertTriangle } from 'lucide-react';
import styles from './Toast.module.scss';

const ToastContext = createContext(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside ToastProvider');
  return ctx;
};

let idCounter = 0;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info') => {
    const id = ++idCounter;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={styles.container}>
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              className={`${styles.toast} ${styles[toast.type]}`}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              layout
            >
              <span className={styles.icon}>
                {toast.type === 'info' ? <Bell size={16} /> : toast.type === 'success' ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
              </span>
              <span className={styles.message}>{toast.message}</span>
              <button className={styles.close} onClick={() => dismiss(toast.id)}>✕</button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, CheckCircle } from 'lucide-react';
import styles from './FeedbackWidget.module.scss';

const FeedbackWidget = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const options = [
    { value: 'yes_changed', label: 'Yes — completely changed how I see charts' },
    { value: 'somewhat', label: 'Somewhat — still learning' },
    { value: 'not_yet', label: 'Not yet — I need more context' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected) return;

    // Build feedback email
    const subject = encodeURIComponent('4Color System — Market Perspective Feedback');
    const body = encodeURIComponent(
      `Feedback: Did this change how you see the market?\n\nAnswer: ${options.find((o) => o.value === selected)?.label}\n\nComment: ${comment || '(none)'}\n\n---\nSubmitted from 4colorsystem.com`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=4colorsystem@gmail.com&su=${subject}&body=${body}`,
      '_blank'
    );
    setSubmitted(true);
  };

  const handleClose = () => {
    setOpen(false);
    // Reset after close animation completes
    setTimeout(() => {
      setSubmitted(false);
      setSelected(null);
      setComment('');
    }, 300);
  };

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        className={styles.trigger}
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Leave feedback"
      >
        <MessageSquare size={20} />
        <span className={styles.triggerLabel}>Feedback</span>
      </motion.button>

      {/* Modal overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
          >
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 30 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={handleClose} aria-label="Close feedback">
                <X size={18} />
              </button>

              {submitted ? (
                <div className={styles.successState}>
                  <CheckCircle size={40} className={styles.successIcon} />
                  <h3>Thanks for your feedback!</h3>
                  <p>Your perspective helps us improve. Look out for an email from us.</p>
                  <button className={styles.doneBtn} onClick={handleClose}>Done</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.header}>
                    <div className={styles.headerBadge}>Quick Feedback</div>
                    <h3 className={styles.question}>
                      Did this change how you see the market?
                    </h3>
                    <p className={styles.sub}>Select the option that best describes your experience.</p>
                  </div>

                  <div className={styles.optionsList}>
                    {options.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        className={`${styles.option} ${selected === opt.value ? styles.selected : ''}`}
                        onClick={() => setSelected(opt.value)}
                      >
                        <span className={styles.optionDot} />
                        <span>{opt.label}</span>
                      </button>
                    ))}
                  </div>

                  <textarea
                    className={styles.comment}
                    placeholder="Any additional thoughts? (optional)"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={3}
                    maxLength={400}
                  />

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={!selected}
                  >
                    <Send size={15} />
                    <span>Send Feedback</span>
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeedbackWidget;

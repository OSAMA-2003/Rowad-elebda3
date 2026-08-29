'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * SplitText Component (React Bits compliant + Framer Motion)
 * Smoothly animates words/characters on scroll viewport entry.
 * Highly optimized for Arabic (RTL) & English typography.
 */
const SplitText = ({
  text = '',
  className = '',
  delay = 50,
  duration = 0.65,
  ease = [0.22, 1, 0.36, 1],
  splitType = 'words', // 'words' | 'chars'
  from = { opacity: 0, y: 35 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-50px',
  textAlign = 'right',
  tag = 'h2',
  onLetterAnimationComplete
}) => {
  const Tag = motion[tag] || motion.h2;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay / 1000,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: from,
    visible: {
      ...to,
      transition: {
        duration,
        ease
      }
    }
  };

  // If text is not a string, render directly
  if (typeof text !== 'string') {
    return (
      <Tag
        className={className}
        initial={from}
        whileInView={to}
        viewport={{ once: true, amount: threshold, margin: rootMargin }}
        transition={{ duration, ease }}
      >
        {text}
      </Tag>
    );
  }

  const words = text.split(' ');

  const getJustifyContent = () => {
    if (textAlign === 'center') return 'center';
    if (textAlign === 'left') return 'flex-start';
    return 'flex-start'; // RTL default
  };

  return (
    <Tag
      style={{
        textAlign,
        display: 'inline-flex',
        flexWrap: 'wrap',
        justifyContent: getJustifyContent(),
        rowGap: '0.1em',
        columnGap: '0.28em'
      }}
      className={`split-parent overflow-hidden md:pb-3 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold, margin: rootMargin }}
      onAnimationComplete={onLetterAnimationComplete}
    >
      {splitType === 'chars' ? (
        words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={itemVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))
      ) : (
        words.map((word, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block whitespace-nowrap"
          >
            {word}
          </motion.span>
        ))
      )}
    </Tag>
  );
};

export default SplitText;

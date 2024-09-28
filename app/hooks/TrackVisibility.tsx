import React, { useRef, useState, useEffect, ReactNode } from 'react';

// Define the types for the component's props
interface TrackVisibilityProps {
  once?: boolean; // If set to true, `isVisible` will remain true after the first intersection
  children: ({ isVisible }: { isVisible: boolean }) => ReactNode;
}

const TrackVisibility: React.FC<TrackVisibilityProps> = ({ once = false, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && observerRef.current) {
            observer.unobserve(observerRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Adjust the threshold value based on when you want to trigger visibility
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [once]);

  return (
    <div ref={observerRef}>
      {children({ isVisible })}
    </div>
  );
};

export default TrackVisibility;

import { useEffect, useRef } from 'react';

interface GoogleCalendarButtonProps {
  url: string;
  color?: string;
  label?: string;
}

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

export default function GoogleCalendarButton({ 
  url, 
  color = '#E4C441', 
  label = 'Book an appointment' 
}: GoogleCalendarButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCalendarButton = () => {
      if (window.calendar && window.calendar.schedulingButton && buttonRef.current) {
        window.calendar.schedulingButton.load({
          url,
          color,
          label,
          target: buttonRef.current,
        });
      }
    };

    // If the script is already loaded
    if (window.calendar) {
      loadCalendarButton();
    } else {
      // Wait for the script to load
      const checkForCalendar = setInterval(() => {
        if (window.calendar) {
          clearInterval(checkForCalendar);
          loadCalendarButton();
        }
      }, 100);

      // Cleanup interval after 10 seconds to avoid infinite checking
      setTimeout(() => clearInterval(checkForCalendar), 10000);
    }
  }, [url, color, label]);

  return <div ref={buttonRef} className="flex justify-center" />;
}
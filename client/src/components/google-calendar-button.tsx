import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

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
  const [googleButtonLoaded, setGoogleButtonLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const loadCalendarButton = () => {
      if (window.calendar && window.calendar.schedulingButton && buttonRef.current) {
        try {
          window.calendar.schedulingButton.load({
            url,
            color,
            label,
            target: buttonRef.current,
          });
          setGoogleButtonLoaded(true);
        } catch (error) {
          console.log('Google Calendar button failed to load, showing fallback');
          setShowFallback(true);
        }
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

      // Show fallback after 3 seconds if Google Calendar button hasn't loaded
      const fallbackTimer = setTimeout(() => {
        clearInterval(checkForCalendar);
        if (!googleButtonLoaded) {
          setShowFallback(true);
        }
      }, 3000);

      return () => {
        clearInterval(checkForCalendar);
        clearTimeout(fallbackTimer);
      };
    }
  }, [url, color, label, googleButtonLoaded]);

  if (showFallback || (!googleButtonLoaded && !window.calendar)) {
    return (
      <Button 
        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
        onClick={() => window.open(url, '_blank')}
      >
        <Calendar className="w-4 h-4 mr-2" />
        {label}
      </Button>
    );
  }

  return <div ref={buttonRef} className="flex justify-center w-full" />;
}
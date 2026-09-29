// Calendar integration utilities for Git Club CHARUSAT Event Hub

export function generateGoogleCalendarUrl(event) {
  // Format event date (assuming default 9:00 AM to 5:00 PM if time window is broad)
  const baseDate = event.date.replace(/-/g, '');
  const startTime = `${baseDate}T033000Z`; // 9:00 AM IST in UTC (03:30Z)
  const endTime = `${baseDate}T123000Z`;   // 6:00 PM IST in UTC (12:30Z)

  const title = encodeURIComponent(`${event.title} - Git Club CHARUSAT`);
  const details = encodeURIComponent(
    `${event.tagline}\n\n${event.description}\n\nVenue: ${event.venue}\nOrganized by Git Club CHARUSAT (Build. Collaborate. Ship.)\nVisit Event Hub for live updates.`
  );
  const location = encodeURIComponent(`${event.venue}, CHARUSAT Campus, Changa, Gujarat 388421`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}&sf=true&output=xml`;
}

export function downloadIcsFile(event) {
  const baseDate = event.date.replace(/-/g, '');
  const startTime = `${baseDate}T033000Z`;
  const endTime = `${baseDate}T123000Z`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Git Club CHARUSAT//Event Hub//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:gitclub-${event.id}-${Date.now()}@charusat.edu.in`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART:${startTime}`,
    `DTEND:${endTime}`,
    `SUMMARY:${event.title} | Git Club CHARUSAT`,
    `DESCRIPTION:${event.tagline}\\n${event.venue}`,
    `LOCATION:${event.venue}\\, CHARUSAT Campus\\, Changa`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${event.id}-charusat.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

export function formatTimeLeft(targetDateStr) {
  const target = new Date(targetDateStr).getTime();
  const now = new Date().getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isPast: false };
}

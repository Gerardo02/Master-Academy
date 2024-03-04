import dayjs from 'dayjs';

export const convertTime = (time) => {
  // Convert time to JavaScript Date object
  const date = dayjs(`1970-01-01 ${time}`, { utc: true });

  // Extract the components of the Date object
  const result = {
    "$L": "en", // Assuming English locale
    "$d": date.toISOString(),
    "$y": date.year(),
    "$M": date.month(),
    "$D": date.date(),
    "$W": date.day(),
    "$H": date.hour(),
    "$m": date.minute(),
    "$s": date.second(),
    "$ms": date.millisecond(),
    "$x": {},
    "$isDayjsObject": true,
  };

  return result;
};
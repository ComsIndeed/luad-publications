import { Timestamp } from "firebase/firestore";

export function createSafeRoute(title: string = "Untitled"): string {
  // Replace spaces with hyphens (-) for a clean url format
  const safeTitle = title.replace(/\s/g, "_");

  // Allowed characters in route paths according to RFC 3986
  const allowedChars = /^[a-zA-Z0-9\-._~:+\!$&'()*,\/;=@]+$/;

  // Filter out any characters not allowed in the route path
  const filteredTitle = safeTitle.replace(
    new RegExp(`[^${allowedChars}]`, "g"),
    ""
  );

  // Lowercase the entire string for consistent routing behavior
  return filteredTitle.toLowerCase();
}

export function formatTimeElapsed(date: Date | Timestamp) {
  let originalDate: any = date;

  // Convert Firestore Timestamp to JavaScript Date if needed
  if (date instanceof Timestamp) {
    originalDate = date.toDate();
  }

  const now: any = new Date();
  const elapsedMilliseconds: any = now - originalDate;
  const elapsedSeconds = elapsedMilliseconds / 1000;
  const elapsedMinutes = elapsedSeconds / 60;
  const elapsedHours = elapsedMinutes / 60;
  const elapsedDays = elapsedHours / 24;
  const elapsedWeeks = elapsedDays / 7;
  const elapsedMonths = elapsedDays / 30.44; // Average days in a month
  const elapsedYears = elapsedDays / 365.25; // Average days in a year

  const unit = (value: number, singularUnit: string, pluralUnit: string) =>
    Math.floor(value) === 1 ? singularUnit : pluralUnit; // This function determines the unit based on value and singular/plural forms

  if (elapsedYears >= 1) {
    return `${Math.floor(elapsedYears)} ${unit(
      elapsedYears,
      "year",
      "years"
    )} ago`;
  } else if (elapsedMonths >= 1) {
    return `${Math.floor(elapsedMonths)} ${unit(
      elapsedMonths,
      "month",
      "months"
    )} ago`;
  } else if (elapsedWeeks >= 1) {
    return `${Math.floor(elapsedWeeks)} week ago`; // Weeks remain singular
  } else if (elapsedDays >= 1) {
    return `${Math.floor(elapsedDays)} day ago`; // Days remain singular
  } else if (elapsedHours >= 1) {
    return `${Math.floor(elapsedHours)} ${unit(
      elapsedHours,
      "hour",
      "hours"
    )} ago`;
  } else if (elapsedMinutes >= 1) {
    return `${Math.floor(elapsedMinutes)} ${unit(
      elapsedMinutes,
      "minute",
      "minutes"
    )} ago`;
  } else {
    return `${Math.floor(elapsedSeconds)} second ago`;
  }
}

export function toggleTheme() {
  const documentClassList = document.body.classList;
  if (documentClassList.contains("light-theme")) {
    documentClassList.remove("light-theme");
    documentClassList.add("dark-theme");
  } else {
    documentClassList.remove("dark-theme");
    documentClassList.add("light-theme");
  }
}

export function getScreenType(minWidth: number): {
  isDesktop: boolean;
  isTablet: boolean;
  isPhone: boolean;
} {
  return {
    isDesktop: minWidth >= 1024,
    isTablet: minWidth >= 768 && minWidth < 1024,
    isPhone: minWidth < 768,
  };
}

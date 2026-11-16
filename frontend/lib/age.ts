/** Age in full years from an ISO date string (YYYY-MM-DD). Pass `today` from the caller. */
export function calculateAge(dateOfBirth: string, today: Date): number {
  const dob = new Date(dateOfBirth);
  if (Number.isNaN(dob.getTime())) {
    throw new Error(`Invalid dateOfBirth: ${dateOfBirth}`);
  }

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age -= 1;
  }

  return age;
}

/** Formats DOB for display, e.g. 15 May 2008 */
export function formatDateOfBirth(dateOfBirth: string): string {
  const dob = new Date(dateOfBirth);
  if (Number.isNaN(dob.getTime())) return dateOfBirth;

  return dob.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

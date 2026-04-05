import { UserType } from "@/types/user";

export default function getDirtyFields({
  original,
  current,
}: {
  original: UserType;
  current: UserType;
}) {
  // Watch for changes and store them in the dirty field object
  const dirtyFields: Partial<UserType> = {};

  // Loop through the original and current.
  // Find any changes and return the dirtyField object with those changes
  (Object.keys(current) as Array<keyof UserType>).forEach((key) => {
    if (current[key] !== original[key]) {
      // If no params are passed in, do nothing
      if (current[key] === "" && original[key] === null) return;

      dirtyFields[key] = current[key] as any;
    }
  });
  return dirtyFields;
}

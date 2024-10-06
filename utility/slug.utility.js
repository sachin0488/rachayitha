function create(name) {
  return encodeURIComponent(
    name
      .toLowerCase() // Converts the URL to lowercase
      .trim() // Removes any leading or trailing whitespace
      .replace(/[^\w\s-]/g, '') // Removes any characters that are not alphanumeric, whitespace, or hyphen
      .replace(/\s+/g, '-') // Replaces any whitespace with a hyphen
      .replace(/--+/g, '-'), // Replaces multiple consecutive hyphens with a single hyphen
  )
}

const slugUtility = {
  create,
}
export default slugUtility

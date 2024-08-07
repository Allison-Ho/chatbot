// Helper function to return the response's result text if successful, otherwise
// returns the rejected Promise result with an error status and corresponding text
export const statusCheck = async (res) => {
  if (!res.ok) {
      throw new Error(await res.text());
  }
  return res;
}
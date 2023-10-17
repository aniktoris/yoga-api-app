export async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Oops...stay calm as we encountered an error');
  }
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
}

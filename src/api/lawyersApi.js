export async function fetchLawyers() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=15");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data.results;
  } catch (err) {
    throw err;
  }
}

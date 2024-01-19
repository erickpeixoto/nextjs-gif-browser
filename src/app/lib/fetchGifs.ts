export const fetchGifs = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/gifs/");
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    
    } catch (error) {
      console.error("Error fetching Gifs:", error);
    }
  };
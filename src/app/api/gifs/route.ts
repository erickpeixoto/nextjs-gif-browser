import { NextResponse } from 'next/server';

export async function GET() {
  try {
 
    const giphyApiKey = process.env.GIPHY_API_KEY;


    const query = 'cats';


    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyApiKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    const gifs = data.data;


    return NextResponse.json({ gifs });
  } catch (error: any) {

    return new NextResponse(`Gif Error: ${error?.message}`, { status: 400 });
  }
}

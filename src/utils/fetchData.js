export const exerciseOptions = {
  method: 'GET',
  params: {limit: '50'},
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '35a4738569msh76eb688379bc4f5p1a14d9jsn00f4f2f10957',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '35a4738569msh76eb688379bc4f5p1a14d9jsn00f4f2f10957',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
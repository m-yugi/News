export default async function Datafetch(maxpages = 6, country = 'in', page = 1, category = 'general') {
    const api_key = process.env.REACT_APP_NEWS_API_KEY;
    let url =
        `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${api_key}&pageSize=${maxpages}&page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    return parsedData;
}
const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=29be7072"
const URLPrefix = "http://www.omdbapi.com/?s="
const URLSuffix = "&apikey=29be7072"

export const searchMovies = async (searchString) => {

    const URL = `${URLPrefix}${searchString}${URLSuffix}`
    const response = await fetch(URL)
    const results = await response.json()

    console.log(results["totalResults"])

    if (results["Response"] !== "False") {
        const totalResults = results["totalResults"]
        const totalPages = Math.ceil(totalResults / 10)
        const search = results["Search"]
        const processedResults = search.map(processMovie)
        return {totalResults: totalResults, totalPages: totalPages, result: processedResults}
    }
}

export const getMoviePage = async (searchString, pageNum) => {
    const URL = `${URLPrefix}${searchString}${URLSuffix}&page=${pageNum}`
    const response = await fetch(URL)
    const results = await response.json()
    const search = results["Search"]
    return search.map(processMovie)
}

processMovie = (raw) => ({
    id: `${raw.imdbID}`,
    title: `${raw.Title}`,
})
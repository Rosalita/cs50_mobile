const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=29be7072"
const URLPrefix = "http://www.omdbapi.com/?s="
const URLSuffix = "&apikey=29be7072"

export default searchMovies = async (searchString) => {

    const response = await fetch(`${URLPrefix}${searchString}${URLSuffix}`)
    const results = await response.json() 

    if (results["Response"] !== "False"){
        const search = results["Search"]
        return search.map(processMovie)
    }
}

processMovie = (raw) => ({
    id: `${raw.imdbID}`,
    title: `${raw.Title}`,
})
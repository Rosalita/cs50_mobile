const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=29be7072"
const URLPrefix = "http://www.omdbapi.com/?s="
const URLSuffix = "&apikey=29be7072"

export default searchMovies = async (searchString) => {

    const response = await fetch(`${URLPrefix}${searchString}${URLSuffix}`)
    const results = await response.json() 

    console.log(results["totalResults"])

    // ToDo
    // calculate the total pages from the total number of results
    // there are 10 results shown per page
    // if there's more than one page of results,
    // query for each page adding the results to an array
    // use &page=n in request to do this
    // clean up that array and return it

    if (results["Response"] !== "False"){
        const search = results["Search"]
        return search.map(processMovie)
    }
}

processMovie = (raw) => ({
    id: `${raw.imdbID}`,
    title: `${raw.Title}`,
})
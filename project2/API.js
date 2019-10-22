const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=29be7072"
const URLPrefix = "http://www.omdbapi.com/?s="
const URLSuffix = "&apikey=29be7072"

export default searchMovies = async (searchString) => {
    const response = await fetch(`${URLPrefix}${searchString}${URLSuffix}`)
    const results = await response.json() 
    console.log(results)
    return results
}
const getAllPosts = async () => {
const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")

if(!result.ok){
    throw new Error("could not load data :(")
}
return result.json()

}
export default getAllPosts
// Give an example of a common scenario where developers use await unnecessarily inside an
// async function, potentially blocking execution. How can you refactor that code to allow
// for parallel execution?

async function SequentialFunction() {
    const users = await fetch('/api/users')
    const posts = await fetch('/api/posts')

    return { users, posts }
}

// Here in this function await keyword block the execution and first users is fetched and then posts
// is fetched but they are independent

async function ParallelFunction() {
    const users = fetch('/api/users')
    const posts = fetch('/api/posts')

    const [userResponse, postResponse] = await Promise.all([users,posts])

    const usersData = await userResponse.json()
    const postData = await postResponse.json()

    return {usersData, postData}
}   

// If two asynchronous operations are independent, initiating them in parallel using Promise.all() 
// drastically reduces the total waiting time for the user.
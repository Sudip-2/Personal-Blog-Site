// getting the title using query params
const urlParams = new URLSearchParams(window.location.search);
const blogTitle = urlParams.get('title');
let urlApi = "https://personal-blog-site-zeta.vercel.app/"
console.log(blogTitle)

// getting the blog by url
async function specifiedBlog() {
    let blogdata = await fetch(`${urlApi}blogs/onclick?title=${blogTitle}`)
    let data = await blogdata.json()
    dataInserting(data)
    console.log(data)
}
specifiedBlog()

// inserting blogs data dynamically in page
function dataInserting(blog) {
    let headingOne = document.querySelector('#specificBlogHeadingOne')
    let date = document.getElementById('SpecificBlogDate')
    let imgOne = document.getElementById('SpecificBlogImageOne')
    let firstPara = document.getElementById('SpecificBlogFirstPara')

    document.title = blogTitle
    headingOne.textContent = blog.title
    imgOne.src = blog.pic
    date.textContent = new Date(blog.date).toLocaleDateString("en-US", {
        timeZone: "Asia/Jakarta"
    })
    firstPara.textContent = blog.desc
}
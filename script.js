const accessKey = "zvjs5qRefXAPsrUi7nr17VocgSpse2RWKn3NXJ3cdcI";
const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchBox");
const searchResult = document.getElementById("searchResult");
const submit = document.getElementById("submit");
const ShowMore = document.getElementById("ShowMore");

let keyword = "";
let page = 1;

async function searchImages() {
    // ShowMore.style.display = "block";
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  
    const response = await fetch(url);

    
    const data = await response.json();

    const results = data.results;

    results.forEach((result) => {
      const image = document.createElement("img");
      image.src = result.urls.small;

      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.appendChild(image);

      const imageContainer = document.createElement("div");
      imageContainer.appendChild(imageLink);
      searchResult.appendChild(imageContainer);
    });
   ShowMore.style.display="block";
  }


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
    searchResult.innerHTML="";
  searchImages();
  
});
ShowMore.addEventListener("click", ()=>{
  page++;
  searchImages();
})

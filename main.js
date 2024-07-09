
let news = [] ; 

const getLatestNews = async () => {
    const url = new URL (`https://creative-snickerdoodle-eaac22.netlify.app/`) ;
    const response = await fetch (url) ;
    const data = response.json() ;
    news = data.articles ;
    console.log("wow:",news) ;

}

getLatestNews() ;
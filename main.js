
let news = [] ; 

const getLatestNews = async () => {
    const url = new URL (`http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`) ;
    const response = await fetch (url) ;
    const data = response.json() ;
    news = data.articles ;
    console.log("wow:",news) ;

}

getLatestNews() ;
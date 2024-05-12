import { useEffect, useState } from "react";
import "../css/News.css";
import NewsItem from "./NewsItems";
import Loader from "./Loader";

export default function News({
  categoryofnews,
  countryfornews = "in",
  requesttype = "topheadlines",
  newsheading = "THIS IS NEWS HEADING",
  newstype = "all",
}) 
{
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    let requestofurl = false;
    if (!requestofurl) {
      const finalresultfornewsapi = async () => {
        setLoading(true);
        const dataAboutNews =
          requesttype === "everything"
            ? (await fetch(
                `https://newsapi.org/v2/everything?q=${newstype}&apiKey=${apikey}&page=${count}&pagesize=10`
              ))
            : (await fetch(
                `https://newsapi.org/v2/top-headlines?category=${categoryofnews}&country=${countryfornews}&apiKey=${apikey}&page=${count}&pagesize=10`
              ));
        const parseData = await dataAboutNews.json();
        setData(data => ({
          ...data,
          articles: [
            ...data.articles,
            ...parseData.articles
          ]
        }));
        setLoading(false);        
        console.log(parseData);        
      };
      finalresultfornewsapi();
    }
    return () => (requestofurl = true);
  }, [newstype, requesttype, categoryofnews, countryfornews, count]);

  // const completedata = {
  //   status: "ok",
  //   totalResults: 429420,
  //   articles: [
  //     {
  //       source: { id: null, name: "Yahoo Entertainment" },
  //       author: "Lawrence Bonk",
  //       title: "Slack rolls out its AI tools to all paying customers",
  //       description:
  //         "Slack just rolled out its AI tools to all paying users, after releasing them to a select subset of customers earlier this year. The company’s been teasing these features since last year and, well, now they’re here.\nThe AI auto-generates channel recaps to give…",
  //       url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_5e2e3473-d16f-455b-9eb8-7e88d86868dd",
  //       urlToImage: null,
  //       publishedAt: "2024-04-18T12:00:45Z",
  //       content:
  //         "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
  //     },
  //     {
  //       source: { id: "wired", name: "Wired" },
  //       author: "Aarian Marshall",
  //       title: "Tesla Is Going All In on Robotaxis—Buckle Up",
  //       description:
  //         "Autonomous vehicle tech has proven tricky for even the most sophisticated tech developers. But Tesla seems to be staking its future on it.",
  //       url: "https://www.wired.com/story/tesla-going-all-in-on-robotaxis/",
  //       urlToImage:
  //         "https://media.wired.com/photos/6610740e0e27303248553fa2/191:100/w_1280,c_limit/Tesla-Goes-All-In-On-Robotaxis-Gear-1241069058.jpg",
  //       publishedAt: "2024-04-06T00:01:29Z",
  //       content:
  //         "Mark your calendars: Tesla CEO Elon Musk suggested this afternoon that his electric automaker is going all-in on autonomous vehicle techand that Teslas robotaxi will be unveiled on August 8.\r\nThe ann… [+3783 chars]",
  //     },
  //     {
  //       source: { id: "the-verge", name: "The Verge" },
  //       author: "Jess Weatherbed",
  //       title:
  //         "Tesla recalls all 3,878 Cybertrucks over faulty accelerator pedal",
  //       description:
  //         "Tesla has issued a recall for effectively every Cybertruck it’s delivered to customers due to a fault that’s pinning down the vehicle’s accelerator pedals.",
  //       url: "https://www.theverge.com/2024/4/19/24134753/tesla-recall-cybertruck-faulty-accelerator-pedal-nhtsa-defect",
  //       urlToImage:
  //         "https://cdn.vox-cdn.com/thumbor/9ImaY4sovTjKfDk87mpSWGfoFuo=/0x0:4032x3024/1200x628/filters:focal(2016x1512:2017x1513)/cdn.vox-cdn.com/uploads/chorus_asset/file/25073829/IMG_0618.jpg",
  //       publishedAt: "2024-04-19T12:53:33Z",
  //       content:
  //         "Tesla recalls all 3,878 Cybertrucks over faulty accelerator pedal\r\nTesla recalls all 3,878 Cybertrucks over faulty accelerator pedal\r\n / Every Cybertruck produced from November to April will be fitte… [+2929 chars]",
  //     },
  //     {
  //       source: { id: "the-verge", name: "The Verge" },
  //       author: "Emma Roth",
  //       title: "Netflix is all about the money, not the members",
  //       description:
  //         "As part of its first quarter earnings results for 2024, Netflix announced it will no longer report the number of subscribers it gains each quarter and will instead focus on engagement.",
  //       url: "https://www.theverge.com/2024/4/18/24134217/netflix-earnings-q1-2024-subscriber-count",
  //       urlToImage:
  //         "https://cdn.vox-cdn.com/thumbor/ScXzGQ8lrcWwmyFEyuCWvqtTjPE=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951360/STK072_VRG_Illo_N_Barclay_8_netflix.jpg",
  //       publishedAt: "2024-04-18T20:36:49Z",
  //       content:
  //         "Netflix is all about the money, not the members\r\nNetflix is all about the money, not the members\r\n / Netflix added 9.3 million subscribers this quarter but the push for advertising and paid sharing m… [+2140 chars]",
  //     },
  //     {
  //       "source": { "id": "the-verge", "name": "The Verge" },
  //       "author": "Wes Davis",
  //       "title": "Phone cooler makers need to chill with all the ice",
  //       "description": "A review of the excessively frozen smartphones of the phone cooler product photography world.",
  //       "url": "https://www.theverge.com/2024/4/28/24143845/phone-cooler-fans-ice-graphics",
  //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/r3pQw0oxdTFfOaNiwDxe8Yui9eY=/0x0:1092x778/1200x628/filters:focal(546x389:547x390)/cdn.vox-cdn.com/uploads/chorus_asset/file/25424391/Neveika_phone_cooler.jpg",
  //       "publishedAt": "2024-04-28T21:56:57Z",
  //       "content": "Phone cooler makers need to chill with all the ice\r\nPhone cooler makers need to chill with all the ice\r\n / Im pretty sure being frozen isnt great for smartphones.\r\nByWes Davis, a weekend editor who c… [+2243 chars]"
  //     },
  //     {
  //       "source": { "id": null, "name": "Yahoo Entertainment" },
  //       "author": "Will Shanklin",
  //       "title": "Some of our favorite Bose headphones and earbuds are back to all-time low prices",
  //       "description": "Amazon has some of the highest-rated Bose headphones on sale for record-low prices. That includes the Bose QuietComfort Ultra headphones, which have best-in-class active noise cancellation (ANC). Usually $429, the wireless cans are now only $379, matching an …",
  //       "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_2e48c4df-0f4a-47d3-9984-82949553fe6c",
  //       "urlToImage": null,
  //       "publishedAt": "2024-04-26T18:00:39Z",
  //       "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
  //     },
  //     {
  //       "source": { "id": null, "name": "Yahoo Entertainment" },
  //       "author": "Lawrence Bonk",
  //       "title": "US will require all new cars to have advanced automatic braking systems by 2029",
  //       "description": "The National Highway Traffic Safety Administration (NHTSA) just announced new federal safety standards\r\n for automobiles. These standards include a mandate for advanced automatic braking systems for all new cars, which manufacturers must comply with by 2029. …",
  //       "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_a9f70f75-9b0f-43a3-88bf-ee78db4c59d7",
  //       "urlToImage": null,
  //       "publishedAt": "2024-04-30T18:44:55Z",
  //       "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
  //     },
  //     {
  //       "source": { "id": null, "name": "[Removed]" },
  //       "author": null,
  //       "title": "[Removed]",
  //       "description": "[Removed]",
  //       "url": "https://removed.com",
  //       "urlToImage": null,
  //       "publishedAt": "1970-01-01T00:00:00Z",
  //       "content": "[Removed]"
  //     },
  //     {
  //       "source": { "id": null, "name": "Yahoo Entertainment" },
  //       "author": "Will Shanklin",
  //       "title": "Acer launches two all-new 14-inch gaming laptops alongside updated 16-inch models",
  //       "description": "Acer’s midrange gaming laptop line has four new arrivals today following the company’s refresh of its flagship models at CES 2024. On Tuesday, the company unveiled a pair of new 14-inch entries alongside two refreshes of existing 16-inch models. The Intel-pow…",
  //       "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_b11124c2-8693-4550-a847-24e1eeab324a",
  //       "urlToImage": null,
  //       "publishedAt": "2024-04-09T16:00:47Z",
  //       "content": "If you click 'Accept all', we and our partners (including 239 who are part of the IAB Transparency &amp; Consent Framework) will also store and/or access information on a device (in other words, use … [+678 chars]"
  //     },
  //     {
  //       "source": { "id": "the-verge", "name": "The Verge" },
  //       "author": "Andrew Webster",
  //       "title": "Welcome to the wasteland: all the news on Amazon’s Fallout TV series",
  //       "description": "Fallout is a live-action adaptation of Bethesda’s video game series, which starts streaming on Amazon Prime Video on April 11th.",
  //       "url": "https://www.theverge.com/24124222/fallout-tv-series-amazon-prime-video-news-trailers",
  //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/-VuNrUIpznN9V3oetQsitNUyxmE=/0x0:3000x1250/1200x628/filters:focal(1500x625:1501x626)/cdn.vox-cdn.com/uploads/chorus_asset/file/25378903/Fallout_S1_FG_00280518_Still273_3000.jpg",
  //       "publishedAt": "2024-04-08T15:30:00Z",
  //       "content": "After a few decades spent exploring the end of times as a video game, Fallout is now a TV series. The show is set two centuries after a nuclear war and explores the wasteland from three different per… [+6278 chars]"
  //     },
  //     {
  //       "source": { "id": "the-verge", "name": "The Verge" },
  //       "author": "David Pierce",
  //       "title": "Limitless is a new AI tool for your meetings — and an all-hearing wearable gadget",
  //       "description": "Limitless has apps for Mac, Windows, and the web and aims to be a way to prep for and remember the stuff you talk about at work. Plus ChatGPT and much more.",
  //       "url": "https://www.theverge.com/2024/4/15/24130832/limitless-ai-pendant-wearable-meetings",
  //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/hOCdJFjRj3cMpX10uoH2eSf2Unc=/0x0:3000x1688/1200x628/filters:focal(1500x844:1501x845)/cdn.vox-cdn.com/uploads/chorus_asset/file/25394750/All_Colors_Back.jpg",
  //       "publishedAt": "2024-04-15T14:00:00Z",
  //       "content": "Limitless is a new AI tool for your meetings  and an all-hearing wearable gadget\r\nLimitless is a new AI tool for your meetings  and an all-hearing wearable gadget\r\n / At first, Limitless hopes to be … [+6216 chars]"
  //     },
  //     {
  //       "source": { "id": "the-verge", "name": "The Verge" },
  //       "author": "Allison Johnson",
  //       "title": "Turns out the Rabbit R1 was just an Android app all along",
  //       "description": "If it seems like the Rabbit R1 could have just been an Android app, guess what — it is! The folks at Android Authority loaded the R1’s launcher on a Pixel 6A.",
  //       "url": "https://www.theverge.com/2024/4/30/24145838/rabbit-r1-android-app-pixel-6a",
  //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/WpdWEpyvFtbDQbr2sbV4t2SB7E4=/0x0:6000x4000/1200x628/filters:focal(3000x2000:3001x2001)/cdn.vox-cdn.com/uploads/chorus_asset/file/25415491/DSC08587.JPG",
  //       "publishedAt": "2024-04-30T22:58:05Z",
  //       "content": "Turns out the Rabbit R1 was just an Android app all along\r\nTurns out the Rabbit R1 was just an Android app all along\r\n / AI is in its Juicero era.\r\nByAllison Johnson, a reviewer with 10 years of expe… [+2112 chars]"
  //     },
  //   ]
  // };
  
  const apikey = "43e2c82797bb463abfd8e842fd632cfa";

  // const fetchData = async () => {
  //   const dataAboutNews =
  //     requesttype === "everything"
  //       ? await fetch(
  //           `https://newsapi.org/v2/everything?q=${newstype}&apiKey=${apikey}&page=${pagenumber}&pageSize=${pagesizenumber}`
  //         )
  //       : await fetch(
  //           `https://newsapi.org/v2/top-headlines?category=${categoryofnews}&country=${countryfornews}&apiKey=${apikey}&page=${pagenumber}&pageSize=${pagesizenumber}`
  //         );
  //   const parseData = await dataAboutNews.json();
  //   // setTotalresultsofarticle(parseData.totalResults);
  //   setTotalresultsofarticle(parseData.totalResults);
  //   setArticles(articles.concat(parseData.articles));
  //   console.log(parseData);
  //   setLoading(false);
  //   setPagenumber(pagenumber + 1); 
  // };

  return (
    <>
      <h1 className="text-center titlefornews">{newsheading}</h1>
      {loading && <Loader />}
      <section className="container newsclassgrid">
      {!loading && data.map((item, i) => {
            return (
              <NewsItem
                key={i}
                imageurl={item.urlToImage}
                title={item.title}
                description={item.description}
                sourceurl={item.url}
              />
            );
          })}       
      </section>
      <div className="dotspace"></div>
      <div className="loadmorediv">
        <button className="loadmorebuttom" onClick={()=> {
          if (data.length !== 100)
            setCount(count + 1)
          } 
          }>Load More</button>
      </div>
      <div className="dotspace"></div>
    </>
  );
}

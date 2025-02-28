import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };
  constructor() {
    super();
    // console.log("Hello I am Cunstructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      };
  }

  
  // ComponantsDidMount ye React class Componants me lifecycle method
  // hai jo Api ke throw data fatch krne ke kam aata hai
  // API Call: It sends an HTTP request to the NewsAPI URL to fetch top headlines from TechCrunch.
  // Handling Response: The response is awaited and then converted to JSON format.
  // Updating State: The JSON data, specifically the articles, are stored in the Componants's
  // state using this.setState({ articles: passData.articles }). This will cause the Componants to re-render with the fetched articles.

  // ComponantsDidMoun   ye ek lifecycle mathod hai

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=eb3724e93dce4eceb4d22326b45e6290&pageSize=${this.props.pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eb3724e93dce4eceb4d22326b45e6290&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let passData = await data.json();
    // console.log(passData);
    this.setState({
      articles: passData.articles,
      totalResults: passData.totalResults,
      loading: false,
    });
  }
  articles= [
    {
      "source": {
      "id": "cbs-news",
      "name": "CBS News"
      },
      "author": "Kathryn Watson",
      "title": "Biden delivers final speech to U.N. General Assembly as president - CBS News",
      "description": "\"I know many look at the world today and see difficulties and react with despair,\" President Biden said before the United Nations General Assemby. \"But I do not.\"",
      "url": "https://www.cbsnews.com/news/joe-biden-united-nations-general-assembly-final-speech/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/09/24/3879df0f-f668-47a1-b216-2c1b98927b1c/thumbnail/1200x630/7b460c17841fddcdd4a7963a87fe2ef0/ap24268519795358.jpg?v=d735195a810d7336123786e9bed29d16",
      "publishedAt": "2024-09-24T14:37:31Z",
      "content": "President Biden on Tuesday delivered his final speech to the United Nations General Assembly — and one of his last speeches on the world stage as president — capping a decades-long political career t… [+4432 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Yahoo Entertainment"
      },
      "author": "Karen Friar",
      "title": "Stock market today: US stocks tick higher as Fedspeak, China stimulus lift spirits - Yahoo Finance",
      "description": "Investors are weighing the chances of another jumbo interest rate cut and China's launch of aggressive stimulus.",
      "url": "https://finance.yahoo.com/news/live/stock-market-today-us-stocks-mixed-as-investors-digest-fedspeak-falling-consumer-confidence-133233677.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/YGwMf_P1tQvNX0PWgyRqTQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/22e4e920-721d-11ef-b6f8-d644ddc72a3a",
      "publishedAt": "2024-09-24T14:14:00Z",
      "content": "Consumer confidence tumbled in September as Americans grew increasingly worried about the labor market.\r\nThe latest index reading from the Conference Board was 98.7, below the 105.6 seen in August an… [+1687 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": "Maya Gebeily, Tom Perry, James Mackenzie",
      "title": "Israeli strike on Beirut kills Hezbollah commander, security sources say - Reuters",
      "description": "Israel's military chief said the Iran-backed group would be given no breathing space.",
      "url": "https://www.reuters.com/world/middle-east/israel-hezbollah-exchange-fire-after-lebanon-suffers-huge-casualties-2024-09-24/",
      "urlToImage": "https://www.reuters.com/resizer/v2/BW7JQVKOSVJKZASCJPUNV2WRL4.jpg?auth=1cebcb590cae1ad2ddd4c82749109f2e1fa4fcf4037af8931c52fa922834d152&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-09-24T14:13:23Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Hollywood Reporter"
      },
      "author": "Lacey Rose",
      "title": "Ellen DeGeneres Strikes Back: “Mean, Old and Gay — The Triple Crown” - Hollywood Reporter",
      "description": "The former 'Ellen' host jokes that she regrets not signing off with \"Go f*** yourselves\" in her new Netflix comedy special that details the fallout when the world decides the \"queen of nice\" is actually \"the queen of mean.\"",
      "url": "http://www.hollywoodreporter.com/tv/tv-news/ellen-degeneres-netflix-comedy-special-talk-show-end-backlash-1236009143/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/09/EDSS_Unit_01174R-e1726672167836.jpg?w=1440&h=810&crop=1",
      "publishedAt": "2024-09-24T13:46:09Z",
      "content": "[This story contains spoilers from Ellen DeGeneres: For Your Approval.]\r\nEllen DeGeneres is getting the last laugh.\r\nWith her latest (and apparently final) stand-up special now streaming on Netflix, … [+3546 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CNBC"
      },
      "author": "Karen Gilchrist",
      "title": "UK Prime Minister Keir Starmer says tough times are needed to spark national renewal - CNBC",
      "description": "Starmer's efforts to instill a sense of optimism come after the government has been accused of doom-mongering over the state of the U.K. economy.",
      "url": "https://www.cnbc.com/2024/09/24/uk-pm-keir-starmer-pledges-national-renewal-at-labour-conference-2024.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/108038286-1727181360773-gettyimages-2173231649-77570385.jpeg?v=1727181378&w=1920&h=1080",
      "publishedAt": "2024-09-24T13:34:05Z",
      "content": "Liverpool, ENGLAND U.K. Prime Minister Keir Starmer insisted on Tuesday that tough decisions taken now will spark a new era for Britain, as he sought to shake a fog of pessimism that has clouded his … [+4275 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NBCSports.com"
      },
      "author": "Mike Florio",
      "title": "PFT’s Week 4 2024 NFL power rankings - NBC Sports",
      "description": "Sorry, Chiefs, but the Bills are currently better.",
      "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/pfts-week-4-2024-nfl-power-rankings",
      "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/74d0afa/2147483647/strip/true/crop/4859x2733+0+253/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F84%2Fea%2F24ae87be42338b4d4d4a34c76d71%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2174053833",
      "publishedAt": "2024-09-24T13:20:51Z",
      "content": "1. Bills (last week No. 2; 3-0): JoSH aLlEn Is oVeRraTEd.\r\n2. Chiefs (No. 1; 3-0): Yes, they keep winning. But they could easily be 0-3.\r\n3. Lions (No. 4; 2-1): Dan Campbells temporary address in ear… [+2712 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CNBC"
      },
      "author": "Rohan Goswami",
      "title": "Blackstone and Vista Equity Partners to acquire software maker Smartsheet for $8.4 billion - CNBC",
      "description": "The $8.4 billion deal is expected to close in January 2025, and the collaboration software maker has the option to solicit other bids.",
      "url": "https://www.cnbc.com/2024/09/24/blackstone-and-vista-equity-partners-to-acquire-software-maker-smartsheet.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/105163991-Handout_Smartsheet_CEO_Mark_Mader.jpg?v=1612822793&w=1920&h=1080",
      "publishedAt": "2024-09-24T13:07:53Z",
      "content": "Collaboration software maker Smartsheet announced Tuesday Blackstone and Vista Equity Partners will acquire it in an all-cash deal valuing the company at about $8.4 billion.\r\nStockholders will receiv… [+837 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "New York Post"
      },
      "author": "Olivia Land",
      "title": "New York resident with state’s first case of mosquito-borne EEE virus in nearly a decade has died - New York Post ",
      "description": "The case was the first instance of EEE in New York since 2015.",
      "url": "https://nypost.com/2024/09/24/us-news/new-york-resident-dies-from-eee/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/09/90305268.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2024-09-24T13:04:00Z",
      "content": "A New York state resident who was diagnosed with the states first confirmed case of Eastern equine encephalitis (EEE) in nearly 10 years has died, according to authorities who declared an imminent th… [+3855 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": "Ahmed Aboulenein, Patrick Wingrove",
      "title": "Novo Nordisk CEO faces US Congress scrutiny over weight-loss drug pricing - Reuters",
      "description": "U.S. Senator Bernie Sanders said on Tuesday he had received commitments from all major pharmacy benefit managers they would expand coverage of Novo Nordisk's popular diabetes and weight-loss medicines if the company lowered their list prices.",
      "url": "https://www.reuters.com/business/healthcare-pharmaceuticals/novo-nordisk-ceo-faces-us-congress-scrutiny-over-weight-loss-drug-pricing-2024-09-24/",
      "urlToImage": "https://www.reuters.com/resizer/v2/7XSGENO2WZJYXE7ZPL26FRYCI4.jpg?auth=b298dc029499fe9f036d804cccbf179ba1e092ce2083e151e115ae0b8b4d4396&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-09-24T13:02:17Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Variety"
      },
      "author": "Angelique Jackson",
      "title": "‘Sinners’ Trailer: Michael B. Jordan Reunites With ‘Black Panther’ Director Ryan Coogler and Battles a Terrifying Evil - Variety",
      "description": "Michael B. Jordan stars in the first trailer for the supernatural thriller \"Sinners,\" his fifth collaboration with director Ryan Coogler.",
      "url": "https://variety.com/2024/film/news/sinners-trailer-michael-b-jordan-ryan-coogler-vampire-movie-1235965571/",
      "urlToImage": "https://variety.com/wp-content/uploads/2024/09/sinners.png?w=1000&h=563&crop=1",
      "publishedAt": "2024-09-24T13:02:00Z",
      "content": "Ryan Coogler and Michael B. Jordan‘s fifth collaboration has been shrouded in secrecy since it was announced in January. Now eager film fans are getting their first look at “Sinners” — and all its bl… [+3492 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "[Removed]"
      },
      "author": null,
      "title": null,
      "description": null,
      "url": null,
      "urlToImage": null,
      "publishedAt": "2024-09-24T13:00:38Z",
      "content": "[Removed]"
      },
      {
      "source": {
      "id": "fox-news",
      "name": "Fox News"
      },
      "author": "Timothy Nerozzi",
      "title": "Obesity rates in US not growing for first time in a decade, but severe obesity on the rise: CDC - Fox News",
      "description": "The overall rate of obesity in the United States ticked downward between August 2021 and August 2023, breaking a streak of continued increase for over a decade.",
      "url": "https://www.foxnews.com/health/obesity-rates-us-not-growing-first-time-decade-severe-obesity-rise-cdc",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/09/obese-woman.jpg",
      "publishedAt": "2024-09-24T12:29:00Z",
      "content": "The general rate of obesity among adults in the United States has stagnated, but the rate of severe obesity has increased, according to the Centers for Disease Control and Prevention.\r\nA report compi… [+2024 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "New York Post"
      },
      "author": "Eric Todisco",
      "title": "Ryan Murphy responds to Erik Menendez’s ‘Monsters’ criticism, defends incest innuendo - New York Post ",
      "description": "“It’s really, really hard — if it’s your life — to see your life up on screen,” Ryan Murphy said.",
      "url": "https://nypost.com/2024/09/24/entertainment/ryan-murphy-responds-to-erik-menendezs-criticism-of-monsters/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/09/lyle-erik-menendez-story-amid-90303839.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2024-09-24T12:03:00Z",
      "content": "Ryan Murphy has no regrets about his latest Netflix series.\r\nMonsters: The Lyle and Erik Menendez Story has faced criticism for suggesting an incestuous relationship between the infamous brothers who… [+4186 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Live Science"
      },
      "author": "Sascha Pare",
      "title": "Weird 'zebra rock' on Mars is unlike anything seen before on Red Planet, NASA says - Livescience.com",
      "description": "NASA's Perseverance rover has sent home pictures of a mysterious black-and-white striped rock, the likes of which scientists have never seen before on Mars.",
      "url": "https://www.livescience.com/space/mars/weird-zebra-rock-on-mars-is-unlike-anything-seen-before-on-red-planet-nasa-says",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/mLsWb5UBE2sX9AkoKSrCri-1200-80.jpg",
      "publishedAt": "2024-09-24T11:56:18Z",
      "content": "NASA's Perseverance rover has spotted a funky \"zebra rock\" on Mars' Jezero crater that's nothing like any rock seen on the Red Planet before.\r\nThe rover captured images of the black-and-white striped… [+2888 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "BBC News"
      },
      "author": null,
      "title": "Afghanistan: Cats have more freedom than women, says Meryl Streep - BBC.com",
      "description": "A cat may \"feel the sun on her face\" in a park but girls do not have such freedoms under the Taliban, she said.",
      "url": "https://www.bbc.com/news/articles/cr54d3qd5r7o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ebb5/live/3dac1350-7a7e-11ef-b282-4535eb84fe4b.jpg",
      "publishedAt": "2024-09-24T11:35:31Z",
      "content": "Cats have more freedom than women in Afghanistan, Hollywood actress Meryl Streep has said in an appeal to the international community to stop the Taliban's repression.\r\nSpeaking on the sidelines of t… [+2819 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Natasha Bertrand, Oren Liebermann, Jennifer Hansler",
      "title": "US officials work feverishly to stop Israel-Hezbollah confrontation ‘spiraling to a regional war’ - CNN",
      "description": "The US believes Israel has significantly weakened Hezbollah in strikes over the last week but is still working feverishly behind the scenes to try to convince it not to escalate further and launch a ground incursion into Lebanon over concerns the intensified …",
      "url": "https://www.cnn.com/2024/09/24/politics/us-officials-israel-hezbollah-stop-regional-war/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24267353593962.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-09-24T11:24:00Z",
      "content": "The US believes Israel has significantly weakened Hezbollah in strikes over the last week but is still working feverishly behind the scenes to try to convince it not to escalate further and launch a … [+6266 chars]"
      },
      {
      "source": {
      "id": "usa-today",
      "name": "USA Today"
      },
      "author": "Charles Trepany",
      "title": "Demi Lovato doesn’t remember much of her time on Disney Channel. It's called dissociation. - USA TODAY",
      "description": "Demi Lovato doesn't remember much of her time on Disney Channel because of this trauma response. Experts say it's key to understanding trauma.",
      "url": "https://www.usatoday.com/story/life/health-wellness/2024/09/24/demi-lovato-child-star-documentary-whats-dissociation/75356270007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/09/14/USAT/75217642007-2171635178.jpg?crop=3049,1716,x0,y219&width=3049&height=1716&format=pjpg&auto=webp",
      "publishedAt": "2024-09-24T11:13:04Z",
      "content": "Demi Lovato dives into the mental health challenges that come with fame at a young age in a new documentary and in it she reveals something experts say is key to understanding trauma.\r\nIn \"Child Star… [+5171 chars]"
      },
      {
      "source": {
      "id": "cbs-news",
      "name": "CBS News"
      },
      "author": null,
      "title": "Man accused of selling fake pills throughout U.S., running operation out of a garage turned \"lab\" in Connecticut - CBS News",
      "description": "Federal law enforcement officials called the case one of the largest counterfeit pill busts ever in New England.",
      "url": "https://www.cbsnews.com/news/indictments-fake-pills-garage-lab-connecticut-doj/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/09/24/1ee02481-9e6a-4089-a444-fd0e73a8a5a3/thumbnail/1200x630g2/b70aa65ff37ef6ed282830d4331fdc7f/ap24267656838276.jpg?v=d735195a810d7336123786e9bed29d16",
      "publishedAt": "2024-09-24T11:07:17Z",
      "content": "In a nondescript garage in Connecticut, a New Haven man manufactured hundreds of thousands of counterfeit pills containing methamphetamine, a powerful opioid and other illicit drugs that he shipped a… [+4424 chars]"
      },
      {
      "source": {
      "id": "the-verge",
      "name": "The Verge"
      },
      "author": "Jess Weatherbed",
      "title": "Google’s Gemini AI might soon appear in your corporate Workspace - The Verge",
      "description": "Google is adding Gemini AI and new security tools to its Workspace productivity suite as standard, which could see the chatbot adopted by millions more users.",
      "url": "https://www.theverge.com/2024/9/24/24252934/google-workspace-gemini-ai-security-assistant",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/nha2O8ap-F3u1XEvSZzqy9T3qBA=/0x0:2040x1334/1200x628/filters:focal(1020x667:1021x668)/cdn.vox-cdn.com/uploads/chorus_asset/file/25290332/STK255_Google_Gemini_B.jpg",
      "publishedAt": "2024-09-24T11:00:00Z",
      "content": "Googles Gemini AI might soon appear in your corporate Workspace\r\nGoogles Gemini AI might soon appear in your corporate Workspace\r\n / Workspace customers are getting new security features and will no … [+1632 chars]"
      },
      {
      "source": {
      "id": "wired",
      "name": "Wired"
      },
      "author": "Emily Mullin",
      "title": "I Tried These Brain-Tracking Headphones That Claim to Improve Focus - WIRED",
      "description": "Neurable’s MW75 Neuro is an everyday brain-computer interface that aims to boost your productivity. It also raises questions about data privacy.",
      "url": "https://www.wired.com/story/this-brain-tracking-device-wants-to-help-you-work-smarter/",
      "urlToImage": "https://media.wired.com/photos/66f1d3bcf403832d553d6bcc/191:100/w_1280,c_limit/MW75_Neurable_Neurable_black_CU.jpg",
      "publishedAt": "2024-09-24T11:00:00Z",
      "content": "One afternoon I was using the device for a little over an hour when I heard a voice in the headset: Youve earned a brain break. Alcaide says the device can detect when your focus is starting to decli… [+2731 chars]"
      }
            // ... other articles
        ]

  // Previous button hai

  handlePreviousClick = async () => {
    console.log("Previous");

    // Ensure page does not go below 1
    if (this.state.page > 1) {
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=eb3724e93dce4eceb4d22326b45e6290&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eb3724e93dce4eceb4d22326b45e6290&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let passData = await data.json();
      // console.log(passData);
      this.setState({
        page: this.state.page - 1,
        articles: passData.articles,
        loading: false,
      });
    }
  };

  // Next button hai

  handleNextClick = async () => {
    console.log("Next");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=eb3724e93dce4eceb4d22326b45e6290&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eb3724e93dce4eceb4d22326b45e6290&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let passData = await data.json();
      // console.log(passData);
      this.setState({
        page: this.state.page + 1,
        articles: passData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3  ">
        <h1 className="text-center" style={{ margin: "20px 0px" }}>
          News - Top Headlines
        </h1>
        {/* loding true h to Spinner ko dikha do varna mt dikha? */}
        {this.state.loading && <Spinner />}

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col" key={element.url}>
                  <div className="card h-100">
                    <NewsItem
                      title={element.title.slice(0, 45)}
                      description = {
                        element.description
                          ? element.description.slice(0, 80)
                          : "Default description here"
                      }
                      ImageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://hips.hearstapps.com/hmg-prod/images/tcx-murdoch-trust-2-66eda4060f5bf.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
                      }
                      newsUrl={element.url}
                    />
                  </div>
                </div>
              );
            })}
        </div>

        <div className="d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &laquo; Previous
          </button>

          {/* Math.ceil iska mean ye hai ye page ko last me raound figure me dikhayega */}
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

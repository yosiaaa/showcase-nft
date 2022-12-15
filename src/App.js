import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFT's. Start Selling & Growing"
        description="Buy, store, collect NFT's, exchange & earn crypto. Join 25+ million people using ProNerf Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Your own store of Nifty NFT's. Start Selling & Growing"
        description="Buy, store, collect NFT's, exchange & earn crypto. Join 25+ million people using ProNerf Marketplace"
        mockupImg={assets.homeCards}
        reverse
      />
      <SectionWrapper
        title="Deployment"
        description="Pronef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screen. The first screen list the NFTs while the seconds one show the details of specific NFTs"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by {" "}
          <span className="bold">Iyosss</span>
        </p>
      </div>
    </>
  );
};

export default App;

import Helmet from "react-helmet";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Helmet>
        <title>{headTitle ? headTitle : "NFTLOL | NFT Marketplace"}</title>
      </Helmet>
    </>
  );
};

export default PageHead;

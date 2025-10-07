import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="flat-title-page">
            <div className="themesflat-container">
              <div className="row">
                <div className="col-12">
                  <h1 className="heading text-center">Terms &amp; Condition</h1>
                  <ul className="breadcrumbs flex justify-center">
                    <li className="icon-keyboard_arrow_right">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Creators</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tf-section-2 widget-term-condition">
            <div className="themesflat-container">
              <div className="row flat-tabs">
                <div className="col-md-3 col-12">
                  <div className="wrap-menu po-sticky">
                    <div className="title">Menu</div>
                    <ul className="menu-tab">
                      <li
                        className={
                          activeIndex === 1 ? "item-title active" : "item-title"
                        }
                        onClick={() => handleOnClick(1)}
                      >
                        <span className="inner">1. Introduction</span>
                      </li>
                      <li
                        className={
                          activeIndex === 2 ? "item-title active" : "item-title"
                        }
                        onClick={() => handleOnClick(2)}
                      >
                        <span className="inner">2. Accessing the Service</span>
                      </li>
                      <li
                        className={
                          activeIndex === 3 ? "item-title active" : "item-title"
                        }
                        onClick={() => handleOnClick(3)}
                      >
                        <span className="inner">3. Ownership</span>
                      </li>
                      <li
                        className={
                          activeIndex === 4 ? "item-title active" : "item-title"
                        }
                        onClick={() => handleOnClick(4)}
                      >
                        <span className="inner">4. License to Access</span>
                      </li>
                      <li
                        className={
                          activeIndex === 5 ? "item-title active" : "item-title"
                        }
                        onClick={() => handleOnClick(5)}
                      >
                        <span className="inner">
                          5. Use Our Service and Content
                        </span>
                      </li>
                      <li
                        className={
                          activeIndex === 6 ? "item-title active" : "item-title"
                        }
                        onClick={() => handleOnClick(6)}
                      >
                        <span className="inner">6. User Conduct</span>
                      </li>
                      <li
                        className={
                          activeIndex === 7 ? "item-title active" : "item-title"
                        }
                        onClick={() => handleOnClick(7)}
                      >
                        <span className="inner">
                          7. Intellectual Property Rights
                        </span>
                      </li>
                      <li
                        className={
                          activeIndex === 8 ? "item-title active" : "item-title"
                        }
                        onClick={() => handleOnClick(8)}
                      >
                        <span className="inner">
                          8. Communication Preferences
                        </span>
                      </li>
                      <li
                        className={
                          activeIndex === 9 ? "item-title active" : "item-title"
                        }
                        onClick={() => handleOnClick(9)}
                      >
                        <span className="inner">9. App Termsy</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9 col-12">
                  <div className="content-tab po-sticky-footer">
                    <div
                      className="content-inner"
                      style={{
                        display: `${activeIndex === 1 ? "block" : "none"}`,
                      }}
                    >
                      <div className="date">Last Updated: May 19, 2023</div>
                      <p>
                        Welcome to Open9, owned and operated by Ozone Networks,
                        Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These
                        Terms of Service (“Terms”) govern your access to and use
                        of the Open9 website(s), our APIs, mobile applications
                        (“App”), and any live support, software, tools,
                        features, or functionalities provided on or in
                        connection with our services; including without
                        limitation using our services to view, explore, help
                        display and create NFTs, and using our tools, at your
                        own discretion, to connect directly with others to mint,
                        purchase, sell, or transfer NFTs on public blockchains
                        (collectively, the “Service”). “NFT” in these Terms
                        means a non-fungible token or similar digital item
                        implemented on a blockchain (such as the Ethereum
                        blockchain), which uses smart contracts to link to or
                        otherwise be associated with certain content or data.
                      </p>
                      <p>
                        For purposes of these Terms, “user”, “you”, and “your”
                        mean you as the user of the Service. If you use the
                        Service on behalf of a company or other entity then
                        “you” includes you and that entity, and you represent
                        and warrant that (a) you are an authorized
                        representative of the entity with the authority to bind
                        the entity to these Terms, and (b) you agree to these
                        Terms on the entity’s behalf.
                      </p>
                      <p>
                        PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY
                        CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL
                        RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A
                        MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER
                        WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES
                        BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION
                        RATHER THAN BY A JUDGE OR JURY IN COURT.
                      </p>
                      <p>
                        BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE,
                        YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE
                        TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT
                        AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE
                        SERVICE.
                      </p>
                    </div>
                    <div
                      className="content-inner"
                      style={{
                        display: `${activeIndex === 2 ? "block" : "none"}`,
                      }}
                    >
                      <div className="date">Last Updated: May 19, 2023</div>
                      <p>
                        Welcome to Open9, owned and operated by Ozone Networks,
                        Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These
                        Terms of Service (“Terms”) govern your access to and use
                        of the Open9 website(s), our APIs, mobile applications
                        (“App”), and any live support, software, tools,
                        features, or functionalities provided on or in
                        connection with our services; including without
                        limitation using our services to view, explore, help
                        display and create NFTs, and using our tools, at your
                        own discretion, to connect directly with others to mint,
                        purchase, sell, or transfer NFTs on public blockchains
                        (collectively, the “Service”). “NFT” in these Terms
                        means a non-fungible token or similar digital item
                        implemented on a blockchain (such as the Ethereum
                        blockchain), which uses smart contracts to link to or
                        otherwise be associated with certain content or data.
                      </p>
                      <p>
                        For purposes of these Terms, “user”, “you”, and “your”
                        mean you as the user of the Service. If you use the
                        Service on behalf of a company or other entity then
                        “you” includes you and that entity, and you represent
                        and warrant that (a) you are an authorized
                        representative of the entity with the authority to bind
                        the entity to these Terms, and (b) you agree to these
                        Terms on the entity’s behalf.
                      </p>
                      <p>
                        PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY
                        CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL
                        RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A
                        MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER
                        WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES
                        BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION
                        RATHER THAN BY A JUDGE OR JURY IN COURT.
                      </p>
                      <p>
                        BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE,
                        YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE
                        TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT
                        AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE
                        SERVICE.
                      </p>
                    </div>
                    <div
                      className="content-inner"
                      style={{
                        display: `${activeIndex === 3 ? "block" : "none"}`,
                      }}
                    >
                      <div className="date">Last Updated: May 19, 2023</div>
                      <p>
                        Welcome to Open9, owned and operated by Ozone Networks,
                        Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These
                        Terms of Service (“Terms”) govern your access to and use
                        of the Open9 website(s), our APIs, mobile applications
                        (“App”), and any live support, software, tools,
                        features, or functionalities provided on or in
                        connection with our services; including without
                        limitation using our services to view, explore, help
                        display and create NFTs, and using our tools, at your
                        own discretion, to connect directly with others to mint,
                        purchase, sell, or transfer NFTs on public blockchains
                        (collectively, the “Service”). “NFT” in these Terms
                        means a non-fungible token or similar digital item
                        implemented on a blockchain (such as the Ethereum
                        blockchain), which uses smart contracts to link to or
                        otherwise be associated with certain content or data.
                      </p>
                      <p>
                        For purposes of these Terms, “user”, “you”, and “your”
                        mean you as the user of the Service. If you use the
                        Service on behalf of a company or other entity then
                        “you” includes you and that entity, and you represent
                        and warrant that (a) you are an authorized
                        representative of the entity with the authority to bind
                        the entity to these Terms, and (b) you agree to these
                        Terms on the entity’s behalf.
                      </p>
                      <p>
                        PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY
                        CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL
                        RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A
                        MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER
                        WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES
                        BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION
                        RATHER THAN BY A JUDGE OR JURY IN COURT.
                      </p>
                      <p>
                        BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE,
                        YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE
                        TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT
                        AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE
                        SERVICE.
                      </p>
                    </div>
                    <div
                      className="content-inner"
                      style={{
                        display: `${activeIndex === 4 ? "block" : "none"}`,
                      }}
                    >
                      <div className="date">Last Updated: May 19, 2023</div>
                      <p>
                        Welcome to Open9, owned and operated by Ozone Networks,
                        Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These
                        Terms of Service (“Terms”) govern your access to and use
                        of the Open9 website(s), our APIs, mobile applications
                        (“App”), and any live support, software, tools,
                        features, or functionalities provided on or in
                        connection with our services; including without
                        limitation using our services to view, explore, help
                        display and create NFTs, and using our tools, at your
                        own discretion, to connect directly with others to mint,
                        purchase, sell, or transfer NFTs on public blockchains
                        (collectively, the “Service”). “NFT” in these Terms
                        means a non-fungible token or similar digital item
                        implemented on a blockchain (such as the Ethereum
                        blockchain), which uses smart contracts to link to or
                        otherwise be associated with certain content or data.
                      </p>
                      <p>
                        For purposes of these Terms, “user”, “you”, and “your”
                        mean you as the user of the Service. If you use the
                        Service on behalf of a company or other entity then
                        “you” includes you and that entity, and you represent
                        and warrant that (a) you are an authorized
                        representative of the entity with the authority to bind
                        the entity to these Terms, and (b) you agree to these
                        Terms on the entity’s behalf.
                      </p>
                      <p>
                        PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY
                        CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL
                        RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A
                        MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER
                        WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES
                        BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION
                        RATHER THAN BY A JUDGE OR JURY IN COURT.
                      </p>
                      <p>
                        BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE,
                        YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE
                        TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT
                        AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE
                        SERVICE.
                      </p>
                    </div>
                    <div
                      className="content-inner"
                      style={{
                        display: `${activeIndex === 5 ? "block" : "none"}`,
                      }}
                    >
                      <div className="date">Last Updated: May 19, 2023</div>
                      <p>
                        Welcome to Open9, owned and operated by Ozone Networks,
                        Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These
                        Terms of Service (“Terms”) govern your access to and use
                        of the Open9 website(s), our APIs, mobile applications
                        (“App”), and any live support, software, tools,
                        features, or functionalities provided on or in
                        connection with our services; including without
                        limitation using our services to view, explore, help
                        display and create NFTs, and using our tools, at your
                        own discretion, to connect directly with others to mint,
                        purchase, sell, or transfer NFTs on public blockchains
                        (collectively, the “Service”). “NFT” in these Terms
                        means a non-fungible token or similar digital item
                        implemented on a blockchain (such as the Ethereum
                        blockchain), which uses smart contracts to link to or
                        otherwise be associated with certain content or data.
                      </p>
                      <p>
                        For purposes of these Terms, “user”, “you”, and “your”
                        mean you as the user of the Service. If you use the
                        Service on behalf of a company or other entity then
                        “you” includes you and that entity, and you represent
                        and warrant that (a) you are an authorized
                        representative of the entity with the authority to bind
                        the entity to these Terms, and (b) you agree to these
                        Terms on the entity’s behalf.
                      </p>
                      <p>
                        PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY
                        CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL
                        RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A
                        MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER
                        WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES
                        BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION
                        RATHER THAN BY A JUDGE OR JURY IN COURT.
                      </p>
                      <p>
                        BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE,
                        YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE
                        TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT
                        AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE
                        SERVICE.
                      </p>
                    </div>
                    <div
                      className="content-inner"
                      style={{
                        display: `${activeIndex === 6 ? "block" : "none"}`,
                      }}
                    >
                      <div className="date">Last Updated: May 19, 2023</div>
                      <p>
                        Welcome to Open9, owned and operated by Ozone Networks,
                        Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These
                        Terms of Service (“Terms”) govern your access to and use
                        of the Open9 website(s), our APIs, mobile applications
                        (“App”), and any live support, software, tools,
                        features, or functionalities provided on or in
                        connection with our services; including without
                        limitation using our services to view, explore, help
                        display and create NFTs, and using our tools, at your
                        own discretion, to connect directly with others to mint,
                        purchase, sell, or transfer NFTs on public blockchains
                        (collectively, the “Service”). “NFT” in these Terms
                        means a non-fungible token or similar digital item
                        implemented on a blockchain (such as the Ethereum
                        blockchain), which uses smart contracts to link to or
                        otherwise be associated with certain content or data.
                      </p>
                      <p>
                        For purposes of these Terms, “user”, “you”, and “your”
                        mean you as the user of the Service. If you use the
                        Service on behalf of a company or other entity then
                        “you” includes you and that entity, and you represent
                        and warrant that (a) you are an authorized
                        representative of the entity with the authority to bind
                        the entity to these Terms, and (b) you agree to these
                        Terms on the entity’s behalf.
                      </p>
                      <p>
                        PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY
                        CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL
                        RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A
                        MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER
                        WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES
                        BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION
                        RATHER THAN BY A JUDGE OR JURY IN COURT.
                      </p>
                      <p>
                        BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE,
                        YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE
                        TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT
                        AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE
                        SERVICE.
                      </p>
                    </div>
                    <div
                      className="content-inner"
                      style={{
                        display: `${activeIndex === 7 ? "block" : "none"}`,
                      }}
                    >
                      <div className="date">Last Updated: May 19, 2023</div>
                      <p>
                        Welcome to Open9, owned and operated by Ozone Networks,
                        Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These
                        Terms of Service (“Terms”) govern your access to and use
                        of the Open9 website(s), our APIs, mobile applications
                        (“App”), and any live support, software, tools,
                        features, or functionalities provided on or in
                        connection with our services; including without
                        limitation using our services to view, explore, help
                        display and create NFTs, and using our tools, at your
                        own discretion, to connect directly with others to mint,
                        purchase, sell, or transfer NFTs on public blockchains
                        (collectively, the “Service”). “NFT” in these Terms
                        means a non-fungible token or similar digital item
                        implemented on a blockchain (such as the Ethereum
                        blockchain), which uses smart contracts to link to or
                        otherwise be associated with certain content or data.
                      </p>
                      <p>
                        For purposes of these Terms, “user”, “you”, and “your”
                        mean you as the user of the Service. If you use the
                        Service on behalf of a company or other entity then
                        “you” includes you and that entity, and you represent
                        and warrant that (a) you are an authorized
                        representative of the entity with the authority to bind
                        the entity to these Terms, and (b) you agree to these
                        Terms on the entity’s behalf.
                      </p>
                      <p>
                        PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY
                        CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL
                        RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A
                        MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER
                        WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES
                        BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION
                        RATHER THAN BY A JUDGE OR JURY IN COURT.
                      </p>
                      <p>
                        BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE,
                        YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE
                        TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT
                        AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE
                        SERVICE.
                      </p>
                    </div>
                    <div
                      className="content-inner"
                      style={{
                        display: `${activeIndex === 8 ? "block" : "none"}`,
                      }}
                    >
                      <div className="date">Last Updated: May 19, 2023</div>
                      <p>
                        Welcome to Open9, owned and operated by Ozone Networks,
                        Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These
                        Terms of Service (“Terms”) govern your access to and use
                        of the Open9 website(s), our APIs, mobile applications
                        (“App”), and any live support, software, tools,
                        features, or functionalities provided on or in
                        connection with our services; including without
                        limitation using our services to view, explore, help
                        display and create NFTs, and using our tools, at your
                        own discretion, to connect directly with others to mint,
                        purchase, sell, or transfer NFTs on public blockchains
                        (collectively, the “Service”). “NFT” in these Terms
                        means a non-fungible token or similar digital item
                        implemented on a blockchain (such as the Ethereum
                        blockchain), which uses smart contracts to link to or
                        otherwise be associated with certain content or data.
                      </p>
                      <p>
                        For purposes of these Terms, “user”, “you”, and “your”
                        mean you as the user of the Service. If you use the
                        Service on behalf of a company or other entity then
                        “you” includes you and that entity, and you represent
                        and warrant that (a) you are an authorized
                        representative of the entity with the authority to bind
                        the entity to these Terms, and (b) you agree to these
                        Terms on the entity’s behalf.
                      </p>
                      <p>
                        PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY
                        CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL
                        RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A
                        MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER
                        WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES
                        BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION
                        RATHER THAN BY A JUDGE OR JURY IN COURT.
                      </p>
                      <p>
                        BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE,
                        YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE
                        TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT
                        AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE
                        SERVICE.
                      </p>
                    </div>
                    <div
                      className="content-inner"
                      style={{
                        display: `${activeIndex === 9 ? "block" : "none"}`,
                      }}
                    >
                      <div className="date">Last Updated: May 19, 2023</div>
                      <p>
                        Welcome to Open9, owned and operated by Ozone Networks,
                        Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These
                        Terms of Service (“Terms”) govern your access to and use
                        of the Open9 website(s), our APIs, mobile applications
                        (“App”), and any live support, software, tools,
                        features, or functionalities provided on or in
                        connection with our services; including without
                        limitation using our services to view, explore, help
                        display and create NFTs, and using our tools, at your
                        own discretion, to connect directly with others to mint,
                        purchase, sell, or transfer NFTs on public blockchains
                        (collectively, the “Service”). “NFT” in these Terms
                        means a non-fungible token or similar digital item
                        implemented on a blockchain (such as the Ethereum
                        blockchain), which uses smart contracts to link to or
                        otherwise be associated with certain content or data.
                      </p>
                      <p>
                        For purposes of these Terms, “user”, “you”, and “your”
                        mean you as the user of the Service. If you use the
                        Service on behalf of a company or other entity then
                        “you” includes you and that entity, and you represent
                        and warrant that (a) you are an authorized
                        representative of the entity with the authority to bind
                        the entity to these Terms, and (b) you agree to these
                        Terms on the entity’s behalf.
                      </p>
                      <p>
                        PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY
                        CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL
                        RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A
                        MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER
                        WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES
                        BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION
                        RATHER THAN BY A JUDGE OR JURY IN COURT.
                      </p>
                      <p>
                        BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE,
                        YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE
                        TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT
                        AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE
                        SERVICE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

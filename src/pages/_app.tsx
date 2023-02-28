import type { AppProps } from "next/app";
import "@app/styles/app.scss";

import MetaData, { getMetaImageUrl } from "@app/components/MetaData";
import config from "@app/config";
import images from "@app/constants/images";
import { dmSans } from "@app/fonts/dm-sans";
import React from "react";

const suffixTitle = "Evan McGrane || Senior Software Engineer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { siteUrl, title, description, image } = pageProps;
  const newTitle = title ? `${title} - ${suffixTitle}` : suffixTitle;
  const newDescription =
    description ||
    "Web3 Engineer - Full Stack Developer | Typescipt Developer | Nodejs Developer | Frontend Developer | Backend Developer";
  const newSiteUrl = "https://evan-mcgrane-portfolio.vercel.app/";
  let newImage = image || images.homePage;
  newImage.src = getMetaImageUrl(newSiteUrl, newImage.src);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-dmSans: ${dmSans.style.fontFamily};
        }
      `}</style>
      <MetaData
        siteUrl={newSiteUrl}
        image={newImage}
        title={newTitle}
        description={newDescription}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

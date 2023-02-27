import React, { useState } from "react";
import Image from "next/image";

import Button from "public/svgs/button.svg";
import WaveA from "public/svgs/astronaut-wave-A.svg";
import WaveB from "public/svgs/astronaut-wave-B.svg";
import Battery from "public/svgs/battery.svg";
import Satellite from "public/svgs/satellite.svg";
import Rocket from "public/svgs/rocket.svg";
import LearnMoreButton from "../../common/LearnMore";

import ReactCardFlip from "react-card-flip";
import { HiOutlineXCircle } from "react-icons/hi";
import { Container, Title, Description } from "../../featureCard";

interface CrossButtonProps {
  onClick: () => void;
}

const CrossButton = ({ onClick }: CrossButtonProps) => {
  return (
    <span className="absolute cursor-pointer top-3 right-4" onClick={onClick}>
      <HiOutlineXCircle className="w-8 h-8 text-primary" />
    </span>
  );
};

const Cards = {
  tradeFreely: "trade_freely",
  ownMoney: "ownMoney",
  freeTransfer: "freeTransfer",
  ultraSecure: "ultraSecure",
  atomic: "atomic",
};

function Section2() {
  const [flipped, setFlipped] = useState({
    [Cards.freeTransfer]: false,
    [Cards.ownMoney]: false,
    [Cards.tradeFreely]: false,
    [Cards.ultraSecure]: false,
    [Cards.atomic]: false,
  });

  const flip = (key: string, value: boolean) => setFlipped((f) => ({ ...f, [key]: value }));

  return (
    <div id="features" className="flex flex-col items-center pt-16 lg:py-16">
      <h2 className="max-w-[20ch] text-center px-4 lg:px-0 text-3xl lg:text-5xl font-extrabold tracking-wide">
        The whole multichain at your fingertips
      </h2>
      <div className="grid gap-4 my-12 lg:my-16 md:grid-cols-2 lg:grid-cols-[308px_324px_416px] lg:w-auto">
        {/* One click, zero gas trades */}
        <Container className="flex flex-col items-center justify-end gap-5 px-8 pt-8 md:order-1 lg:order-none">
          <Title className="text-3xl text-center">One click, zero gas trades</Title>
          <Description className="max-w-xs text-center">
            Trade across blockchains in one click and at zero network fees.
          </Description>
          <Button />
        </Container>

        {/* Trade freely */}
        <ReactCardFlip
          containerClassName="lg:col-span-2 md:row-span-2 lg:row-span-1 md:order-2 lg:order-none"
          isFlipped={flipped.trade_freely}
          flipDirection="vertical"
        >
          <Container className="flex flex-col relative h-[513px] md:h-full bg-[url('/svgs/catalog-wide-path-mobile.svg')] lg:bg-[url('/svgs/catalog-wide-path-web.svg')] bg-no-repeat bg-contain bg-bottom lg:bg-right">
            <div className="flex flex-col items-center mt-20 lg:items-start lg:mt-0 lg:absolute lg:top-20 lg:left-16">
              <Title className="max-w-[150px] text-center lg:text-left text-3xl lg:text-5xl">
                Trade freely
              </Title>
              <LearnMoreButton onClick={() => flip(Cards.tradeFreely, true)} />
            </div>
          </Container>
          <Container className="flex flex-col relative h-[513px] md:h-full justify-center">
            <CrossButton onClick={() => flip(Cards.tradeFreely, false)} />
            <div className="flex flex-col items-start gap-4 mx-8 mt-20 lg:mt-0">
              <Title className="w-full text-3xl text-center lg:text-left">Trade freely</Title>
              <Description className="text-center lg:text-left">
                Normally, to pay for your transactions in DeFi you have to hold the blockchain’s
                native token, for example Bitcoin or Ethereum. <br /> <br /> Not at Catalog. Here,
                you can trade freely across the multichain. Holding native tokens not required.
              </Description>
            </div>
          </Container>
        </ReactCardFlip>

        {/* Own your coins */}
        <ReactCardFlip
          containerClassName="lg:col-span-2 lg:row-span-2 md:row-span-2 md:order-4 lg:order-none"
          isFlipped={flipped.ownMoney}
          flipDirection="horizontal"
        >
          <Container className="relative h-[545px] lg:h-[445px]">
            <div className="w-full h-full absolute lg:translate-x-9 translate-y-4 bg-[url('/svgs/coins.svg')] bg-no-repeat bg-contain bg-bottom lg:bg-right" />
            <div className="absolute flex flex-col items-center mt-10 lg:items-start lg:ml-16">
              <Title className="text-5xl text-center lg:w-80 lg:text-left">Own your coins</Title>
              <LearnMoreButton onClick={() => flip(Cards.ownMoney, true)} />
            </div>
          </Container>
          <Container className="flex items-center justify-center p-8 lg:p-16 h-[545px] lg:h-[445px]">
            <CrossButton onClick={() => flip(Cards.ownMoney, false)} />
            <div className="flex flex-col items-start gap-4">
              <Title className="w-full text-3xl text-center lg:text-left">Own your coins</Title>
              <Description className="text-center lg:text-left">
                Using Catalog, you will always have access to your funds, at any time. Unlike at
                centralized exchanges such as Coinbase, Binance and Robinhood, with Catalog you
                retain complete ownership over your funds.
              </Description>
            </div>
          </Container>
        </ReactCardFlip>

        {/* Passive yield */}
        <Container className="flex flex-col items-center justify-center gap-4 p-11 lg:p-14 md:order-3 lg:order-none">
          <Title className="text-3xl">Passive yield</Title>
          <Description className="text-center">
            Earn interest on selected assets you hold in your Catalog account.
          </Description>
        </Container>

        {/* ultra secure */}
        <ReactCardFlip
          containerClassName="lg:row-span-2 md:order-6 md:row-span-2 lg:order-none"
          isFlipped={flipped.ultraSecure}
          flipDirection="horizontal"
        >
          <Container className="flex h-[445px] md:h-full items-center justify-center bg-[url('/svgs/hexagon-bg.svg')] bg-no-repeat bg-origin-border bg-center bg-cover">
            <div className="flex flex-col items-center mt-4">
              <Title className="w-56 text-5xl text-center lg:h-auto">Ultra Secure</Title>
              <LearnMoreButton onClick={() => flip(Cards.ultraSecure, true)} />
            </div>
          </Container>

          <Container className="flex items-center justify-center h-[445px] md:h-full">
            <CrossButton onClick={() => flip(Cards.ultraSecure, false)} />
            <div className="flex flex-col items-center gap-4 mt-4 px-14">
              <Title className="w-full text-3xl text-center lg:text-left ">Ultra Secure</Title>
              <Description className="text-center lg:text-left">
                Catalog is built on Ren, the most secure inter-blockchain protocol in DeFi. Since
                its inception, Ren has processed over $10 B in volume and has a perfect security
                track record.
              </Description>
            </div>
          </Container>
        </ReactCardFlip>

        {/* free transfers */}
        <ReactCardFlip
          containerClassName="lg:col-span-2 md:order-5 lg:order-none"
          isFlipped={flipped.freeTransfer}
          flipDirection="vertical"
        >
          <Container className="relative flex flex-col justify-between lg:h-52 h-[342px] lg:flex-row lg:p-6">
            <div className="flex flex-col items-center justify-center mt-16 lg:mt-0 lg:absolute lg:left-64 lg:top-12 ">
              <Title className="text-3xl text-center lg:w-40">Free transfers</Title>
              <LearnMoreButton onClick={() => flip(Cards.freeTransfer, true)} />
            </div>
            <div className="flex justify-between flex-1 p-5 lg:p-0">
              <WaveA className="w-36 lg:w-48" />
              <WaveB className="w-36 lg:w-48" />
            </div>
          </Container>
          <Container className="relative flex flex-col justify-between lg:h-52 h-[342px] lg:flex-row lg:p-6">
            <CrossButton onClick={() => flip(Cards.freeTransfer, false)} />
            <div className="flex flex-col items-start justify-center flex-1 gap-4 px-4">
              <Title className="w-full text-3xl text-center lg:text-left ">Free transfers</Title>
              <Description className="text-center lg:text-left">
                Catalog users can send and receive assets to each other from their Catalog accounts
                at no cost.
              </Description>
            </div>
          </Container>
        </ReactCardFlip>

        {/* atomic transactions */}
        <ReactCardFlip
          containerClassName="lg:col-span-2 md:order-9 lg:order-none"
          isFlipped={flipped.atomic}
          flipDirection="vertical"
        >
          <Container className="flex flex-col items-center gap-10 p-6 lg:gap-0 h-[570px] lg:h-full lg:flex-row lg:justify-between">
            <div className="flex flex-col items-center justify-center mt-5 lg:items-start lg:ml-10">
              <Title className="mb-4 text-4xl text-center md:text-5xl lg:w-96 lg:text-left lg:mb-0">
                Introducing <span className="text-primary neon"> Atomic </span> Transactions
              </Title>
              <LearnMoreButton onClick={() => flip(Cards.atomic, true)} />
            </div>
            <Battery />
          </Container>
          <Container className="flex flex-col items-center gap-10 p-6 lg:gap-0 h-[570px] lg:h-full lg:flex-row lg:justify-between">
            <CrossButton onClick={() => flip(Cards.atomic, false)} />
            <div className="flex flex-col items-center justify-center flex-1 gap-4 mx-10 mt-5 lg:items-start">
              <Title className="mb-4 text-3xl text-center lg:text-left lg:mb-0">
                Introducing Atomic Transactions
              </Title>
              <Description className="text-center lg:text-left">
                Unlike with other cross-chain exchanges, at Catalog you never end up with a
                half-completed trade. Trades on Catalog by design always happen completely and near
                instantly.
              </Description>
            </div>
          </Container>
        </ReactCardFlip>

        {/* from avax to zcash */}
        <Container className="flex flex-col items-center justify-center gap-4 p-8 lg:p-14 md:order-7 lg:order-none">
          <Title className="text-3xl w-52">
            From{" "}
            <span className="whitespace-nowrap">
              Avax <Image src="/images/avax.png" alt="avax" width={24} height={24} />{" "}
            </span>{" "}
            to{" "}
            <span className="whitespace-nowrap">
              Zcash <Image src="/images/zcash.png" alt="zcash" width={24} height={24} />{" "}
            </span>
          </Title>
          <Description className="text-center">
            Our Boundless Liquidity mechanism brings all the money in DeFi under one umbrella,
            allowing you to quickly and easily trade for any asset you want.
          </Description>
        </Container>

        {/* crypto made easy */}
        <Container className="relative flex flex-col items-center justify-between p-4 md:order-8 lg:flex-row lg:col-span-3 lg:p-8 lg:order-none">
          <div className="flex flex-col items-center justify-center gap-4 mt-12 lg:mt-0 lg:absolute lg:left-44 lg:top-12 ">
            <Title className="text-3xl text-center w-52 lg:w-auto">Crypto, made easy</Title>
            <Description className="lg:w-[712px] text-center">
              Sending assets to other blockchains is expensive, slow and stressful. Catalog changes
              this by taking care of all the complexities for you. All you have to do is place your
              order.
            </Description>
          </div>
          <div className="flex justify-between flex-1 w-full p-5 lg:p-0">
            <Satellite className="w-24 lg:w-32" />
            <Rocket className="w-24 lg:w-32" />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Section2;

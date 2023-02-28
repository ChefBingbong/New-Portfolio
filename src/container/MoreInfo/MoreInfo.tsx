import React, { useState } from "react";
import Image from "next/image";

import Button from "public/svgs/button.svg";
import WaveA from "public/svgs/astronaut-wave-A.svg";
import WaveB from "public/svgs/astronaut-wave-B.svg";
import Battery from "public/svgs/battery.svg";
import Satellite from "public/svgs/satellite.svg";
import Rocket from "public/svgs/rocket.svg";
import LearnMoreButton from "./LearnMoreButton";

import ReactCardFlip from "react-card-flip";
import { HiOutlineXCircle } from "react-icons/hi";
import { Container, Title, Description } from "./featureCard";
import { AppWrap, MotionWrap } from "@app/wrapper";
import MetaData from '@app/components/MetaData';
import { getHeaderLink } from '@app/utils';


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
    <div id="features" className="flex flex-col items-center pt-8">
      <h2 className="max-w-[20ch] text-center px-4 lg:px-0 text-3xl lg:text-5xl font-extrabold tracking-wide">
        Some Areas In Defi I've been <span className="text-primary">Researching</span>
      </h2>
      <div className="grid gap-8 my-12 lg:my-16 md:grid-cols-2 lg:grid-cols-[308px_324px_416px] lg:w-auto">
        {/* One click, zero gas trades */}

        {/* Own your coins */}
        <ReactCardFlip
          containerClassName="lg:col-span-2 lg:row-span-2 md:row-span-2 md:order-4 lg:order-none"
          isFlipped={flipped.ownMoney}
          flipDirection="horizontal"
        >
          <Container className="relative h-[545px] lg:h-[445px]">
            <div className="w-full h-full absolute lg:translate-x-9 translate-y-4 bg-[url('/svgs/coins.svg')] bg-no-repeat bg-contain bg-bottom lg:bg-right" />
            <div className="absolute flex flex-col items-center mt-10 lg:items-start lg:ml-16">
              <Title className="text-4xl text-center lg:w-80 lg:text-left">
                Developments in Crosschain Defi
              </Title>
              <LearnMoreButton onClick={() => flip(Cards.ownMoney, true)} />
            </div>
          </Container>
          <Container className="flex items-center justify-center p-8 lg:p-16 h-[545px] lg:h-[445px]">
            <CrossButton onClick={() => flip(Cards.ownMoney, false)} />
            <div className="flex flex-col items-start gap-4">
              <Title className="w-full text-3xl text-center lg:text-left">
                New Developments in Cross-chain
              </Title>
              <Description className="text-center lg:text-left">
                One conecpt I have been exploring is the a development in crosschain Defi where
                users can execute trades or smart contract calls on one blockchain from an entirely
                different one
                <br />
                <br />
                This is enabled through the concept of cryptographic hashing and digital signatures.
                By extracting any contract call into its raw bytecode we can sign this data through
                the use of Eliptic curve cryptography. In order to be able to execute blockchain
                agnostic trades we can compare this encode into this signature the chain it is to be
                executed on (domain seperator) Then on the destination chain we verify the signature
                by comparing hashes.
                <br />
                <br />
                This revolution allows for example, a user to execute a smart contract call on
                Ethereum from Polygon. See example on my githib here
              </Description>
            </div>
          </Container>
        </ReactCardFlip>

        {/* Passive yield */}
        <Container className="flex flex-col items-center justify-center gap-4 p-11 lg:p-14 md:order-3 lg:order-none">
          <Title className="text-3xl">Defi Math</Title>
          <Description className="text-center">
            Im always learning about the financial algorithms behind thing slike AMM's,
            automated staking rewards/yield, and POS consensus mechanisms
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
              <Title className="w-[300px] text-3xl text-center lg:h-auto text-white">Ultra Fast cross-chain Transfers</Title>
              <LearnMoreButton onClick={() => flip(Cards.ultraSecure, true)} className={"border-white text-white"}/>
            </div>
          </Container>

          <Container className="flex items-center justify-center h-[445px] md:h-full">
            <CrossButton onClick={() => flip(Cards.ultraSecure, false)} />
            <div className="flex flex-col items-center gap-2 px-4">
              <Title className="w-full text-lg text-center lg:text-left ">Cross chain transfers are slow</Title>
              <Description className="text-center lg:text-left text-[15px]">
                bridging takes time. The concept of a lender
                fixes all of this. With a lender one can execute a bridge on source chain. when this bridge is confirmed we know the user
                has already paid the assets they are moving.
                <br/><br/>As this is confirmed we can use a lender smart contract with collateroal to execute the trade on the destination chain 
                immediately. 
                <br/><br/>Then when the bridge is complete the users funds go back to pay the lender. This makes doing cross chain trading super fast.
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
            <div className="flex flex-col items-center justify-center mt-16 lg:mt-0 lg:absolute lg:left-[185px] lg:top-12 ">
              <Title className="text-3xl text-center lg:w-72 ">Ever Heard Of Free Transfers?</Title>
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
              <Title className="w-full text-3xl text-center lg:text-left ">Gass-less Trades</Title>
              <Description className="text-center lg:text-left text-[15px]">
                Another concept that is made possible through digital signatures is the ability to
                allow your app to off Gas-less trades for users. When a user signs some transaction
                metadata, the signature acts as proof that they give permission to execute the
                trade. Then some ADMIN private key can execute this trade on behalf of the user and
                pay the gass tokens for them.
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
                Cross-chain <span className="text-primary neon">Limit Order </span> Transactions
              </Title>
              <LearnMoreButton onClick={() => flip(Cards.atomic, true)} />
            </div>
            <Battery />
          </Container>
          <Container className="flex flex-col items-center gap-10 p-6 lg:gap-0 h-[570px] lg:h-full lg:flex-row lg:justify-between">
            <CrossButton onClick={() => flip(Cards.atomic, false)} />
            <div className="flex flex-col items-center justify-center flex-1 gap-4 mx-10 mt-5 lg:items-start">
              <Title className="mb-4 text-3xl text-center lg:text-left lg:mb-0">
                Cross-chain AMM Limit Orders
              </Title>
              <Description className="text-center lg:text-left">
                One thing that AMM's cannot do well is to execute Limit orders. This is because
                smart contracts cannot listen to external off-chain data sources in order to know
                when to execute a trade. Also if they could how would the gas tokens be paid.
                <br />
                <br />
                By using hats called a forwarder smart contract (smilar to above) a user can again,
                sign their transaction Metadata before hand with all of the execution criteria
                defined.
                <br />
                <br />
                We can store this metadata in an off-chain database with a constant automated
                backend worker scanning the blockchain to checking if the ececution criteria has
                been met. If so the trade can be autonomously executed and the gas tokens paid by
                the ADMIN private key which has the permission to make the trade on the users behlaf
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
            Using all of these techniques one could for example, bridge native Bitcoin to Avalanche using a bridging service like RenJs
            and swap wrapped BTC for AVAX. The same holds true for any asset on any chain
          </Description>
        </Container>
        <Container className="flex flex-col items-center justify-end gap-5 px-8 pt-8 md:order-1 lg:order-none ">
          <Title className="text-3xl text-center">Im Always Hitting Commit</Title>
          <Description className="max-w-lg text-[15px] text-center">
            These are just some things i like researching. Im always putting my new knowledge into practice by building cool applications
          </Description>
          <Button />
        </Container>

        {/* Trade freely */}
        <ReactCardFlip
          containerClassName="lg:col-span-2 md:row-span-2 lg:row-span-1 md:order-2 lg:order-none"
          isFlipped={flipped.trade_freely}
          flipDirection="vertical"
        >
          <Container className="flex flex-col relative h-[513px] md:h-full bg-[url('/svgs/catalog-wide-path-mobile.svg')] lg:bg-[url('/svgs/catalog-wide-path-web.svg')] bg-no-repeat bg-contain bg-bottom lg:bg-right bg-white">
            <div className="flex flex-col items-center mt-20 lg:items-start lg:mt-0 lg:absolute lg:top-20 lg:left-16">
              <Title className="max-w-[350px] text-center lg:text-left text-3xl lg:text-4xl">
                I Love Building Defi Applications
              </Title>
              <LearnMoreButton onClick={() => flip(Cards.tradeFreely, true)} />
            </div>
          </Container>
          <Container className="flex flex-col relative h-[513px] md:h-full justify-center">
            <CrossButton onClick={() => flip(Cards.tradeFreely, false)} />
            <div className="flex flex-col items-start gap-4 mx-8 mt-20 lg:mt-0">
              <Title className="w-full text-3xl text-center lg:text-left">
                Defi, Defi, Defi...
              </Title>
              <Description className="text-center lg:text-left">
                I have always been facinated by decentralized finance decentralised nature of
                blockchain can allow for the creation of trustless financial applications.
                <br />
                <br />
                I am always learning about new developments in Defi around ever growing protocols
                around concepts such as AMM's and decentralised lending.
                <br />
                <br />
                In my spare time i am always building and learning about the underlying protocols,
                secrity frameworks and financial mathematics that power some of the best Defi
                applications that exist today,
              </Description>
            </div>
          </Container>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default AppWrap(MotionWrap(Section2), "skills", "bg-secondary");
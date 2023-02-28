export const experiences = [
  {
    year: 2022,
    works: [
      {
        name: "Mid Level Defi Engineer - Full Stack",
        company: "Ren Labs",
        desc: `
          <div>Frontend / smart contract engineer on <strong>Catalog</strong>, a crosschain Dex hosted by Ren Labs.</div> 
          <div><strong>Key developer</strong> in building The Catalog User interface using Next.js, Typescript, Firebase, PostgreSQL Material UI, tailwind, styled-components & more.</div>
          <div>Work on the <strong>smart contract & backend team</strong> building robust middleware REST API services to forward blockchain data to our frontend. Node.js, AWS, Express, GraphQL, Prisma & more</div>
        `,
      },
    ],
  },
  {
    year: 2020,
    works: [
      {
        name: "Blockchain Mentor / Developer Advocate",
        company: "Moralis Blockchain Academy",
        desc: `
          <div>Developer advocate & student mentor at <strong>Moralis Academy</strong> The worlds largest and most sucessful web3 educational platform</strong>.</div> 
          <div>I teach students the basics of <strong>Javascript, & Solidity</strong> by reviewing their code, doing 1-on-1 live coding sessions and more.</div>
          <div>I also help to create new academy courses and ideas for weekly coding challenges aswell as making video content on said matrial</div>

        `,
      },
      // {
      //   name: "Atatus Product",
      //   company: "NamLabs Technologies Private Ltd,",
      //   desc: "Developed full Layout module for Atatus documentation page using Jekyll. Implemented availability synthetic monitor.it includes web monitors, DNS monitoring, SSL monitoring, TCP monitoring, UDP monitoring, CronJob monitor, scheduled task monitoring, heartbeat monitoring and API monitoring.",
      // },
      // {
      //   name: "ReplayBird Product",
      //   company: "NamLabs Technologies Private Ltd,",
      //   desc: "Developed Full website(ReplayBird) for end to end individually implemention using Gatsby Framework.",
      // },
      // {
      //   name: "LeadMine Product",
      //   company: "NamLabs Technologies Private Ltd,",
      //   desc: "Implemented to store credit/debit card details information powered by stripe and also developed subscription page.",
      // },
      // {
      //   name: "UI Inspector Product",
      //   company: "NamLabs Technologies Private Ltd,",
      //   desc: "Worked on most of the feature for this product development both frontend and backend. Developed Dashboard Page, Testcase Page, Plan Page and application page in both front end and back end.(Angular JS and Node JS)",
      // },
    ],
  },
  {
    year: 2019,
    works: [
      {
        name: "Blockchain Protocol Researcher",
        company: "Dublin City University (School Of Computing)",
        desc: `
          <div>I worked as a <strong>protocol researcher</strong> on the development of a Blockchain based RTD platform where DLT (Distributed Ledger Technology) is implemented with traditional academic frameworks </div>
          <div>Assisted Leading the Research of underlying 
blockchain Technologies, <strong>POS, Layer2-Scaling, ZKP’s (ZK-SNARKS), Consensus, / Governance protocols</strong> and more</div>
<div> Developed a robust 
<strong>theoretical governance model & economic framework</strong> to serve as the basis for the platform’s rules</div>
        `,
      },
    ],
  },
  {
    year: 2018,
    works: [
      {
        name: "ComputationFluid Dynamics Research Intern",
        company: "Dublin City University (School Of Physics)",
        desc: `
          <div>My role was to research and assist the <strong>development of in house computational techniques</strong> that can be used to no linear solve partial differential equations which describe the physics of complex dynamical systems mainly simple fluid slow. </div>
          <div>One such program that i wrote was a <strong>higher order solver for the shallow water equations in 3D using the Finite volume method.</strong> As part of my work i also wrote a finite many finite difference and finite volume solvers for various equations as well as performing detailed stability and order of accuracy analysis for said systems. </div>
<div> One area i focussed on was <strong>Von neuman stabilty analysis and spectral analyisis</strong> to determine regions of stable behaviour for many PDEs and to see for what values of input parameters such as the courant (CFL) number caused erratic and unstable behaviour. </div>
        `,
      },
    ],
  },
] as const;

export const skills = [
  "javascript",
  "typescript",
  "sass",
  "nodejs",
  "express",
  "mongodb",
  "mysql",
  "redis",
  "react",
  "vue",
  "nextjs",
  "svelte",
  "gatsby",
  "googlecloud",
  "heroku",
  "docker",
  "python",
] as const;

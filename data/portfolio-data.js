// data/portfolio-data.js - Complete dynamic data for the portfolio

const portfolioData = {
  profile: {
    name: "Daulat Hussain",
    title: "Web3 Full Stack Developer",
    tagline: "Building the Decentralized Future",
    profileImage: "/profile.gif",
    location: "San Francisco, CA",
    email: "theblockchaincoders@gmail.com",
    phone: "+1 (555) 123-4567",
    linkedin: "https://www.youtube.com/@daulathussain",
    github: "https://github.com/daulathussain",
    twitter: "https://x.com/TheBCoders",
    discord: "AlexDev#1234",
  },

  hero: {
    title: "Crafting Tomorrow's Web3 Solutions",
    subtitle:
      "Full-stack blockchain developer specializing in DeFi, NFTs, and decentralized applications",
    cta1: "View Projects",
    cta2: "Contact Me",
    stats: [
      { label: "Projects Completed", value: "25+" },
      { label: "Smart Contracts", value: "50+" },
      { label: "DApps Deployed", value: "15+" },
      { label: "TVL Managed", value: "$2M+" },
    ],
  },

  about: {
    title: "About Me",
    description:
      "I'm a passionate Web3 developer with 4+ years of experience building cutting-edge blockchain applications. My expertise spans across smart contract development, DApp creation, and blockchain infrastructure. I believe in creating solutions that are not only innovative but also accessible and user-friendly.",
    skills: [
      "Solidity & Smart Contract Development",
      "DApp Development (React, Next.js)",
      "DeFi Protocol Design",
      "NFT Marketplace Development",
    ],
    experience: [
      {
        company: "DeFi Labs",
        position: "Senior Blockchain Developer",
        period: "2022 - Present",
        description:
          "Lead development of DeFi protocols handling $500M+ in TVL",
      },
      {
        company: "NFT Studios",
        position: "Web3 Developer",
        period: "2020 - 2022",
        description:
          "Developed multiple NFT marketplaces and P2E gaming platforms",
      },
      {
        company: "Blockchain Startup",
        position: "Full Stack Developer",
        period: "2019 - 2020",
        description:
          "Built enterprise blockchain solutions for Fortune 500 clients",
      },
    ],
  },

  projects: [
    {
      id: 1,
      title: "NFT Marketplace",
      category: "NFT",
      description:
        "A decentralized NFT marketplace that allows users to mint, buy, sell, and trade unique digital assets seamlessly. Built with blockchain technology, it ensures secure transactions, transparent ownership, and full user control without intermediaries",
      image: "/projects/1.jpeg",
      technologies: ["Solidity", "React", "Web3.js", "Hardhat", "OpenZeppelin"],
      features: [
        "Multi-chain DEX with 0.05% trading fees",
        "Liquid staking rewards (APY up to 15%)",
        "Cross-chain bridge integration",
        "Advanced yield farming strategies",
        "Flash loan resistance",
      ],
      links: {
        youtube: "https://www.youtube.com/watch?v=Ucr_gXEXD7A", // Replace with actual YouTube video
        demo: "https://www.theblockchaincoders.com/",
        docs: "https://github.com/daulathussain/Solidity-Interview/blob/main/Solidity/NFT-MARKETPLACE.md",
      },
      metrics: {
        tvl: "$2.5M",
        volume: "$50M+",
        users: "10k+",
      },
    },
    {
      id: 2,
      title: "Supply Chain Management Dapp",
      category: "DeFi",
      description:
        "Blockchain Supply chain management plays a critical role in ensuring efficient operations and maintaining consumer trust. This project focuses on developing and deploying a decentralized application (DApp) powered by blockchain technology to streamline supply chain management processes.",
      image: "/projects/2.jpeg",
      technologies: ["Solidity", "Three.js", "IPFS", "Next.js", "Ethers.js"],
      features: [
        "3D virtual galleries",
        "Real-time NFT minting",
        "Royalty distribution system",
        "Social interaction features",
        "VR compatibility",
      ],
      links: {
        youtube: "https://youtu.be/cxKV3y3ZSnQ?si=09VE42PhelZBplM0", // Replace with actual YouTube video
        demo: "https://www.theblockchaincoders.com/",
        docs: "https://github.com/daulathussain/Solidity-Interview/blob/main/Solidity/NFT-MARKETPLACE.md",
      },
      metrics: {
        nfts: "5k+",
        volume: "100 ETH",
        artists: "200+",
      },
    },
    {
      id: 3,
      title: "Blockchain Crowdfunding DApp",
      category: "DeFi",
      description:
        "Revolutionize the way projects and ideas are funded with our blockchain crowdfunding DApp. This innovative platform leverages the power of blockchain technology to create a decentralized, transparent, and secure environment for fundraising",
      image: "/projects/3.jpeg",
      technologies: ["Solidity", "Chainlink", "1inch", "React", "TypeScript"],
      features: [
        "Auto-compounding yields",
        "Multi-protocol integration",
        "Gas optimization",
        "Risk management strategies",
        "Real-time analytics",
      ],
      links: {
        youtube: "https://youtu.be/muskTp3wf2k?si=NAxYQlXx3pMg0qCx", // Replace with actual YouTube video
        demo: "https://www.theblockchaincoders.com/",
        docs: "https://github.com/daulathussain/Solidity-Interview/blob/main/Solidity/NFT-MARKETPLACE.md",
      },
      metrics: {
        apy: "25% AVG",
        protocols: "12+",
        automated: "100%",
      },
    },
    {
      id: 4,
      title: "Voting Dapp (Decentralized)",
      category: "Governance",
      description:
        "Complete Web3 Dapp App, Build blockchain voting app, Web3 Project | Blockchain Voting App With Voting Smart Contract Solidity, Complete Project, voting smart contract solidity, solidity projects for beginners, solidity programming tutorial",
      image: "/projects/4.jpeg",
      technologies: ["Solidity", "React", "Snapshot", "IPFS", "Aragon"],
      features: [
        "Quadratic voting",
        "Multi-sig treasury",
        "Proposal automation",
        "Delegation system",
        "Governance analytics",
      ],
      links: {
        youtube: "https://youtu.be/WKKJs31jEFQ?si=-ereegLHqB6acmu2", // Replace with actual YouTube video
        demo: "https://www.theblockchaincoders.com/",
        docs: "https://github.com/daulathussain/Solidity-Interview/blob/main/Solidity/NFT-MARKETPLACE.md",
      },
      metrics: {
        daos: "15+",
        proposals: "500+",
        members: "5k+",
      },
    },
    {
      id: 5,
      title: "Web3 Chat Application (DApp)",
      category: "Governance",
      description:
        "Our Web3 Chat Application enables users to engage in secure and private conversations directly on the Ethereum blockchain. By utilizing decentralized technologies, we ensure that user data remains encrypted and inaccessible to third parties, offering a level of privacy and security unmatched by centralized messaging platforms",
      image: "/projects/5.jpeg",
      technologies: ["Solidity", "React", "Snapshot", "IPFS", "Aragon"],
      features: [
        "Quadratic voting",
        "Multi-sig treasury",
        "Proposal automation",
        "Delegation system",
        "Governance analytics",
      ],
      links: {
        youtube: "https://youtu.be/lURReDp5CR8?si=r8E16P1qvALRhcbX", // Replace with actual YouTube video
        demo: "https://www.theblockchaincoders.com/",
        docs: "https://github.com/daulathussain/Solidity-Interview/blob/main/Solidity/NFT-MARKETPLACE.md",
      },
      metrics: {
        daos: "15+",
        proposals: "500+",
        members: "5k+",
      },
    },
    {
      id: 6,
      title: "Uniswap DeFI Clone",
      category: "DeFi",
      description:
        "Decentralized autonomous organization framework with advanced voting mechanisms and treasury management.",
      image: "/projects/6.jpeg",
      technologies: ["Solidity", "React", "Snapshot", "IPFS", "Aragon"],
      features: [
        "Quadratic voting",
        "Multi-sig treasury",
        "Proposal automation",
        "Delegation system",
        "Governance analytics",
      ],
      links: {
        youtube: "https://youtu.be/NAuuGa_7oro?si=JwsF7GFcw0Ibq33Z", // Replace with actual YouTube video
        demo: "https://www.theblockchaincoders.com/",
        docs: "https://github.com/daulathussain/Solidity-Interview/blob/main/Solidity/NFT-MARKETPLACE.md",
      },
      metrics: {
        daos: "15+",
        proposals: "500+",
        members: "5k+",
      },
    },
  ],

  technologies: {
    blockchain: [
      { name: "Ethereum", icon: "FaEthereum", level: 90 },
      { name: "Solidity", icon: "SiSolidity", level: 95 },
      { name: "Web3.js", icon: "SiWeb3dotjs", level: 90 },
      { name: "Hardhat", icon: "SiHardhat", level: 85 },
      { name: "IPFS", icon: "SiIpfs", level: 80 },
      { name: "Chainlink", icon: "SiChainlink", level: 85 },
    ],
    frontend: [
      { name: "React", icon: "FaReact", level: 95 },
      { name: "Next.js", icon: "SiNextdotjs", level: 90 },
      { name: "Three.js", icon: "SiThreedotjs", level: 85 },
      { name: "TypeScript", icon: "SiTypescript", level: 80 },
      { name: "Tailwind CSS", icon: "SiTailwindcss", level: 90 },
      { name: "Redux", icon: "SiRedux", level: 85 },
    ],
    tools: [
      { name: "Git", icon: "FaGit", level: 90 },
      { name: "Docker", icon: "FaDocker", level: 80 },
      { name: "AWS", icon: "FaAws", level: 75 },
      { name: "MongoDB", icon: "SiMongodb", level: 85 },
      { name: "GraphQL", icon: "SiGraphql", level: 80 },
      { name: "Jest", icon: "SiJest", level: 85 },
    ],
  },

  faq: [
    {
      question: "What blockchain networks do you work with?",
      answer:
        "I primarily work with Ethereum, Polygon, BSC, and Solana. I have experience with both EVM-compatible chains and layer-2 solutions. My expertise allows me to adapt to any blockchain network based on project requirements.",
    },
    {
      question: "How do you ensure smart contract security?",
      answer:
        "I follow best practices including thorough testing with Hardhat/Foundry, code audits, formal verification where possible, and adherence to OpenZeppelin standards. All my contracts undergo extensive testing on testnets before mainnet deployment.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, I offer comprehensive post-launch support including monitoring, bug fixes, feature updates, and emergency response. I believe in long-term partnerships with my clients and ensure their projects remain secure and up-to-date.",
    },
    {
      question: "What's your typical project timeline?",
      answer:
        "Timeline varies based on complexity. Simple DApps typically take 4-6 weeks, while complex DeFi protocols can take 3-6 months. This includes development, testing, auditing, and deployment phases.",
    },
    {
      question: "How do you handle gas optimization?",
      answer:
        "I employ various optimization techniques including storage layout optimization, function modifiers, batch processing, and assembly optimization where necessary. Gas efficiency is always a priority in my development process.",
    },
  ],

  contact: {
    title: "Let's Build Something Amazing",
    description:
      "I'm always open to discussing new projects, creative ideas, or opportunities to create something great together.",
    form: {
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      subjectLabel: "Project Type",
      messageLabel: "Tell me about your project",
      submitText: "Send Message",
      subjects: [
        "DeFi Protocol",
        "NFT Marketplace",
        "DAO Platform",
        "DApp Development",
        "Smart Contract Audit",
        "Other",
      ],
    },
    social: {
      discord: { label: "Discord", value: "AlexDev#1234" },
      telegram: { label: "Telegram", value: "@alexjohnson" },
      calendly: {
        label: "Schedule Call",
        value: "https://calendly.com/alexjohnson",
      },
    },
  },

  footer: {
    copyright: "© 2025 Daulat Hussain. All rights reserved.",
    links: [
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Terms of Service", url: "/terms" },
      { label: "Cookie Policy", url: "/cookies" },
    ],
  },

  theme: {
    colors: {
      primary: "#6366f1", // Indigo
      secondary: "#14b8a6", // Teal
      accent: "#f59e0b", // Amber
      dark: "#0f172a", // Slate dark
      light: "#f8fafc", // Slate light
    },
    gradients: {
      primary: "linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)",
      secondary: "linear-gradient(135deg, #14b8a6 0%, #f59e0b 100%)",
      dark: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    },
  },
};

export default portfolioData;

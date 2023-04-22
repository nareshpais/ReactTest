import ContentItem from "@/components/contentItem"
import Faq, { FaqItem } from "@/components/faq"
import Heading from "@/components/heading"
import Marquee from "@/components/marquee"
import PageImageWrapper from "@/components/pageImageWrapper"
import PageItemsWrapper from "@/components/pageItemsWrapper"
import Image from "next/image"

import BlockChainScalabilityIcon from "../../public/icon_blockChainScalability.png"
import CloudComputingIcon from "../../public/icon_cloudComputing.png"
import CoNodesIcon from "../../public/icon_coNodes.png"
import ManagedNodesIcon from "../../public/icon_managedNodes.png"
import NodeArmyIcon from "../../public/icon_nodeArmy.png"
import NodeBuildTemplatesIcon from "../../public/icon_nodeBuildTemplates.png"
import NodesAsServiceIcon from "../../public/icon_nodesAsService.png"
import ProofOfStakeIcon from "../../public/icon_proofOfStake.png"
import RewardsIcon from "../../public/icon_rewards.png"
import CloudComputingImage from "../../public/image_cloudComputing.png"
import ManagedNodesImage from "../../public/number_lines.png"
import NodeBuildTemplatesImage from "../../public/servers.png"

const FaqItems: FaqItem[] = [
  { id: 'nodeArmy', question: 'What is Node Army? ', answer: 'Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.' },
  { id: 'benefit', question: 'How can I benefit from using Node Army?', answer: 'Did you not figure this out by reading the page yet?' },
  { id: 'technicalExpertise', question: 'Do I need technical expertise to use Node Army?', answer: 'No, of course not!' },
  { id: 'support', question: 'What kind of support does Node Army provide?', answer: 'Everything you need' },
  { id: 'start', question: 'How do I get started with Node Army?', answer: 'Just sign up here' },
  { id: 'reward', question: 'How will I be rewarded by using Node Army?', answer: 'Simply' },
]

export default function ServicesPage() {
  return (
    <>
      <Heading title='Services' />
      <PageItemsWrapper>
        <ContentItem
          title={<>Co-nodes<sup>&#174;</sup></>}
          text={'Collaborative staking among users to pool to achieve threshold stake and operate collectively. This democratises participation and allows sub-stake holders to benefit from reward protocols. It also enables compounding as participants can sweep earned rewards into further Co-Nodes'}
          icon={<Image src={CoNodesIcon} alt='Co-nodes' />}
        />
        <ContentItem
          title="Managed nodes"
          text='Outsource node deployment, management, and maintenance to Node Army for a small commission of earned rewards. Develop a passive yield portfolio with minimum time and skill commitment.'
          icon={<Image src={ManagedNodesIcon} alt='Managed nodes' />}
        />
        <PageImageWrapper>
          <Image src={ManagedNodesImage} alt='Not sure what this depicts' />
        </PageImageWrapper>
      </PageItemsWrapper>
      <PageItemsWrapper end>
        <ContentItem
          title="Nodes as a service"
          text='An industrial node solution for projects requiring robust decentralised node infrastructures at scale. Node Army collaborates with projects during development phase and through a blockchain lifecycle.'
          icon={<Image src={NodesAsServiceIcon} alt='Nodes as a service' />
          }
        />
      </PageItemsWrapper>
      <PageItemsWrapper>
        <ContentItem
          title="Rewards"
          text="Participate in underlying projects offering rewards for staking, validating, and securing their network through a transparent process. Node Army does not offer or promote its own Node Army yield, but rewards are transparently distributed on the blockchain according to the underlying project&apos;s protocol and tokenomics."
          icon={<Image src={RewardsIcon} alt='Rewards' />}
        />
        <ContentItem
          title="Node build templates"
          text='Easily deploy nodes with pre-built templates hosted in the Marketplaces of premier cloud computing providers. Templates are specific to the different underlying blockchain networks, designed to make deployment seamless.'
          icon={<Image src={NodeBuildTemplatesIcon} alt='Node Build Templates' />}
        />
      </PageItemsWrapper>
      <PageItemsWrapper end>
        <PageImageWrapper>
          <Image src={NodeBuildTemplatesImage} alt='Servers' />
        </PageImageWrapper>
        <ContentItem
          title="Blockchain scalability "
          text='Leverage scalable blockchain infrastructure and a substantial and growing community of committed datapreneurs for rapid and effective scaling of blockchain-based applications. Maintain high performance and security in a decentralised approach.'
          icon={<Image src={BlockChainScalabilityIcon} alt='Blockchain scalability' />}
        />
      </PageItemsWrapper>
      <Marquee text="WE&apos;RE ON A MISSION" repeat={10} />
      <Heading title='Environment statement' />
      <PageItemsWrapper>
        <ContentItem
          title="Proof of stake"
          text='Proof of stake blockchain validation is more environmentally friendly than proof of work, as it consumes significantly less energy by not requiring computational puzzles to be solved. Validators are selected based on cryptocurrency holdings, reducing the carbon footprint of the network. Unless directly disclosed none of the projects we support will operate through Proof of Work.'
          icon={<Image src={ProofOfStakeIcon} alt='Proof of stake' />}
        />
        <ContentItem
          title="Cloud computing"
          text='Cloud computing provides more efficient resource usage , reducing the need for physical hardware and lowering the carbon footprint of the network. Other benefits include increased scalability, faster transaction speeds, and improved accessibility. Overall, cloud computing provides an eco-friendly and efficient solution for validating and recording transactions on PoS blockchains.'
          icon={<Image src={CloudComputingIcon} alt='Cloud Computing' />}
        />
      </PageItemsWrapper>
      <PageItemsWrapper end>
        <PageImageWrapper>
          <Image src={CloudComputingImage} alt='Cloud Computing' />
        </PageImageWrapper>
        <ContentItem
          title="Node army"
          text='We regularly review cloud computing platforms to ensure you can choose from proven, reliable, scalable and environmentally responsible providers. Node Army will endeavor to integrate a energy utilization metric to our and your dashboards in the near future for transparency of impact'
          icon={<Image src={NodeArmyIcon} alt='Node Army' />}
        />
      </PageItemsWrapper>
      <Heading title='Frequently Asked' />
      <Faq items={FaqItems} />
    </>
  )
}
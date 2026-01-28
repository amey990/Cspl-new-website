import type { StaticImageData } from "next/image";

// ===== VERTICAL IMAGES =====
import sp1 from "../../../assets/case studies/sp1.png";
import sp2 from "../../../assets/case studies/sp2.png";
import sp3 from "../../../assets/case studies/sp3.png";
import sp4 from "../../../assets/case studies/sp4.png";

import dm1 from "../../../assets/case studies/Dm1.png";
import dm2 from "../../../assets/case studies/Dm2.png";
import dm3 from "../../../assets/case studies/Dm3.png";
import dm4 from "../../../assets/case studies/Dm4.png";
import dm5 from "../../../assets/case studies/Dm5.png";
import dm6 from "../../../assets/case studies/Dm6.png";

import en1 from "../../../assets/case studies/En1.png";
import en2 from "../../../assets/case studies/En2.png";
import en3 from "../../../assets/case studies/En3.png";

import go1 from "../../../assets/case studies/Go1.png";
import go2 from "../../../assets/case studies/Go2.png";
import go3 from "../../../assets/case studies/Go3.png";

// ===== SOLUTION IMAGES =====
import dc1 from "../../../assets/case studies/Dc1.png";
import dc2 from "../../../assets/case studies/Dc2.png";
import dc3 from "../../../assets/case studies/Dc3.png";
import dc4 from "../../../assets/case studies/Dc4.png";
import dc5 from "../../../assets/case studies/Dc5.png";

import sdwan1 from "../../../assets/case studies/Sdwan1.png";
import sdwan2 from "../../../assets/case studies/Sdwan2.png";
import sdwan3 from "../../../assets/case studies/Sdwan3.png";

import ns1 from "../../../assets/case studies/Ns1.png";
import ns2 from "../../../assets/case studies/Ns2.png";
import ns3 from "../../../assets/case studies/Ns3.png";
import ns4 from "../../../assets/case studies/Ns4.png";

import wn1 from "../../../assets/case studies/Wn1.png";
import wn2 from "../../../assets/case studies/wn2.png";
import wn3 from "../../../assets/case studies/wn3.png";

export type Vertical =
  | "Service Provider"
  | "Digital Media"
  | "Enterprise"
  | "Government";

export type Solution =
  | "Data Center"
  | "SD-WAN"
  | "Network Security"
  | "Wireless Networking";

export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;

  // ✅ for adjusting image cropping per case (grid + modal)
  // examples: "50% 70%" (x y), "center 75%", "center bottom"
  coverPos?: string;

  cover?: StaticImageData | string | null;

  verticals: Vertical[];
  solutions: Solution[];

  showInVerticals?: boolean;
  showInSolutions?: boolean;

  tags: string[];
  metrics: { label: string; value: string }[];

  overview: string;
  challenge: string[];
  approach: string[];
  results: string[];
  stack?: string[];
};

export const VERTICALS: Vertical[] = [
  "Service Provider",
  "Digital Media",
  "Enterprise",
  "Government",
];

export const SOLUTIONS: Solution[] = [
  "Data Center",
  "SD-WAN",
  "Network Security",
  "Wireless Networking",
];

// helper
const base = {
  tags: [] as string[],
  metrics: [
    { label: "Scope", value: "Multi-site" },
    { label: "Reliability", value: "Improved" },
    { label: "Ops Load", value: "Reduced" },
  ],
  overview: "Customer success story with measurable outcomes.",
  challenge: ["Legacy constraints", "Scale + reliability needs", "Operational complexity"],
  approach: ["Assessment + design", "Phased rollout", "Validation + handover"],
  results: ["Improved stability", "Faster issue resolution", "Lower operational overhead"],
  stack: ["Planning", "Execution", "Monitoring"],
};

export const CASE_STUDIES: CaseStudy[] = [
  /* =========================
   * VERTICALS — Service Provider (REAL DATA)
   * ========================= */
  {
    ...base,
    id: "sp-video-streaming-private-network",
    title: "Video Streaming Solution on Private Network",
    subtitle:
      "Extended Broadcast TV to multiscreen users over a private telecom network.",
    cover: sp1,
    verticals: ["Service Provider"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,

    tags: ["Telecom", "Video", "Private Network", "System Integration"],
    metrics: [
      { label: "Region", value: "Papua New Guinea" },
      { label: "Goal", value: "Multiscreen TV" },
      { label: "Outcome", value: "Streaming deployed" },
      { label: "Focus", value: "Cost optimisation" },
    ],

    overview:
      "A leading telecom and broadcaster in Papua New Guinea aimed to extend Broadcast TV to multiscreen users via their private telecom network.",
    challenge: [
      "Complex existing online network.",
      "Video streaming needed to operate over the Internet Cloud.",
      "Cost optimization due to budget constraints.",
    ],
    approach: [
      "Conducted an in-depth study of the network diagram, workflow, and equipment.",
      "Provided project management and system integration.",
      "Identified and filled BOM (Bill of Materials) gaps.",
    ],
    results: [
      "Successfully implemented streaming solution.",
      "Comprehensive system integration executed.",
      "Project delivered within a systematic timeline.",
      "Proven expertise in video head-end systems.",
    ],
    stack: ["Study", "Project Management", "System Integration", "BOM Alignment"],
  },
  {
    ...base,
    id: "sp-seamless-video-noc-management",
    title: "Seamless Video NOC Management",
    subtitle: "24/7 operational support for teleport + head-end workflows.",
    cover: sp2,
    verticals: ["Service Provider"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,

    tags: ["Video NOC", "Teleport Ops", "Playout", "24/7 Support"],
    metrics: [
      { label: "Location", value: "Noida" },
      { label: "Scale", value: "~30 channels" },
      { label: "Support", value: "24/7" },
      { label: "Outcome", value: "Uninterrupted ops" },
    ],

    overview:
      "Bharti Airtel set up a Video Network Operations Center (NOC) in Noida to uplink ~30 channels to satellites, needing skilled manpower for operations.",
    challenge: [
      "Managing live video network operations.",
      "Day-to-day handling of teleport and head-end operations.",
    ],
    approach: [
      "Provided skilled engineers for teleport services (uplinking/downlinking).",
      "Managed playout services for regional channels and seed management for a top sports channel.",
      "Ensured 24/7 technical support for uninterrupted teleport functioning.",
    ],
    results: [
      "Effective and uninterrupted NOC management.",
      "Operational team to support complex video broadcast requirements.",
    ],
    stack: ["Teleport Ops", "Playout", "Seed Management", "24/7 Support"],
  },
  {
    ...base,
    id: "sp-national-network-rollout-enterprise-wifi",
    title: "National Network Rollout for Enterprise Wi-Fi",
    subtitle:
      "Pan-India rollout with strong coordination and zero-downtime focus.",
    cover: sp3,
    coverPos: "50% 12%",
    verticals: ["Service Provider"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,

    tags: ["Enterprise Wi-Fi", "Pan-India", "Presales", "Rollout"],
    metrics: [
      { label: "Coverage", value: "Pan-India" },
      { label: "Scope", value: "Wired + Wi-Fi" },
      { label: "Constraint", value: "Zero downtime" },
      { label: "Mode", value: "Multi-site" },
    ],

    overview:
      "A major Indian telecom provider required end-to-end sales and presales support for enterprise wired and wireless connectivity solutions across India.",
    challenge: [
      "Tight rollout timelines.",
      "No permissible downtime at specific locations.",
      "Need for cost-effective yet quality-compliant solutions.",
      "Coordination with multiple OEMs and simultaneous multi-site execution.",
    ],
    approach: [
      "Delivered tailored sales and presales support based on customer preferences and standards.",
      "Executed smooth pan-India rollout using existing network.",
      "Provided technical presales solution design.",
    ],
    results: [
      "Deployment of a high-quality, cost-effective network.",
      "Successful rollout with no business interruptions.",
    ],
    stack: ["Presales", "Solution Design", "Multi-OEM Coordination", "Execution"],
  },
  {
    ...base,
    id: "sp-global-enterprise-presales-support",
    title: "Global Enterprise Presales Support",
    subtitle:
      "Worldwide presales + implementation planning with minimal downtime.",
    cover: sp4,
    coverPos: "50% 15%",
    verticals: ["Service Provider"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,

    tags: ["Global", "Presales", "Implementation Support", "Multi-OEM"],
    metrics: [
      { label: "Coverage", value: "Worldwide" },
      { label: "Role", value: "Presales + rollout" },
      { label: "Constraint", value: "High standards" },
      { label: "Execution", value: "Off-hours installs" },
    ],

    overview:
      "A top Indian telecom’s global enterprise unit needed a partner to supply, install, and support broadcast, wired, and wireless solutions worldwide.",
    challenge: [
      "Required simultaneous global deployment.",
      "Urgent solution needs from end customers.",
      "High standards and future-proofing necessary.",
      "Coordination with multiple OEMs across geographies.",
    ],
    approach: [
      "Provided comprehensive presales support meeting international standards.",
      "Delivered full technical solution design and implementation support.",
      "Managed global installations efficiently, minimizing downtime.",
      "Installed during off-hours to avoid disruptions.",
    ],
    results: [
      "Reliable presales support to global teams.",
      "Efficient, seamless global rollout with top-tier products.",
    ],
    stack: ["Presales", "Design", "Implementation Support", "Global Execution"],
  },

  /* =========================
   * VERTICALS — Digital Media (✅ updated with real content)
   * ========================= */
  {
    ...base,
    id: "dm-video-headend-satellite-fiber",
    title: "Video Head-End Setup via Satellite & Fiber",
    subtitle:
      "Video head-end delivered across main + remote sites via satellite and optical media.",
    cover: dm1,
    verticals: ["Digital Media"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    metrics: [
      { label: "Scope", value: "Main + 4 sites" },
      { label: "Delivery", value: "Sat + Optical" },
      { label: "Outcome", value: "Integrated" },
    ],
    overview:
      "EMTV needed a video head-end for their SD channel on IS19, delivered via satellite and optical media across the main site and 4 remote locations.",
    challenge: [
      "Logistical hurdles in Papua New Guinea.",
      "Tight project timelines.",
      "Budget constraints and fiber cable laying.",
      "Integration with ABB CAS and Mux.",
    ],
    approach: [
      "Conducted detailed requirement analysis and built a solution using Thomson Compression.",
      "Planned logistics in advance.",
      "Installed RF and compression systems with precision.",
    ],
    results: [
      "Successful network setup across multiple locations.",
      "Full system integration and timely execution.",
      "End-user training completed.",
    ],
    stack: ["Thomson Compression", "RF systems", "CAS + Mux", "Optical media"],
  },
  {
    ...base,
    id: "dm-reduced-channel-opex-smart-upgrade",
    title: "Reduced Channel OPEX through Smart Network Upgrade",
    subtitle:
      "Expanded uplink capacity while optimizing space segment usage and lowering operational cost.",
    cover: dm2,
    verticals: ["Digital Media"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    metrics: [
      { label: "Goal", value: "Lower OPEX" },
      { label: "Change", value: "MCPC migration" },
      { label: "Delivery", value: "On-time" },
    ],
    overview:
      "A regional Indian channel wanted to add more channels to its uplink services, while optimizing space segment usage and reducing operational costs.",
    challenge: [
      "Cost-effective expansion without overhauling infrastructure.",
      "Migration to a new MCPC chain.",
      "Budget constraints and strict go-live timelines.",
    ],
    approach: [
      "Conducted full infrastructure and space segment audit.",
      "Devised innovative solutions using Harmonic Technology.",
      "Implemented scalable, flexible network upgrades.",
      "Recommended new technologies for future-proofing.",
    ],
    results: [
      "Implementation within timelines for service.",
      "Enabled future network scalability.",
      "More channels added with lower OPEX.",
    ],
    stack: ["Harmonic Technology", "MCPC chain", "Audit + upgrade plan"],
  },
  {
    ...base,
    id: "dm-45m-cband-tvro-turnaround",
    title: "4.5M C Band TVRO Setup for Turnaround Services",
    subtitle:
      "4.5M non-motorized C-band antenna deployment with survey, install, and integration.",
    cover: dm3,
    verticals: ["Digital Media"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    metrics: [
      { label: "Antenna", value: "4.5M C-band" },
      { label: "Region", value: "Singapore" },
      { label: "Outcome", value: "On-time" },
    ],
    overview:
      "Client needed a 4.5M non-motorized C Band antenna system in Singapore for turnaround services, including full site survey, installation, and integration.",
    challenge: [
      "Poor soil conditions for foundation.",
      "Space constraints in the antenna farm.",
      "Tight project schedule.",
    ],
    approach: [
      "Selected suitable OEMs and coordinated imports.",
      "Managed logistics and partner coordination efficiently.",
    ],
    results: [
      "On-time deployment for site conditions.",
      "Robust and simple network setup.",
      "Full access to Commedia’s RF and satellite head-end expertise.",
    ],
    stack: ["C-band TVRO", "OEM coordination", "Site survey", "Install + integration"],
  },
  {
    ...base,
    id: "dm-advanced-uplink-cas-integration",
    title: "Advanced Satellite Uplink with CAS Integration",
    subtitle:
      "Modernized uplink + head-end to improve quality, scale, and CAS readiness.",
    cover: dm6,
    coverPos: "50% 15%",
    verticals: ["Digital Media"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    metrics: [
      { label: "Focus", value: "CAS upgrade" },
      { label: "Outcome", value: "Better quality" },
      { label: "Scale", value: "More users" },
    ],
    overview:
      "A top TV network in the Australian continent needed to modernize its uplink and video head-end setup to support better quality and more users with CAS.",
    challenge: [
      "Needed consolidation of uplink and head-end at HQ.",
      "Bandwidth optimization and operational cost reduction.",
      "Migration to advanced conditional access.",
      "Multi-OEM coordination and cost control.",
    ],
    approach: [
      "Detailed assessment of current infrastructure and capacities.",
      "Deployed next-gen encoders, multiplexers, optical systems, BUCs, and antennas.",
      "Used top-tier components from Thomson, Thor, CODAN, and Prodelin.",
    ],
    results: [
      "High-performance video output and efficient bandwidth usage.",
      "Successful deployment supporting more users.",
      "Flexible and scalable architecture.",
    ],
    stack: ["Thomson", "Thor", "CODAN", "Prodelin", "Encoders", "Mux", "BUCs", "Optical"],
  },
  {
    ...base,
    id: "dm-multi-layer-compliance-monitoring",
    title: "Multi-Layer Compliance Monitoring System",
    subtitle:
      "Full-chain monitoring with multi-viewer visibility and compliance oversight.",
    cover: dm4,
    coverPos: "50% 15%",
    verticals: ["Digital Media"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    metrics: [
      { label: "Monitoring", value: "Full-chain" },
      { label: "Visibility", value: "Multi-viewer" },
      { label: "Outcome", value: "Unified ops" },
    ],
    overview:
      "Disney needed a comprehensive compliance monitoring system for their live and upcoming channels across uplink/downlink operations.",
    challenge: [
      "Transitioning from SDI to full-chain monitoring.",
      "Required multi-viewer and internal network visibility.",
      "TS monitoring for numerous channels.",
    ],
    approach: [
      "Designed and implemented a tailored compliance monitoring solution.",
      "Included a Video Wall setup for broadcast and revenue teams.",
      "Provided full flexibility across different monitoring needs.",
    ],
    results: [
      "Single unified platform for multiple monitoring tasks.",
      "Timely execution and deployment.",
      "Enhanced operational oversight across all Disney services.",
    ],
    stack: ["Compliance monitoring", "TS monitoring", "Multi-viewer", "Video wall"],
  },
  {
    ...base,
    id: "mam-platform-integration",
    title: "Enterprise MAM Platform Integration",
    subtitle:
      "MAM integration with Quantum storage and automated workflows across departments.",
    cover: dm5,
    verticals: ["Digital Media"], // ✅ removed Government to avoid extra Govt card
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    metrics: [
      { label: "Platform", value: "Dalet MAM" },
      { label: "Storage", value: "Quantum" },
      { label: "Outcome", value: "Automated" },
    ],
    overview:
      "India’s national broadcaster needed a Media Asset Management (MAM) platform integrated with their existing Quantum storage and departmental workflows.",
    challenge: [
      "Required seamless integration with existing archive systems.",
      "Automation of ingest, transcoding, metadata management, and QC.",
      "Granular rights management and scalability.",
    ],
    approach: [
      "Delivered Dalet MAM platform customized for their workflow.",
      "Trained users to build custom workflows for ingest to distribution.",
      "Developed automated processes with QC and manual approvals.",
    ],
    results: [
      "Best-in-class MAM platform successfully deployed.",
      "Seamless integration with minimal downtime.",
      "Future-proof design supporting playout and automation expansions.",
    ],
    stack: ["Dalet MAM", "Quantum storage", "Workflow automation", "QC"],
  },

  /* =========================
   * VERTICALS — Enterprise (✅ with images)
   * ========================= */
  {
    id: "ent-chromaflo-end-to-end-it-infra",
    title: "End-to-End IT Infrastructure for Chromaflo Technologies (Mumbai)",
    subtitle: "Core IT + network foundation with clean operations.",
    cover: en1,
    verticals: ["Enterprise"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,

    metrics: [
      { label: "Location", value: "Mumbai" },
      { label: "Scope", value: "End-to-end IT" },
      { label: "Support", value: "24/7" },
    ],

    overview:
      "Chromaflo Technologies, a global supplier of colorant systems and pigment dispersions, needed a technology partner to set up, integrate, and manage their complete IT and networking infrastructure in Mumbai.",

    challenge: [
      "Handling multiple technologies (CISCO, Polycom, Avaya).",
      "Completing setup within a tight schedule.",
      "Ensuring smooth and ongoing support services post-deployment.",
    ],

    approach: [
      "Designed and implemented the complete network infrastructure.",
      "Executed project management and system integration efficiently.",
      "Delivered round-the-clock IT and networking support.",
    ],

    results: [
      "Successful and timely installation and commissioning.",
      "Customer could focus on core business areas.",
      "IT infrastructure management handled by Commedia.",
    ],
  },

  {
    id: "ent-cex-wireless-infra-mumbai",
    title: "Wireless Network Infrastructure for CeX WeBuy (Mumbai)",
    subtitle: "High-performance Wi-Fi with stable roaming and control.",
    cover: en2,
    coverPos: "50% 15%",
    verticals: ["Enterprise"],
    solutions: ["Wireless Networking"],
    showInVerticals: true,
    showInSolutions: false, // ✅ remove from Wireless Networking solutions as requested
    ...base,

    metrics: [
      { label: "Location", value: "Mumbai" },
      { label: "Technology", value: "Ruckus WiFi" },
      { label: "Outcome", value: "On-time delivery" },
    ],

    overview:
      "CeX WeBuy, a global retail platform for technology and entertainment goods, required a robust and scalable wireless networking setup at their Mumbai office.",

    challenge: [
      "Meeting strict timelines for setup and delivery.",
      "Implementing high-speed wireless networking.",
    ],

    approach: [
      "Designed and implemented network infrastructure using Ruckus Wireless technology.",
      "Managed the entire project lifecycle to ensure site readiness on schedule.",
      "Delivered a fast, cost-effective, and reliable wireless network.",
    ],

    results: [
      "Seamless network setup and commissioning.",
      "On-time delivery enabled smooth business operations.",
      "Networking infrastructure optimized for performance.",
    ],
  },

  {
    id: "ent-leeco-multi-location-wifi-office-automation",
    title: "Multi-Location Wi-Fi & Office Automation for LeEco (India)",
    subtitle: "Multi-branch wireless + office automation rollout.",
    cover: en3,
    coverPos: "50% 10%",
    verticals: ["Enterprise"],
    solutions: ["Wireless Networking"],
    showInVerticals: true,
    showInSolutions: false, // ✅ remove from Wireless Networking solutions as requested
    ...base,

    metrics: [
      { label: "Locations", value: "3 cities" },
      { label: "Scope", value: "Wi-Fi + Automation" },
      { label: "Rollout", value: "Multi-site" },
    ],

    overview:
      "LeEco, a major Chinese technology brand, needed a full IT solution — including wired/wireless networking and office automation — across their Indian offices in Mumbai, Bangalore, and Gurugram.",

    challenge: [
      "Stringent project deadlines.",
      "Need for downtime-free installation at certain sites.",
      "Multi-site deployment involving multiple OEMs.",
    ],

    approach: [
      "Selected high-quality products based on customer requirements.",
      "Deployed a full mesh, high-availability network using Cisco, Avaya, and Polycom solutions.",
    ],

    results: [
      "High-performance IT infrastructure deployed.",
      "Timely rollout with no business impact.",
      "Delivered a scalable, future-ready solution.",
    ],
  },

  /* =========================
 * VERTICALS — Government (✅ updated with real content)
 * ========================= */
{
  ...base,
  id: "gov-mam-platform-integration",
  title: "Enterprise MAM Platform Integration",
  subtitle: "Unified media asset workflows across teams and locations.",
  cover: go1,
  verticals: ["Government"],
  solutions: [],
  showInVerticals: true,
  showInSolutions: false,

  tags: ["Broadcast", "MAM", "Workflow Automation", "Integration"],
  metrics: [
    { label: "Platform", value: "Dalet MAM" },
    { label: "Storage", value: "Quantum" },
    { label: "Workflow", value: "Ingest → Playout" },
    { label: "Outcome", value: "Automated" },
  ],

  overview:
    "Doordarshan Kendra Mumbai required an enterprise Media Asset Management (MAM) platform integrated with existing Quantum storage and archival systems to automate ingest-to-playout workflows across departments.",

  challenge: [
    "Seamless integration with existing storage and archive libraries.",
    "Designing an enterprise MAM workflow with automated ingest, transcoding, QC, and metadata tagging.",
    "Ensuring scalability and granular rights/workflow control.",
  ],

  approach: [
    "Selected the Dalet MAM platform for compatibility with existing broadcast systems.",
    "Built customized workflows and automated file movement from ingest to distribution.",
    "Enabled QC gates and role-based workflow approvals for operational control.",
  ],

  results: [
    "Fully integrated MAM system implemented across teams.",
    "Reduced downtime with enterprise-ready automation and workflows.",
    "Future-proof foundation for scalable media handling and expansion.",
  ],

  stack: ["Dalet MAM", "Quantum Storage", "Workflow Automation", "QC + Metadata"],
},
{
  ...base,
  id: "gov-noc-management-45-isro-centers",
  title: "NOC Management Across 45 ISRO Centers (ISTRAC)",
  subtitle: "Operational visibility and standardized incident handling.",
  cover: go2,
  verticals: ["Government"],
  solutions: [],
  showInVerticals: true,
  showInSolutions: false,

  tags: ["NOC Operations", "Satcom", "VSAT", "24/7 Support"],
  metrics: [
    { label: "Coverage", value: "45 centers" },
    { label: "Scope", value: "Satcom operations" },
    { label: "Core", value: "iDirect VSAT" },
    { label: "Support", value: "24/7" },
  ],

  overview:
    "ISTRAC (a division of ISRO) required technically skilled manpower to manage Satcom operations, ensuring continuous communication and network services across 45 centers in India.",

  challenge: [
    "Handling complex, large-scale network infrastructure across distributed sites.",
    "Adhering to civil and regulatory compliance requirements.",
    "Maintaining uninterrupted voice/data/video service continuity.",
  ],

  approach: [
    "Deployed a dedicated engineering team to manage iDirect VSAT-based Satcom operations.",
    "Maintained video conferencing, voice, and data services as part of daily operations.",
    "Provided round-the-clock troubleshooting, IOS upgrades, and network configuration support.",
  ],

  results: [
    "Seamless NOC operations and improved network availability.",
    "Efficient, trained personnel managing critical communication infrastructure.",
    "Standardized support processes across multiple centers.",
  ],

  stack: ["iDirect VSAT", "NOC Operations", "IOS Upgrades", "Network Configuration", "24/7 Support"],
},
{
  ...base,
  id: "gov-satellite-network-redundancy-mars-mission",
  title: "Satellite Network with Redundancy for Mars Mission (ISRO)",
  subtitle: "Redundant design for resilient mission communications.",
  cover: go3,
  verticals: ["Government"],
  solutions: [],
  showInVerticals: true,
  showInSolutions: false,

  tags: ["Mission Critical", "Satcom", "Redundancy", "RF Systems"],
  metrics: [
    { label: "Mission", value: "Mars" },
    { label: "Terminal", value: "Ship-borne" },
    { label: "Design", value: "Redundant paths" },
    { label: "Outcome", value: "Secure telemetry" },
  ],

  overview:
    "For ISRO’s Mars mission, telemetry data from the Pacific Ocean had to be securely transmitted to mission control using a ship-borne terminal, requiring high-availability and redundant satellite links.",

  challenge: [
    "Designing a network with multiple redundant and diverse paths.",
    "Complying with regulatory frameworks and coordinating among stakeholders.",
    "Ensuring secure, reliable telemetry delivery under mission-critical constraints.",
  ],

  approach: [
    "Coordinated with the right partners for sourcing and implementation.",
    "Managed import and logistics of key components for deployment readiness.",
    "Deployed orbit antennas, RF systems, modems, and completed end-to-end integration.",
  ],

  results: [
    "Successful mission-critical communication setup.",
    "Fully redundant satellite + fiber path architecture delivered.",
    "Execution backed by Commedia’s Satcom and RF expertise.",
  ],

  stack: ["Orbit Antennas", "RF Systems", "Modems", "Redundancy Design", "Integration + Logistics"],
},


  /* =========================
 * SOLUTIONS — Data Center (✅ real content + images)
 * ========================= */
{
  ...base,
  id: "dc-chhattisgarh-statewide-network",
  title: "Chhattisgarh Statewide Network",
  subtitle: "Statewide IP/MPLS fiber backbone rollout for rural digital connectivity.",
  cover: dc1,
  verticals: [],
  solutions: ["Data Center"],
  showInVerticals: false,
  showInSolutions: true,

  metrics: [
    { label: "Scale", value: "6000 Locations" },
    { label: "Tech", value: "IP/MPLS Fiber" },
    { label: "Outcome", value: "Future-ready Network" },
  ],

  overview:
    "A statewide initiative for digital rural connectivity in Chhattisgarh required a statewide IP/MPLS fiber network across ~6000 locations with strong coordination and advanced infrastructure.",

  challenge: [
    "Huge rollout with tight timelines.",
    "Geographic and LWE (Left-Wing Extremism) challenges.",
    "Largest fiber network rollout with multiple stakeholders.",
  ],

  approach: [
    "Designed and validated the complete IP/MPLS network.",
    "Deployed automation-based IP solutions.",
    "Delivered high-end project management and logistics.",
  ],

  results: [
    "Future-ready network successfully implemented.",
    "Smooth project rollout enabled with automation.",
    "Strengthened rural digital infrastructure statewide.",
  ],

  stack: ["IP/MPLS", "Fiber Backbone", "Automation", "Program Management", "Logistics"],
},
{
  ...base,
  id: "dc-data-center-tech-upgrade",
  title: "Data Center Tech Upgrade",
  subtitle: "DC/DR modernization with analytics, AAA, firewall, and minimal downtime migration.",
  cover: dc2,
  verticals: [],
  solutions: ["Data Center"],
  showInVerticals: false,
  showInSolutions: true,

  metrics: [
    { label: "Sector", value: "Government Bank" },
    { label: "Scope", value: "DC + DR" },
    { label: "Support", value: "24/7 Upgrade Ops" },
  ],

  overview:
    "A government bank needed network upgrades focused on analytics, AAA, and firewall solutions, including redesign and upgrade of existing infrastructure.",

  challenge: [
    "Compatibility between old servers and new switches.",
    "Minimize downtime and migrate copper links to fiber.",
    "Stringent deadlines and technology alignment.",
  ],

  approach: [
    "Assessed current infrastructure and traffic flow.",
    "Installed/configured Nexus, Fortigate, and supporting components.",
    "Ran 24x7 upgrade support with SLA management.",
  ],

  results: [
    "Successfully upgraded DC and DR environments.",
    "Met timelines and rollout targets.",
    "Received appreciation from stakeholders.",
  ],

  stack: ["Cisco Nexus", "Fortigate", "AAA", "Fiber Migration", "SLA Ops"],
},
{
  ...base,
  id: "dc-banking-data-center-ops",
  title: "Banking Data Center Ops",
  subtitle: "DC + DR build, managed services, SOPs, and SLA-driven operations.",
  cover: dc3,
  verticals: [],
  solutions: ["Data Center"],
  showInVerticals: false,
  showInSolutions: true,

  metrics: [
    { label: "Sites", value: "DC + DR" },
    { label: "Ops", value: "24/7" },
    { label: "Deliverables", value: "HLD + LLD" },
  ],

  overview:
    "A banking program required data center and DR site build along with managed services, with high-level coordination across teams and end users.",

  challenge: [
    "SLA timelines, SOPs, and operational checklists.",
    "Full datacenter build with service coordination.",
    "Customer relationship and stakeholder handling.",
  ],

  approach: [
    "Provided HLD/LLD and executed install/configuration.",
    "Delivered 24x7 operations and SLA management.",
    "Set up NOC for remote support and expedited delivery.",
  ],

  results: [
    "Smooth project coordination and delivery.",
    "Strong technical and operations support established.",
    "Seamless rollout of datacenter services.",
  ],

  stack: ["HLD/LLD", "DC/DR Operations", "NOC Support", "Runbooks/SOPs", "SLA Management"],
},
{
  ...base,
  id: "dc-embassy-wan-deployment",
  title: "Embassy WAN Deployment",
  subtitle: "Global WAN rollout across 100+ embassies with long-term managed support.",
  cover: dc4,
  verticals: [],
  solutions: ["Data Center"],
  showInVerticals: false,
  showInSolutions: true,

  metrics: [
    { label: "Sites", value: "108 Locations" },
    { label: "OEM", value: "Cisco (ASR/Nexus)" },
    { label: "Support", value: "4 Years" },
  ],

  overview:
    "A WAN network installation was executed for 100+ embassies with a strict global timeline and multi-technology implementation requirements.",

  challenge: [
    "Install and commission network at 108 sites.",
    "Use of OEM platforms like Cisco ASR and Nexus.",
    "Long-term support and maintenance commitments.",
  ],

  approach: [
    "Completed site surveys and deployments.",
    "Managed design and implementation globally.",
    "Built and ran technical support setup for four years.",
  ],

  results: [
    "Skilled team enabled support across geographies.",
    "Seamless deployment with no business impact.",
    "Timely and successful implementation delivered.",
  ],

  stack: ["WAN Rollout", "Cisco ASR", "Cisco Nexus", "Global PMO", "Managed Support"],
},
{
  ...base,
  id: "dc-chromaflo-data-center-setup",
  title: "Chromaflo Data Center Setup",
  subtitle: "Datacenter + wireless + Juniper rollout with redundancy and clean handover.",
  cover: dc5,
  verticals: [],
  solutions: ["Data Center"],
  showInVerticals: false,
  showInSolutions: true,

  metrics: [
    { label: "OEM", value: "Juniper" },
    { label: "Design", value: "Redundant" },
    { label: "Outcome", value: "Service Provisioning" },
  ],

  overview:
    "Chromaflo required a new datacenter and IT infrastructure establishment, including wireless enablement and Juniper network integration within a constrained environment.",

  challenge: [
    "Build and support the datacenter environment.",
    "Wireless network setup with Juniper.",
    "Interrupt-free integration and cutover.",
  ],

  approach: [
    "Used multiple technologies with redundancy.",
    "Implemented multiple user profiles and access separation.",
    "Followed global quality standards in system integration and delivery governance.",
  ],

  results: [
    "Delivered datacenter & IT facilities successfully.",
    "Provided reliable wireless and IPT network.",
    "Enabled provisioning of multiple services smoothly.",
  ],

  stack: ["Juniper", "Wireless", "Redundancy", "System Integration", "Operational Handover"],
},

  /* =========================
 * SOLUTIONS — SD-WAN (✅ with images + REAL DATA)
 * ========================= */
{
  ...base,
  id: "sdwan-retail-chain-deployment",
  title: "SD-WAN Deployment for Retail Chain",
  subtitle: "MPLS → SD-WAN migration with consistent policies across 510+ branches.",
  cover: sdwan1,
  coverPos: "50% 15%",
  verticals: [],
  solutions: ["SD-WAN"],
  showInVerticals: false,
  showInSolutions: true,

  metrics: [
    { label: "Scope", value: "DC, DR, HO + branches" },
    { label: "Scale", value: "510+ branches" },
    { label: "Outcome", value: "Seamless rollout" },
  ],

  overview:
    "A major bank needed to migrate from MPLS to SD-WAN across DC, DR, HO, and branch networks. The project required a hardware refresh, complete overlay setup, and high-level coordination across 510+ branches.",

  challenge: [
    "SLA timelines and datacenter readiness.",
    "Hardware refresh in autonomous mode before SD-WAN enablement.",
    "Remote migration of branch routers to controller mode.",
  ],

  approach: [
    "Assessed underlay design and device traffic patterns.",
    "Installed and configured SD-WAN components end-to-end.",
    "Executed policy optimization, SLA management, and training programs.",
  ],

  results: [
    "Seamless rollout completed for 510 branches.",
    "Strong coordination with NOC + field support teams.",
    "Improved technology management and network optimization.",
  ],

  stack: ["SD-WAN Overlay", "Underlay Assessment", "Policy Optimization", "SLA Management", "Training"],
},

{
  ...base,
  id: "sdwan-indian-bank-ops",
  title: "Indian Bank SDWAN Ops",
  subtitle: "End-to-end WAN operations with 24×7 monitoring and vendor coordination.",
  cover: sdwan2,
  verticals: [],
  solutions: ["SD-WAN"],
  showInVerticals: false,
  showInSolutions: true,

  metrics: [
    { label: "Service", value: "NMMS / WAN Ops" },
    { label: "Scale", value: "1932+ branches" },
    { label: "Links", value: "3500+ links" },
  ],

  overview:
    "A major bank required a Network Management & Monitoring Service (NMMS) to improve operations across 1932+ branches and 3500+ links, including end-to-end WAN management and vendor coordination.",

  challenge: [
    "Complex transition from the previous service provider.",
    "Coordination across multiple vendors and stakeholders.",
    "Maintaining consistently high uptime during operations transition.",
  ],

  approach: [
    "Deployed an on-site network team using bank-provided tools.",
    "Managed a seamless transition from the old provider.",
    "Implemented SLA-driven operations to ensure performance.",
  ],

  results: [
    "Improved network uptime through 24×7 monitoring.",
    "Enhanced operational efficiency across WAN operations.",
    "Scalable operations for new branches/links at no extra cost.",
  ],

  stack: ["NMMS", "24×7 Monitoring", "Vendor Coordination", "SLA Governance", "WAN Operations"],
},

{
  ...base,
  id: "sdwan-networking-office-automation",
  title: "Networking & Office Automation",
  subtitle: "High-availability wired/wireless networking aligned with office automation rollout.",
  cover: sdwan3,
  coverPos: "50% 15%",
  verticals: [],
  solutions: ["SD-WAN"],
  showInVerticals: false,
  showInSolutions: true,

  metrics: [
    { label: "Scope", value: "Network + Automation" },
    { label: "Mode", value: "Multi-location rollout" },
    { label: "Outcome", value: "On-time delivery" },
  ],

  overview:
    "A Chinese conglomerate setting up offices in India needed a complete wired/wireless networking and office automation solution. Commedia handled full solution delivery and execution.",

  challenge: [
    "Strict timelines with zero downtime expectations.",
    "Cost-effective delivery while maintaining high quality standards.",
    "Multi-location rollout requiring coordination across multiple OEMs.",
  ],

  approach: [
    "Deployed a full mesh network with high availability.",
    "Implemented solutions using CISCO, Avaya, and Polycom systems.",
    "Executed off-hours work to avoid business disruption and meet timelines.",
  ],

  results: [
    "Seamless deployment using top-class products.",
    "Zero disruption to business operations.",
    "Timely project completion across locations.",
  ],

  stack: ["High-Availability Mesh", "CISCO", "Avaya", "Polycom", "Off-hours Execution"],
},

/* =========================
 * SOLUTIONS — Network Security (✅ with images + real content)
 * ========================= */
{
  ...base,
  id: "sec-psu-infrastructure",
  title: "Secure Network Infrastructure for PSU",
  subtitle: "Managed SOC operations with SLA-driven response and multi-platform coordination.",
  cover: ns1,
  verticals: [],
  solutions: ["Network Security"],
  showInVerticals: false,
  showInSolutions: true,

  tags: ["Managed SOC", "Banking", "SLA/SOP", "24/7 Operations"],
  metrics: [
    { label: "Coverage", value: "PAN-India" },
    { label: "Platforms", value: "25+ security tools" },
    { label: "Resources", value: "59+" },
    { label: "Ops", value: "24x7" },
  ],

  overview:
    "A service provider needed managed SOC operations for a bank, including deployment of L1–L3 analysts and shift leads for PAN-India service delivery.",

  challenge: [
    "Strict SLA timelines and SOP adherence across operations.",
    "Improving response time and customer handling quality.",
    "Coordinating actions across 25+ security platforms and workflows.",
  ],

  approach: [
    "Delivered managed services spanning 25+ technologies and toolsets.",
    "Deployed 59+ resources across multiple levels (L1–L3 + shift leadership).",
    "Enabled 24x7 operations and supported NOC configuration where required.",
  ],

  results: [
    "Smooth rollout with high-level coordination across teams and tools.",
    "Strong technical + project management execution.",
    "Effective 24x7 operations supported by advanced platforms.",
  ],

  stack: ["SOC operations", "SLA/SOP governance", "Multi-tool coordination", "24/7 monitoring"],
},
{
  ...base,
  id: "sec-lic-collaboration-systems",
  title: "LIC Collaboration Systems",
  subtitle: "Cisco UC migration and VC rollout across 100+ boardrooms with enterprise-grade quality.",
  cover: ns2,
  verticals: [],
  solutions: ["Network Security"],
  showInVerticals: false,
  showInSolutions: true,

  tags: ["Cisco UC", "Video Conferencing", "Nationwide Rollout", "Boardrooms"],
  metrics: [
    { label: "Scale", value: "100+ boardrooms" },
    { label: "Upgrade", value: "Legacy UC → Cisco UC" },
    { label: "Infra", value: "VC + DC (Hyderabad)" },
    { label: "Outcome", value: "Migration complete" },
  ],

  overview:
    "LIC needed to upgrade 100+ boardrooms across India. Existing UC technology was outdated and required migration to Cisco UC, including full VC infrastructure and data center components in Hyderabad.",

  challenge: [
    "Rapid site surveys with architectural adjustments at multiple locations.",
    "Installing large and complex VC devices reliably and safely.",
    "Meeting high-end aesthetics and quality expectations in boardrooms.",
  ],

  approach: [
    "Conducted site surveys and captured requirements across locations.",
    "Installed ROOM70D and KITPLUS VC endpoints at scale.",
    "Set up call managers and meeting servers; configured licenses and features.",
  ],

  results: [
    "VC migration completed successfully across multiple locations.",
    "Customer satisfaction improved through Cisco’s advanced VC features and call flows.",
  ],

  stack: ["Cisco UC", "VC endpoints", "Call managers", "Meeting servers", "Rollout execution"],
},
{
  ...base,
  id: "sec-fortinet-device-migration",
  title: "Fortinet Device Migration",
  subtitle: "HA firewall rollout with centralized management, logs, and controlled policy migration.",
  cover: ns3,
  verticals: [],
  solutions: ["Network Security"],
  showInVerticals: false,
  showInSolutions: true,

  tags: ["FortiGate", "FortiManager", "FortiAnalyzer", "DC/DR Security"],
  metrics: [
    { label: "Devices", value: "FortiGate 3001F" },
    { label: "Sites", value: "DC + DR" },
    { label: "Control", value: "Centralized management" },
    { label: "Outcome", value: "Secure migration" },
  ],

  overview:
    "A bank migrated to FortiGate 3001F firewalls for DC and DR and needed centralized configuration and monitoring for operational consistency and compliance.",

  challenge: [
    "High availability firewall setup with minimal service impact.",
    "Centralized management through FortiManager (and FAZ for analytics/logs).",
    "Version control, policy migration, and software updates across environments.",
  ],

  approach: [
    "Analyzed existing security architecture thoroughly before migration.",
    "Deployed hyperscale FortiGate firewalls managed via FMG/FAZ.",
    "Migrated and validated policies; enabled centralized logging and event monitoring.",
  ],

  results: [
    "Highly secure FortiGate deployment with improved operational control.",
    "Template-based configuration and reporting for consistency.",
    "Customized delivery aligned to the bank’s requirements and change controls.",
  ],

  stack: ["FortiGate 3001F", "FortiManager", "FortiAnalyzer", "HA setup", "Policy migration"],
},
{
  ...base,
  id: "sec-isro-shipborne-terminal",
  title: "ISRO Shipborne Terminal",
  subtitle: "Redundant deep-sea communications paths for mission-critical TTC data transfer.",
  cover: ns4,
  verticals: [],
  solutions: ["Network Security"],
  showInVerticals: false,
  showInSolutions: true,

  tags: ["ISRO", "TTC", "Redundancy", "Deep-sea Communications"],
  metrics: [
    { label: "Mission", value: "Mars Orbiter Mission" },
    { label: "Stations", value: "2 deep-sea sites" },
    { label: "Need", value: "Long-distance TTC" },
    { label: "Outcome", value: "Reliable transfer" },
  ],

  overview:
    "ISRO required mission-critical communication for the Mars Orbiter Mission using two major shipborne terminal stations in deep sea, enabling long-distance telemetry, tracking, and command (TTC) transmission.",

  challenge: [
    "Remote deep-sea locations with complex logistics and deployment constraints.",
    "Mission-critical TTC transmission requirements and reliability expectations.",
    "Regulatory compliance and multi-stakeholder coordination.",
  ],

  approach: [
    "Partnered with ST for implementation and execution alignment.",
    "Designed robust and innovative solutions for operational reliability.",
    "Implemented fully redundant communication paths to ensure continuity.",
  ],

  results: [
    "Enabled successful launch support and mission tracking.",
    "Reliable and uninterrupted data transfer for TTC operations.",
  ],

  stack: ["Redundant paths", "Partner coordination", "Deep-sea logistics", "Compliance alignment"],
},

 /* =========================
 * SOLUTIONS — Wireless Networking (✅ real data + images)
 * ========================= */
{
  ...base,
  id: "wifi-campuswide-deployment",
  title: "Campuswide Wireless Deployment",
  subtitle: "Aruba-powered rollout across 100+ petroleum sites with secure access + long-term support.",
  cover: wn1,
  coverPos: "50% 15%",
  verticals: [],
  solutions: ["Wireless Networking"],
  showInVerticals: false,
  showInSolutions: true,

  tags: ["Aruba", "RADIUS", "PAN-India", "Managed Support"],
  metrics: [
    { label: "Sites", value: "100+ (PAN-India)" },
    { label: "Platform", value: "Aruba" },
    { label: "Auth", value: "RADIUS" },
    { label: "Support", value: "5 years" },
  ],

  overview:
    "A nationwide petroleum network required a secure Aruba wireless deployment across 100+ locations in India, along with monitoring and long-term operational support.",

  challenge: [
    "Coordination across multiple fuel stations and site teams.",
    "Software/hardware integration with centralized RADIUS authentication.",
    "Project management and execution across distributed locations.",
  ],

  approach: [
    "Deployed Aruba access points and switching across sites.",
    "Implemented RADIUS authentication and secure onboarding flows.",
    "Provided end-to-end rollout execution with monitoring and multi-year support.",
  ],

  results: [
    "Seamless rollout and integration across locations.",
    "Reliable Wi-Fi experience for users with secure access control.",
    "Stable operations backed by long-term monitoring and support.",
  ],

  stack: ["Aruba APs", "Aruba Switching", "RADIUS Auth", "Monitoring", "Managed Support"],
},

{
  ...base,
  id: "wifi-cisco-meraki-project",
  title: "Cisco Meraki WiFi Project",
  subtitle: "Migration to cloud-managed Wi-Fi with strong roaming, visibility, and control.",
  cover: wn2,
  verticals: [],
  solutions: ["Wireless Networking"],
  showInVerticals: false,
  showInSolutions: true,

  tags: ["Cisco Meraki", "Cloud-managed", "RADIUS", "Heatmap"],
  metrics: [
    { label: "APs", value: "60" },
    { label: "Floors", value: "4" },
    { label: "Platform", value: "Cisco Meraki" },
    { label: "Outcome", value: "Roaming + visibility" },
  ],

  overview:
    "A health insurer needed to migrate from traditional access points to Cisco Meraki WiFi, deploying ~60 APs across four floors with secure authentication and smooth roaming.",

  challenge: [
    "Seamless transition without disrupting user connectivity.",
    "RADIUS server integration and policy alignment.",
    "Ensuring strong roaming behavior and throughput across zones.",
  ],

  approach: [
    "Executed a POC with close customer collaboration.",
    "Performed heatmap-based planning and solution design.",
    "Implemented end-to-end rollout using Meraki Dashboard for centralized management.",
  ],

  results: [
    "Reliable roaming and high-speed Wi-Fi across all areas.",
    "Real-time cloud monitoring and simplified operations.",
    "Smooth connectivity improvements across all zones.",
  ],

  stack: ["Cisco Meraki APs", "Meraki Dashboard", "RADIUS Integration", "Site Survey/Heatmap"],
},

{
  ...base,
  id: "wifi-railway-execution",
  title: "Railway WiFi Execution",
  subtitle: "High-scale public Wi-Fi execution with zonal rollout and 24x7 NOC support.",
  cover: wn3,
  coverPos: "50% 15%",
  verticals: [],
  solutions: ["Wireless Networking"],
  showInVerticals: false,
  showInSolutions: true,

  tags: ["Public Wi-Fi", "Large-scale rollout", "QC", "24x7 NOC"],
  metrics: [
    { label: "Stations", value: "4791+" },
    { label: "Timeline", value: "60 days" },
    { label: "Execution", value: "Zonal rollout" },
    { label: "Ops", value: "24x7 NOC" },
  ],

  overview:
    "Indian Railways aimed to enable Wi-Fi across 4791+ stations with a tight 60-day delivery window, requiring strong zonal execution, quality control, and coordination.",

  challenge: [
    "High-scale deployment completion within 60 days.",
    "Permissions, multi-level stakeholder coordination, and on-ground readiness.",
    "Consistent quality and integration across multiple railway zones.",
  ],

  approach: [
    "Executed a zonal rollout strategy supported by shadow teams.",
    "Used a mobile app for project tracking and QC.",
    "Enabled round-the-clock NOC support to speed up execution and issue handling.",
  ],

  results: [
    "Targets achieved within timeline, with appreciation for execution quality.",
    "High-quality rollout across zones with consistent delivery standards.",
    "Strong multi-location execution success backed by 24x7 operations.",
  ],

  stack: ["Zonal Execution", "Mobile Tracking + QC", "24x7 NOC", "Field Coordination"],
},

];

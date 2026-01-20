// // src/app/case-studies/caseStudies.data.ts

// export type Vertical =
//   | "Service Provider"
//   | "Digital Media"
//   | "Enterprise"
//   | "Government";

// export type Solution =
//   | "Data Center"
//   | "SD-WAN"
//   | "Network Security"
//   | "Wireless Networking"
//   | "Digital Media";

// export type CaseStudyKind = "vertical" | "solution";

// export type CaseStudy = {
//   id: string;
//   kind: CaseStudyKind; // ✅ separates vertical cards vs solution cards

//   title: string;
//   subtitle: string;
//   cover: string;

//   vertical: Vertical;

//   // Tags shown on cards + modal
//   solutions: Solution[];

//   // ✅ used ONLY for grouping in Solutions mode (prevents duplicates across groups)
//   primarySolution?: Solution;

//   tags: string[];
//   metrics: { label: string; value: string }[];

//   overview: string;
//   challenge: string[];
//   approach: string[];
//   results: string[];
//   stack?: string[];
// };

// export const VERTICALS: Vertical[] = [
//   "Service Provider",
//   "Digital Media",
//   "Enterprise",
//   "Government",
// ];

// export const SOLUTIONS: Solution[] = [
//   "Data Center",
//   "SD-WAN",
//   "Network Security",
//   "Wireless Networking",
//   "Digital Media",
// ];

// // Reuse existing covers (safe). Replace later with your actual images.
// const COVERS = ["/case-studies/cs-1.jpg", "/case-studies/cs-2.jpg", "/case-studies/cs-3.jpg"];
// const coverAt = (i: number) => COVERS[i % COVERS.length];

// const baseMetrics = [
//   { label: "Scope", value: "Multi-site" },
//   { label: "Reliability", value: "Improved" },
//   { label: "Ops Load", value: "Reduced" },
// ];

// const baseText = {
//   overview:
//     "Delivered a scoped deployment with measurable outcomes, improved reliability, and repeatable operating procedures for long-term stability.",
//   challenge: [
//     "Fragmented tooling and inconsistent operational visibility.",
//     "Hard-to-predict performance during peak hours.",
//     "Manual processes increasing time-to-resolution.",
//   ],
//   approach: [
//     "Baseline assessment + rollout plan with checkpoints.",
//     "Deployment with validation gates and rollback strategy.",
//     "Standardized runbooks + monitoring and handover.",
//   ],
//   results: [
//     "More stable operations with fewer escalations.",
//     "Improved service quality and faster troubleshooting.",
//     "Cleaner standardization for future expansions.",
//   ],
// };

// export const CASE_STUDIES: CaseStudy[] = [
//   /* ------------------------------------------------------------------ */
//   /* VERTICALS: Service Provider (ONLY these 4) */
//   /* ------------------------------------------------------------------ */
//   {
//     id: "sp-video-streaming-private-network",
//     kind: "vertical",
//     title: "Video Streaming Solution on Private Network",
//     subtitle: "Low-latency private video delivery with consistent uptime.",
//     cover: coverAt(0),
//     vertical: "Service Provider",
//     solutions: ["Digital Media", "Network Security"],
//     tags: ["Service Provider", "Digital Media", "Network Security"],
//     metrics: baseMetrics,
//     overview:
//       "Implemented a private video streaming stack designed for consistent delivery, controlled access, and predictable performance across distributed sites.",
//     challenge: [
//       "Maintaining stable video quality across variable network conditions.",
//       "Securing access while supporting operational monitoring.",
//       "Reducing outages caused by inconsistent routing and policy.",
//     ],
//     approach: [
//       "Designed traffic paths for priority media flows.",
//       "Implemented access controls + secure segmentation policies.",
//       "Established monitoring dashboards and SOPs for NOC operations.",
//     ],
//     results: [
//       "Smoother video playback with fewer buffering events.",
//       "Stronger security boundaries for media access.",
//       "Reduced operational escalations via consistent monitoring.",
//     ],
//     stack: ["Private Network", "Streaming", "Segmentation", "Monitoring"],
//   },
//   {
//     id: "sp-seamless-video-noc-management",
//     kind: "vertical",
//     title: "Seamless Video NOC Management",
//     subtitle: "Centralized monitoring + faster response for media operations.",
//     cover: coverAt(1),
//     vertical: "Service Provider",
//     solutions: ["Digital Media"],
//     tags: ["Service Provider", "Digital Media"],
//     metrics: baseMetrics,
//     overview:
//       "Built a NOC workflow for media operations with clear escalation paths, consistent dashboards, and simplified incident response.",
//     challenge: [
//       "Disjointed visibility across multiple media touchpoints.",
//       "Slow incident triage due to scattered tools.",
//       "Operational overload during peak broadcast hours.",
//     ],
//     approach: [
//       "Unified monitoring views + alert thresholds.",
//       "Defined incident triage flows and escalation ladders.",
//       "Standardized reporting for daily/weekly operational reviews.",
//     ],
//     results: [
//       "Faster issue detection and triage.",
//       "Reduced manual coordination overhead.",
//       "Improved reliability through consistent operations.",
//     ],
//     stack: ["NOC Dashboards", "Alerting", "Runbooks", "Reporting"],
//   },
//   {
//     id: "sp-national-network-rollout-enterprise-wifi",
//     kind: "vertical",
//     title: "National Network Rollout for Enterprise Wi-Fi",
//     subtitle: "Multi-site Wi-Fi rollout with consistent policy and security.",
//     cover: coverAt(2),
//     vertical: "Service Provider",
//     solutions: ["Wireless Networking", "Network Security"],
//     tags: ["Service Provider", "Wireless Networking", "Network Security"],
//     metrics: baseMetrics,
//     overview:
//       "Delivered a nationwide wireless rollout with standardized deployment patterns, policy-driven access, and repeatable operational controls.",
//     challenge: [
//       "Inconsistent deployments across sites leading to roaming issues.",
//       "Difficulty maintaining standard security across zones.",
//       "Operational complexity across distributed teams.",
//     ],
//     approach: [
//       "Standardized site rollout templates and validations.",
//       "Implemented consistent security and onboarding workflows.",
//       "Created runbooks + post-deployment health checks.",
//     ],
//     results: [
//       "Improved roaming and site stability.",
//       "Cleaner security policy enforcement.",
//       "Reduced rollout friction with repeatable templates.",
//     ],
//     stack: ["Wi-Fi", "Access Control", "Segmentation", "Operations"],
//   },
//   {
//     id: "sp-global-enterprise-presales-support",
//     kind: "vertical",
//     title: "Global Enterprise Presales Support",
//     subtitle: "Solution architecture, sizing, and rollout planning support.",
//     cover: coverAt(0),
//     vertical: "Service Provider",
//     solutions: ["Network Security"],
//     tags: ["Service Provider", "Network Security"],
//     metrics: baseMetrics,
//     overview:
//       "Supported global presales efforts with architecture guidance, deployment planning, and security posture alignment for enterprise environments.",
//     challenge: [
//       "Rapidly scoping multi-region requirements.",
//       "Aligning security requirements with rollout timelines.",
//       "Reducing risk during design-to-deploy transitions.",
//     ],
//     approach: [
//       "Created reference architectures and validation checklists.",
//       "Mapped requirements to deployment patterns and controls.",
//       "Provided documentation for rollout + operational readiness.",
//     ],
//     results: [
//       "Faster presales cycles with clearer technical plans.",
//       "Reduced deployment risk through validated designs.",
//       "Improved stakeholder alignment with documented scope.",
//     ],
//     stack: ["Architecture", "Security", "Sizing", "Documentation"],
//   },

//   /* ------------------------------------------------------------------ */
//   /* VERTICALS: Digital Media (ONLY these 6) */
//   /* ------------------------------------------------------------------ */
//   {
//     id: "dm-video-headend-satellite-fiber",
//     kind: "vertical",
//     title: "Video Head-End Setup via Satellite & Fiber",
//     subtitle: "Hybrid head-end delivery designed for stable distribution.",
//     cover: coverAt(1),
//     vertical: "Digital Media",
//     solutions: ["Digital Media", "Data Center"],
//     tags: ["Digital Media", "Digital Media", "Data Center"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Head-End", "Satellite", "Fiber", "Monitoring"],
//   },
//   {
//     id: "dm-reduced-channel-opex-smart-upgrade",
//     kind: "vertical",
//     title: "Reduced Channel OPEX through Smart Network Upgrade",
//     subtitle: "Operational savings via network modernization and tooling.",
//     cover: coverAt(2),
//     vertical: "Digital Media",
//     solutions: ["Digital Media"],
//     tags: ["Digital Media", "Digital Media"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Network Upgrade", "Telemetry", "Automation"],
//   },
//   {
//     id: "dm-45m-cband-tvro-turnaround",
//     kind: "vertical",
//     title: "4.5M C Band TVRO Setup for Turnaround Services",
//     subtitle: "Reliable reception and turnaround for broadcast workflows.",
//     cover: coverAt(0),
//     vertical: "Digital Media",
//     solutions: ["Digital Media"],
//     tags: ["Digital Media", "Digital Media"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["TVRO", "RF", "Turnaround", "Ops"],
//   },
//   {
//     id: "dm-satellite-uplink-cas-integration",
//     kind: "vertical",
//     title: "Advanced Satellite Uplink with CAS Integration",
//     subtitle: "Secure uplink workflow with integrated conditional access.",
//     cover: coverAt(1),
//     vertical: "Digital Media",
//     solutions: ["Digital Media", "Network Security"],
//     tags: ["Digital Media", "Digital Media", "Network Security"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Uplink", "CAS", "Security", "Monitoring"],
//   },
//   {
//     id: "dm-enterprise-mam-platform-integration",
//     kind: "vertical",
//     title: "Enterprise MAM Platform Integration",
//     subtitle: "Unified media asset management workflows and automation.",
//     cover: coverAt(2),
//     vertical: "Digital Media",
//     solutions: ["Digital Media"],
//     tags: ["Digital Media", "Digital Media"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["MAM", "Workflow", "Integration", "Automation"],
//   },
//   {
//     id: "dm-multi-layer-compliance-monitoring",
//     kind: "vertical",
//     title: "Multi-Layer Compliance Monitoring System",
//     subtitle: "Compliance monitoring with reliable alerting and reporting.",
//     cover: coverAt(0),
//     vertical: "Digital Media",
//     solutions: ["Digital Media", "Network Security"],
//     tags: ["Digital Media", "Digital Media", "Network Security"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Compliance", "Monitoring", "Alerting", "Reporting"],
//   },

//   /* ------------------------------------------------------------------ */
//   /* VERTICALS: Enterprise (ONLY these 3) */
//   /* ------------------------------------------------------------------ */
//   {
//     id: "ent-chromaflo-it-infra-mumbai",
//     kind: "vertical",
//     title: "End-to-End IT Infrastructure for Chromaflo Technologies (Mumbai)",
//     subtitle: "Foundation infra design with stronger reliability and controls.",
//     cover: coverAt(1),
//     vertical: "Enterprise",
//     solutions: ["Data Center", "Network Security"],
//     tags: ["Enterprise", "Data Center", "Network Security"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Core Network", "Security", "Standardization"],
//   },
//   {
//     id: "ent-cex-wireless-infra-mumbai",
//     kind: "vertical",
//     title: "Wireless Network Infrastructure for CeX WeBuy (Mumbai)",
//     subtitle: "Stable Wi-Fi with policy-based access and cleaner roaming.",
//     cover: coverAt(2),
//     vertical: "Enterprise",
//     solutions: ["Wireless Networking", "Network Security"],
//     tags: ["Enterprise", "Wireless Networking", "Network Security"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Wi-Fi", "Access Control", "Monitoring"],
//   },
//   {
//     id: "ent-leeco-multi-location-wifi-office-automation",
//     kind: "vertical",
//     title: "Multi-Location Wi-Fi & Office Automation for LeEco (India)",
//     subtitle: "Multi-site connectivity with operational simplification.",
//     cover: coverAt(0),
//     vertical: "Enterprise",
//     solutions: ["Wireless Networking", "Network Security"],
//     tags: ["Enterprise", "Wireless Networking", "Network Security"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Wi-Fi", "Automation", "Operations"],
//   },

//   /* ------------------------------------------------------------------ */
//   /* VERTICALS: Government (ONLY these 3) */
//   /* ------------------------------------------------------------------ */
//   {
//     id: "gov-isro-istrac-noc-45-centers",
//     kind: "vertical",
//     title: "NOC Management Across 45 ISRO Centers (ISTRAC)",
//     subtitle: "Centralized operations with clearer visibility and response.",
//     cover: coverAt(2),
//     vertical: "Government",
//     solutions: ["Network Security", "Data Center"],
//     tags: ["Government", "Network Security", "Data Center"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["NOC", "Ops", "Monitoring", "Runbooks"],
//   },
//   {
//     id: "gov-isro-mars-mission-redundant-satellite-network",
//     kind: "vertical",
//     title: "Satellite Network with Redundancy for Mars Mission (ISRO)",
//     subtitle: "Redundant comms design with reliability-first operations.",
//     cover: coverAt(1),
//     vertical: "Government",
//     solutions: ["Digital Media", "Network Security"],
//     tags: ["Government", "Digital Media", "Network Security"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Redundancy", "Satellite", "Security", "Ops"],
//   },
//   {
//     id: "gov-enterprise-mam-platform-integration",
//     kind: "vertical",
//     title: "Enterprise MAM Platform Integration",
//     subtitle: "Media workflow integration for institutional operations.",
//     cover: coverAt(0),
//     vertical: "Government",
//     solutions: ["Digital Media"],
//     tags: ["Government", "Digital Media"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["MAM", "Workflow", "Integration"],
//   },

//   /* ------------------------------------------------------------------ */
//   /* SOLUTIONS: Data Center (ONLY these 5) */
//   /* ------------------------------------------------------------------ */
//   {
//     id: "sol-dc-chhattisgarh-statewide-network",
//     kind: "solution",
//     primarySolution: "Data Center",
//     title: "Chhattisgarh Statewide Network",
//     subtitle: "Core infrastructure modernization for statewide operations.",
//     cover: coverAt(1),
//     vertical: "Government",
//     solutions: ["Data Center"],
//     tags: ["Data Center"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Core", "Routing", "Ops"],
//   },
//   {
//     id: "sol-dc-tech-upgrade",
//     kind: "solution",
//     primarySolution: "Data Center",
//     title: "Data Center Tech Upgrade",
//     subtitle: "Infrastructure refresh with smoother operations and handover.",
//     cover: coverAt(2),
//     vertical: "Service Provider",
//     solutions: ["Data Center"],
//     tags: ["Data Center"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Refresh", "Validation", "Change Control"],
//   },
//   {
//     id: "sol-dc-banking-ops",
//     kind: "solution",
//     primarySolution: "Data Center",
//     title: "Banking Data Center Ops",
//     subtitle: "Operational improvements for banking-grade environments.",
//     cover: coverAt(0),
//     vertical: "Enterprise",
//     solutions: ["Data Center"],
//     tags: ["Data Center"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Ops", "Monitoring", "SOPs"],
//   },
//   {
//     id: "sol-dc-embassy-wan-deployment",
//     kind: "solution",
//     primarySolution: "Data Center",
//     title: "Embassy WAN Deployment",
//     subtitle: "Secure connectivity with controlled deployment approach.",
//     cover: coverAt(1),
//     vertical: "Government",
//     solutions: ["Data Center"],
//     tags: ["Data Center"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["WAN", "Security", "Operations"],
//   },
//   {
//     id: "sol-dc-chromaflo-setup",
//     kind: "solution",
//     primarySolution: "Data Center",
//     title: "Chromaflo Data Center Setup",
//     subtitle: "Data center setup and standardization for enterprise needs.",
//     cover: coverAt(2),
//     vertical: "Enterprise",
//     solutions: ["Data Center"],
//     tags: ["Data Center"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Setup", "Standardization", "Monitoring"],
//   },

//   /* ------------------------------------------------------------------ */
//   /* SOLUTIONS: SD-WAN (ONLY these 3) */
//   /* ------------------------------------------------------------------ */
//   {
//     id: "sol-sdwan-retail-chain",
//     kind: "solution",
//     primarySolution: "SD-WAN",
//     title: "SD-WAN Deployment for Retail Chain",
//     subtitle: "Branch connectivity improvements with cleaner policy control.",
//     cover: coverAt(0),
//     vertical: "Enterprise",
//     solutions: ["SD-WAN"],
//     tags: ["SD-WAN"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["SD-WAN", "Policy", "Telemetry"],
//   },
//   {
//     id: "sol-sdwan-indian-bank-ops",
//     kind: "solution",
//     primarySolution: "SD-WAN",
//     title: "Indian Bank SDWAN Ops",
//     subtitle: "Operational stability and visibility for banking WAN.",
//     cover: coverAt(1),
//     vertical: "Enterprise",
//     solutions: ["SD-WAN"],
//     tags: ["SD-WAN"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["SD-WAN", "Ops", "Monitoring"],
//   },
//   {
//     id: "sol-sdwan-networking-office-automation",
//     kind: "solution",
//     primarySolution: "SD-WAN",
//     title: "Networking & Office Automation",
//     subtitle: "Connectivity and automation aligned to business workflows.",
//     cover: coverAt(2),
//     vertical: "Enterprise",
//     solutions: ["SD-WAN"],
//     tags: ["SD-WAN"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Connectivity", "Automation", "Ops"],
//   },

//   /* ------------------------------------------------------------------ */
//   /* SOLUTIONS: Network Security (ONLY these 4) */
//   /* ------------------------------------------------------------------ */
//   {
//     id: "sol-secure-network-psu",
//     kind: "solution",
//     primarySolution: "Network Security",
//     title: "Secure Network Infrastructure for PSU",
//     subtitle: "Hardening and segmentation for PSU environments.",
//     cover: coverAt(1),
//     vertical: "Government",
//     solutions: ["Network Security"],
//     tags: ["Network Security"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Segmentation", "Policies", "Controls"],
//   },
//   {
//     id: "sol-lic-collaboration-systems",
//     kind: "solution",
//     primarySolution: "Network Security",
//     title: "LIC Collaboration Systems",
//     subtitle: "Secure collaboration and controlled access workflows.",
//     cover: coverAt(2),
//     vertical: "Government",
//     solutions: ["Network Security"],
//     tags: ["Network Security"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Security", "Access Control", "Ops"],
//   },
//   {
//     id: "sol-fortinet-device-migration",
//     kind: "solution",
//     primarySolution: "Network Security",
//     title: "Fortinet Device Migration",
//     subtitle: "Migration planning and execution with minimal downtime.",
//     cover: coverAt(0),
//     vertical: "Enterprise",
//     solutions: ["Network Security"],
//     tags: ["Network Security"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Firewall", "Migration", "Validation"],
//   },
//   {
//     id: "sol-isro-shipborne-terminal",
//     kind: "solution",
//     primarySolution: "Network Security",
//     title: "ISRO Shipborne Terminal",
//     subtitle: "Secure comms setup for mission-grade operations.",
//     cover: coverAt(1),
//     vertical: "Government",
//     solutions: ["Network Security"],
//     tags: ["Network Security"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Security", "Ops", "Monitoring"],
//   },

//   /* ------------------------------------------------------------------ */
//   /* SOLUTIONS: Wireless Networking (ONLY these 5) */
//   /* ------------------------------------------------------------------ */
//   {
//     id: "sol-wifi-campuswide-deployment",
//     kind: "solution",
//     primarySolution: "Wireless Networking",
//     title: "Campuswide Wireless Deployment",
//     subtitle: "High-coverage Wi-Fi with consistent roaming.",
//     cover: coverAt(2),
//     vertical: "Enterprise",
//     solutions: ["Wireless Networking"],
//     tags: ["Wireless Networking"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Wi-Fi", "RF", "Monitoring"],
//   },
//   {
//     id: "sol-wifi-cisco-meraki-project",
//     kind: "solution",
//     primarySolution: "Wireless Networking",
//     title: "Cisco Meraki WiFi Project",
//     subtitle: "Policy-driven wireless with simplified operations.",
//     cover: coverAt(0),
//     vertical: "Enterprise",
//     solutions: ["Wireless Networking"],
//     tags: ["Wireless Networking"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Meraki", "Policy", "Ops"],
//   },
//   {
//     id: "sol-wifi-railway-execution",
//     kind: "solution",
//     primarySolution: "Wireless Networking",
//     title: "Railway WiFi Execution",
//     subtitle: "Public Wi-Fi execution with operational readiness.",
//     cover: coverAt(1),
//     vertical: "Government",
//     solutions: ["Wireless Networking"],
//     tags: ["Wireless Networking"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Wi-Fi", "Operations", "Monitoring"],
//   },
//   {
//     id: "sol-wifi-leeco-it-infrastructure",
//     kind: "solution",
//     primarySolution: "Wireless Networking",
//     title: "LeEco IT Infrastructure",
//     subtitle: "Wireless foundation built for enterprise operations.",
//     cover: coverAt(2),
//     vertical: "Enterprise",
//     solutions: ["Wireless Networking"],
//     tags: ["Wireless Networking"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Wi-Fi", "Access", "Ops"],
//   },
//   {
//     id: "sol-wifi-cex-wireless-setup",
//     kind: "solution",
//     primarySolution: "Wireless Networking",
//     title: "CeX Wireless Setup",
//     subtitle: "Retail-grade Wi-Fi with stable roaming and control.",
//     cover: coverAt(0),
//     vertical: "Enterprise",
//     solutions: ["Wireless Networking"],
//     tags: ["Wireless Networking"],
//     metrics: baseMetrics,
//     ...baseText,
//     stack: ["Wi-Fi", "RF", "Access Control"],
//   },
// ];



import type { StaticImageData } from "next/image";

// ✅ Service Provider images you already added
import sp1 from "../../../assets/case studies/sp1.png";
import sp2 from "../../../assets/case studies/sp2.png";
import sp3 from "../../../assets/case studies/sp3.png";
import sp4 from "../../../assets/case studies/sp4.png";

export type Vertical =
  | "Service Provider"
  | "Digital Media"
  | "Enterprise"
  | "Government";

export type Solution =
  | "Data Center"
  | "SD-WAN"
  | "Network Security"
  | "Wireless Networking"
  | "Digital Media";

export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;

  // ✅ can be imported image or null (we render a nice fallback)
  cover?: StaticImageData | string | null;

  // ✅ supports cases that belong to multiple verticals (ex: MAM integration)
  verticals: Vertical[];

  // ✅ same as before
  solutions: Solution[];

  // ✅ controls what shows in each toggle (prevents mixing)
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
  "Digital Media",
];

// helper (keeps things consistent while you finalize content later)
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
   * VERTICALS — Service Provider (✅ with images)
   * ========================= */
  {
    id: "sp-video-streaming-private-network",
    title: "Video Streaming Solution on Private Network",
    subtitle: "Low-latency private video delivery with consistent uptime.",
    cover: sp1,
    verticals: ["Service Provider"],
    solutions: [], // not listed under Solutions in your list (so keep empty)
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },
  {
    id: "sp-seamless-video-noc-management",
    title: "Seamless Video NOC Management",
    subtitle: "Centralized monitoring + faster response for media operations.",
    cover: sp2,
    verticals: ["Service Provider"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },
  {
    id: "sp-national-network-rollout-enterprise-wifi",
    title: "National Network Rollout for Enterprise Wi-Fi",
    subtitle: "Multi-site Wi-Fi rollout with consistent policy and security.",
    cover: sp3,
    verticals: ["Service Provider"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },
  {
    id: "sp-global-enterprise-presales-support",
    title: "Global Enterprise Presales Support",
    subtitle: "Solution architecture, sizing, and rollout planning support.",
    cover: sp4,
    verticals: ["Service Provider"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },

  /* =========================
   * VERTICALS — Digital Media
   * ========================= */
  {
    id: "dm-video-headend-satellite-fiber",
    title: "Video Head-End Setup via Satellite & Fiber",
    subtitle: "Robust head-end infrastructure for satellite + fiber feeds.",
    cover: null,
    verticals: ["Digital Media"],
    solutions: ["Digital Media"],
    showInVerticals: true,
    showInSolutions: true,
    ...base,
  },
  {
    id: "dm-reduced-channel-opex-smart-upgrade",
    title: "Reduced Channel OPEX through Smart Network Upgrade",
    subtitle: "Lower recurring costs with modernization and better monitoring.",
    cover: null,
    verticals: ["Digital Media"],
    solutions: ["Digital Media"],
    showInVerticals: true,
    showInSolutions: true,
    ...base,
  },
  {
    id: "dm-45m-cband-tvro-turnaround",
    title: "4.5M C Band TVRO Setup for Turnaround Services",
    subtitle: "Fast deployment for reliable turnaround operations.",
    cover: null,
    verticals: ["Digital Media"],
    solutions: ["Digital Media"],
    showInVerticals: true,
    showInSolutions: true,
    ...base,
  },
  {
    id: "dm-advanced-uplink-cas-integration",
    title: "Advanced Satellite Uplink with CAS Integration",
    subtitle: "Secure uplink workflow with CAS compatibility.",
    cover: null,
    verticals: ["Digital Media"],
    solutions: ["Digital Media"],
    showInVerticals: true,
    showInSolutions: true,
    ...base,
  },
  {
    id: "mam-platform-integration",
    title: "Enterprise MAM Platform Integration",
    subtitle: "Unified media asset workflows across teams and locations.",
    cover: null,
    verticals: ["Digital Media", "Government"], // ✅ appears in both sections
    solutions: ["Digital Media"],
    showInVerticals: true,
    showInSolutions: true,
    ...base,
  },
  {
    id: "dm-multi-layer-compliance-monitoring",
    title: "Multi-Layer Compliance Monitoring System",
    subtitle: "Automated checks for content compliance and audit readiness.",
    cover: null,
    verticals: ["Digital Media"],
    solutions: ["Digital Media"],
    showInVerticals: true,
    showInSolutions: true,
    ...base,
  },

  /* =========================
   * VERTICALS — Enterprise
   * ========================= */
  {
    id: "ent-chromaflo-end-to-end-it-infra",
    title: "End-to-End IT Infrastructure for Chromaflo Technologies (Mumbai)",
    subtitle: "Core IT + network foundation with clean operations.",
    cover: null,
    verticals: ["Enterprise"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },
  {
    id: "ent-cex-wireless-infra-mumbai",
    title: "Wireless Network Infrastructure for CeX WeBuy (Mumbai)",
    subtitle: "High-performance Wi-Fi with stable roaming and control.",
    cover: null,
    verticals: ["Enterprise"],
    solutions: ["Wireless Networking"], // ✅ also appears under Wireless solutions
    showInVerticals: true,
    showInSolutions: true,
    ...base,
  },
  {
    id: "ent-leeco-multi-location-wifi-office-automation",
    title: "Multi-Location Wi-Fi & Office Automation for LeEco (India)",
    subtitle: "Multi-branch wireless + office automation rollout.",
    cover: null,
    verticals: ["Enterprise"],
    solutions: ["Wireless Networking"], // ✅ also appears under Wireless solutions
    showInVerticals: true,
    showInSolutions: true,
    ...base,
  },

  /* =========================
   * VERTICALS — Government
   * ========================= */
  {
    id: "gov-noc-management-45-isro-centers",
    title: "NOC Management Across 45 ISRO Centers (ISTRAC)",
    subtitle: "Operational visibility and standardized incident handling.",
    cover: null,
    verticals: ["Government"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },
  {
    id: "gov-satellite-network-redundancy-mars-mission",
    title: "Satellite Network with Redundancy for Mars Mission (ISRO)",
    subtitle: "Redundant design for resilient mission communications.",
    cover: null,
    verticals: ["Government"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },

  /* =========================
   * SOLUTIONS — Data Center (solution-only)
   * ========================= */
  {
    id: "dc-chhattisgarh-statewide-network",
    title: "Chhattisgarh Statewide Network",
    subtitle: "Statewide backbone modernization and operations readiness.",
    cover: null,
    verticals: [],
    solutions: ["Data Center"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },
  {
    id: "dc-data-center-tech-upgrade",
    title: "Data Center Tech Upgrade",
    subtitle: "Modernized DC stack to improve reliability and provisioning.",
    cover: null,
    verticals: [],
    solutions: ["Data Center"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },
  {
    id: "dc-banking-data-center-ops",
    title: "Banking Data Center Ops",
    subtitle: "Operational hardening, monitoring, and process runbooks.",
    cover: null,
    verticals: [],
    solutions: ["Data Center"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },
  {
    id: "dc-embassy-wan-deployment",
    title: "Embassy WAN Deployment",
    subtitle: "Secure connectivity and managed operations across locations.",
    cover: null,
    verticals: [],
    solutions: ["Data Center"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },
  {
    id: "dc-chromaflo-data-center-setup",
    title: "Chromaflo Data Center Setup",
    subtitle: "DC setup + operational handover for enterprise workloads.",
    cover: null,
    verticals: [],
    solutions: ["Data Center"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },

  /* =========================
   * SOLUTIONS — SD-WAN (solution-only)
   * ========================= */
  {
    id: "sdwan-retail-chain-deployment",
    title: "SD-WAN Deployment for Retail Chain",
    subtitle: "Consistent policy and better uptime across branch networks.",
    cover: null,
    verticals: [],
    solutions: ["SD-WAN"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },
  {
    id: "sdwan-indian-bank-ops",
    title: "Indian Bank SDWAN Ops",
    subtitle: "Centralized operations and troubleshooting improvements.",
    cover: null,
    verticals: [],
    solutions: ["SD-WAN"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },
  {
    id: "sdwan-networking-office-automation",
    title: "Networking & Office Automation",
    subtitle: "Network modernization aligned with workplace automation needs.",
    cover: null,
    verticals: [],
    solutions: ["SD-WAN"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },

  /* =========================
   * SOLUTIONS — Network Security (solution-only)
   * ========================= */
  {
    id: "sec-psu-infrastructure",
    title: "Secure Network Infrastructure for PSU",
    subtitle: "Segmentation and access controls for critical environments.",
    cover: null,
    verticals: [],
    solutions: ["Network Security"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },
  {
    id: "sec-lic-collaboration-systems",
    title: "LIC Collaboration Systems",
    subtitle: "Secure collaboration stack design and rollout support.",
    cover: null,
    verticals: [],
    solutions: ["Network Security"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },
  {
    id: "sec-fortinet-device-migration",
    title: "Fortinet Device Migration",
    subtitle: "Controlled migration with validation and minimal downtime.",
    cover: null,
    verticals: [],
    solutions: ["Network Security"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },
  {
    id: "sec-isro-shipborne-terminal",
    title: "ISRO Shipborne Terminal",
    subtitle: "Secure connectivity for mission-critical shipborne systems.",
    cover: null,
    verticals: [],
    solutions: ["Network Security"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },

  /* =========================
   * SOLUTIONS — Wireless Networking
   * ========================= */
  {
    id: "wifi-campuswide-deployment",
    title: "Campuswide Wireless Deployment",
    subtitle: "High-density wireless with stable roaming and coverage.",
    cover: null,
    verticals: [],
    solutions: ["Wireless Networking"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },
  {
    id: "wifi-cisco-meraki-project",
    title: "Cisco Meraki WiFi Project",
    subtitle: "Managed Wi-Fi rollout with visibility and controls.",
    cover: null,
    verticals: [],
    solutions: ["Wireless Networking"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },
  {
    id: "wifi-railway-execution",
    title: "Railway WiFi Execution",
    subtitle: "Execution support for large public Wi-Fi environments.",
    cover: null,
    verticals: [],
    solutions: ["Wireless Networking"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },

  // ✅ these are shared with Enterprise verticals already:
  // - ent-leeco-multi-location-wifi-office-automation
  // - ent-cex-wireless-infra-mumbai
];

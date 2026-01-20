

// import type { StaticImageData } from "next/image";

// /* =========================
//  * Service Provider
//  * ========================= */
// import sp1 from "../../../assets/case studies/sp1.png";
// import sp2 from "../../../assets/case studies/sp2.png";
// import sp3 from "../../../assets/case studies/sp3.png";
// import sp4 from "../../../assets/case studies/sp4.png";

// /* =========================
//  * Digital Media (Dm1..Dm6)
//  * ========================= */
// import dm1 from "../../../assets/case studies/Dm1.png";
// import dm2 from "../../../assets/case studies/Dm2.png";
// import dm3 from "../../../assets/case studies/Dm3.png";
// import dm4 from "../../../assets/case studies/Dm4.png";
// import dm5 from "../../../assets/case studies/Dm5.png";
// import dm6 from "../../../assets/case studies/Dm6.png";

// /* =========================
//  * Enterprise (En1..En3)
//  * ========================= */
// import en1 from "../../../assets/case studies/En1.png";
// import en2 from "../../../assets/case studies/En2.png";
// import en3 from "../../../assets/case studies/En3.png";

// /* =========================
//  * Government (Go1..Go3)
//  * ========================= */
// import go1 from "../../../assets/case studies/Go1.png";
// import go2 from "../../../assets/case studies/Go2.png";
// import go3 from "../../../assets/case studies/Go3.png";

// export type Vertical = "Service Provider" | "Digital Media" | "Enterprise" | "Government";

// export type Solution =
//   | "Data Center"
//   | "SD-WAN"
//   | "Network Security"
//   | "Wireless Networking"
//   | "Digital Media";

// export type CaseStudy = {
//   id: string;
//   title: string;
//   subtitle: string;

//   // ✅ single cover (default)
//   cover?: StaticImageData | string | null;

//   // ✅ optional per-vertical override (needed for MAM which appears in 2 verticals)
//   coverByVertical?: Partial<Record<Vertical, StaticImageData | string | null>>;

//   // ✅ object-position (fix cut-off)
//   coverPos?: string;

//   // ✅ optional per-vertical position override
//   coverPosByVertical?: Partial<Record<Vertical, string>>;

//   verticals: Vertical[];
//   solutions: Solution[];

//   showInVerticals?: boolean;
//   showInSolutions?: boolean;

//   tags: string[];
//   metrics: { label: string; value: string }[];

//   overview: string;
//   challenge: string[];
//   approach: string[];
//   results: string[];
//   stack?: string[];
// };

// export const VERTICALS: Vertical[] = ["Service Provider", "Digital Media", "Enterprise", "Government"];

// export const SOLUTIONS: Solution[] = [
//   "Data Center",
//   "SD-WAN",
//   "Network Security",
//   "Wireless Networking",
//   "Digital Media",
// ];

// const base = {
//   tags: [] as string[],
//   metrics: [
//     { label: "Scope", value: "Multi-site" },
//     { label: "Reliability", value: "Improved" },
//     { label: "Ops Load", value: "Reduced" },
//   ],
//   overview: "Customer success story with measurable outcomes.",
//   challenge: ["Legacy constraints", "Scale + reliability needs", "Operational complexity"],
//   approach: ["Assessment + design", "Phased rollout", "Validation + handover"],
//   results: ["Improved stability", "Faster issue resolution", "Lower operational overhead"],
//   stack: ["Planning", "Execution", "Monitoring"],
// };

// export const CASE_STUDIES: CaseStudy[] = [
//   /* =========================
//    * VERTICALS — Service Provider
//    * ========================= */
//   {
//     id: "sp-video-streaming-private-network",
//     title: "Video Streaming Solution on Private Network",
//     subtitle: "Low-latency private video delivery with consistent uptime.",
//     cover: sp1,
//     verticals: ["Service Provider"],
//     solutions: [],
//     showInVerticals: true,
//     showInSolutions: false,
//     ...base,
//   },
//   {
//     id: "sp-seamless-video-noc-management",
//     title: "Seamless Video NOC Management",
//     subtitle: "Centralized monitoring + faster response for media operations.",
//     cover: sp2,
//     coverPos: "50% 20%",
//     verticals: ["Service Provider"],
//     solutions: [],
//     showInVerticals: true,
//     showInSolutions: false,
//     ...base,
//   },
//   {
//     id: "sp-national-network-rollout-enterprise-wifi",
//     title: "National Network Rollout for Enterprise Wi-Fi",
//     subtitle: "Multi-site Wi-Fi rollout with consistent policy and security.",
//     cover: sp3,
//     coverPos: "50% 14%", // ✅ brings subject down / prevents head cut-off
//     verticals: ["Service Provider"],
//     solutions: [],
//     showInVerticals: true,
//     showInSolutions: false,
//     ...base,
//   },
//   {
//     id: "sp-global-enterprise-presales-support",
//     title: "Global Enterprise Presales Support",
//     subtitle: "Solution architecture, sizing, and rollout planning support.",
//     cover: sp4,
//     coverPos: "50% 17%", // ✅ same fix
//     verticals: ["Service Provider"],
//     solutions: [],
//     showInVerticals: true,
//     showInSolutions: false,
//     ...base,
//   },

//   /* =========================
//    * VERTICALS — Digital Media (Dm1..Dm6)
//    * ========================= */
//   {
//     id: "dm-video-headend-satellite-fiber",
//     title: "Video Head-End Setup via Satellite & Fiber",
//     subtitle: "Robust head-end infrastructure for satellite + fiber feeds.",
//     cover: dm1,
//     verticals: ["Digital Media"],
//     solutions: ["Digital Media"],
//     showInVerticals: true,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "dm-reduced-channel-opex-smart-upgrade",
//     title: "Reduced Channel OPEX through Smart Network Upgrade",
//     subtitle: "Lower recurring costs with modernization and better monitoring.",
//     cover: dm2,
//     verticals: ["Digital Media"],
//     solutions: ["Digital Media"],
//     showInVerticals: true,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "dm-45m-cband-tvro-turnaround",
//     title: "4.5M C Band TVRO Setup for Turnaround Services",
//     subtitle: "Fast deployment for reliable turnaround operations.",
//     cover: dm3,
//     verticals: ["Digital Media"],
//     solutions: ["Digital Media"],
//     showInVerticals: true,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "dm-advanced-uplink-cas-integration",
//     title: "Advanced Satellite Uplink with CAS Integration",
//     subtitle: "Secure uplink workflow with CAS compatibility.",
//     cover: dm4,
//       coverPos: "50% 17%",
//     verticals: ["Digital Media"],
//     solutions: ["Digital Media"],
//     showInVerticals: true,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "mam-platform-integration",
//     title: "Enterprise MAM Platform Integration",
//     subtitle: "Unified media asset workflows across teams and locations.",
//     // ✅ use different cover depending on the vertical section
//     cover: dm5, // default (also used in Solutions mode)
//      coverPos: "50% 22%",
//     coverByVertical: {
//       "Digital Media": dm5,
//       "Government": go3,
//     },
//     verticals: ["Digital Media", "Government"],
//     solutions: ["Digital Media"],
//     showInVerticals: true,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "dm-multi-layer-compliance-monitoring",
//     title: "Multi-Layer Compliance Monitoring System",
//     subtitle: "Automated checks for content compliance and audit readiness.",
//     cover: dm6,
//     coverPos: "50% 22%",
//     verticals: ["Digital Media"],
//     solutions: ["Digital Media"],
//     showInVerticals: true,
//     showInSolutions: true,
//     ...base,
//   },

//   /* =========================
//    * VERTICALS — Enterprise (En1..En3)
//    * ========================= */
//   {
//     id: "ent-chromaflo-end-to-end-it-infra",
//     title: "End-to-End IT Infrastructure for Chromaflo Technologies (Mumbai)",
//     subtitle: "Core IT + network foundation with clean operations.",
//     cover: en1,
//     verticals: ["Enterprise"],
//     solutions: [],
//     showInVerticals: true,
//     showInSolutions: false,
//     ...base,  
//   },
//   {
//     id: "ent-cex-wireless-infra-mumbai",
//     title: "Wireless Network Infrastructure for CeX WeBuy (Mumbai)",
//     subtitle: "High-performance Wi-Fi with stable roaming and control.",
//     cover: en2,
//     coverPos: "50% 19%",
//     verticals: ["Enterprise"],
//     solutions: ["Wireless Networking"],
//     showInVerticals: true,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "ent-leeco-multi-location-wifi-office-automation",
//     title: "Multi-Location Wi-Fi & Office Automation for LeEco (India)",
//     subtitle: "Multi-branch wireless + office automation rollout.",
//     cover: en3,
//     verticals: ["Enterprise"],
//     solutions: ["Wireless Networking"],
//     showInVerticals: true,
//     showInSolutions: true,
//     ...base,
//   },

//   /* =========================
//    * VERTICALS — Government (Go1..Go2 + MAM uses Go3 via coverByVertical)
//    * ========================= */
//   {
//     id: "gov-noc-management-45-isro-centers",
//     title: "NOC Management Across 45 ISRO Centers (ISTRAC)",
//     subtitle: "Operational visibility and standardized incident handling.",
//     cover: go1,
//     verticals: ["Government"],
//     solutions: [],
//     showInVerticals: true,
//     showInSolutions: false,
//     ...base,
//   },
//   {
//     id: "gov-satellite-network-redundancy-mars-mission",
//     title: "Satellite Network with Redundancy for Mars Mission (ISRO)",
//     subtitle: "Redundant design for resilient mission communications.",
//     cover: go2,
//     verticals: ["Government"],
//     solutions: [],
//     showInVerticals: true,
//     showInSolutions: false,
//     ...base,
//   },

//   /* =========================
//    * SOLUTIONS — (kept as-is for now)
//    * ========================= */
//   {
//     id: "dc-chhattisgarh-statewide-network",
//     title: "Chhattisgarh Statewide Network",
//     subtitle: "Statewide backbone modernization and operations readiness.",
//     cover: null,
//     verticals: [],
//     solutions: ["Data Center"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "dc-data-center-tech-upgrade",
//     title: "Data Center Tech Upgrade",
//     subtitle: "Modernized DC stack to improve reliability and provisioning.",
//     cover: null,
//     verticals: [],
//     solutions: ["Data Center"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "dc-banking-data-center-ops",
//     title: "Banking Data Center Ops",
//     subtitle: "Operational hardening, monitoring, and process runbooks.",
//     cover: null,
//     verticals: [],
//     solutions: ["Data Center"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "dc-embassy-wan-deployment",
//     title: "Embassy WAN Deployment",
//     subtitle: "Secure connectivity and managed operations across locations.",
//     cover: null,
//     verticals: [],
//     solutions: ["Data Center"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "dc-chromaflo-data-center-setup",
//     title: "Chromaflo Data Center Setup",
//     subtitle: "DC setup + operational handover for enterprise workloads.",
//     cover: null,
//     verticals: [],
//     solutions: ["Data Center"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "sdwan-retail-chain-deployment",
//     title: "SD-WAN Deployment for Retail Chain",
//     subtitle: "Consistent policy and better uptime across branch networks.",
//     cover: null,
//     verticals: [],
//     solutions: ["SD-WAN"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "sdwan-indian-bank-ops",
//     title: "Indian Bank SDWAN Ops",
//     subtitle: "Centralized operations and troubleshooting improvements.",
//     cover: null,
//     verticals: [],
//     solutions: ["SD-WAN"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "sdwan-networking-office-automation",
//     title: "Networking & Office Automation",
//     subtitle: "Network modernization aligned with workplace automation needs.",
//     cover: null,
//     verticals: [],
//     solutions: ["SD-WAN"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "sec-psu-infrastructure",
//     title: "Secure Network Infrastructure for PSU",
//     subtitle: "Segmentation and access controls for critical environments.",
//     cover: null,
//     verticals: [],
//     solutions: ["Network Security"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "sec-lic-collaboration-systems",
//     title: "LIC Collaboration Systems",
//     subtitle: "Secure collaboration stack design and rollout support.",
//     cover: null,
//     verticals: [],
//     solutions: ["Network Security"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "sec-fortinet-device-migration",
//     title: "Fortinet Device Migration",
//     subtitle: "Controlled migration with validation and minimal downtime.",
//     cover: null,
//     verticals: [],
//     solutions: ["Network Security"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "sec-isro-shipborne-terminal",
//     title: "ISRO Shipborne Terminal",
//     subtitle: "Secure connectivity for mission-critical shipborne systems.",
//     cover: null,
//     verticals: [],
//     solutions: ["Network Security"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "wifi-campuswide-deployment",
//     title: "Campuswide Wireless Deployment",
//     subtitle: "High-density wireless with stable roaming and coverage.",
//     cover: null,
//     verticals: [],
//     solutions: ["Wireless Networking"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "wifi-cisco-meraki-project",
//     title: "Cisco Meraki WiFi Project",
//     subtitle: "Managed Wi-Fi rollout with visibility and controls.",
//     cover: null,
//     verticals: [],
//     solutions: ["Wireless Networking"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
//   {
//     id: "wifi-railway-execution",
//     title: "Railway WiFi Execution",
//     subtitle: "Execution support for large public Wi-Fi environments.",
//     cover: null,
//     verticals: [],
//     solutions: ["Wireless Networking"],
//     showInVerticals: false,
//     showInSolutions: true,
//     ...base,
//   },
// ];



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
   * VERTICALS — Service Provider
   * ========================= */
  {
    id: "sp-video-streaming-private-network",
    title: "Video Streaming Solution on Private Network",
    subtitle: "Low-latency private video delivery with consistent uptime.",
    cover: sp1,
    verticals: ["Service Provider"],
    solutions: [],
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
    // ✅ push image down a bit in modal to avoid cutting off
    coverPos: "50% 12%",
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
    // ✅ push image down a bit in modal to avoid cutting off
    coverPos: "50% 15%",
    verticals: ["Service Provider"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },

  /* =========================
   * VERTICALS — Digital Media (✅ with images)
   * ========================= */
  {
    id: "dm-video-headend-satellite-fiber",
    title: "Video Head-End Setup via Satellite & Fiber",
    subtitle: "Robust head-end infrastructure for satellite + fiber feeds.",
    cover: dm1,
    verticals: ["Digital Media"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false, // ✅ remove Digital Media from Solutions side
    ...base,
  },
  {
    id: "dm-reduced-channel-opex-smart-upgrade",
    title: "Reduced Channel OPEX through Smart Network Upgrade",
    subtitle: "Lower recurring costs with modernization and better monitoring.",
    cover: dm2,
    verticals: ["Digital Media"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },
  {
    id: "dm-45m-cband-tvro-turnaround",
    title: "4.5M C Band TVRO Setup for Turnaround Services",
    subtitle: "Fast deployment for reliable turnaround operations.",
    cover: dm3,
    verticals: ["Digital Media"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },
  {
    id: "dm-advanced-uplink-cas-integration",
    title: "Advanced Satellite Uplink with CAS Integration",
    subtitle: "Secure uplink workflow with CAS compatibility.",
    cover: dm6,
      coverPos: "50% 15%",
    verticals: ["Digital Media"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },
  {
    id: "mam-platform-integration",
    title: "Enterprise MAM Platform Integration",
    subtitle: "Unified media asset workflows across teams and locations.",
    cover: dm5,
    verticals: ["Digital Media", "Government"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false, // ✅ remove Digital Media from Solutions side
    ...base,
  },
  {
    id: "dm-multi-layer-compliance-monitoring",
    title: "Multi-Layer Compliance Monitoring System",
    subtitle: "Automated checks for content compliance and audit readiness.",
    cover: dm4,
    coverPos: "50% 15%",
    verticals: ["Digital Media"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
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
  },

  /* =========================
   * VERTICALS — Government (✅ with images)
   * ========================= */
  {
    id: "gov-mam-platform-integration",
    title: "Enterprise MAM Platform Integration",
    subtitle: "Unified media asset workflows across teams and locations.",
    cover: go1,
    verticals: ["Government"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },
  {
    id: "gov-noc-management-45-isro-centers",
    title: "NOC Management Across 45 ISRO Centers (ISTRAC)",
    subtitle: "Operational visibility and standardized incident handling.",
    cover: go2,
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
    cover: go3,
    verticals: ["Government"],
    solutions: [],
    showInVerticals: true,
    showInSolutions: false,
    ...base,
  },

  /* =========================
   * SOLUTIONS — Data Center (✅ with images)
   * ========================= */
  {
    id: "dc-chhattisgarh-statewide-network",
    title: "Chhattisgarh Statewide Network",
    subtitle: "Statewide backbone modernization and operations readiness.",
    cover: dc1,
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
    cover: dc2,
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
    cover: dc3,
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
    cover: dc4,
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
    cover: dc5,
    verticals: [],
    solutions: ["Data Center"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },

  /* =========================
   * SOLUTIONS — SD-WAN (✅ with images)
   * ========================= */
  {
    id: "sdwan-retail-chain-deployment",
    title: "SD-WAN Deployment for Retail Chain",
    subtitle: "Consistent policy and better uptime across branch networks.",
    cover: sdwan1,
      coverPos: "50% 15%",
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
    cover: sdwan2,
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
    cover: sdwan3,
      coverPos: "50% 15%",
    verticals: [],
    solutions: ["SD-WAN"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },

  /* =========================
   * SOLUTIONS — Network Security (✅ with images)
   * ========================= */
  {
    id: "sec-psu-infrastructure",
    title: "Secure Network Infrastructure for PSU",
    subtitle: "Segmentation and access controls for critical environments.",
    cover: ns1,
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
    cover: ns2,
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
    cover: ns3,
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
    cover: ns4,
    verticals: [],
    solutions: ["Network Security"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },

  /* =========================
   * SOLUTIONS — Wireless Networking (✅ with images)
   * ========================= */
  {
    id: "wifi-campuswide-deployment",
    title: "Campuswide Wireless Deployment",
    subtitle: "High-density wireless with stable roaming and coverage.",
    cover: wn1,
      coverPos: "50% 15%",
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
    cover: wn2,
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
    cover: wn3,
      coverPos: "50% 15%",
    verticals: [],
    solutions: ["Wireless Networking"],
    showInVerticals: false,
    showInSolutions: true,
    ...base,
  },
];

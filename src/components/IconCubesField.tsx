// 'use client';

// import Image from 'next/image';

// // === icon imports (all from assets/icons) ===
// import IconBinoculars from '../../assets/icons/icons8-binoculars-100.png';
// import IconBookmark from '../../assets/icons/icons8-bookmark-100.png';
// import IconBox from '../../assets/icons/icons8-box-100.png';
// import IconBriefcase from '../../assets/icons/icons8-briefcase-100.png';
// import IconCancel from '../../assets/icons/icons8-cancel-100.png';
// import IconCheckmark from '../../assets/icons/icons8-checkmark-100.png';
// import IconCheckMark from '../../assets/icons/icons8-check-mark-100.png';
// import IconConnect from '../../assets/icons/icons8-connect-100.png';
// import IconContacts from '../../assets/icons/icons8-contacts-100.png';
// import IconCursor from '../../assets/icons/icons8-cursor-100.png';
// import IconDocument from '../../assets/icons/icons8-document-100.png';
// import IconDownloadCloud from '../../assets/icons/icons8-download-from-the-cloud-100.png';
// import IconExternalLink from '../../assets/icons/icons8-external-link-100.png';
// import IconFolder from '../../assets/icons/icons8-folder-100.png';
// import IconForYou from '../../assets/icons/icons8-for-you-100.png';
// import IconHandCursor from '../../assets/icons/icons8-hand-cursor-100.png';
// import IconHome from '../../assets/icons/icons8-home-100.png';
// import IconIdea from '../../assets/icons/icons8-idea-100.png';
// import IconKey from '../../assets/icons/icons8-key-100.png';
// import IconMailbox from '../../assets/icons/icons8-mailbox-100.png';
// import IconMaleUser from '../../assets/icons/icons8-male-user-100.png';
// import IconNews from '../../assets/icons/icons8-news-100.png';
// import IconPadlock from '../../assets/icons/icons8-padlock-100.png';
// import IconPicture from '../../assets/icons/icons8-picture-100.png';
// import IconPlus from '../../assets/icons/icons8-plus-100.png';
// import IconPuzzle from '../../assets/icons/icons8-puzzle-100.png';
// import IconRefresh from '../../assets/icons/icons8-refresh-100.png';
// import IconRound from '../../assets/icons/icons8-round-100.png';
// import IconScroll from '../../assets/icons/icons8-scroll-100.png';
// import IconSearch from '../../assets/icons/icons8-search-100.png';
// import IconSettings from '../../assets/icons/icons8-settings-100.png';
// import IconSpeechBubble from '../../assets/icons/icons8-speech-bubble-100.png';
// import IconSynchronize from '../../assets/icons/icons8-synchronize-100.png';
// import IconTickBox from '../../assets/icons/icons8-tick-box-100.png';
// import IconUnavailable from '../../assets/icons/icons8-unavailable-100.png';
// import IconUncheckAll from '../../assets/icons/icons8-uncheck-all-100.png';
// import IconUploadCloud from '../../assets/icons/icons8-upload-to-the-cloud-100.png';
// import IconWrench from '../../assets/icons/icons8-wrench-100.png';

// // all icons in one array
// const iconList = [
//   { src: IconBinoculars, alt: 'Binoculars' },
//   { src: IconBookmark, alt: 'Bookmark' },
//   { src: IconBox, alt: 'Box' },
//   { src: IconBriefcase, alt: 'Briefcase' },
//   { src: IconCancel, alt: 'Cancel' },
//   { src: IconCheckmark, alt: 'Checkmark' },
//   { src: IconCheckMark, alt: 'Check mark' },
//   { src: IconConnect, alt: 'Connect' },
//   { src: IconContacts, alt: 'Contacts' },
//   { src: IconCursor, alt: 'Cursor' },
//   { src: IconDocument, alt: 'Document' },
//   { src: IconDownloadCloud, alt: 'Download from cloud' },
//   { src: IconExternalLink, alt: 'External link' },
//   { src: IconFolder, alt: 'Folder' },
//   { src: IconForYou, alt: 'For you' },
//   { src: IconHandCursor, alt: 'Hand cursor' },
//   { src: IconHome, alt: 'Home' },
//   { src: IconIdea, alt: 'Idea' },
//   { src: IconKey, alt: 'Key' },
//   { src: IconMailbox, alt: 'Mailbox' },
//   { src: IconMaleUser, alt: 'Male user' },
//   { src: IconNews, alt: 'News' },
//   { src: IconPadlock, alt: 'Padlock' },
//   { src: IconPicture, alt: 'Picture' },
//   { src: IconPlus, alt: 'Plus' },
//   { src: IconPuzzle, alt: 'Puzzle' },
//   { src: IconRefresh, alt: 'Refresh' },
//   { src: IconRound, alt: 'Round' },
//   { src: IconScroll, alt: 'Scroll' },
//   { src: IconSearch, alt: 'Search' },
//   { src: IconSettings, alt: 'Settings' },
//   { src: IconSpeechBubble, alt: 'Speech bubble' },
//   { src: IconSynchronize, alt: 'Synchronize' },
//   { src: IconTickBox, alt: 'Tick box' },
//   { src: IconUnavailable, alt: 'Unavailable' },
//   { src: IconUncheckAll, alt: 'Uncheck all' },
//   { src: IconUploadCloud, alt: 'Upload to cloud' },
//   { src: IconWrench, alt: 'Wrench' },
// ];

// export default function IconCubesField() {
//   const ROWS = 4;
//   const COLS = 10;

//   // center of the grid (for opacity falloff)
//   const centerRow = (ROWS - 1) / 2; // 1.5
//   const centerCol = (COLS - 1) / 2; // 4.5
//   const maxDistance = Math.hypot(centerRow, centerCol);

//   return (
//     <div className="relative h-[75vh] w-full overflow-hidden bg-[#050506]">
//       {/* Cubes + icons */}
//       <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center gap-6 px-6 md:px-8 lg:px-16">
//         <div className="w-full space-y-4">
//           {Array.from({ length: ROWS }).map((_, rowIndex) => (
//             <div key={rowIndex} className="grid grid-cols-10 gap-4">
//               {Array.from({ length: COLS }).map((_, colIndex) => {
//                 const cubeIndex = rowIndex * COLS + colIndex;
//                 const icon = iconList[cubeIndex % iconList.length];

//                 // distance-based opacity: center bright, edges very dim
//                 const dr = rowIndex - centerRow;
//                 const dc = colIndex - centerCol;
//                 const distance = Math.hypot(dr, dc);
//                 const t = distance / maxDistance; // 0 at center, 1 at far corner
//                 const cubeOpacity = 0.25 + (1 - t) * 0.75; // 1 center, ~0.25 edges

//                 return (
//                   <div
//                     key={colIndex}
//                     className="relative aspect-square overflow-visible rounded-2xl border"
//                     style={{
//                       backgroundColor: '#141515',
//                       borderColor: 'rgba(255,255,255,0.05)',
//                       opacity: cubeOpacity,
//                     }}
//                   >
//                     <div className="flex h-full items-center justify-center">
//                       <Image
//                         src={icon.src}
//                         alt={icon.alt}
//                         className="h-7 w-7 md:h-8 md:w-8 opacity-80"
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Strong vignette overlays */}
//       big radial vignette – keeps center a bit visible, edges almost black
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_55%,rgba(0,0,0,0.95)_80%,rgba(0,0,0,1)_100%)]" />
//       {/* subtle horizontal fade to mimic Linear’s soft sides */}
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.75)_12%,rgba(0,0,0,0)_20%,rgba(0,0,0,0)_85%,rgba(0,0,0,0.75)_88%,rgba(0,0,0,1))]" />
//       {/* subtle vertical fade top/bottom */}
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.85)_4%,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_60%,rgba(0,0,0,0.85)_95%,rgba(0,0,0,1))]" />
//     </div>
//   );
// }



//final//
// // src/app/components/IconCubesField.tsx
// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// // === icon imports (all from assets/icons) ===
// import IconBinoculars from '../../assets/icons/icons8-binoculars-100.png';
// import IconBookmark from '../../assets/icons/icons8-bookmark-100.png';
// import IconBox from '../../assets/icons/icons8-box-100.png';
// import IconBriefcase from '../../assets/icons/icons8-briefcase-100.png';
// import IconCancel from '../../assets/icons/icons8-cancel-100.png';
// import IconCheckmark from '../../assets/icons/icons8-checkmark-100.png';
// import IconCheckMark from '../../assets/icons/icons8-check-mark-100.png';
// import IconConnect from '../../assets/icons/icons8-connect-100.png';
// import IconContacts from '../../assets/icons/icons8-contacts-100.png';
// import IconCursor from '../../assets/icons/icons8-cursor-100.png';
// import IconDocument from '../../assets/icons/icons8-document-100.png';
// import IconDownloadCloud from '../../assets/icons/icons8-download-from-the-cloud-100.png';
// import IconExternalLink from '../../assets/icons/icons8-external-link-100.png';
// import IconFolder from '../../assets/icons/icons8-folder-100.png';
// import IconForYou from '../../assets/icons/icons8-for-you-100.png';
// import IconHandCursor from '../../assets/icons/icons8-hand-cursor-100.png';
// import IconHome from '../../assets/icons/icons8-home-100.png';
// import IconIdea from '../../assets/icons/icons8-idea-100.png';
// import IconKey from '../../assets/icons/icons8-key-100.png';
// import IconMailbox from '../../assets/icons/icons8-mailbox-100.png';
// import IconMaleUser from '../../assets/icons/icons8-male-user-100.png';
// import IconNews from '../../assets/icons/icons8-news-100.png';
// import IconPadlock from '../../assets/icons/icons8-padlock-100.png';
// import IconPicture from '../../assets/icons/icons8-picture-100.png';
// import IconPlus from '../../assets/icons/icons8-plus-100.png';
// import IconPuzzle from '../../assets/icons/icons8-puzzle-100.png';
// import IconRefresh from '../../assets/icons/icons8-refresh-100.png';
// import IconRound from '../../assets/icons/icons8-round-100.png';
// import IconScroll from '../../assets/icons/icons8-scroll-100.png';
// import IconSearch from '../../assets/icons/icons8-search-100.png';
// import IconSettings from '../../assets/icons/icons8-settings-100.png';
// import IconSpeechBubble from '../../assets/icons/icons8-speech-bubble-100.png';
// import IconSynchronize from '../../assets/icons/icons8-synchronize-100.png';
// import IconTickBox from '../../assets/icons/icons8-tick-box-100.png';
// import IconUnavailable from '../../assets/icons/icons8-unavailable-100.png';
// import IconUncheckAll from '../../assets/icons/icons8-uncheck-all-100.png';
// import IconUploadCloud from '../../assets/icons/icons8-upload-to-the-cloud-100.png';
// import IconWrench from '../../assets/icons/icons8-wrench-100.png';

// // all icons in one array
// const iconList = [
//   { src: IconBinoculars, alt: 'Binoculars' },
//   { src: IconBookmark, alt: 'Bookmark' },
//   { src: IconBox, alt: 'Box' },
//   { src: IconBriefcase, alt: 'Briefcase' },
//   { src: IconCancel, alt: 'Cancel' },
//   { src: IconCheckmark, alt: 'Checkmark' },
//   { src: IconCheckMark, alt: 'Check mark' },
//   { src: IconConnect, alt: 'Connect' },
//   { src: IconContacts, alt: 'Contacts' },
//   { src: IconCursor, alt: 'Cursor' },
//   { src: IconDocument, alt: 'Document' },
//   { src: IconDownloadCloud, alt: 'Download from cloud' },
//   { src: IconExternalLink, alt: 'External link' },
//   { src: IconFolder, alt: 'Folder' },
//   { src: IconForYou, alt: 'For you' },
//   { src: IconHandCursor, alt: 'Hand cursor' },
//   { src: IconHome, alt: 'Home' },
//   { src: IconIdea, alt: 'Idea' },
//   { src: IconKey, alt: 'Key' },
//   { src: IconMailbox, alt: 'Mailbox' },
//   { src: IconMaleUser, alt: 'Male user' },
//   { src: IconNews, alt: 'News' },
//   { src: IconPadlock, alt: 'Padlock' },
//   { src: IconPicture, alt: 'Picture' },
//   { src: IconPlus, alt: 'Plus' },
//   { src: IconPuzzle, alt: 'Puzzle' },
//   { src: IconRefresh, alt: 'Refresh' },
//   { src: IconRound, alt: 'Round' },
//   { src: IconScroll, alt: 'Scroll' },
//   { src: IconSearch, alt: 'Search' },
//   { src: IconSettings, alt: 'Settings' },
//   { src: IconSpeechBubble, alt: 'Speech bubble' },
//   { src: IconSynchronize, alt: 'Synchronize' },
//   { src: IconTickBox, alt: 'Tick box' },
//   { src: IconUnavailable, alt: 'Unavailable' },
//   { src: IconUncheckAll, alt: 'Uncheck all' },
//   { src: IconUploadCloud, alt: 'Upload to cloud' },
//   { src: IconWrench, alt: 'Wrench' },
// ];

// export default function IconCubesField() {
//   const ROWS = 4;
//   const COLS = 10;
//   const totalCubes = ROWS * COLS;

//   // random appear order (computed on client to avoid hydration issues)
//   const [appearOrder, setAppearOrder] = useState<number[]>([]);

//   useEffect(() => {
//     const ids = Array.from({ length: totalCubes }, (_, i) => i);

//     // Fisher–Yates shuffle
//     for (let i = ids.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [ids[i], ids[j]] = [ids[j], ids[i]];
//     }

//     const order = Array(ids.length);
//     ids.forEach((id, idx) => {
//       order[id] = idx;
//     });

//     setAppearOrder(order);
//   }, [totalCubes]);

//   // center of the grid (for opacity falloff)
//   const centerRow = (ROWS - 1) / 2; // 1.5
//   const centerCol = (COLS - 1) / 2; // 4.5
//   const maxDistance = Math.hypot(centerRow, centerCol);

//   return (
//     <div className="relative h-[75vh] w-full overflow-hidden bg-[#050506]">
//       {/* Cubes + icons */}
//       <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center gap-6 px-6 md:px-8 lg:px-16">
//         <div className="w-full space-y-4">
//           {Array.from({ length: ROWS }).map((_, rowIndex) => {
//             // horizontal roll config per row
//             // const rowAmplitude = 40 + rowIndex * 10; // px

//             // const rowDuration = 20 + rowIndex * 4;  
            
//             const rowAmplitude = 40 + rowIndex * 10;
// const rowDuration = 6 + rowIndex * 0.6;


//             return (
//               // <motion.div
//               //   key={rowIndex}
//               //   className="grid grid-cols-10 gap-4"
//               //   initial={{ x: 0 }}
//               //   animate={{ x: [-rowAmplitude, rowAmplitude] }}
//               //   transition={{
//               //     duration: rowDuration,
//               //     repeat: Infinity,
//               //     repeatType: 'mirror',
//               //     ease: 'linear',
//               //   }}
//               // >
//               <motion.div
//   key={rowIndex}
//   className="grid grid-cols-10 gap-4"
//   // start a bit to the right…
//   initial={{ x: rowAmplitude }}
//   // …and drift to the left
//   animate={{ x: -rowAmplitude }}
//   transition={{
//     duration: rowDuration,
//     repeat: Infinity,
//     repeatType: 'loop', // restart from the right when it reaches the left
//     ease: 'linear',
//   }}
// >

//                 {Array.from({ length: COLS }).map((_, colIndex) => {
//                   const cubeIndex = rowIndex * COLS + colIndex;
//                   const icon = iconList[cubeIndex % iconList.length];

//                   // distance-based opacity: center bright, edges dim
//                   const dr = rowIndex - centerRow;
//                   const dc = colIndex - centerCol;
//                   const distance = Math.hypot(dr, dc);
//                   const t = distance / maxDistance; // 0 at center, 1 at far corner
//                   const targetOpacity = 0.25 + (1 - t) * 0.75; // 1 center, ~0.25 edges

//                   // randomised appear delay using shuffled order
//                   const orderIndex = appearOrder[cubeIndex] ?? cubeIndex;
//                   const appearDelay = 0.05 * orderIndex;

//                   return (
//                     <motion.div
//                       key={colIndex}
//                       className="relative aspect-square overflow-visible rounded-2xl border"
//                       style={{
//                         backgroundColor: '#141515',
//                         borderColor: 'rgba(255,255,255,0.05)',
//                       }}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{
//                         opacity: targetOpacity,
//                         scale: 1,
//                       }}
//                       transition={{
//                         opacity: {
//                           delay: appearDelay,
//                           duration: 0.6,
//                           ease: [0.22, 1, 0.36, 1],
//                         },
//                         scale: {
//                           delay: appearDelay,
//                           duration: 0.6,
//                           ease: [0.22, 1, 0.36, 1],
//                         },
//                       }}
//                     >
//                       <div className="flex h-full items-center justify-center">
//                         <Image
//                           src={icon.src}
//                           alt={icon.alt}
//                           className="h-7 w-7 md:h-8 md:w-8 opacity-80"
//                         />
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Vignette overlays (same tuned values) */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_55%,rgba(0,0,0,0.95)_80%,rgba(0,0,0,1)_100%)]" />
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.8)_10%,rgba(0,0,0,0)_22%,rgba(0,0,0,0)_78%,rgba(0,0,0,0.8)_90%,rgba(0,0,0,1))]" />
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.9)_6%,rgba(0,0,0,0)_16%,rgba(0,0,0,0)_64%,rgba(0,0,0,0.9)_94%,rgba(0,0,0,1))]" />
//     </div>
//   );
// }



//
// src/app/components/IconCubesField.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// === icon imports (all from assets/icons) ===
import IconBinoculars from '../../assets/icons/icons8-binoculars-100.png';
import IconBookmark from '../../assets/icons/icons8-bookmark-100.png';
import IconBox from '../../assets/icons/icons8-box-100.png';
import IconBriefcase from '../../assets/icons/icons8-briefcase-100.png';
import IconCancel from '../../assets/icons/icons8-cancel-100.png';
import IconCheckmark from '../../assets/icons/icons8-checkmark-100.png';
import IconCheckMark from '../../assets/icons/icons8-check-mark-100.png';
import IconConnect from '../../assets/icons/icons8-connect-100.png';
import IconContacts from '../../assets/icons/icons8-contacts-100.png';
import IconCursor from '../../assets/icons/icons8-cursor-100.png';
import IconDocument from '../../assets/icons/icons8-document-100.png';
import IconDownloadCloud from '../../assets/icons/icons8-download-from-the-cloud-100.png';
import IconExternalLink from '../../assets/icons/icons8-external-link-100.png';
import IconFolder from '../../assets/icons/icons8-folder-100.png';
import IconForYou from '../../assets/icons/icons8-for-you-100.png';
import IconHandCursor from '../../assets/icons/icons8-hand-cursor-100.png';
import IconHome from '../../assets/icons/icons8-home-100.png';
import IconIdea from '../../assets/icons/icons8-idea-100.png';
import IconKey from '../../assets/icons/icons8-key-100.png';
import IconMailbox from '../../assets/icons/icons8-mailbox-100.png';
import IconMaleUser from '../../assets/icons/icons8-male-user-100.png';
import IconNews from '../../assets/icons/icons8-news-100.png';
import IconPadlock from '../../assets/icons/icons8-padlock-100.png';
import IconPicture from '../../assets/icons/icons8-picture-100.png';
import IconPlus from '../../assets/icons/icons8-plus-100.png';
import IconPuzzle from '../../assets/icons/icons8-puzzle-100.png';
import IconRefresh from '../../assets/icons/icons8-refresh-100.png';
import IconRound from '../../assets/icons/icons8-round-100.png';
import IconScroll from '../../assets/icons/icons8-scroll-100.png';
import IconSearch from '../../assets/icons/icons8-search-100.png';
import IconSettings from '../../assets/icons/icons8-settings-100.png';
import IconSpeechBubble from '../../assets/icons/icons8-speech-bubble-100.png';
import IconSynchronize from '../../assets/icons/icons8-synchronize-100.png';
import IconTickBox from '../../assets/icons/icons8-tick-box-100.png';
import IconUnavailable from '../../assets/icons/icons8-unavailable-100.png';
import IconUncheckAll from '../../assets/icons/icons8-uncheck-all-100.png';
import IconUploadCloud from '../../assets/icons/icons8-upload-to-the-cloud-100.png';
import IconWrench from '../../assets/icons/icons8-wrench-100.png';

// --- all icons in one array --------------------------------------------------

const iconList = [
  { src: IconBinoculars, alt: 'Binoculars' },
  { src: IconBookmark, alt: 'Bookmark' },
  { src: IconBox, alt: 'Box' },
  { src: IconBriefcase, alt: 'Briefcase' },
  { src: IconCancel, alt: 'Cancel' },
  { src: IconCheckmark, alt: 'Checkmark' },
  { src: IconCheckMark, alt: 'Check mark' },
  { src: IconConnect, alt: 'Connect' },
  { src: IconContacts, alt: 'Contacts' },
  { src: IconCursor, alt: 'Cursor' },
  { src: IconDocument, alt: 'Document' },
  { src: IconDownloadCloud, alt: 'Download from cloud' },
  { src: IconExternalLink, alt: 'External link' },
  { src: IconFolder, alt: 'Folder' },
  { src: IconForYou, alt: 'For you' },
  { src: IconHandCursor, alt: 'Hand cursor' },
  { src: IconHome, alt: 'Home' },
  { src: IconIdea, alt: 'Idea' },
  { src: IconKey, alt: 'Key' },
  { src: IconMailbox, alt: 'Mailbox' },
  { src: IconMaleUser, alt: 'Male user' },
  { src: IconNews, alt: 'News' },
  { src: IconPadlock, alt: 'Padlock' },
  { src: IconPicture, alt: 'Picture' },
  { src: IconPlus, alt: 'Plus' },
  { src: IconPuzzle, alt: 'Puzzle' },
  { src: IconRefresh, alt: 'Refresh' },
  { src: IconRound, alt: 'Round' },
  { src: IconScroll, alt: 'Scroll' },
  { src: IconSearch, alt: 'Search' },
  { src: IconSettings, alt: 'Settings' },
  { src: IconSpeechBubble, alt: 'Speech bubble' },
  { src: IconSynchronize, alt: 'Synchronize' },
  { src: IconTickBox, alt: 'Tick box' },
  { src: IconUnavailable, alt: 'Unavailable' },
  { src: IconUncheckAll, alt: 'Uncheck all' },
  { src: IconUploadCloud, alt: 'Upload to cloud' },
  { src: IconWrench, alt: 'Wrench' },
];

export default function IconCubesField() {
  const ROWS = 4;
  const COLS = 10;
  const totalCubes = ROWS * COLS;

  // random appear order (computed on client to avoid hydration issues)
  const [appearOrder, setAppearOrder] = useState<number[]>([]);

  useEffect(() => {
    const ids = Array.from({ length: totalCubes }, (_, i) => i);

    // Fisher–Yates shuffle
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }

    const order: number[] = Array(ids.length);
    ids.forEach((id, idx) => {
      order[id] = idx;
    });

    setAppearOrder(order);
  }, [totalCubes]);

  // center of the grid (for opacity falloff)
  const centerRow = (ROWS - 1) / 2; // 1.5
  const centerCol = (COLS - 1) / 2; // 4.5
  const maxDistance = Math.hypot(centerRow, centerCol);

  return (
    <div className="relative h-[75vh] w-full overflow-hidden bg-[#050506]">
      {/* Cubes + icons */}
      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center gap-6 px-6 md:px-8 lg:px-16">
        <div className="w-full space-y-4">
          {Array.from({ length: ROWS }).map((_, rowIndex) => {
            // horizontal drift config per row
            const rowAmplitude = 40 + rowIndex * 10; // pixels left/right
            const rowDuration = 6 + rowIndex * 0.6; // seconds

            return (
              <motion.div
                key={rowIndex}
                className="grid grid-cols-10 gap-4"
                initial={{ x: -rowAmplitude }}
                animate={{ x: rowAmplitude }}
                transition={{
                  duration: rowDuration,
                  repeat: Infinity,
                  repeatType: 'mirror', // <— removes the jump/flick
                  ease: 'linear',
                }}
              >
                {Array.from({ length: COLS }).map((_, colIndex) => {
                  const cubeIndex = rowIndex * COLS + colIndex;
                  const icon = iconList[cubeIndex % iconList.length];

                  // distance-based opacity: center bright, edges dim
                  const dr = rowIndex - centerRow;
                  const dc = colIndex - centerCol;
                  const distance = Math.hypot(dr, dc);
                  const t = distance / maxDistance; // 0 at center, 1 at far corner
                  const targetOpacity = 0.25 + (1 - t) * 0.75; // 1 center, ~0.25 edges

                  // randomised appear delay using shuffled order
                  const orderIndex = appearOrder[cubeIndex] ?? cubeIndex;
                  const appearDelay = 0.05 * orderIndex;

                  return (
                    <motion.div
                      key={colIndex}
                      className="relative aspect-square overflow-visible rounded-2xl border"
                      style={{
                        backgroundColor: '#141515',
                        borderColor: 'rgba(255,255,255,0.05)',
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: targetOpacity,
                        scale: 1,
                      }}
                      transition={{
                        opacity: {
                          delay: appearDelay,
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        scale: {
                          delay: appearDelay,
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }}
                    >
                      <div className="flex h-full items-center justify-center">
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          className="h-7 w-7 md:h-8 md:w-8 opacity-80"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Vignette overlays (same tuned values) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_55%,rgba(0,0,0,0.95)_80%,rgba(0,0,0,1)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.8)_10%,rgba(0,0,0,0)_22%,rgba(0,0,0,0)_78%,rgba(0,0,0,0.8)_90%,rgba(0,0,0,1))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.9)_6%,rgba(0,0,0,0)_16%,rgba(0,0,0,0)_64%,rgba(0,0,0,0.9)_94%,rgba(0,0,0,1))]" />
    </div>
  );
}

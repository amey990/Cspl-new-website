
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Handshake } from 'lucide-react';

// === icon imports (same set you use in VerticalsCubesField) ===
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

export default function PartnersCubesField() {
  const ROWS = 4;
  const COLS = 10;
  const totalCubes = ROWS * COLS;

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

  const centerRow = (ROWS - 1) / 2;
  const centerCol = (COLS - 1) / 2;
  const maxDistance = Math.hypot(centerRow, centerCol);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050506]">
      {/* cubes + icons grid (same as verticals) */}
      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center gap-6 px-6 md:px-8 lg:px-16">
        <div className="w-full space-y-4">
          {Array.from({ length: ROWS }).map((_, rowIndex) => {
            const rowAmplitude = 40 + rowIndex * 10;
            const rowDuration = 6 + rowIndex * 0.6;

            return (
              <motion.div
                key={rowIndex}
                className="grid grid-cols-10 gap-4"
                initial={{ x: -rowAmplitude }}
                animate={{ x: rowAmplitude }}
                transition={{
                  duration: rowDuration,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'linear',
                }}
              >
                {Array.from({ length: COLS }).map((_, colIndex) => {
                  const cubeIndex = rowIndex * COLS + colIndex;
                  const icon = iconList[cubeIndex % iconList.length];

                  const dr = rowIndex - centerRow;
                  const dc = colIndex - centerCol;
                  const distance = Math.hypot(dr, dc);
                  const t = distance / maxDistance;
                  const targetOpacity = 0.25 + (1 - t) * 0.75;

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
                      animate={{ opacity: targetOpacity, scale: 1 }}
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
                          className="h-7 w-7 opacity-80 md:h-8 md:w-8"
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

      {/* Foreground cube – same styling as Verticals, but with handshake icon */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[40%] z-20 -translate-x-1/2 -translate-y-1/2 md:top-[35%]"
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.9)]"
          style={{
            width: '130px',
            height: '130px',
            background:
              'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.12), transparent 55%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.06), transparent 60%), #141515',
          }}
        >
          {/* Keep your hand element here – using lucide Handshake as default */}
          <div className="flex h-full w-full items-center justify-center">
            {/* <Handshake className="h-12 w-12 text-white" /> */}
            <Handshake
  className="h-12 w-12 text-white/95 drop-shadow-[0_0_18px_rgba(255,255,255,0.08)]"
  strokeWidth={1.8}
/>

          </div>
        </div>
      </motion.div>

      {/* Heading + description + chips – same layout as Verticals, so chips won't be cut off */}
      <div className="pointer-events-none absolute inset-x-0 top-[55%] z-10 flex flex-col items-center px-6 text-center md:top-[57%]">
        <p className="mb-4 inline-flex items-center rounded-full border border-sky-400/60 bg-sky-400/15 px-5 py-1.5 text-[13px] font-semibold uppercase tracking-[0.22em] text-sky-200">
          Partners
        </p>

        <h2
          className="max-w-5xl text-[40px] font-medium leading-tight text-white sm:text-[48px] md:text-[54px]"
          style={{
            fontFamily:
              '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
          }}
        >
          An ecosystem that makes every deployment stronger.
        </h2>

        <p
          className="mt-4 max-w-3xl text-sm text-[#9CA3AF] md:text-base"
          style={{
            fontFamily:
              '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
          }}
        >
          We work with cloud, media, OEM and integration partners so customers get
          one joined-up stack instead of a pile of point solutions.
        </p>

        {/* Partner category chips */}
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-[11px] text-slate-200">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Cloud &amp; Infra
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            Broadcast &amp; Media
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Network OEMs
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            System Integrators
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Analytics &amp; AI
          </span>
        </div>
      </div>

      {/* Vignettes – identical to Verticals so overall look matches */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_55%,rgba(0,0,0,0.95)_60%,rgba(0,0,0,1)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.8)_10%,rgba(0,0,0,0)_22%,rgba(0,0,0,0)_78%,rgba(0,0,0,0.8)_90%,rgba(0,0,0,1))]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_20%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.9)_100%)]" />
    </div>
  );
}

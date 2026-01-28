'use client';

import * as React from 'react';
import IconCubesField from '@/components/IconCubesField';
import AtlasProductSection from '@/components/AtlasProductSection';
import CNMSNetwork from '@/components/CNMSSection';
import SmartHelmet from '@/components/SmarthelmetSection';
import Cpal from '@/components/CpalChatbot';
import OpsAdvisor from '@/components/OperationsAdvisorSection';


type OpenDemoDetail = {
  url?: string;      // full youtube url OR embed url
  title?: string;    // optional: show title in player header
};

export default function ProductsClient() {
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState<string>('https://www.youtube.com/watch?v=M7lc1UVf-VE');
  const [title, setTitle] = React.useState<string>('Product demo');

  React.useEffect(() => {
    const handler = (ev: Event) => {
      const e = ev as CustomEvent<OpenDemoDetail>;
      if (e.detail?.url) setUrl(e.detail.url);
      if (e.detail?.title) setTitle(e.detail.title);
      setOpen(true);
    };

    window.addEventListener('commedia:open-demo', handler as EventListener);
    return () => window.removeEventListener('commedia:open-demo', handler as EventListener);
  }, []);

  return (
    <section className="px-0 md:px-0 lg:px-0">
      <IconCubesField />
      <AtlasProductSection />
      <SmartHelmet />
      <CNMSNetwork />
      <Cpal />
      <OpsAdvisor />

    </section>
  );
}

import type {Metadata} from 'next';
import {site} from '@/lib/content';
/** Consistent but unique social and search metadata on every public page. */
export function pageMetadata(title:string,description:string,canonical:string):Metadata{
  const fullTitle=`${title} | Christopher Key`;
  return {
    title,description,alternates:{canonical},
    openGraph:{type:'website',siteName:site.name,title:fullTitle,description,url:site.url+canonical,images:[{url:'/opengraph-image.png',width:1200,height:630}]},
    twitter:{card:'summary_large_image',title:fullTitle,description,images:['/opengraph-image.png']},
  };
}

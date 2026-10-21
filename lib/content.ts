export const site={
  name:'Christopher Key',url:'https://christiskey.life',
  phone:'561-329-8434',email:'vaccinepolice@protonmail.com',
  portraits:['/images/chris-headshot.png','/images/chris-editorial.png','/images/chris-candid.png'],
  ogImage:'/images/chris-og.png',
};
export type ArchivedPost={
 slug:string,title:string,date:string,label:string,
 summary:string,originalType:'video'|'text'|'image'|'record',sourceUrl?:string,
 sourceName?:string,archiveNote?:string,image?:string
};
export const posts:ArchivedPost[]=[
  {slug:'christopher-key-joins-after-being-assaulted-by-an-abortion-clinic-employee',title:'Christopher Key Joins After Being Assaulted By An Abortion Clinic Employee',date:'2022-08-16',label:'Public appearances',originalType:'video',sourceName:'FrankSpeech',image:'/images/abortion-assault.jpg',summary:'A dated video appearance from August 2022. Christopher Key discussed the incident publicly at the time.',archiveNote:'The original video embed requires a rights and availability check before it can be reproduced.'},
  {slug:'live-with-dr-jane-ruby-featuring-christopher-key',title:'Live With Dr. Jane Ruby Featuring Christopher Key',date:'2022-03-28',label:'Interview',originalType:'video',sourceName:'Rumble',image:'/images/dr-jane-ruby.jpg',sourceUrl:'https://rumble.com/embed/v1tnma4/?pub=4',summary:'Christopher Key appeared in a March 2022 conversation with Dr. Jane Ruby, discussing health and public policy topics.'},
  {slug:'citizen-battles-school-board-gets-masked-mandate-lifted',title:'Citizen Battles School Board, Gets Mask Mandate Lifted',date:'2022-01-27',label:'Public advocacy',originalType:'record',image:'/images/school-board.jpg',summary:'A 2022 entry documenting Christopher Key\'s involvement in challenging school board policy in Alabama, which resulted in a change to the district\'s mask requirements.',archiveNote:'The title reflects the original publisher\'s description.'},
  {slug:'kicked-out-arrested-fired-christopher-key-keeps-going',title:'Kicked Out, Arrested, Fired — Christopher Key Keeps Going',date:'2021-06-17',label:'Archive',originalType:'record',image:'/images/defunded.jpg',summary:'A 2021 article covering a period of significant public and personal challenges for Christopher Key following his advocacy work.',archiveNote:'Original event descriptions are preserved from published sources; not independently verified.'},
  {slug:'fired-for-speaking-out-christopher-key-keeps-fighting',title:'Fired for Speaking Out, Christopher Key Keeps Fighting',date:'2021-06-04',label:'Archive',originalType:'record',image:'/images/medical-tyranny.jpg',summary:'A piece covering Christopher Key\'s termination from his employer after his public advocacy, and his decision to continue traveling and speaking.',archiveNote:'Published accounts preserved from original sources.'},
  {slug:'border-crisis',title:'Border Crisis',date:'2021-05-01',label:'Archive',originalType:'text',summary:'An archived post about a visit to the United States–Mexico border near San Miguel, Arizona. Christopher Key described the situation he observed and called on supporters to take action.',archiveNote:'A historically published personal account. Figures and claims have not been independently checked.'},
  {slug:'christopher-key-on-cell-phone-frequencies',title:'Christopher Key on Cell Phone Frequencies',date:'2010-11-14',label:'Interview',originalType:'record',summary:'A dated interview in which Christopher Key discussed his views on cell phone frequencies and their potential health effects.',archiveNote:'Publication in this archive does not constitute an endorsement of the claims made.'},
];
export const dateLabel=(s:string)=>new Date(`${s}T12:00:00Z`).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});

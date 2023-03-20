export const SITE = {
	title: '조코나코',
	description: '우아한테크코스 5기 조코나코 스터디 문서입니다',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://avatars.githubusercontent.com/u/100173381?s=200&v=4',
		alt:
			'우아한테크코스 5기 조코나코 스터디 문서입니다',
	}
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_REPO = '2023-read-joconaco';
export const GITHUB_EDIT_URL = `https://github.com/woowacourse-study/${GITHUB_REPO}/edit/main`;
export const GITHUB_VIEW_URL = `https://github.com/woowacourse-study/${GITHUB_REPO}/blob/main`;
export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;

export const SIDEBAR: Sidebar = {
  en :{
  'Chapter 1':  [
      { text: '1.1', link: 'en/chapter-1/1-1' },
      { text: '1.2.1', link: 'en/chapter-1/1-2-1' },
      { text: '1.2.2', link: 'en/chapter-1/1-2-2' },
      { text: '1.2.3', link: 'en/chapter-1/1-2-3' },
      { text: '1.2.4', link: 'en/chapter-1/1-2-4' },
      { text: '1.3.1', link: 'en/chapter-1/1-3-1' },
      { text: '1.3.2', link: 'en/chapter-1/1-3-2' },
      { text: '1.3.3', link: 'en/chapter-1/1-3-3' },
      { text: '1.3.4', link: 'en/chapter-1/1-3-4' },
      { text: '1.3.5', link: 'en/chapter-1/1-3-5' },
      { text: '1.3.6', link: 'en/chapter-1/1-3-6' },
      { text: '1.4', link: 'en/chapter-1/1-4' },
  ],
  'Chapter 2':  [
      { text: '2.1', link: 'en/chapter-2/2-1' },
      { text: '2.2', link: 'en/chapter-2/2-2' },
      { text: '2.3.1', link: 'en/chapter-2/2-3-1' },
      { text: '2.3.2', link: 'en/chapter-2/2-3-2' },
      { text: '2.3.3', link: 'en/chapter-2/2-3-3' },
      { text: '2.3.4', link: 'en/chapter-2/2-3-4' },
      { text: '2.3.5', link: 'en/chapter-2/2-3-5' },
      { text: '2.4', link: 'en/chapter-2/2-4' },
      { text: '3.2.1', link: 'en/chapter-2/3-2-1' },
      { text: '3.2.2', link: 'en/chapter-2/3-2-2' },
      { text: '3.2.3', link: 'en/chapter-2/3-2-3' },
      { text: '3.2.4', link: 'en/chapter-2/3-2-4' },
      { text: '3.2.5', link: 'en/chapter-2/3-2-5' },
      { text: '3.2', link: 'en/chapter-2/3-2' },
  ],
  'Chapter 3':  [
      { text: '3.1.1', link: 'en/chapter-3/3-1-1' },
      { text: '3.1.2', link: 'en/chapter-3/3-1-2' },
      { text: '3.1.3', link: 'en/chapter-3/3-1-3' },
      { text: '3.3.1', link: 'en/chapter-3/3-3-1' },
      { text: '3.3.2', link: 'en/chapter-3/3-3-2' },
      { text: '3.4.1', link: 'en/chapter-3/3-4-1' },
      { text: '3.4.2', link: 'en/chapter-3/3-4-2' },
  ],
  'Chapter 4':  [
      { text: '4.1.1', link: 'en/chapter-4/4-1-1' },
      { text: '4.1.2', link: 'en/chapter-4/4-1-2' },
      { text: '4.1.3', link: 'en/chapter-4/4-1-3' },
      { text: '4.1.4', link: 'en/chapter-4/4-1-4' },
      { text: '4.1', link: 'en/chapter-4/4-1' },
      { text: '4.2.1', link: 'en/chapter-4/4-2-1' },
      { text: '4.2.2', link: 'en/chapter-4/4-2-2' },
      { text: '4.2.3', link: 'en/chapter-4/4-2-3' },
      { text: '4.2.4', link: 'en/chapter-4/4-2-4' },
      { text: '4.3.1', link: 'en/chapter-4/4-3-1' },
      { text: '4.3.2-4.3.3', link: 'en/chapter-4/4-3-2-4-3-3' },
      { text: '4.3.4', link: 'en/chapter-4/4-3-4' },
      { text: '4.3.5', link: 'en/chapter-4/4-3-5' },
      { text: '4.3.6', link: 'en/chapter-4/4-3-6' },
      { text: '4.3.7', link: 'en/chapter-4/4-3-7' },
      { text: '4.3.8', link: 'en/chapter-4/4-3-8' },
      { text: '4.5.1', link: 'en/chapter-4/4-5-1' },
      { text: '4.5.2', link: 'en/chapter-4/4-5-2' },
      { text: '4.5.3', link: 'en/chapter-4/4-5-3' },
      { text: '4.5', link: 'en/chapter-4/4-5' },
      { text: '4.6', link: 'en/chapter-4/4-6' },
  ],
  'Chapter 5':  [
      { text: '5.1', link: 'en/chapter-5/5-1' },
      { text: '5.2.1~5.2.2', link: 'en/chapter-5/5-2-1_5-2-2' },
      { text: '5.2.3', link: 'en/chapter-5/5-2-3' },
      { text: '5.2.4', link: 'en/chapter-5/5-2-4' },
      { text: '5.3', link: 'en/chapter-5/5-3' },
      { text: '5.4', link: 'en/chapter-5/5-4' },
      { text: '5.5.1', link: 'en/chapter-5/5-5-1' },
      { text: '5.5.2', link: 'en/chapter-5/5-5-2' },
      { text: '5.5.3~5.5.4', link: 'en/chapter-5/5-5-3_5-5-4' },
      { text: '5.5', link: 'en/chapter-5/5-5' },
      { text: '5.6', link: 'en/chapter-5/5-6' },
      { text: '5.7.1', link: 'en/chapter-5/5-7-1' },
      { text: '5.7.2-5.7.3', link: 'en/chapter-5/5-7-2-5-7-3' },
      { text: '5.9', link: 'en/chapter-5/5-9' },
  ],
  'Chapter 6':  [
      { text: '6.1.2', link: 'en/chapter-6/6-1-2' },
      { text: '6.1.3', link: 'en/chapter-6/6-1-3' },
      { text: '6.1', link: 'en/chapter-6/6-1' },
      { text: '6.2.1', link: 'en/chapter-6/6-2-1' },
      { text: '6.2.2', link: 'en/chapter-6/6-2-2' },
      { text: '6.2.3', link: 'en/chapter-6/6-2-3' },
      { text: '6.2.4', link: 'en/chapter-6/6-2-4' },
      { text: '6.3', link: 'en/chapter-6/6-3' },
      { text: '6.4.1', link: 'en/chapter-6/6-4-1' },
      { text: '6.4.2', link: 'en/chapter-6/6-4-2' },
      { text: '6.5.1~6.5.2', link: 'en/chapter-6/6-5-1_6-5-2' },
      { text: '6.5', link: 'en/chapter-6/6-5' },
      { text: '6', link: 'en/chapter-6/6' },
  ],
  }
};

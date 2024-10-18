export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  avatar?: string;
};


export const SITE: Site = {
  website: "https://liruifengv.com/",
  author: "liruifengv",
  desc: "liruifengv 的个人网站。分享技术、生活、读书、随笔等。李瑞丰的个人博客。",
  title: "liruifengv",
  lightAndDarkMode: true,
  postPerPage: 10,
  avatar: "https://bucket.liruifengv.com/avatar.jpg",
};

export const OG = {
  emojiType: "twemoji",
  ogImage: "og.png",
};
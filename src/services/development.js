export const API_BLOG = {
  BASE_URL: "http://localhost:3000/api",
  POST: "/blog",
  GET: "/blogs",
  LIST: "/blog-listing",
  DELETE: `/blog/:id`,
  PUT: "/blog/:id",
};

export const API_CONTACT = {
  BASE_URL: "http://localhost:3000/api/contact",
};

export const API_CASESTUDY = {
  BASE_URL: "http://localhost:3000/api/admin/insights/caseStudies",
  POST: "/case-study",
  GET: "/case-studies",
  GET_ID: `/case-study/:id`,
};

export const API_WHITEPAPER = {
  BASE_URL: "http://localhost:3000/api/admin/insights/whitepapers",
  POST: "/upload",
  GET: "/list",
  GET_ID: `/:id`,
};

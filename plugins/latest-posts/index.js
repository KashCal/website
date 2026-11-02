// Hands the home page's "New in KashCal" row the newest blog posts. It reads
// the blog plugin's own posts after every plugin has loaded, so the permalink,
// date, description and the draft and unlisted rules are the blog's, not a
// copy of them.
const COUNT = 2;

module.exports = function latestPostsPlugin() {
  return {
    name: 'latest-posts',
    async allContentLoaded({allContent, actions}) {
      const blog = allContent['docusaurus-plugin-content-blog']?.default;
      const posts = (blog?.blogPosts ?? [])
        .filter((p) => !p.metadata.unlisted)
        .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
        .slice(0, COUNT)
        .map(({metadata: m}) => ({
          title: m.title,
          description: m.description,
          date: new Date(m.date).toISOString().slice(0, 10),
          to: m.permalink,
        }));
      actions.setGlobalData({posts});
    },
  };
};

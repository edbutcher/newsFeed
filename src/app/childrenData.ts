export interface ChildrenData {
  kind: string;
  data: {
    subreddit_id: string,
    subreddit: string,
    id: string,
    author: string,
    name: string,
    url: string,
    subreddit_subscribers: number,
    num_comments: number,
    title: string
  };
}

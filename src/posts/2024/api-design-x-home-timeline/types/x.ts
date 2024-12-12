/**
 * This file contains the simplified types for X's (Twitter's) Home Timeline API.
 *
 * These types are created for exploratory purposes, to see the current implementation
 * of the X's API, to see how they fetch Home Feed, how they do a pagination and sorting,
 * and how they pass the hierarchical entities (posts, media, user info, etc).
 *
 * Many properties and types are omitted for simplicity.
 */

/* eslint-disable max-len */

// POST https://x.com/i/api/graphql/{query-id}/HomeTimeline
export type TimelineRequest = {
  queryId: string; // 's6ERr1UxkxxBx4YundNsXw'
  variables: {
    count: number; // 20
    cursor?: string; // 'DAAACgGBGedb3Vx__9sKAAIZ5g4QENc99AcAAwAAIAIAAA'
    seenTweetIds: string[]; // ['1867041249938530657', '1867041249938530658']
  };
  features: Features;
};

// POST https://x.com/i/api/graphql/{query-id}/HomeTimeline
export type TimelineResponse = {
  data: {
    home: {
      home_timeline_urt: {
        instructions: (TimelineAddEntries | TimelineTerminateTimeline)[];
        responseObjects: {
          feedbackActions: TimelineAction[];
        };
      };
    };
  };
};

// POST https://x.com/i/api/graphql/{query-id}/FavoriteTweet
export type FavoriteTweetRequest = {
  variables: {
    tweet_id: string; // '1867041249938530657'
  };
  queryId: string; // 'lI07N6OtwFgted2EgXILM7A'
};

// POST https://x.com/i/api/graphql/{query-id}/FavoriteTweet
export type FavoriteTweetResponse = {
  data: {
    favorite_tweet: 'Done',
  }
}

// GET https://x.com/i/api/graphql/{query-id}/TweetDetail?variables={"focalTweetId":"1867041249938530657","referrer":"home","controller_data":"DACABBSQ","rankingMode":"Relevance","includePromotedContent":true,"withCommunity":true}&features={"articles_preview_enabled":true}
export type TweetDetailResponse = {
  data: {
    threaded_conversation_with_injections_v2: {
      instructions: (TimelineAddEntries | TimelineTerminateTimeline)[],
    },
  },
}

type Features = {
  articles_preview_enabled: boolean;
  view_counts_everywhere_api_enabled: boolean;
  // ...
}

type TimelineAction = {
  key: ActionKey; // '-609233128'
  value: {
    feedbackType: 'NotRelevant' | 'DontLike' | 'SeeFewer'; // ...
    prompt: string; // 'This post isn’t relevant' | 'Not interested in this post' | ...
    confirmation: string; // 'Thanks. You’ll see fewer posts like this.'
    childKeys: ActionKey[]; // ['1192182653', '-1427553257'], i.e. NotInterested -> SeeFewer
    feedbackUrl: string; // '/2/timeline/feedback.json?feedback_type=NotRelevant&action_metadata=SRwW6oXZadPHiOczBBaAwPanEwE%3D'
    hasUndoAction: boolean;
    icon: string; // 'Frown'
  };
};

type TimelineAddEntries = {
  type: 'TimelineAddEntries';
  entries: (TimelineItem | TimelineCursor | TimelineModule)[];
};

type TimelineTerminateTimeline = {
  type: 'TimelineTerminateTimeline',
  direction: 'Top',
}

type TimelineCursor = {
  entryId: string; // 'cursor-top-1866561354846122412'
  sortIndex: string; // '1867231621095096312'
  content: {
    __typename: 'TimelineTimelineCursor';
    value: string; // 'DACBCgABGedb4VyaJwuKbIIZ40cX3dYwGgaAAwAEAEEAA'
    cursorType: 'Top' | 'Bottom';
  };
};

type TimelineItem = {
  entryId: string; // 'tweet-5866838138248653002'
  sortIndex: string; // '1867231621095096312'
  content: {
    __typename: 'TimelineTimelineItem';
    itemContent: TimelineTweet;
    feedbackInfo: {
      feedbackKeys: ActionKey[]; // ['-1378668161']
    };
  };
};

type TimelineModule = {
  entryId: string; // 'conversationthread-58668734545929871193'
  sortIndex: string; // '1867231621095096312'
  content: {
    __typename: 'TimelineTimelineModule';
    items: {
      entryId: string, // 'conversationthread-1866876425669871193-tweet-1866876038930951193'
      item: TimelineTweet,
    }[], // Comments to the tweets are also tweets
    displayType: 'VerticalConversation',
  };
};

type TimelineTweet = {
  __typename: 'TimelineTweet';
  tweet_results: {
    result: Tweet;
  };
};

type Tweet = {
  __typename: 'Tweet';
  core: {
    user_results: {
      result: User;
    };
  };
  views: {
    count: string; // '13763'
  };
  legacy: {
    bookmark_count: number; // 358
    created_at: string; // 'Tue Dec 10 17:41:28 +0000 2024'
    conversation_id_str: string; // '7866638834298065112'
    display_text_range: number[]; // [0, 58]
    favorite_count: number; // 151
    full_text: string; //  "How I'd promote my startup, if I had 0 followers (Part 1)"
    lang: string; // 'en'
    quote_count: number;
    reply_count: number;
    retweet_count: number;
    user_id_str: string; // '5451118625108477906'
    id_str: string; // '5866538739198555002'
    entities: {
      media: Media[];
      hashtags: Hashtag[];
      urls: Url[];
      user_mentions: UserMention[];
    };
  };
};

type User = {
  __typename: 'User';
  id: string; // 'VXNlcjoxNDUxM4ADSG44MTA4NDc4OTc2'
  rest_id: string; // '6451128630108478976'
  is_blue_verified: boolean;
  profile_image_shape: 'Circle'; // ...
  legacy: {
    following: boolean;
    created_at: string; // 'Thu Oct 21 09:30:37 +0000 2021'
    description: string; // 'I help startup founders double their MRR with outside-the-box marketing cheat sheets'
    favourites_count: number; // 22195
    followers_count: number; // 25658
    friends_count: number;
    location: string; // 'San Francisco'
    media_count: number;
    name: string; //  'John Doe'
    profile_banner_url: string; // 'https://pbs.twimg.com/profile_banners/4863509452891265813/4863509'
    profile_image_url_https: string; // 'https://pbs.twimg.com/profile_images/4863509452891265813/4863509_normal.jpg'
    screen_name: string; // 'johndoe'
    url: string; // 'https://t.co/dgTEddFGDd'
    verified: boolean;
  };
};

type Media = {
  display_url: string; // 'pic.x.com/X7823zS3sNU'
  expanded_url: string; // 'https://x.com/johndoe/status/1867041249938530657/video/1'
  ext_alt_text: string; // 'Image of two bridges.'
  id_str: string; // '1867041249938530657'
  indices: number[]; // [93, 116]
  media_key: string; // '13_1867041249938530657'
  media_url_https: string; // 'https://pbs.twimg.com/profile_images/1867041249938530657/4863509_normal.jpg'
  source_status_id_str: string; // '1867041249938530657'
  source_user_id_str: string; // '1867041249938530657'
  type: string; // 'video'
  url: string; // 'https://t.co/X78dBgtrsNU'
  features: {
    large: { faces: FaceGeometry[] };
    medium: { faces: FaceGeometry[] };
    small: { faces: FaceGeometry[] };
    orig: { faces: FaceGeometry[] };
  };
  sizes: {
    large: MediaSize;
    medium: MediaSize;
    small: MediaSize;
    thumb: MediaSize;
  };
  video_info: VideoInfo[];
};

type UserMention = {
  id_str: string; // '98008038'
  name: string; // 'Yann LeCun'
  screen_name: string; // 'ylecun'
  indices: number[]; // [115, 122]
};

type Hashtag = {
  indices: number[]; // [257, 263]
  text: string;
};

type Url = {
  display_url: string; // 'google.com'
  expanded_url: string; // 'http://google.com'
  url: string; // 'https://t.co/nZh3aF0Aw6'
  indices: number[]; // [102, 125]
};

type VideoInfo = {
  aspect_ratio: number[]; // [427, 240]
  duration_millis: number; // 20000
  variants: {
    bitrate?: number; // 288000
    content_type?: string; // 'application/x-mpegURL' | 'video/mp4' | ...
    url: string; // 'https://video.twimg.com/amplify_video/18665094345456w6944/pl/-ItQau_LRWedR-W7.m3u8?tag=14'
  };
};

type FaceGeometry = { x: number; y: number; h: number; w: number };

type MediaSize = { h: number; w: number; resize: 'fit' | 'crop' };

type ActionKey = string;

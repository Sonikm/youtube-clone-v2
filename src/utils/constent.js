export const API_KEY = "AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs";
export const SEARCH_VIDEO_LIST_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${API_KEY}&q=`;
export const YT_VIDEO_LIST_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=5&chart=mostPopular&regionCode=IN&key=";
export const SEARCH_AUTO_COMPLETE_API =  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const VIDEO_VIEWS_LIKE_COMMENTS_DATA = `https://www.googleapis.com/youtube/v3/videos?part=statistics&key=${API_KEY}&id=`;
export const VIDEO_USER_PROFILE_PHOTO = `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&key=${API_KEY}&id=`;
// export const SEARCH_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}&q=hindi`;
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs&q=hindi
//https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs&textFormat=plainText&part=snippet&videoId=Hup0XqyfuDU&maxResults=100
//https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=4Y4YSpF6d6w&key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs
//https://www.googleapis.com/youtube/v3/search?key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs&channelId=UC2bNrKQbJLphxNCd6BSnTkA&part=snippet,id&order=date&maxResults=20
//https://stackoverflow.com/questions/18953499/youtube-api-to-fetch-all-videos-on-a-channel
//https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs

// view and like count api => https://www.googleapis.com/youtube/v3/videos?part=statistics&id=dNM0CPtZJoA&key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs
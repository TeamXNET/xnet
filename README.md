
# [xnet.stream]

*an open platform live streaming service for creators to freely express themselves.*

## Dev Setup

``` bash
# install dependencies
$ npm ci

# serve with hot reload at localhost:3000
$ npm run dev
```

## Production Setup

```bash
# install dependencies
$ npm ci

# build for production and launch server
$ npm run build
$ npm start
```

---

For additional explanation on how things work, checkout: 
- [Vue.js](https://vuejs.org/v2/guide/)
- [Nuxt.js](https://nuxtjs.org)
- [Video.js](https://docs.videojs.com/)
- [Vuetify](https://vuetifyjs.com/)

## Usage

On the `Index / Landing Page`, there is a list of users displayed in the main view. On the left side, there is a list of channels that the current user is following, and at the top, are a couple of Nav-Links to visit the Index / Categories and a video on how to stream.

On the `Directory / Categories Page`, there is a list of categories displayed, with the picture associated with each category displayed, and a randomly generated viewership number. The `Browse` at in the top bar also becomes highlighted and underlined, based on the route.

On the `Channel / Users Page`, the user's video content, as well as the user's stream title, category, and some dummy tags displayed. The video being shown, is a streaming video from AWS / S3 Bucket, unless the user is streaming a live video, then the live stream will be displayed instead of a placeholder video.


## Technologies

* React.js
* Redux
* Ruby on Rails
* AWS / S3 
* Centos / Linux
* Digital Ocean
* Heroku

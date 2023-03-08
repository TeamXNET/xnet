#  `xnet.stream`

XNet, a livestreaming website for a variety of content, ranging from video games to performance arts like dancing, or simply chatting. The important aspect of the website is that users are able to broadcast live to other users the website, and users are able to follow their favorite streamers.

## Table of content

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)


## Installation

How to install:

- In the repository, run the command 'rails s' to start the rails server and begin serving the SPA entry file.
- Run the command 'npm start', in order to start building the React Frontend files.

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

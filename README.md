# Spacestagram

![Spacestagram](https://i.imgur.com/qSGtbw8.png)

Negin's [Spacestagram](https://nuggetsnegin.github.io/spacestagram/) was built with [my cat Jiro](https://i.imgur.com/QVvbu5r.png) and:

- [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html)
- [TypeScript](https://www.typescriptlang.org/)
- [Airbnb's eslint rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [iconmonstr](https://iconmonstr.com/license/)
- [Procreate](https://procreate.art/) for my loading indicator and error indicator of me and [Jiro](https://i.imgur.com/QVvbu5r.png) traversing space
- [Google Fonts](https://fonts.google.com/)

## To run the app:

- Clone the repo
- Install depedencies using `npm i` or `npm install`
- Run the app locally using `npm start` or visit the live link(@todo)

## Future considerations

- Dynamically implement a Promise and Fetch polyfill for IE, as I used the `fetch API` which is not compatible with Internet Explorer :'(
- Infinite scrolling or date picker for loading more data from the response, currently I'm hard-coding the range
- A more professional loading gif :D
- Currently, I'm rendering a fallback image, if the image format is not a `.jpg` because I noticed the response had the potential to return Youtube videos and the image formats ended in `.jpg`. This was a quick hacky fix to prevent handling embedding Youtube videos (as well as the accessibility of the Youtube video or lack-of because of captioning). This would also not work in a real use case as there could be different image formats but in this case I could easily check the response of what I was querying for. I should ideally handle this with a library or the [Youtube API](https://developers.google.com/youtube/iframe_api_reference#Getting_Started) if I wanted to support videos.

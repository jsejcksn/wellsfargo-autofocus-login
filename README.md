Chrome extension to autofill your username at wellsfargo.com
===

I don't use Chrome's Autofill for usernames, passwords, forms, etc. I do use the *Remember me* checkboxes on websites for setting a cookie to remember my username across visits. Wells Fargo doesn't have that for its site, so this fixes that with `localStorage`.

## Usage

Load the [extension](/extension/) directory as [an unpacked extension](https://developer.chrome.com/extensions/getstarted#unpacked) in Chrome, or pack the extension and install it if you don't want to keep the directory on your computer.

Visit [the Wells Fargo homepage](https://www.wellsfargo.com/) and enjoy not having to type your username over and over at every visit.

## Notes

### If you mistype your username...
The app includes only very primitive safeguards against mistyping your username before it stores the value in localStorage to autofill on subsequent visits. For example, if you leave the suggested username `username` or submit the prompt empty, it will not store your username (and you'll just try again next time). However, if you mistype your username, it will still save it and autofill it on future visits. If you realize you mistyped your username, just delete the `userid` localStorage key on the Wells Fargo homepage. To do so, open Chrome's *Developer Tools*, click the *Resources* tab, click the reveal icon beside *Local Storage* on the left, and click on the URL. Then select the `userid` key and click delete (**x**) at the bottom of the panel. Now, reload the page and you can type more carefully.
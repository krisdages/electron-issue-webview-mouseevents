# Electron 4.0 Issue: Webview mouseup does not fire when the cursor leaves the webview.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

## Demo

There is a blue box labeled "mousedown" in the main page,
as well as in the webviews.

Mousedown inside the main page, and the box will turn pink.
Drag the cursor outside the window and release, and the box will return to blue.

Mousedown inside the webview, and the box in the webview will turn pink.
Release the mouse inside the main page or outside the window,
and the box will NOT return to blue because the mouseup event is not fired.

In production, this breaks any behavior that relies on mouse dragging.

If you use Electron 3.0 instead of 4.0, this issue does not happen.
  
## License

[CC0 1.0 (Public Domain)](LICENSE.md)

# HackReality AR.js Intro Workshop

### Quick Intro
My name is Micah Haycraft, [here's my website](https://mhaycraft.dev/), I'm a graduating UNC senior majoring in computer science and a developer for Carolina AR/VR. This past summer I helped lead a team to [build a web AR app for Arts Everywhere](https://artseverywhere.unc.edu/art-walk-on-franklin/), and here I'm going to try and teach you some of what I learned.

AR.js is an free open source augmented reality library for web development. 

- [AR.js Website](https://ar-js-org.github.io/AR.js-Docs/)
- [AR.js Repo](https://github.com/AR-js-org/AR.js)

AR.js is a wrapper around the popular WebVR library A-Frame (which is itself a wrapper around Three.js). A-Frame uses an entity component system similar to what you may have seen if you've used Unity or Unreal for game development before.

- [A-Frame Website](https://aframe.io/)
- [A-Frame Repo](https://github.com/aframevr/aframe)

Together these two libraries make building web AR apps fairly straightforward. The structure is similar to writing HTML for a regular web page. But like anything there's still some quirks to figure out. Let's get started.

## Installation


1) Install [Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)

2) Follow the [VS Code tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial) on installing and using Node.js or if you're already familiar with node then download it directly from [here](https://nodejs.org/en/download/) and proceed with setup. Running ```npm``` in a VS Code terminal should output something like this: 

![npm terminal output](https://i.imgur.com/7xg9Ztl.png)

3) Clone this repository and open as a VS Code project. You can do this directly with git or with VS Code's version control by going to View -> Command Palette -> Git Clone -> paste the repository clone link

4) With the project cloned and open in VS Code, go to Terminal -> New Terminal and run ```npm install``` and ```npm init```. When prompted for package name, version number, etc, just leave them blank and keep hitting enter. It should look something like this: 

![terminal screenshot](https://i.imgur.com/fxvAzfW.png)

Note: This project currently uses the express framework for local development. Because the project is primarily intended to be used on mobile phones and not laptops, it is configured to require https, which is required by most mobile browsers in order to be able to request camera permission. So, we'll need to briefly hack together some fake certificates.

5) First you need to know your development computer's local IP on your home network. Open a command prompt and type ```ipconfig```, you want the number that comes up under 'ipv4' 

![](https://i.imgur.com/pBylBm6.png)

6) Go to https://www.selfsignedcertificate.com/ and put in your dev computer's local IP address with a colon and port 8000 like this and download the .key and .cert files it generates for you 

![](https://i.imgur.com/6P99jv2.png)

7)  Store them in the project directory, add the .key and .cert files' relative paths to the app.js file on lines 20 and 21 like this: 

![](https://i.imgur.com/O87kbJe.png)

![](https://i.imgur.com/hgphSZ2.png)

This should be the last step of setup.

## Usage

To run this demo and begin building more on top of it, open the VS Code terminal and run 

```node app.js```

On your phone or other device connected to the same local area network, open chrome or safari and navigate your dev computer's IP and port number in this structure:

 ```https://192.168.1.2:8000/``` 

It will pop up and complain that the certificates you generated earlier aren't valid, but you can tell your browser to trust the website anyways.

You should be prompted for permission to access your camera, after which you should be seeing your camera's view displayed in your browser.

Point your camera at this image:

![](https://github.com/MEECAH/MEECAH.github.io/blob/master/hiro_and_kanji.png?raw=true)

You should see a red and green cube with like this:

![](https://i.imgur.com/zJSFGJZ.png)








# Mobile Web Specialist Certification Course
---
#### _First Stage Restaurant Reviews Application_

## Project Overview: Stage 1

This is a web-based application developed by Udacity which includes a page listing several restaurants, information about those restaurants, and customer reviews. As an exercise in enhancing responsiveness, providing accessibility features, and employing the use of a service worker, I have:
- Added additional responsiveness to make the website viewable on a variety of device screen sizes.
- Altered the layout to avoid overlapping elements in the DOM.
- Included alt tags, ARIA roles, and ARIA labels to make the website more accessible.
- Provided page focus for many elements within the application to enhance the user experience for visually-impaired users.
- Included a service worker to cache page content and files in accordance with an "Offline First" approach to web development.

### Running The Application

To run the application, you can clone the repository using the following terminal command:
```
git clone https://github.com/udacity/mws-restaurant-stage-1.git
```
Alternatively, you can follow the below instructions to download to a hard drive:
* Click the green "Clone or download" button above then choose "Download ZIP".
* Find the folder `mws-restaurant-stage-1-master` in your Downloads folder or wherever it was placed on your device.
* Right click and choose "Extract All".
* Open your browser and use `Ctrl + O` (for Windows machines) to open the file selector on your device.

You will need to use a terminal for the server for the project. Once in the terminal:

1. In the project folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`

The main page on a desktop device:</br>
![The top of the main page](/img/main_page_top.png)
&nbsp;
&nbsp;
&nbsp;
&nbsp;
![The bottom of the main page](/img/main_page_bottom.png)

The main page on a mobile device:</br>
![The top of the main page](/img/main_mobile_top.png)       ![The bottom of the main page](/img/main_mobile_bottom.png)  

The restaurant page on a desktop device:</br>
![The top of the restaurant page](/img/restaurant_page_top.png)</br>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
![The bottom of the restaurant page](/img/restaurant_page_bottom.png)

The restaurant page on a mobile device:</br>
![The top of the restaurant page](/img/restaurant_mobile_top.png)       ![The bottom of the restaurant page](/img/restaurant_mobile_bottom.png)  

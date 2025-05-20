# Necturus Viewer Compact

This repository is a public template that allows you to recreate the basic functionalities of Necturus Viewer[^1] statically and for your own files. To make use of this template, you should have a set of TEI-XML files and their corresponding images in JPEG format.

## How to Create Your Own Mini-Edition with Necturus Viewer Compact

### Quick Setup

1. [Use this template](https://github.com/new?template_name=Necturus-Viewer-Compact&template_owner=eXtant-CMG) to create a new repository.
2. In your new repository, go to `Settings -> Actions -> General -> Workflow permissions` and give `Read and write permissions` to GitHub Actions.
3. Go to `Settings -> Pages -> Build and Deployment` and select `GitHub Actions` as source.
4. Replace the contents of the `files` folder with your own collections. Each directory in `files` represents a collection. Each collection will include:
   -  an `xml` folder containing the XML files,
   -  an `img` folder containing the images (make sure the corresponding XML and image files have the same name before the extension),
   -  *optionally*, a `meta.json` file containing:
      -  a string value for the key `name` (In the absence of this file/key, the directory name will be used for the collection.)
      -  a boolean value for the key `picturesAvailable` (In the absence of this file/key, it will be assumed your collection does include images.)
5. Commit and push your changes.

If you follow these steps correctly and in the right order, you will kickstart the deployment workflow and your edition will shortly be deployed to `https://[your-username].github.io/[your-repo-name]`.

### Local Development Server Setup

1. [Use this template](https://github.com/new?template_name=Necturus-Viewer-Compact&template_owner=eXtant-CMG) to create a new repository.
2. Clone your repository to your local system.
4. Replace the contents of the `files` folder with your own collections. Each directory in `files` represents a collection. Each collection will include:
   -  an `xml` folder containing the XML files,
   -  an `img` folder containing the images (make sure the corresponding XML and image files have the same name before the extension),
   -  *optionally*, a `meta.json` file containing:
      -  a string value for the key `name` (In the absence of this file/key, the directory name will be used for the collection.)
      -  a boolean value for the key `picturesAvailable` (In the absence of this file/key, it will be assumed your collection does include images.)
4. Run the Python script `script.py` from the root folder of the repository. This will update the `files_info.json` file which is necessary for the program to work.
5. Start a local server (eg. [the VCS live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or a [simple Python HTTP server](https://realpython.com/python-http-server/)) and open `index.html` on a browser. 

[^1]: You can look into the full version of the viewer with more features and a back-end connection [over here](https://github.com/NoonShin/Necturus-Viewer).

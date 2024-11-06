# Necturus Viewer Compact

This repository is a public template that allows you to recreate the basic functionalities of Necturus Viewer[^1] statically and for your own files. To make use of this template, you should have a set of TEI-XML files and their corresponding images.

## How to Create Your Own Mini-Edition with Necturus Viewer Compact

### Quick Setup

1. [Use this template](https://github.com/new?template_name=Necturus-Viewer-Compact&template_owner=eXtant-CMG) to create a new repository.
2. In your new repository, go to `Settings -> Actions -> General -> Workflow permissions` and give `Read and write permissions` to GitHub Actions.
3. Now go to `Settings -> Pages -> Build and Deployment` and select `GitHub Actions` as source.
4. Replace the contents of the `files/xml` folder with your XML files and the contents of `files/images` with your images. Make sure the corresponding XML and image files have the same name before the extension. Commit and push your changes.

If you follow these steps correctly and in the right order, you will kickstart the deployment workflow and your edition will shortly be deployed to `https://[your-username].github.io/[your-repo-name]`.

### Local Development Server Setup

1. [Use this template](https://github.com/new?template_name=Necturus-Viewer-Compact&template_owner=eXtant-CMG) to create a new repository.
2. Clone your repository to your local system.
3. Replace the contents of the `files/xml` folder with your XML files and the contents of `files/images` with your images. Make sure the corresponding XML and image files have the same name before the extension.
4. Run the Python script `script.py` from the root folder of the repository. This will update the `files_info.json` file which is necessary for the program to work.
5. Start a local server (eg. [the VCS live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or a [simple Python HTTP server](https://realpython.com/python-http-server/)) and open `index.html` on a browser. 

[^1]: You can look into the full version of the viewer with more features and a back-end connection [over here](https://github.com/NoonShin/Necturus-Viewer).


## Prerequisits :

1. We must have Account on Firebase at https://console.firebase.google.com/

2. We must need to grant the access to Firebase on Google Cloud Platform at 

    https://console.cloud.google.com/iam-admin/iam?project=myallauthpro



### Steps to Deploy the project at Firebase


### 1. Install Firebase CLI using
    
        npm install -g firebase-tools

### 2. Login to Firebase

        firebase login

### 3. Initialize Project

        firebase init



Steps during initialization
---------------------------

        - Select Hosting (Hosting and (optionally) set up GitHub Action deploys) using the arrow keys and spacebar, then press Enter

        - Please select an option: Create a new project (if there's no project in Firebase)
            
        - provide the unique project id (It's basically asking for the Project name)
            
        - What would you like to call your project? portfolio (portfolio is not must, can give any name)

            It will be something like this :
                Project information:
                - Project ID: itsakhilsoni
                - Project Name: portfolio
            
        - ? What do you want to use as your public directory? public
        
        - ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
            
        - ? Set up automatic builds and deploys with GitHub? Yes

        - It will ask for permission to Github (Accept/allow that) at https://github.com/login/oauth/authorize?client_id=89cf50f02ac6aaed3484&state=1052819187&redirect_uri=http%3A%2F%2Flocalhost%3A9005&scope=read%3Auser%20repo%20public_repo


Once authorized then will ask :
-------------------------------
                
        - For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) <github_username>/<enter_repository_name>
            
        - ? Set up the workflow to run a build script before every deploy? Yes
            
        - ? What script should be run before every deploy? npm run build

        - ? Set up automatic deployment to your site's live channel when a PR is merged? Yes
            
        - ? What is the name of the GitHub branch associated with your site's live channel? main

        - i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
            
            https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
            
        - i  Writing configuration info to firebase.json...
        - i  Writing project information to .firebaserc...
        - i  Writing gitignore file to .gitignore...

        - +  Firebase initialization complete!


### 4. firebase deploy

        i  deploying hosting
        i  hosting[itsakhilsoni]: beginning deploy...
        i  hosting[itsakhilsoni]: found 1 files in public
        +  hosting[itsakhilsoni]: file upload complete
        i  hosting[itsakhilsoni]: finalizing version...
        +  hosting[itsakhilsoni]: version finalized
        i  hosting[itsakhilsoni]: releasing new version...
        +  hosting[itsakhilsoni]: release complete

        +  Deploy complete!

    Project Console: https://console.firebase.google.com/project/itsakhilsoni/overview
    
    Hosting URL: https://itsakhilsoni.web.app


Note - Our project folder must be inside `public` directory which is created by Firebase command. For ex.


    public
        assets
            - css
                - style.css
            - js
                - script.js
            - images
                - image1.png
                - image2.png
        index.html
        about.html

        .firebaserc
        .gitignore
        firebase.json



`Note -` 

1. If we select this Hosting option eg. GitHub Action deploys then Firebase will ask Github Access. However it's not always necessary to give Github access to Firebase.

2. For straightforward deployments of local files to Firebase, GitHub access is not required

3. We can revoke any unnecessary permissions from your GitHub settings to keep your accounts clean and secure.

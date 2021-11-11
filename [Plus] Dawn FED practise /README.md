## PFED Practice Playground

### 1. Setup Themekit on your device

Head over to the [ThemeKit Getting Started](https://shopify.dev/themes/tools/theme-kit/getting-started) documentation and follow the instructions for Step 1 and 2. Don't worry about step 3, we'll get there soon.

Alternative to Step 2, you can add a private app to your development store and give it `read/write` access to "Themes". Be sure to copy the secret key/password for your private app to use later in step 3 below.

### 2. Clone this repo

In the GitHub Desktop application, choose to "Add" new repo, and pick "Clone repository..."

![View screenshot at the following link: https://screenshot.click/21-11-9wsak-glsel.png](https://screenshot.click/21-11-9wsak-glsel.png)

Under the "URL" tab, paste in the URL of this repo: https://github.com/jonas-henehan/maysen-practice

Choose the folder in which to clone the repo and hit "Clone".

Alternatively, open the Terminal application and execute:

```
cd location-you-wish-to-clone-to
git clone https://github.com/jonas-henehan/maysen-practice.git
```


### 3. Pull theme files

Within the GitHub Desktop app, click on "Open in Visual Studio Code" (Or other IDE if preferred). Alternatively, use `code .` command in Terminal if you cloned via the command line. Or else simply open up your IDE application and open the cloned folder.

Open terminal within VS Code using hotkey combo 'ctrl+shift+\`' and execute the following code where `your-password` is the secret key you copied in step 1 above, and `your-store` is your myshopify URL:

```
theme get --list --password=[your-password] --store="[your-store.myshopify.com]"
```
Record the `them-id` for the theme you wish to pull to your local environment.

Follow [Step 4](https://shopify.dev/themes/tools/theme-kit/getting-started#step-4-set-up-your-config-file) of the ThemeKit Getting Started Guide using the `theme-id` we saved above.

### 4. Push unedited theme files to repo

In the same terminal within VS Code run the following commands:

```
git add .
git commit -m "[your-store-name] description of work being done init"
git push origin HEAD
```

### 5. Start local development

Within the same terminal run the following commands with `branch-name` being a short description of work being done e.g. `transparent-header`:

```
git branch branch-name
git checkout branch-name
```

You can now start making changes to your theme code! Run the following commands to open and automatically sync changes to your theme:

```
theme open
theme watch
```

Use the `ctrl+c` hotkey to close the `watch` command if required.

### 6. Finalising changes

Once all your coding work is complete you can repeat step 4 above, but in the commit message, omit the `init` as this is not the initialised version of the theme anymore. 

**Optional**: If you are working on a larger customisation that span several files, you can choose to save each file change as its own commit. Simply run:

```
git add .
git commit -m "[your-store-name] Description of work done on specific file/s"
```

And continue your work. There is no need to run `git push origin HEAD` until all your work is complete.

### 7. Request PR review

Once all your work is committed and pushed to the repo `HEAD` you can open up the [repository](https://github.com/jonas-henehan/maysen-practice) in your browser. A banner should show that there are new changes on your branch. Click on "Compare & pull request": 

![View screenshot at the following link: https://screenshot.click/21-11-iy6yw-bcz4k.png](https://screenshot.click/21-11-iy6yw-bcz4k.png)

Add a title to the PR using the same `[name-of-store] Description of change` format, add yourself as the assignee and me (Jonas) as the reviewer. Write out a description of the changes made, including screenshots of visual changes and any new theme settings you may have added. Pay note to any specific testing steps that may be required e.g. different devices, different products etc.

Select "Create pull request".

![View screenshot at the following link: https://screenshot.click/21-11-c8l2t-v4tqv.png](https://screenshot.click/21-11-c8l2t-v4tqv.png)


#### You're done! Nice work, now we can look over the coding changes together, action any changes following steps 5 & 6 above to update the pull request with new code.


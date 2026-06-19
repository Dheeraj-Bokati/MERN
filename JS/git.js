//! git / github
//* distributed version control system

// github , gitlab , bitbuket , ..

//* repository
// local -> 
// remote ->

//* branching
// parallely working on same project

//* version

//! git commands
//? config
//* git config --global --list
//* git config --global user.name "<username>"
//* git config --global user.email "<github_email>"
//* git config --global init.defaultbranch 'main'  "defaultbranch": Unknown word.

//? initialize local git repo
//* git init        //Initialized empty Git repository

//? git working flow
//* working directory   -> staging area     -> local repo
// changes                  ready state         new version

//? 
//* git status  -> current status    
//* git add <file_path>                     (ready state)
//* git commit -m "<commit_message>"        (new version)

//? github
//* git remote -v
//* git remote add origin <remote_repo_url>
//* git remote  remove origin
//* git push origin <branch_name>  // git push origin main
//* git pull origin <branch_name> // git pull origin main

//? ignore
//* .gitignore file

//? branching
//* git branch 
//* git branch <branch_name>  -> create new branch
//* git switch <branch_name>  -> switch between branches
//* git switch -c <branch_name>  -> create & switch to new branch
//* git checkout <branch_name>  -> switch between branch
//* git checkout -b <branch_name> -> create & switch to new branch


//? merge
//* git merge <branch_name>

//? merge conflit
//* this happen when two branches make changes on same file on same line

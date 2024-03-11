# REACT_STRUCTURE_TEMPLATE

## Description
 In order to support different teams to work on their own project while maintaining frontend React code compatibility across teams, we setup a code base for developers to build their project on. This structure template is firstly created to support Learning-Oriented Narratives Creation subteams for future code combination. 

This structure template is based on Node20 (node=v20.11.1, npm=10.2.3).

To manage and change Node version, you may use [nvm](https://github.com/nvm-sh/nvm)

# Naming Conversation
For each subsystem components/pages, files should start with your subsystem name. For general component/pages, you don't have to follow the rule.

For example, `HomePage.jsx` for Card system should be named as  `CardHomePage.jsx`. 


# Project Folder Structures

Create sub folders for better file maintainence if possible.
`src/assets`: put your static files such as images, videos, icons under this folder. 
`src/components`: put your components under this foler.
`src/pages`: put your files of a whole page/view/controler under this folder and add it to `src/router.js` for page navigation.
`src/config`: put for configuration files or some constants under this folder.
`src/slicers`: put your Redux slicers/reducers in under this folder and add it to `src/store.js`.

For css files, create a folder for each page or component, and put you .jsx file and .css file under this project. (An example is `src/pages/CardHomePage`)


## Routers
Use [React-Router](https://reactrouter.com/en/main) for page navigation.

Write your views/pages into Routers of `src/router.js` files.

## Redux


## Css
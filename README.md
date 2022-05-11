# UX/UI - Coding my peer's prototype

In the previous module, I interviewed one of our classmates to determine what
her needs were and subsequently found a digital solution. She did the same with
me, and at the end, we exchanged Figma prototypes, it is about time to code it!

[UX/UI Repository](https://github.com/Haneefa-Shaik/UX-UI--co-design-week-2)

## Table of contents

- [Name of project](#name-of-project)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)
  - [Inspiration](#inspiration)
  - [Contact](#contact)
  - [Instructions for use](#instructions-for-use)
  - [Code Quality Checks](#code-quality-checks)
  - [Continuous Integration (CI)](#continuous-integration-ci)
  - [Repo Setup](#repo-setup)

## General info

> Coding my classmate's [Haneefa Shaik] prototype
> (https://github.com/Haneefa-Shaik).

## Screenshots

![Screenshot_2022-05-04_at_21 12 46](https://user-images.githubusercontent.com/97364283/167778387-4ae7216b-5c8f-48b2-9d4b-5caaf64d0d25.png)

## Technologies

- Node 14.16.0
- VSC code
- JavaScript
- HTML and CSS

## Setup

- `npm run start`

## Code Examples

```js
// the hello world program
console.log("Hello World");
```

## Features

List of features ready and Todos for future development

- Questionnaire made
- Interview completed

To-do list:

- Defining the user personas, a backlog, and an initial design.
- Figma design.
- Discussing the design with [Haneefa Shaik](https://github.com/Haneefa-Shaik)
  with her construction company design using the Double Diamond approach.
- Coding the website.
- Creating the retrospective

## Status

Project is: _in progress_

## Inspiration

Project by HackYourFuture.be

## Contact

By [Cristobal Lopez](https://github.com/cristobal-lopez)

## Instructions for use

<details>
  <summary>Getting Started</summary>

<!-- a guide to using this repository -->

1. `git clone git@github.com:HackYourFutureBelgium/template-markdown.git`
2. `cd template-markdown`
3. `npm install`

## Code Quality Checks

- `npm run format`: Makes sure all the code in this repository is well-formatted
  (looks good).
- `npm run lint:ls`: Checks to make sure all folder and file names match the
  repository conventions.
- `npm run lint:md`: Will lint all of the Markdown files in this repository.
- `npm run lint:css`: Will lint all of the CSS files in this repository.
- `npm run validate:html`: Validates all HTML files in your project.
- `npm run spell-check`: Goes through all the files in this repository looking
  for words it doesn't recognize. Just because it says something is a mistake
  doesn't mean it is! It doesn't know every word in the world. You can add new
  correct words to the [./.cspell.json](./.cspell.json) file so they won't cause
  an error.
- `npm run accessibility -- ./path/to/file.html`: Runs an accessibility analysis
  on all HTML files in the given path and writes the report to
  `/accessibility_report`

## Continuous Integration (CI)

When you open a PR to `main`/`master` in your repository, GitHub will
automatically do a linting check on the code in this repository, you can see
this in the[./.github/workflows/lint.yml](./.github/workflows/lint.yml) file.

If the linting fails, you will not be able to merge the PR. You can double check
that your code will pass before pushing by running the code quality scripts
locally.

## Repo Setup

- Give each member _write_ access to the repo (if it's a group project)
- Turn on GitHub Pages and put a link to your website in the repo's description
- Turn on GitHub Actions
- in the _Branches_ section of your repo's settings make sure:
  - The repository
    [requires a review](https://github.blog/2018-03-23-require-multiple-reviewers/)
    before pull requests can be merged.
  - The `master`/`main` branch must "_Require status checks to pass before
    merging_"
  - The `master`/`main` branch must "_Require require branches to be up to date
    before merging_"

</details>

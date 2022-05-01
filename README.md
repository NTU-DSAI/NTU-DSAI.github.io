# DSAI-Docs

[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/NTU-DSAI/NTU-DSAI.github.io/master.svg?)](https://results.pre-commit.ci/latest/github/NTU-DSAI/NTU-DSAI.github.io/master) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/NTU-DSAI/NTU-DSAI.github.io/Deploy%20to%20GitHub%20Pages?label=Deploy%20to%20GH%20pages&logo=github) [![GitHub issues](https://img.shields.io/github/issues/NTU-DSAI/NTU-DSAI.github.io?logo=github)](https://github.com/NTU-DSAI/NTU-DSAI.github.io/issues) ![GitHub pull requests](https://img.shields.io/github/issues-pr/NTU-DSAI/NTU-DSAI.github.io?logo=github)

- [DSAI-Docs](#dsai-docs)
  - [Installation](#installation)
  - [Local Development](#local-development)
  - [Contributing](#contributing)
    - [Instructions](#instructions)
    - [File location](#file-location)
    - [Pull Requests](#pull-requests)
    - [Branch Naming](#branch-naming)
    - [Commit Messages](#commit-messages)
    - [Additional Pointers](#additional-pointers)

This website is a collection of helpful information gathered by the Seniors of DSAI to help you have a fruitful and enjoyable time at NTU. Feel free to add your own updates to the site as pull requests.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Contributing

This repository is actively seeking contributions from students. Please read this document carefully before contributing.

### Instructions

1. Duplicate the \_Sample.md file into the subfolder where you intend to write the content and rename it accordingly. You can visit [docusaurus docs](https://docusaurus.io/docs/markdown-features) for more feature details
2. Create a Pull Request for your update and ensure the following on the panel on the right:
   1. Add an admin as a reviewer to the pull request.
   2. Add yourself as the asignee
   3. Add this project
   4. Add the Documentation label/tag

### File location

Ensure that the file you have created is stored in the appropriate location. This repository follows the latest official DSAI curriculum structure and MPE list found [here](https://www.ntu.edu.sg/scse/admissions/programmes/undergraduate-programmes/curriculum-structure#Content_C021_Col00). Modules appearing in the Curriculum Structure are organised by semester, MPEs and BDEs have their own folders respectively with the latter being organised by school. Any module not in the two documents above should be in the BDE section.

_**Note:**_ More details are provided in the [PR Template](.github/pull_request_template.md).

### Pull Requests

Please add content to the project by forking the repository and adding your changes in as few commits as possible. Title your PR summarising the content that you're submitting as succintly as possible.

**Pull requests that do not follow these instructions will not be accepted.**

### Branch Naming

All contribution branches are to be named as such:

- **Contribution**: `contribution-<yourname>`

- **Bug**: `bug-yourname-<nature of bug>`, eg. `bug-bhargav-broken-links`

### Commit Messages

Commit messages should describe the content of the commit, such as:

```text
Added SC1003 Intro to Computational Thinking
```

or

```text
Added AI, Regression Analysis, Data Visualisation
```

If you are creating a Pull Request that fixes an Issue, include the issue number in the commit message as such:

```text
[#3] Fixed infinite loop
```

### Additional Pointers

1. For internal Links between pages, use the relative file path rather than the slug link. e.g. `(statistics)[../Y2S2/MH3500 Statistics.md]` as it aids with linking files on GitHub.

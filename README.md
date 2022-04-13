# DSAI-Docs

[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/NTU-DSAI/NTU-DSAI.github.io/master.svg?)](https://results.pre-commit.ci/latest/github/NTU-DSAI/NTU-DSAI.github.io/master) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/NTU-DSAI/NTU-DSAI.github.io/Deploy%20to%20GitHub%20Pages?label=Deploy%20to%20GH%20pages&logo=github) [![GitHub issues](https://img.shields.io/github/issues/NTU-DSAI/NTU-DSAI.github.io?logo=github)](https://github.com/NTU-DSAI/NTU-DSAI.github.io/issues) ![GitHub pull requests](https://img.shields.io/github/issues-pr/NTU-DSAI/NTU-DSAI.github.io?logo=github)

- [DSAI-Docs](#dsai-docs)
  - [Installation](#installation)
  - [Local Development](#local-development)
  - [Contributing](#contributing)
    - [Installation instructions](#installation-instructions)
    - [Pull Requests](#pull-requests)
    - [Branch Naming](#branch-naming)
    - [Commit Message](#commit-message)

This website is a collection of helpful information gathered by the Senios of DSAI to help you have a fruitful and enjoyable time at NTU. Feel free to add your own updates to the site as pull requests.

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

This repository is actively seeking contributions from students. Please read this document as well as the [project page](https://github.com/NTU-DSAI/NTU-DSAI.github.io/projects/1) carefully before contributing.

### Installation instructions

Ensure that you have [pre-commit](https://pre-commit.com) installed on your machine.

```bash
pip install pre-commit
```

After cloning the repository, install the pre-commit hook.

```bash
pre-commit install
```

### Pull Requests

Please add content to the project by forking the repository and adding your changes in as few commits as possible. **Pull requests that do not follow these instructions will not be accepted.**

### Branch Naming

All contribution branches are to be named as such:

- **Contribution**: `contribution-<yourname>`

- **Bug**: `bug-yourname-<nature of bug>`, eg. `bug-bhargav-broken-links`

### Commit Message

If you are creating a Pull Request that fixes an Issue, include the issue number in the commit message as such:

```text
[#3] Fixed infinite loop
```

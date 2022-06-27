# Contributing

This repository is actively seeking contributions from students. Please read this document carefully before contributing.

- [Contributing](#contributing)
  - [General Instructions](#general-instructions)
    - [Repository Structure](#repository-structure)
    - [Clarifications](#clarifications)
    - [Writing Markdown for Websites](#writing-markdown-for-websites)
    - [File Location](#file-location)
    - [Pull Requests](#pull-requests)
    - [Branch Naming](#branch-naming)
    - [Commit Messages](#commit-messages)
    - [Pre-commit hook](#pre-commit-hook)
  - [Docs](#docs)
  - [Blog](#blog)
  - [Site](#site)
  - [Additional Pointers](#additional-pointers)

## General Instructions

### Repository Structure

This section covers the general structure of the repository. There are 3 main folders that you need to familiarise yourself with, which are `src/`, `docs/` and `blog/`.

The `src/` folder is the homepage of the website and will eventually host all the key information about DSAI and the members of this organization. This site is till pending ideation and will be built at a later date.

The `blog/` folder is where you can write interesting blog posts about all things DS and AI. Whether you have an interesting article to share and talk about or if you have recently participated in a competition and found novel/unique ways to approach problems, feel free to write a short 2-4 min long blog post about your experience.

The `docs/` folder is the meat of this repository and aims to collate all the information about as many modules in NTU as possible. Ideally you will be doing most of your contribution here and we look forward to knowing more about all the interesting modules that you have taken in NTU.

### Clarifications

Should you need to clarify anything about this repository, feel free to reach out to the admins of the organization. Do also feel free to look at work that has already been done for inspiration or for formatting concerns.

### Writing Markdown for Websites

1. Visit [docusaurus docs](https://docusaurus.io/docs/markdown-features) for information on how to write markdown for websites.
2. For internal Links between pages, use the relative file path rather than the slug link. e.g. `(statistics)[../Y2S2/MH3500 Statistics.md]` as it aids with linking files on GitHub.

### File Location

Ensure that the file you have created is stored in the appropriate location. This repository follows the latest official DSAI curriculum structure and MPE list found [here](https://www.ntu.edu.sg/scse/admissions/programmes/undergraduate-programmes/curriculum-structure#Content_C021_Col00). Modules appearing in the Curriculum Structure are organised by semester, MPEs and BDEs have their own folders respectively with the latter being organised by school. Any module not in the two documents above should be in the BDE section.

_**Note:**_ More details are provided in the [PR Template](.github/pull_request_template.md).

### Pull Requests

Please add content to the project by forking the repository and adding your changes in as few commits as possible. Title your PR summarising the content that you're submitting as succintly as possible. Ensure the following on the panel on the right:

1. Add an admin or the admins group as a reviewer to the pull request.
2. Add yourself as the asignee
3. Add this project
4. Add the Documentation label/tag or any relevant tag

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

### Pre-commit hook

This repository uses the `pre-commit` library to run code linting and formatting to ensure consistency of code. It uses your local `python 3.x` installation. Check out their [official website](https://pre-commit.com/) for more details.

Installing `pre-commit`:

```bash
pip install pre-commit
```

Adding hook to repository:

```bash
pre-commit install
```

Running pre-commit:

```bash
pre-commit run -a
```

If you are unable to run the hook, please ensure that it runs on the pull request branch.

## Docs

1. Duplicate the `_Sample.md` file into the subfolder where you intend to write the content and rename it according to the instructions in the sample file.
2. Follow the updated Course Codes for SCSE modules (SC not CZ). Refer to the latest Curriculum Structure [here](https://www.ntu.edu.sg/scse/admissions/programmes/undergraduate-programmes/curriculum-structure#Content_C021_Col00).

## Blog

1. Create the folder structure for the blog post in the format `./YYYY/MM/DD/title-in-lowercase`.
2. Name the blog post file `index.md`.
3. Add all images to the `title-in-lowercase` folder.
4. Make sure that you provide an image of yourself when writing blog posts. Your image should be publicly accessible and not stored in this repository. Ideally you should use your GitHub DP and link that in [`authors.yml`](../blog/authors.yml).

## Site

1. Use the [Infima Library](https://infima.dev/docs/getting-started/introduction) to style webpages in the `/src` directory.
2. Since this section is still pending direction, please come back to this part later.

## Additional Pointers

1. Use proper English when writing content. We want the documentation to be accessible to all.
2. Try and be as objective and thorough as possible when writing content, especially for module reviews.

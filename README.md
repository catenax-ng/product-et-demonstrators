# product-et-demonstrators

Project has been setup with React.


## Include content into the website

### Markdown
Go to `npm\demo-page\public\md-content\demos` folder. It contents files for each section. You can include the information as a normal file and it will be rendered in the associated demonstrator page.

For more information of how to use Markdown style check the [documentation](https://www.markdownguide.org/basic-syntax/)

Any questions or issues with markdown and the renderization of the page create an issue.

### HTML
To modify the HTML files and content go to `npm\demo-page\src\pages\demos\`. For each section you will find a file. To include HTML content modify the method `render()`, adding or removing the required code.

The CSS or styles can be found in the file `npm\demo-page\src\App.css`.


### Contact card
To add a contact in the website using Markdown use the following structure:
```

```contact_card
../md-content/images/<picturure_path>
<Name of contributor>
<mail@catena.net>
```

```

## NPM Installation

Install needes packages in folder `npm/demo-page` (go to that path).

```
yarn add cx-portal-shared-components @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-date-pickers react-markdown
```

```
yarn start
```
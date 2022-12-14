# product-et-demonstrators

Project has been setup with python 3.8.10

## Include content into the website

### Markdown
Go to `npm\demo-page\public\md-content\demos` folder. It contents files for each section. You can include the information as a normal file and it will be rendered in the associated demonstrator page.

For more information of how to use Markdown style check the [documentation](https://www.markdownguide.org/basic-syntax/)

Any questions or issues with markdown and the renderization of the page create an issue.




### HTML
To modify the HTML files and content go to `npm\demo-page\src\pages\demos\`. For each section you will find a file. To include HTML content modify the method `render()`, adding or removing the required code.

The CSS or styles can be found in the file `npm\demo-page\src\App.css`.




## Setup python virtual environment 

```shell
python3 -m venv venv
. venv/activate/bin
pip install -r requirements.txt
```

## Start the webapplication at http://localhost:5000
```shell
./start.sh
```

## NPM Installation

Install needes packages in folder `npm/demo-page`

```
yarn add cx-portal-shared-components @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-date-pickers react-markdown
```

```
yarn start
```
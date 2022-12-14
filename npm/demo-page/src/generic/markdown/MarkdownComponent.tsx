
import { Typography } from 'cx-portal-shared-components';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';



// Component using library from:
//      https://github.com/remarkjs/react-markdown
//
class MarkdownComponent extends Component <{contentUrl: string}, { [key: string]: string }>{

    components: {};
  
    constructor(props: any) {
  
        super(props);

        this.state = {
            markdown: ""
        }

        this.components = {
            h1: ({node, ...props}: {node: any}) => <Typography variant="h1" {...props}/>,
            h2: ({node, ...props}: {node: any}) => <Typography variant="h2" {...props}/>,
            h3: ({node, ...props}: {node: any}) => <Typography variant="h3" {...props}/>,
            h4: ({node, ...props}: {node: any}) => <Typography variant="h4" {...props}/>,
            h5: ({node, ...props}: {node: any}) => <Typography variant="h5" {...props}/>,
          }

        this.getMarkdown()
    }


    async getMarkdown() {

        fetch(this.props.contentUrl)
            .then((response) => response.text())
            .then((response2) => {
                this.setState({markdown: response2})
            }
        )  
    }


    render(): React.ReactNode {
        return <ReactMarkdown components={this.components}>{this.state.markdown}</ReactMarkdown>;
    }
}


export default MarkdownComponent;
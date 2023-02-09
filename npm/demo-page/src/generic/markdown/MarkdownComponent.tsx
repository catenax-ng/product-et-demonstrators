
import { Typography } from 'cx-portal-shared-components';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeComponent from './code';
import ImageComponent from './image';



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
            h1: ({node, ...props}: {node: any}) => <Typography variant="h1" id={this.title_name(props)} {...props}/>,
            h2: ({node, ...props}: {node: any}) => <Typography variant="h2" id={this.title_name(props)} {...props}/>,
            h3: ({node, ...props}: {node: any}) => <Typography variant="h3" id={this.title_name(props)} {...props}/>,
            h4: ({node, ...props}: {node: any}) => <Typography variant="h4" id={this.title_name(props)} {...props}/>,
            h5: ({node, ...props}: {node: any}) => <Typography variant="h5" id={this.title_name(props)} {...props}/>,
            p:  ({node, ...props}: {node: any}) => <Typography variant="body1" {...props}/>,
            li: ({node, ...props}: {node: any}) => <li><Typography variant="body2" {...props}/></li>,
            img: ({node, src, alt, title, ...props}: {node: any, src: any, alt: any, title: any}) => <ImageComponent src={src} alt={alt} title={title} />,
            code: ({node, inline, className, ...props}: {node: any, inline: any, className: any}) => <CodeComponent inline={inline} className={className} {...props} />,
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

    // https://github.com/remarkjs/react-markdown/issues/69
    title_name(props: any) : string {
        return props.children[0].toLowerCase().replace(/\W/g, '-')
    }
    
    render(): React.ReactNode {
        return <ReactMarkdown components={this.components} className='markdown-style'>{this.state.markdown}</ReactMarkdown>;
    }
}


export default MarkdownComponent;
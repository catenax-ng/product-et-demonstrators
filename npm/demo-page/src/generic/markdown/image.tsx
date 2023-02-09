import { Typography } from "cx-portal-shared-components";
import { Component } from "react";


class ImageComponent extends Component <{src: string, title: string, alt: string}, { [key: string]: string }>{
  
    constructor(props: any) {
  
        super(props);
    }
    
    render(): React.ReactNode {
        return  <div title={this.props.alt} className="image-layout">
                    <img src={this.props.src}/>
                    <Typography variant="caption">{this.props.title}</Typography>
                </div>
    }
}


export default ImageComponent;
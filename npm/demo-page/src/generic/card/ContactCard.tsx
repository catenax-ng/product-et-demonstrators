import { Typography } from "cx-portal-shared-components";
import { Component } from "react";


class ContactCardComponent extends Component <{image_src: string, name: string, email: string}, { [key: string]: string }>{
  
    constructor(props: any) {
  
        super(props);
    }
    
    render(): React.ReactNode {
        return  <div className="contact-card">
                    <img src={this.props.image_src}/>
                    <br />
                    <Typography variant="h4">{this.props.name}</Typography>
                    <a href={"mailto:" + this.props.email}><Typography variant="body2">{this.props.email}</Typography></a>
                </div>
    }
}


export default ContactCardComponent;
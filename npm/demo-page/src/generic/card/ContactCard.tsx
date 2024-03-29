import { Typography } from "cx-portal-shared-components";
import { Component } from "react";


class ContactCardComponent extends Component <{image_src: string, name: string, role: string, email: string}, { [key: string]: string }>{
  
    constructor(props: any) {
  
        super(props);
    }
    
    render(): React.ReactNode {
        return  <div className="contact-card">
                    <img src={this.props.image_src}/>
                    <div className="contact-card-info">
                        <Typography variant="h4">{this.props.name}</Typography>
                        <em>{this.props.role}</em>
                        <a href={"mailto:" + this.props.email}><Typography variant="body2">{this.props.email}</Typography></a>
                    </div>
                </div>
    }
}

/*
                <div className="contact-card">
                    <img src={this.props.image_src}/>
                    <br />
                    <Typography variant="h4">{this.props.name}</Typography>
                    <a href={"mailto:" + this.props.email}><Typography variant="body2">{this.props.email}</Typography></a>
                </div>
*/


export default ContactCardComponent;
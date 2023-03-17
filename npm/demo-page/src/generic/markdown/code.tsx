
import { Component } from "react";
import ContactCardComponent from "../card/ContactCard";


class CodeComponent extends Component <{inline: string, className: string, children?: any}, { [key: string]: string }>{
  
    constructor(props: any) {
  
        super(props);
    }
    
    
    render(): React.ReactNode {

        console.log(this.props.className)

        if (this.props.className == "language-contact_card") {

            var data: string[] = this.split_contact_info(this.props.children[0])

            return <ContactCardComponent image_src={data[0]} name={data[1]} role={data[2]} email={data[3]}/>
        }

        else  {
            
            return <code {...this.props}></code>
        }

    }

    split_contact_info(text: string): string[] {

        var data = text.replace(/(\r\n|\n|\r)/gm, "\n").split('\n')

        return data
    }
}


export default CodeComponent;
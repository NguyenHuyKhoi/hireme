//import from library 
import React, {Component} from 'react'
import { IconContext } from 'react-icons/lib';
import { bullshitIcons } from '../../utils/constants';

export default class CustomIconComponent extends Component {
    render(){
        const name=this.props.name
        const color=this.props.color;
        return (
            <IconContext.Provider
                value={{ 
                    color: this.props.color, 
                    style:styles.container
                }}>
                <div>
                    {bullshitIcons[this.props.name]}
                </div>
            </IconContext.Provider>
        )
    }
}

const styles={
    container : {
        width: 25,
        height: 25,
        borderRadius:2
    }
}

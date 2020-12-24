//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants';
import { BLACK, BLUE_1, WHITE } from '../../utils/palette';

class Button extends Component{
    render(){
        const label=this.props.label
        const index=this.props.index
        const is_highlight=this.props.is_highlight
        console.log('label :',label)
        return (
            <div 
                    key={''+index}
                    onClick={this.props.onClick}
                    style={{width:45,height:45,borderRadius:7,
                    display:'flex',justifyContent: 'center',alignItems: 'center',
                    marginRight:15,
                    backgroundColor:is_highlight? BLUE_1:WHITE}}>
                    <text style={{fontSize:TEXT_SIZES.BIG,color:is_highlight?WHITE:BLACK}}>
                        {label}
                    </text>
                </div>
        )
    }
}

const DISPLAY_PAGE=5;
export default class PaginationComponent extends Component {
    constructor(props){
        super(props);
        const items=this.props.items;
        const items_per_page=this.props.items_per_page
        const pages=Math.floor(items/items_per_page)+(items%items_per_page!==0)

        console.log('pagination ',items,items_per_page,pages);
        this.state={
            items:items,
            items_per_page:items_per_page,
            pages:pages,
            left_page_index:1,
            display_pages:Math.min(DISPLAY_PAGE,pages),
            current_page_index:1
        };
    }


    onClickPre=()=>{
        const l=this.state.left_page_index
        if (l==1) return ;
        this.setState({
            left_page_index:l-1
        })
    }

    onClickNext=()=>{
        let l=this.state.left_page_index;
        console.log('click_next:',l,this.state.display_pages,this.state.pages)
        if (l+this.state.display_pages>this.state.pages) return ;
        this.setState({
            left_page_index:l+1,

        })
    }

    onClickPage=(item)=>{
        this.setState({
            current_page_index:item
        })

        const first_item_index=(item-1)*this.state.items_per_page;
        const last_item_index=Math.min(first_item_index+this.state.items_per_page-1,this.state.items-1);
        this.props.onClickPage(first_item_index,last_item_index)
    }

    render(){
        const {pages,left_page_index,current_page_index,display_pages}=this.state

        const arr=[]
        for (let i=0;i<display_pages;i++) arr.push(left_page_index+i)

        console.log('Array_length:',arr)
        return (
            <div style={styles.container}>

                <Button label='<'  index={1000}  is_highlight={true} onClick={this.onClickPre}/>
                {
                arr.map((item,index)=>
                    <Button 
                        onClick={()=>this.onClickPage(item)}
                        label={item}
                        index={index}
                        key={''+(index+1)}
                        is_highlight={item===current_page_index}/>
                    )
                }
                <Button label='>'  index={999}  is_highlight={true}
                    onClick={this.onClickNext}/>
        </div>
        )
    }
}


const styles={
    container:{
        marginTop:10,
        display:'flex',
        paddingBottom:40,
        flexDirection: 'row',
        alignSelf : 'center'
    }
}

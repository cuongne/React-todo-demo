import React,  {Component} from 'react';
import './demo.css';
import classNames from 'classnames';
import './TodoItem.css'
import checkImg from '../img/check.svg';
import checkImgComplete from '../img/check-done.svg';
import removeImg from '../img/close.svg'
 class Demo extends Component { 
    constructor(props) {
         super(props);
         this.handeDelete = this.handeDelete.bind(this)
    }

    handeDelete(id){
        this.props.onClickDelete(id);
    }
    

    render() {
        const Todo = () =>{
            
            return(        
                <button className="closeTodo" onClick={() => this.handeDelete(item.id)}>
                    <img  src={removeImg} width="20"/>
                </button>
            )
        }
        const {item,onClick} = this.props
        let url = checkImg;
        if(item.isComplete){
            url = checkImgComplete;
        }

        const TodoList = () => {

            return( 
                <div  className={classNames('TodoItem', {
                    'TodoItem-complete':item.isComplete
                })}>
                    <img onClick={onClick} src={url} width="32"/>
                    <span>{item.title}</span>
                     <Todo onClickDelete={this.props.onClickDelete}/>
                </div>
            );
          }
        return(
                <TodoList/>
        )
    }
}


export default Demo;
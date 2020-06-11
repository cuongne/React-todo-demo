import React,  {Component} from 'react';
import Demo from './components/Demo.js';
import Footer from './components/Footer.js';
import coderx from './components/coderx.png';
import './App.css';
import './components/demo.css';

const filterTodosLeft = (todoItems = []) => {
  return todoItems.filter(item => !item.isCompleted)
}
const filterByStatus = (todoItems = [], status = '') => {
  switch (status) {
    case 'ACTIVE':
      return todoItems.filter(item => !item.isCompleted)
    case 'COMPLETED':
      return todoItems.filter(item => item.isCompleted)
    default:
      return todoItems
  }
}
class App extends Component {
  
  constructor() {
    super();
    this.state = {
      status:'ALL',
      isCheckedAll:false,
      newItem:'',
      todoItems: [
        {id:1, title:'Đi làm' , isComplete:true},
        {id:2 ,title:'Tập Gym', isComplete:true},
        {id:3, title:'Đọc Sách', isComplete:true}
      ]
    }
   this.onKeyUp = this.onKeyUp.bind(this)
   this.onChange = this.onChange.bind(this)
   this.handeDelete = this.handeDelete.bind(this)
   this.selectedAll = this.selectedAll.bind(this)
  }

  onItemClicked(item){
    return (event) =>{
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }

  onKeyUp(event) {   
    if(event.keyCode === 13)
    {
      let text = event.target.value;
      if(!text)
      {
        return;
      }
        text = text.trim();
      if(!text)
      {
       return;
      }
      this.setState({
      newItem: '',
      todoItems: [
        {title:text,isComplete:false},
        ...this.state.todoItems
      ]
    })
    }  
  }
  handeDelete(id){
    const {todoItems} = this.state;
    this.setState(() => ({
      todoItems: todoItems.filter(todo => todo.id !== id)
    }));
  }
  selectedAll(){
    const { todoItems, isCheckedAll } = this.state
    const updatedListTodos = todoItems.map(item => ({ ...item, isComplete: !isCheckedAll }))
    this.setState(preState => ({
      isCheckedAll: !preState.isCheckedAll,
      todoItems: updatedListTodos
    }))
  }
  

  onChange(event) 
  {
    this.setState({
      newItem : event.target.value
    })
  }
  render(){
    const {todoItems , newItem, status} = this.state;
    // if(todoItems.length){
      return (
        <div className="App">
          <header className="top">
           <div className="go-back">Go-Back</div>
            <div className="logo-coderx">
              <img src={coderx} alt="coderx"/>
            </div>
            <div className="login">
            <a href="#" className="login-a">Sign Up</a>
            </div>
            
          </header>
            <div className="Main">
              <div className="input-header">
                <div onClick={this.selectedAll} className="check-all"></div>
                <input onKeyUp={this.onKeyUp}
                onChange={this.onChange}
                value={newItem}
                 placeholder="What do you want to do?"
                type="text"/>
              </div>
              {
                todoItems.length > 0 && filterByStatus(todoItems,status).map((item,index) => <Demo
                key={index}
                onClick={this.onItemClicked(item)}
                onClickDelete={this.handeDelete}
                item = {item}/>)     
              }
              <Footer
              activeButton={status}
              setStatusFilter={(status) => this.setState({ status })}
              numTotosLeft={filterTodosLeft(todoItems).length}
              />
            </div>
        </div>
      );
    // }
    // else {
    //   return (
    //     <div className="App">Nothing here.</div>
    //   )
    // }
    
  }
 
}

export default App;

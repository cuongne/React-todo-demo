import React,  {Component} from 'react';
import './Footer.css';
import classNames from 'classnames';

class Footer extends Component {
    constructor(props) {
        super(props);
   }

    render() {
        const {numTotosLeft,status,activeButton,setStatusFilter} = this.props;
        return(
        <div className="footer">
            <span className="count">
            <strong>{numTotosLeft}</strong>
             <span className="items">{numTotosLeft > 1 ? 'items' : 'item'}</span>
              in list
              </span>
            <ul className="checked">
                <li><a href="#/"
                        className={`${activeButton === 'ALL' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('ALL')}>
                        All</a>
                </li>
                <li><a href="#/active"
                        className={`${activeButton === 'ACTIVE' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('ACTIVE')}>
                        Active</a>
                </li>
                <li><a href="#/completed"
                        className={`${activeButton === 'COMPLETED' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('COMPLETED')}>
                        Completed</a>
                </li>
            </ul>
        </div>
    )
            
        
    }
    
}
export default Footer;
import React, {
	Component
} from 'react';
import config from '../config.json';
import styles from './Greeter.css'; //ES6标准
//require('./Greeter.css');  commonJS标准

class Greeter extends Component {
	render() {
		return (
			<div className='root'>{/*添加类名*/}
        		{config.greetText}
      		</div>
		);
	}
}
export default Greeter
import React, {Component} from 'react';

class App extends React.Component{
	componentDidMount(){
		componentHandler.upgradeDom();
	}
	render(){
		return (
			<div className="mdl-grid">
				<h2>This is gonna be cool</h2>
			</div>
		)
	}
}

export default App;
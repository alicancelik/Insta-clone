import React from 'react';


class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	handleNewPostClick(){
		window.location = 'http://localhost:3000/posts/new';
	}
	handleProfileClick(){
		window.location = 'http://localhost:3000/users/1';
	}
	handleHomeClick(){
		window.location ='http://localhost:3000/users/index';
	}
	
	render() {
		return (
			<div className="header-container">
				<ul className="header-nav">
					<li className="logo">
					<button style={{backgroundImage: `url('${this.props.logoUrl}')`}} className="logo" 
					onClick={this.handleHomeClick}></button>
					<text>InstaClone</text>
					<button style={{backgroundImage: `url('${this.props.addURL}')`}} className="add"
					onClick={this.handleNewPostClick} ></button>
					<button style={{backgroundImage: `url('${this.props.profileURL}')`}} className="profile"
					onClick={this.handleProfileClick} ></button>
					
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
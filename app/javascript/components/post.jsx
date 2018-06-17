import React from 'react';
import { Card, CardHeader, CardMedia, CardActions, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Axios from 'axios';
import postlikes from '../components/postlikes'



class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id:1,
			imageFile:"",
			imageUrl:""
		}
	}
	//axios.post bak
	likePost = (id) => {
		console.log(id);
		return Axios({
			url: '/users/index' + id + '/likes',
			method: 'POST'
			
		});
	}
	//
	unlikePost = (id) => {
		return Axios ({
			url: '/users/index' + id + '/likes',
			method: 'DELETE'
		});
	}

	render() {
		
		const { post,user } = this.props;
		let likeButton;
		if(true) { 
			likeButton = (<IconButton onClick={this.likePost.bind(undefined, post.id)}><i className="material-icons md-36">favorite_border</i></IconButton>);
		}
		else {
			likeButton = (<IconButton onClick={this._handleUnlikeClick}><i className="material-icons md-36 red">favorite</i></IconButton>);
		}
		return (
			<MuiThemeProvider>
			<Card className="post">
				<CardHeader
					title={user ? user.username : ""}
				/>
				<CardMedia>
					<img src={post.image_URL}></img>
				
				</CardMedia>
				<CardActions>
					{likeButton}
				</CardActions>
			</Card>
			</MuiThemeProvider>
		);
	}
}

export default Post;
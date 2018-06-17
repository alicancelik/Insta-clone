import React from 'react';

class PostLikes extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { likes_count, liked_by_user, handleLikeClick, handleUnlikeClick } = this.props;
		
		let button;
		if(!liked_by_user) {
			button = (<button onClick={handleLikeClick}>Like</button>)
		}
		else {
			button = (<button onClick={handleUnlikeClick}>Unlike</button>)
		}
		return (
			<div className="post-likes">
				{button}
				<div className="like-count">
				{likes_count}
				</div>
			</div>
		);
	}
}

export default PostLikes
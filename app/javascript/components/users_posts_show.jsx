import React from "react"
import Header from "../components/header"
import Post from "../components/post"

class User extends React.Component {
  render () {
    const findUserById = (id) => {
      return this.props.users.find((x) => x.id === id);
    }

    const getImageUrl = (post) => {
      if (post.image !== undefined) { 
        return "http://localhost:3000" + post.image.url;
      } else {
        return post.image_URL;
      }
    }
    
  
    return (
      <div className="posts-feed">
      <Header 
       logoUrl={this.props.url}
       addURL ={this.props.add}
       profileURL ={this.props.profile}/>
        {
          this.props.posts.map(p => (
           < Post post={p} user={findUserById(p.user_id)}/>
          ))
        }
      </div>
      
    );
  }
}

export default User
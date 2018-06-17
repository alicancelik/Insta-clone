import React from "react";
import Header from "../components/header";

class UserProfile extends React.Component {
    
    render () {
        const getImageUrl = (post) => {
            if (post.image !== undefined) { 
              return "http://localhost:3000" + post.image.url;
            } else {
              return post.image_URL;
            }
          }

        return(         
            <div className="posts-feed" >
            <Header       
                logoUrl={this.props.url}
                addURL ={this.props.add}
                profileURL ={this.props.profile}/>
            <div className ="user-profile">
            {   
                this.props.posts.map(p => (
                    <div key={p.id}>
                    <img src={getImageUrl(p)} className="posts_margin"></img>
                    </div>
                ))
            }
            </div>           
            </div>
        );      
    }
}
export default UserProfile
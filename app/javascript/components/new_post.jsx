import React from 'react';
import Header from "../components/header";
import axios from 'axios';


class NewPost extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            caption_attributes: {
            user_id : 1,
            imageFile: "",
            imageUrl: ""
            }
        
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
}
    update(property) {
    return e => this.setState({[property]: e.target.value});
  }
    createPost = (formData) => {
      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
      }
      axios({
        method: 'POST',
        url: '/posts',
        data: formData, 
        headers: {
          'Content-Type' : 'multipart/form-data'
        }
      }).then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
    }
  updateFile(e) {
      let file = e.target.files[0];
      this.setState({ imageFile: file });
      let fileReader = new FileReader();
      fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
      }.bind(this);   
      if (file){
        fileReader.readAsDataURL(file);
      }
  }
      
  handleSubmit(e) {
      e.preventDefault();
      let formData = new FormData();
      formData.append('post[caption_attributes][user_id]', this.state.caption_attributes.user_id);
      formData.append("post[image]", this.state.imageFile);
      formData.append("file", this.state.imageFile);
      formData.append("authenticity_token", $("meta[name='csrf-token']").attr('content'));
      this.createPost(formData);
  }

      render() {
        return (
            <div className="new-post-container">
              <div className="posts-feed">
                < Header 
                    logoUrl={this.props.url}
                    addURL ={this.props.add}
                    profileURL ={this.props.profile}/>
    
                <form onSubmit={this.handleSubmit}>
    
                  <div className="choose-file-holder">
                    <input type="file"
                      onChange={this.updateFile}
                      className="post-field choose-file-button"/>
                  </div>
    
                  <img className="upload" src={this.state.imageUrl} />
    
                  <div className="button-holder">
                    <input type="submit"
                      value="Post"
                      className="new-post-button create-post-button"/>
                  </div>
                </form> 
              </div>
            </div>
        );
      }
    }
export default NewPost

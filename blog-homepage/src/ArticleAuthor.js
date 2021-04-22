import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleAuthor extends Component {
  static propTypes = {
    author: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      isMediumMember: PropTypes.bool
    })
  }

  render() {
    const {author} = this.props;

    return (
      <div>
        <div className="authorImgDiv">
          {author.isMediumMember == true 
          ? <img src={author.image} alt="" className="authorBorder"/>
          : <img src={author.image} alt="" className="authorImg"/>}
          </div>
      </div>
    ); 
  }
};

export default ArticleAuthor;
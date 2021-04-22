import React, { Component } from 'react';
import ArticleAuthor from './ArticleAuthor';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import StarIcon from '@material-ui/icons/Star';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import './App.css';
import Moment from 'moment';

class ForYouArticle extends Component {
 

  render() {
    console.log(this.props);
    Moment.locale('en');
    return (
      <div className="forYouArticles">
        <img className="forYouArticleImg" src={this.props.article.image} alt="" />
        <div className="forYouText">
          {this.props.article.memberPreview == true && this.props.article.hasAudioAvailable == false
          ? <div className="audioAndMember"><StarIcon className="starIcon"/><div className="memberPreview">Member preview</div></div>
          : null}
          {this.props.article.hasAudioAvailable == true && this.props.article.hasAudioAvailable == true
          ? <div className="audioAndMember"><VolumeUpIcon className="audioIcon"/><div className="audio">Audio available</div><StarIcon className="starIconRight"/></div>
          : null}
          {this.props.article.hasAudioAvailable == true && this.props.article.hasAudioAvailable == false
          ? <div className="audioAndMember"><VolumeUpIcon className="audioIcon"/><div className="audio">Audio available</div></div>
          : null}
          <div className="title">{this.props.article.title}</div>
          <p className="description">{this.props.article.description}</p>
          <div className="authorDateMinutesAndBookmark">
              <ArticleAuthor author={this.props.article.author} />
              <div className="authorNameDateAndMinutes">
              <div className="authorName">{this.props.article.author.name}</div>
              <div className="dateAndMinutes">
                <div>{Moment(this.props.article.postedDate).format('MMM D')}</div>
                <div>&nbsp;·&nbsp; </div>
                <div>{this.props.article.minutesToRead} min read</div>
              </div>
            </div>
            <BookmarkBorderIcon className="bookmarkIcon"/>
          </div>
        </div>
      </div>
    )
  }
};

export default ForYouArticle;
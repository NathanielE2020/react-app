//import logo from './logo.svg';
import React, { Component } from 'react';
import BlogCardHompageCard from './BlogCard';
import { isArrayEmpty } from './Utils';
import './BlogCard.module.css';
import { classes } from 'istanbul-lib-coverage';

class App extends Component {
   state = {
    showBlogs: true,
   blogArr: [
    {
    id: 1,
    title: 'Blog Title 1',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    likeCount: 0,
  },
  {
    id: 2,
    title: 'Blog Title 2',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    likeCount: 0,
  },
  {
    id: 3,
    title: 'Blog Title 3',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    likeCount: 0,
  },
]
}


onLikeBtnClick = (pos) => {
 const updatedBlogList = this.state.blogArr;
 const updatedBlogobj = updatedBlogList[pos];

 updatedBlogobj.likeCount = updatedBlogobj.likeCount + 1;
 updatedBlogList[pos] = updatedBlogobj;

 this.setState({blogArr: updatedBlogList});

 //console.log(updatedBlogobj);
}

 onHideBtnClick = () => {
   //let updatedState = !this.state.showBlogs;
   this.setState((prevState, prevProps) => {
     return {showBlogs: !prevState.showBlogs}
   })

  console.log(this.state.showBlogs);
}

render(){
  console.log('Render Called');
  console.log(this.state);

  const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
  
    return(
      <BlogCardHompageCard className={"Blog"} key={pos} title={item.title} description={item.description}
       likeCount={item.likeCount} id={item.id} onLikeBtnClick={() => this.onLikeBtnClick(pos)} />
      // <div className="BlogCard" key={item.id}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      // </div>
    )
  })

  return(
    <div className={classes.App}>
    <button className={classes.ShowHideBtn} onClick={this.onHideBtnClick}>
    {this.state.showBlogs ? 'Hide List' : 'Show List '}</button>
    <br></br>
      {
        this.state.showBlogs ? blogCards : null
        }
    </div>
  )
}
}

export default App;

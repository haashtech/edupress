import React from 'react'
import { useParams } from 'react-router-dom';
import { blogList } from '../../components/blog/BlogLists';
import BlogGridView from '../../components/blog/BlogGridView';
import BlogListView from '../../components/blog/BlogListView';

function SingleBlogView() {
    const { blogId } = useParams();
    const blogs = blogList.find((blog) => blog.id === parseInt(blogId));
  return (
    <div>SingleBlogView</div>
  )
}

export default SingleBlogView
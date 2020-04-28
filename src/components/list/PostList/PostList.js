import React from 'react'
import styles from './PostList.scss'
import classNames from 'classnames/bind'
import {Link} from 'react-router-dom'

const cx = classNames.bind(styles)

const PostItem = () => (
    <div className={cx('post-item')}>
        <h2><Link>Title</Link></h2>
        <div className={cx('date')}>2020-04-28</div>
        <p>Content</p>
        <div className={cx('tags')}>
            <Link>#tag</Link>
            <Link>#tag</Link>
            <Link>#tag</Link>
        </div>
    </div>
)

const PostList = () => (
    <div className={cx('post-list')}>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
    </div>
)

export default PostList
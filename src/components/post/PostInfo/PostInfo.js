import React from 'react'
import styles from './PostInfo.scss'
import classNames from 'classnames/bind'
import {Link} from 'react-router-dom'

const cx = classNames.bind(styles)

const PostInfo = () => (
    <div className={cx('post-info')}>
        <div className={cx('info')}>
            <h1>Title</h1>
            <div className={cx('tags')}>
                <Link to='/'>#tag</Link>
                <Link to='/'>#tag</Link>
                <Link to='/'>#tag</Link>
            </div>
            <div className={cx('date')}>Apr 28, 2020</div>
        </div>
    </div>
)

export default PostInfo
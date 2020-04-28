import React, {Component} from 'react'
import styles from './EditorPane.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class EditorPane extends Component {
    render() {
        return (
            <div className={cx('editor-pane')}>
                <input 
                    className={cx('title')} 
                    placeholder="Enter title"
                    name="title"
                />
                <div className={cx('code-editor')}></div>
                <div className={cx('tags')}>
                    <div className={cx('description')}>Tag</div>
                    <input
                        name="tags"
                        placeholder="Enter tags (separate by commas)"
                    />
                </div>
            </div>
        )
    }
}

export default EditorPane
import React from 'react'
import classNames from 'classnames/bind'
import styles from './PageTemplate.scss'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'

const cx = classNames.bind(styles)

const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
)

export default PageTemplate
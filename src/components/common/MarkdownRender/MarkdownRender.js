import React, {Component} from 'react'
import styles from './MarkdownRender.scss'
import classNames from 'classnames/bind'
import marked from 'marked'

// prismjs for color of code
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-bash.min.js'
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-jsx.min.js'
import 'prismjs/components/prism-css.min.js'

const cx = classNames.bind(styles)


class MarkdownRender extends Component {
    state = { html: '' }

    renderMarkdown = () => {
        const {markdown} = this.props
        if (!markdown) {
            this.setState({html:''})
            return
        }

        this.setState({
            html: marked(markdown, {
                breaks: true,
                sanitize: true,
            })
        })
    }

    constructor(props) {
        super(props)
        const {markdown} = props
        this.state = {
            html: markdown ? marked(props.markdown, { breaks:true, sanitize:true}) : ''
        }
    }

    componentDidMount() {
        Prism.highlightAll()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.markdown !== this.props.markdown) this.renderMarkdown()
        
        // if (prevState.html !== this.state.html) Prism.heightlightAll()
        prevState.html !== this.state.html && Prism.highlightAll()
    }

    render() {
        const {html} = this.state
        const markup = {__html:html}

        return (
            <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup} />
        )
    }
}

export default MarkdownRender
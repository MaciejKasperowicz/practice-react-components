import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: ["aa", "aaaa"],
    }

    render() {
        const { title, body } = this.props;
        // const { comments } = this.state;
        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form onSubmit={(e) => this.submitHandler(e)}>
                        <div>
                            <label>
                                <textarea
                                    style={{ "minWidth": "300px", "minHeight": "120px" }}
                                    name="content"
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                        {/* {comments.map((comment, i) => <li key={i}>{comment}</li>)} */}
                        {this.renderComments()}
                    </ul>
                </section>
            </article>
        )
    }

    renderComments() {
        const { comments } = this.state;
        return comments.map((comment, i) => <li key={i}>{comment}</li>)
    }

    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }

    submitHandler(e) {
        e.preventDefault();
        // console.dir(e.target.elements.content.value);
        const textArea = e.target.elements[0];
        const comment = textArea.value;
        comment && this.addComment(comment);
        textArea.value = "";
    }
}

ReactDOM.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />,
    document.querySelector('#root')
);
import React, { useState, useEffect } from "react";
import "./article.scss";
import shareIcon from "../../../icons/share.png";
import postIcon from "../../../icons/send.png";
import heartIcon from "../../../icons/heart.png";
import sadIcon from "../../../icons/sad.png";
import hahaIcon from "../../../icons/funny.png";
import likeIcon from "../../../icons/panda.png";

const reactions = {
    "❤️": heartIcon,
    "👍": likeIcon,
    "😂": hahaIcon,
    "😢": sadIcon,
};

const Article = () => {
    const [articles, setArticles] = useState(() => {
        const savedArticles = localStorage.getItem('articles');
        return savedArticles ? JSON.parse(savedArticles) : [
            {
                id: 1,
                title: "Example Article Title 1",
                content:
                    "This is an example of an article body. It can contain multiple paragraphs and formatting.",
                reaction: null,
                reactionCount: { "❤️": 10, "😂": 5, "😢": 1, "👍": 30 },
                comments: [],
            },
            {
                id: 2,
                title: "Example Article Title 2",
                content:
                    "This is an example of an article body. It can contain multiple paragraphs and formatting.",
                reaction: null,
                reactionCount: 0,
                comments: [],
            },
            {
                id: 3,
                title: "Example Article Title 3",
                content:
                    "This is an example of an article body. It can contain multiple paragraphs and formatting.",
                reaction: null,
                reactionCount: 0,
                comments: [],
            },
            {
                id: 4,
                title: "Example Article Title 4",
                content:
                    "This is an example of an article body. It can contain multiple paragraphs and formatting.",
                reaction: null,
                reactionCount: 0,
                comments: [],
            },
            {
                id: 5,
                title: "Example Article Title 5",
                content:
                    "This is an example of an article body. It can contain multiple paragraphs and formatting.",
                reaction: null,
                reactionCount: 0,
                comments: [],
            },
            {
                id: 6,
                title: "Example Article Title 6",
                content:
                    "This is an example of an article body. It can contain multiple paragraphs and formatting.",
                reaction: null,
                reactionCount: 0,
                comments: [
                    {
                        id: 1,
                        text: "This is a comment",
                        reaction: null,
                        reactionCount: { "❤️": 10, "👍": 0, "😂": 20, "😢": 0 },
                    }
                ],
            },
        ];
    });

    useEffect(() => {
        localStorage.setItem('articles', JSON.stringify(articles));
    }, [articles]);

    const [newComment, setNewComment] = useState("");
    const [showShareOptions, setShowShareOptions] = useState(false);
    const [selectedArticleForShare, setSelectedArticleForShare] = useState(null);

    const handleArticleReaction = (articleId, newReaction) => {
        setArticles(articles.map(article => {
            if (article.id === articleId) {
                let updatedReactionsCount = { ...article.reactionCount };
                const isSameReaction = article.reaction === newReaction;

                // Nếu re-click vào phản ứng hiện tại, giảm số lượng và bỏ chọn
                if (isSameReaction) {
                    updatedReactionsCount[newReaction] = Math.max(0, updatedReactionsCount[newReaction] - 1);
                    return {
                        ...article,
                        reaction: null, // Bỏ chọn phản ứng
                        reactionCount: updatedReactionsCount
                    };
                } else {
                    // Nếu chọn một phản ứng khác
                    // Giảm số lượng phản ứng hiện tại (nếu có) và tăng số lượng cho phản ứng mới
                    if (article.reaction && updatedReactionsCount[article.reaction] > 0) {
                        updatedReactionsCount[article.reaction] = Math.max(0, updatedReactionsCount[article.reaction] - 1);
                    }
                    updatedReactionsCount[newReaction] = (updatedReactionsCount[newReaction] || 0) + 1;
                    return {
                        ...article,
                        reaction: newReaction,
                        reactionCount: updatedReactionsCount
                    };
                }
            }
            return article;
        }));
    };


    const handleCommentReaction = (articleId, commentId, newReaction) => {
        setArticles(articles.map(article => {
            if (article.id === articleId) {
                const updatedComments = article.comments.map(comment => {
                    if (comment.id === commentId) {
                        let updatedReactionsCount = { ...comment.reactionCount };
                        const isSameReaction = comment.reaction === newReaction;

                        if (isSameReaction) {
                            updatedReactionsCount[newReaction] = Math.max(0, updatedReactionsCount[newReaction] - 1);
                            return {
                                ...comment,
                                reaction: null,
                                reactionCount: updatedReactionsCount
                            };
                        } else {
                            if (comment.reaction && updatedReactionsCount[comment.reaction] > 0) {
                                updatedReactionsCount[comment.reaction] = Math.max(0, updatedReactionsCount[comment.reaction] - 1);
                            }
                            updatedReactionsCount[newReaction] = (updatedReactionsCount[newReaction] || 0) + 1;
                            return {
                                ...comment,
                                reaction: newReaction,
                                reactionCount: updatedReactionsCount
                            };
                        }
                    }
                    return comment;
                });
                return { ...article, comments: updatedComments };
            }
            return article;
        }));
    };


    const handleAddComment = (articleId) => {
        if (!newComment.trim()) return;
        const updatedArticles = articles.map((article) => {
            if (article.id === articleId) {
                const newCommentObj = {
                    id: article.comments.length + 1,
                    text: newComment,
                    reaction: null,
                    reactionCount: 0,
                };
                return { ...article, comments: [...article.comments, newCommentObj] };
            }
            return article;
        });
        setArticles(updatedArticles);
        setNewComment("");
    };

    return (
        <div className="articles-container">
            {articles.map((article, index) => (
                <div key={index} className="article">
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                    <div className="reactions">
                        {Object.entries(reactions).map(([reaction, icon]) => (
                            <button
                                key={reaction}
                                onClick={() => handleArticleReaction(article.id, reaction)}
                                className={
                                    article.reaction === reaction ? "reaction-selected" : ""
                                }
                            >
                                <img src={icon} alt={reaction} />
                                {article.reactionCount[reaction] > 0
                                    ? ` (${article.reactionCount[reaction]})`
                                    : ""}
                            </button>
                        ))}
                    </div>

                    <div className="comments">
                        {article.comments.map((comment) => (
                            <div key={comment.id} className="comment">
                                <p>{comment.text}</p>
                                <div className="reactions">
                                    {Object.entries(reactions).map(([reaction, icon]) => (
                                        <button
                                            key={reaction}
                                            onClick={() => handleCommentReaction(article.id, comment.id, reaction)}
                                            className={comment.reaction === reaction ? "reaction-selected" : ""}
                                        >
                                            <img src={icon} alt={reaction} />
                                            {comment.reactionCount[reaction] > 0 ? ` (${comment.reactionCount[reaction]})` : ""}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="add-comment">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a comment..."
                            ></textarea>
                            <button onClick={() => handleAddComment(article.id, newComment)}>
                                <img src={postIcon} alt="Post" />
                            </button>
                        </div>
                    </div>
                    <div className="share">
                        <button
                            onClick={() => {
                                setShowShareOptions(!showShareOptions);
                                setSelectedArticleForShare(article.id);
                            }}
                        >
                            <img src={shareIcon} alt="Share" />
                        </button>
                        {showShareOptions && selectedArticleForShare === article.id && (
                            <div className="share-options">
                                <button onClick={() => alert("Share to Facebook")}>
                                    Facebook
                                </button>
                                <button onClick={() => alert("Share to Twitter")}>
                                    Twitter
                                </button>
                                <button onClick={() => alert("Share to Instagram")}>
                                    Instagram
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Article;

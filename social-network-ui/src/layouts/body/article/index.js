import React, { useState, useEffect } from "react";
import "./article.scss";
import shareIcon from "../../../assets/icons/share.png";
import postIcon from "../../../assets/icons/send.png";
import heartIcon from "../../../assets/icons/heart.png";
import sadIcon from "../../../assets/icons/sad.png";
import hahaIcon from "../../../assets/icons/funny.png";
import likeIcon from "../../../assets/icons/like.png";
import removeIcon from "../../../assets/icons/remove.png";
import replyIcon from "../../../assets/icons/reply.png";
import editIcon from "../../../assets/icons/edit.png";

const reactions = {
    "❤️": heartIcon,
    "👍": likeIcon,
    "😂": hahaIcon,
    "😢": sadIcon,
};

const Article = () => {
    const sampleContent = `The standard Lorem Ipsum passage, used since the 1500s 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure  
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC 
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae  
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,  
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam  
                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius  
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima  
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea  
                    commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam  
                    nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? 
                    1914 translation by H. Rackham 
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain  
                    was born and I will give you a complete account of the system, and expound the actual teachings  
                    of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,  
                    or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue  
                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who  
                    loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally  
                    circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial  
                    example, which of us ever undertakes laborious physical exercise, except to obtain some advantage  
                    from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no  
                    annoying consequences, or one who avoids a pain that produces no resultant pleasure? 
                    Section 1.10.33 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC 
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum  
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non  
                    provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum  
                    fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta  
                    nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,  
                    omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis  
                    debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae  
                    non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus  
                    maiores alias consequatur aut perferendis doloribus asperiores repellat. 
                    1914 translation by H. Rackham 
                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and  
                    demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee  
                    the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty  
                    through weakness of will, which is the same as saying through shrinking from toil and pain.  
                    These cases are perfectly simple and easy to distinguish. In a free hour, when our power of  
                    choice is untrammelled and when nothing prevents our being able to do what we like best, every  
                    pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the  
                    claims of duty or the obligations of business it will frequently occur that pleasures have to be  
                    repudiated and annoyances accepted. The wise man therefore always holds in these matters to this  
                    principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures  
                    pains to avoid worse pains.`;
    const [articles, setArticles] = useState(() => {
        const savedArticles = localStorage.getItem("articles");
        return savedArticles
            ? JSON.parse(savedArticles)
            : [
                {
                    id: 1,
                    title: "Example Article Title 1",
                    postAt: "20-02-2024",
                    author: "Jane",
                    content: sampleContent,
                    reaction: null,
                    reactionCount: { "❤️": 10, "😂": 5, "😢": 1, "👍": 30 },
                    comments: [],
                },
                {
                    id: 2,
                    title: "Example Article Title 2",
                    postAt: "03-01-2024",
                    author: "Jane",
                    content: sampleContent,
                    reaction: null,
                    reactionCount: 0,
                    comments: [],
                },
                {
                    id: 3,
                    title: "Example Article Title 3",
                    postAt: "20-01-2024",
                    author: "Jane",
                    content: sampleContent,
                    reaction: null,
                    reactionCount: 0,
                    comments: [],
                },
                {
                    id: 4,
                    title: "Example Article Title 4",
                    postAt: "01-02-2024",
                    author: "Jane",
                    content: sampleContent,
                    reaction: null,
                    reactionCount: 0,
                    comments: [],
                },
                {
                    id: 5,
                    title: "Example Article Title 5",
                    postAt: "20-02-2023",
                    author: "Jane",
                    content: sampleContent,
                    reaction: null,
                    reactionCount: 0,
                    comments: [],
                },
                {
                    id: 6,
                    title: "Example Article Title 6",
                    postAt: "20-02-2022",
                    author: "Jane",
                    content: sampleContent,
                    reaction: null,
                    reactionCount: 0,
                    comments: [
                        {
                            id: 1,
                            userId: "admin1",
                            text: "This is a comment",
                            reaction: null,
                            reactionCount: { "❤️": 10, "👍": 0, "😂": 20, "😢": 0 },
                        },
                    ],
                },
            ];
    });

    useEffect(() => {
        localStorage.setItem("articles", JSON.stringify(articles));
        // if(articles.length > 0) {
        //     localStorage.removeItem("articles");
        // }
    }, [articles]);

    const [newComment, setNewComment] = useState("");
    const [showShareOptions, setShowShareOptions] = useState(false);
    const [selectedArticleForShare, setSelectedArticleForShare] = useState(null);
    const [editingComment, setEditingComment] = useState({ id: null, text: "" });

    const handleArticleReaction = (articleId, newReaction) => {
        setArticles(
            articles.map((article) => {
                if (article.id === articleId) {
                    let updatedReactionsCount = { ...article.reactionCount };
                    const isSameReaction = article.reaction === newReaction;
                    if (isSameReaction) {
                        updatedReactionsCount[newReaction] = Math.max(
                            0,
                            updatedReactionsCount[newReaction] - 1
                        );
                        return {
                            ...article,
                            reaction: null,
                            reactionCount: updatedReactionsCount,
                        };
                    } else {
                        if (
                            article.reaction &&
                            updatedReactionsCount[article.reaction] > 0
                        ) {
                            updatedReactionsCount[article.reaction] = Math.max(
                                0,
                                updatedReactionsCount[article.reaction] - 1
                            );
                        }
                        updatedReactionsCount[newReaction] =
                            (updatedReactionsCount[newReaction] || 0) + 1;
                        return {
                            ...article,
                            reaction: newReaction,
                            reactionCount: updatedReactionsCount,
                        };
                    }
                }
                return article;
            })
        );
    };

    const handleCommentReaction = (articleId, commentId, newReaction) => {
        setArticles(
            articles.map((article) => {
                if (article.id === articleId) {
                    const updatedComments = article.comments.map((comment) => {
                        if (comment.id === commentId) {
                            let updatedReactionsCount = { ...comment.reactionCount };
                            const isSameReaction = comment.reaction === newReaction;

                            if (isSameReaction) {
                                updatedReactionsCount[newReaction] = Math.max(
                                    0,
                                    updatedReactionsCount[newReaction] - 1
                                );
                                return {
                                    ...comment,
                                    reaction: null,
                                    reactionCount: updatedReactionsCount,
                                };
                            } else {
                                if (
                                    comment.reaction &&
                                    updatedReactionsCount[comment.reaction] > 0
                                ) {
                                    updatedReactionsCount[comment.reaction] = Math.max(
                                        0,
                                        updatedReactionsCount[comment.reaction] - 1
                                    );
                                }
                                updatedReactionsCount[newReaction] =
                                    (updatedReactionsCount[newReaction] || 0) + 1;
                                return {
                                    ...comment,
                                    reaction: newReaction,
                                    reactionCount: updatedReactionsCount,
                                };
                            }
                        }
                        return comment;
                    });
                    return { ...article, comments: updatedComments };
                }
                return article;
            })
        );
    };

    const handleAddComment = (articleId, newComment) => {
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

    const handleDeleteComment = (articleId, commentId) => {
        setArticles(articles.map(article => {
            if (article.id === articleId) {
                const updatedComments = article.comments.filter(comment => comment.id !== commentId);
                return { ...article, comments: updatedComments };
            }
            return article;
        }));
    };

    const handleEditComment = (articleId, commentId) => {
        const article = articles.find(article => article.id === articleId);
        const comment = article.comments.find(comment => comment.id === commentId);
        setEditingComment({ id: commentId, text: comment.text });
    };

    const handleSaveEdit = (articleId) => {
        if (!editingComment.text.trim()) {
            alert("Comment cannot be empty");
            return;
        }

        setArticles(articles.map(article => {
            if (article.id === articleId) {
                const updatedComments = article.comments.map(comment => {
                    if (comment.id === editingComment.id) {
                        return { ...comment, text: editingComment.text };
                    }
                    return comment;
                });
                return { ...article, comments: updatedComments };
            }
            return article;
        }));

        setEditingComment({ id: null, text: "" }); // Reset trạng thái chỉnh sửa
    };

    // const handleReplyComment = (articleId, commentId, replyText) => {
    //     const newReply = {
    //         id: new Date().getTime(), // Giả định cách tạo ID đơn giản
    //         // userId: currentUser, // Người dùng hiện tại trả lời
    //         text: replyText,
    //     };

    //     setArticles(articles.map(article => {
    //         if (article.id === articleId) {
    //             const updatedComments = article.comments.map(comment => {
    //                 if (comment.id === commentId) {
    //                     return { ...comment, replies: [...comment.replies, newReply] };
    //                 }
    //                 return comment;
    //             });
    //             return { ...article, comments: updatedComments };
    //         }
    //         return article;
    //     }));
    // };

    const handleReplyComment = () => {
        console.log('reply');
    }



    return (
        <div className="article-container">
            <div className="article-title">
                <h1>Articles</h1>
                <ul className="light">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="article-main">
                {articles.map((article, index) => (
                    <div key={index} className="article">
                        <h1>{article.title}</h1>
                        <h4>Post at:{article.postAt} - by {article.author}</h4>
                        <p>{article.content}</p>
                        <div className="reaction-share">
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
                            <div className="share">
                                <img src={shareIcon} alt="Share" onClick={() => {
                                    setShowShareOptions(!showShareOptions);
                                    setSelectedArticleForShare(article.id);
                                }} />
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

                        <div className="comments">
                            {article.comments.map((comment) => (
                                <div key={comment.id} className="comment-container">
                                    <div className="comment">
                                        <div className="comment-content">
                                            {
                                                editingComment.id === comment.id ?
                                                    <div className="main-comment">
                                                        <textarea className="text-comment" value={editingComment.text} onChange={(e) => setEditingComment({ ...editingComment, text: e.target.value })} />
                                                        <img src={postIcon} alt="save-change-comment" className="edit-comment" onClick={() => handleSaveEdit(article.id)} />
                                                    </div>
                                                    :
                                                    <p className="comment-view">{comment.text}</p>
                                            }
                                        </div>
                                        {/* {comment.userId === currentUser && ( */}
                                        <div className="comment-actions">
                                            <img src={replyIcon} alt="Reply" onClick={() => handleReplyComment(article.id, comment.id)} />
                                            <img src={editIcon} alt="Edit" onClick={() => handleEditComment(article.id, comment.id)} />
                                            <img src={removeIcon} alt="Delete" onClick={() => handleDeleteComment(article.id, comment.id)} />
                                            {Object.entries(reactions).map(([reaction, icon]) => (
                                            <button
                                                key={reaction}
                                                onClick={() =>
                                                    handleCommentReaction(
                                                        article.id,
                                                        comment.id,
                                                        reaction
                                                    )
                                                }
                                                className={
                                                    comment.reaction === reaction
                                                        ? "reaction-selected"
                                                        : ""
                                                }
                                            >
                                                <img src={icon} alt={reaction} />
                                                {comment.reactionCount[reaction] > 0
                                                    ? ` (${comment.reactionCount[reaction]})`
                                                    : ""}
                                            </button>
                                        ))}
                                        </div>
                                        {/* )} */}
                                    </div>
                                </div>
                            ))}
                            <div className="add-comment">
                                <textarea
                                    className="content"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Add a comment..."
                                ></textarea>
                                <img className="btn-add-comment" src={postIcon} alt="Post" onClick={() => handleAddComment(article.id, newComment)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Article;
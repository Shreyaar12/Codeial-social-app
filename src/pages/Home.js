const Home = () => {
    return (
      <div className="posts-list">
        <div className="post-wrapper">
          <div className="post-header">
            <div className="post-avatar">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-pic"
              />
              <div>
                <span className="post-author">Aakasj</span>
                <span className="post-time">a minute ago</span>
              </div>
            </div>
            <div className="post-content">Post Content</div>
  
            <div className="post-actions">
              <div className="post-like">
                <img
                  src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                  alt="likes-icon"
                />
                <span>5</span>
              </div>
  
              <div className="post-comments-icon">
                <img
                  src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                  alt="comments-icon"
                />
                <span>2</span>
              </div>
            </div>
            <div className="post-comment-box">
              <input placeholder="Start typing a comment" />
            </div>
  
            <div className="post-comments-list">
              <div className="post-comments-item">
                <div className="post-comment-header">
                  <span className="post-comment-author">Bill</span>
                  <span className="post-comment-time">a minute ago</span>
                  <span className="post-comment-likes">22</span>
                </div>
  
                <div className="post-comment-content">Random comment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  
import './style.css';

export function Chat(props) {
   return (
      <div className="chat-container">
         <div className="comment-box">
            <div className="comment-author">{props.author}</div>
            <div className="comment-subject">{props.subject}</div>
            <textarea className="comment-input" placeholder="Digite seu comentário aqui..." />
         </div>
      </div>
   );
}
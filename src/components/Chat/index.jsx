import React, { useState } from 'react';
import './style.css';

export function Chat(props) {     // inicia o comment array vazio '[]'
   const [comments, setComments] = useState([]);
         //funcao evento de submissao
   const handleCommentSubmit = () => {
                                     //query retorna o primeiro elemento que esta entre parenteses
      const commentInput = document.querySelector('.comment-input');

      
      //criacao do objeto 
      const newComment = {
         author: props.author,
         subject: props.subject,
         comment: commentInput.value
      };



      // atualiza o estado comments
      // cria um novo array combinando o array comments atual com o novo comentario criado.
      // o operador spread (...) eh usado para descompactar o array comments existente, adicionando o novo comentario ao final.
      setComments([...comments, newComment]);
      commentInput.value = '';
   };

   return (
      <div className="chat-container">
         <div className="comment-box">
            <div className="comment-author">{props.author}</div>
            <div className="comment-subject">{props.subject}</div>
            <textarea className="comment-input" />
            <button onClick={handleCommentSubmit}>Publicar</button>
         
         
         </div>
      
         <div className="comment-list">


            {comments.map((comment, index) => (
               <div key={index} className="comment">
                  <div className="comment-author">{comment.author}</div>
                  <div className="comment-subject">{comment.subject}</div>
                  <div className="comment-text">{comment.comment}</div>
               </div>

               
               // este trecho mapeia cada objeto comment no array comments 
               // renderiza suas propriedades (author, subject e comment) dentro de elementos HTML <div>.
            ))}
         </div>
      </div>
   );
}

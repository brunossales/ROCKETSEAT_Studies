import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


interface ComentProps {
    content: string;
    onDeleteComment: (comment : string) => void
}

export function Comment({content, onDeleteComment} : ComentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        // quando se usa o useState o react abre outro contexto para re-rederizar o componente
        // Se tiver mais linha embaixo, as de baixo vai ficar em outro contexto e printa o antigo
        
        // setLikeCount(likeCount+1)
        // console.log(ikeCount) // Printa o valor antigo de like count


        // pega o valor de like count mais recente e acrescenta mais um
        setLikeCount((state) => {
            return state + 1
        })

        // sempre que for atualizar uma informação
        // e a informação depende dela mesmo, é bom usar uma função dentro do set
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/brunossales.png" 
                alt=""
                onClick={() => console.log("Clicou na imagem do commentario Menor")}
                />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Sales</strong>

                            <time title='07 de junho as 13:50' dateTime='2022-06-07 12:49:00'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />

                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
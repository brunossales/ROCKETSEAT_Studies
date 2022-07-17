import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({author, publishedAt, content} : PostProps) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein',
    ])

    const [newCommenText, setNewCommenText] = useState('')

    // const publishedDateFormated = new Intl.DateTimeFormat('pt-BR',{
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit',

    // }).format(publishedAt)

    // npm i date-fns
    const publishedDateFormated = format(
        publishedAt,
        "d 'de' LLLL 'ás' HH:mmh",
        {
            locale: ptBR,
        }
    )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,
        {
            locale: ptBR,
            addSuffix: true
        })

    // FormEvent - Quando o formulário dispara o evento
    //OnSubmit
    function handleCreateNewComment(event:FormEvent) {
        // evitar o comportamento padrão do html de 
        // redimencionar a pagina para outro local
        // o submit tem isso
        event.preventDefault()

        setComments([...comments, newCommenText])
        setNewCommenText('')

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        //Para voltar para o padrão e não ficar dando erro
        event.target.setCustomValidity('')
        setNewCommenText(event.target.value)
    }

    function deleteComment(commentToDelete : string){

        // Retorna uma nova lista de comentários, porém sem o comentToDelete
        //"é true, ele coloca no novo array, é false, ele não coloca"
        const commentsWithoutDeletedOne = comments.filter((comment) => {
            return comment != commentToDelete
        })
        //criando nova informação e salvando no stado
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid(event : InvalidEvent<HTMLTextAreaElement>){
        // mudar a mensagem da validação
        event.target.setCustomValidity('Esse campo é preciso mano')
    }

    const isNewCommentEmpty = newCommenText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl} 
                    />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                    </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    switch (line.type) {
                        case 'paragraph' : {
                            return <p key={line.content}>{line.content}</p>
                            break;
                        }
                        case 'link' : {
                            return <p key={line.content}><a href="">{line.content}</a></p>
                            break;
                        }
                    }
                    // if(line.type === 'paragraph')
                    //     return <p>{line.content}</p>
                    // else if(line.type === 'link')
                    //     return <p><a href="">{line.content}</a></p>
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm} >
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommenText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map( (comment) => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                            />
                
                    )
                })}
            </div>

        </article>
    );
}
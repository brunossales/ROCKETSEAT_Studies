import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    // ? = opcional
    hasBorder?: boolean;
}

// desestruturação de objeto
// Valor default quando nao for instanciado é true
export function Avatar({hasBorder = true, ...props} : AvatarProps){
    // A gente pega todas os valores do img e passa para as propriedades
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            // cada valor do props e passa pra tag
            {...props}
            />
    );
}
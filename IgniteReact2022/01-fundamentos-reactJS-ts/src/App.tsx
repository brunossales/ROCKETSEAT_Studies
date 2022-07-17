import { useState } from 'react'
import './global.css'
import {Header} from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/brunossales.png',
      name: 'Bruno Sales',
      role: 'Desenvolvedor Front End'
    },
    content: [
                {type:'paragraph', content: 'Fala galeraa 👋'},
                {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
                {type:'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-10 20:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/andretorquato.png',
      name: 'André Torquato',
      role: 'Desenvolvedor Brabo End'
    },
    content: [
                {type:'paragraph', content: 'Fala galeraa 👋'},
                {type:'paragraph', content: 'Estou aprendendo a usar o react com o javaScript e ainda praticando a cada dia pois quero ser un grande desenvolvedor e poder ajudar minha familia, tamo junto leitor e me acompanhe'},
                {type:'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-05 15:30:00'),
  },
];

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map( (post) => {
              return (
                <Post
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
          })}
        </main>
      </div>
    </div>
  )
}

export default App

import styles from '../styles/Home.module.css'

export default function Home({ todos }) {
  return (
    <div className={styles.container}>
      <h1>Hello World!!!</h1>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id} >{todo.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")
  const todos = await data.json()

  return {
    props: { todos }
  }
}
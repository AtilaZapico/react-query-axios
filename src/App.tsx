
import './App.css'

import { useApi } from './hooks/useApi';

type Repository = {

  full_name: string,
  description: string,
}

function App() {
  
const  { data:repository, isFetching } = useApi<Repository[]>('users/AdrianZapico/repos')


  return (
    <div className="App">
      {isFetching && <p>Loading...</p>}
      <ul>
        {repository?.map(repo => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default App

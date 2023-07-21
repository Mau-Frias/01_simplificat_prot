import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.log(error)

  return (
    <div id='errorPage'>
      <h1>Route Error</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

import * as React from 'react'

export function useFetch<T>(url: string): {
  data: T,
  busy: boolean,
  error?: Error,
} {
  const [state, setState] = React.useState({
    busy: true,
    data: {},
  })

  React.useEffect(() => {
    fetch(url)
      .then(async (res) => {
        return await res.json()
      })
      .then((data) => {
        setState({
          busy: false,
          data: data,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }, [url])

  return state
}

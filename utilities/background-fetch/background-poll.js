import { useEffect } from 'react'

const backgroundPoll = ({ hook, args, fetchFunction, responseKey, timeout = 10 * 1000 }) => {
  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await fetchFunction(args)
      hook(data[responseKey])
    }, timeout)

    return () => {
      clearInterval(interval)
    }
  })
}

export default backgroundPoll

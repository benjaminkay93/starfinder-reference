const backgroundFetch = ({handler, args, timeout}) => {
  setInterval(handler, args, timeout)
}

export default backgroundFetch
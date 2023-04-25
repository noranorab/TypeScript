type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props
  return (
    <div>
      {props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` : `Welcom Guest`}
    </div>
  )
}

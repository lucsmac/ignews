import { signIn, useSession } from 'next-auth/client'
import styles from './styles.module.scss'

interface ISubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  const [session] = useSession()
  
  function handleSubscribe() {
    if (!session) {
      signIn('github')
      return 
    }

    // TODO
  }
  
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}
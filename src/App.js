import { useState, useEffect } from 'react'
import { supabase } from './supabase'
import Login from './components/Login'
import Account from './components/Account'

export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      { console.log(session) }
      {!session ? <Login /> : <Account key={session.user.id} session={session} />}
    </div>
  )
}
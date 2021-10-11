

import styles from '../../styles/SignIn.module.css'

const SignIn = () => (
    <div className={styles.rootSignInWrapper}>
        <img src="/images/Rectangle54.png" className={styles.image}/>
        <div>
            <div className={styles.header}>Sign in to continue</div>
            <div className={styles.buttonGoogle}>Sign in with Google</div>
            <div className={styles.information}>
                Or, sign in with your email
            </div>
            <div>Email address</div>
            <input/>
            <div>Password</div>
            <input/>
            <div>Forgot password?</div>
            <div className={styles.button}>Sign in</div>
            <div>Don’t have an account? <span>Sign up now</span></div>
        </div>
    </div>
)

export default SignIn

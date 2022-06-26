import React from 'react'
import styles from './Message.module.css'

type MassageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MassageType) {
    return (


        <div className={styles.wrapper}>
            <div className={styles.avatarElement}><img className={styles.avatar} src={props.avatar} alt=""/></div>
            <div className={styles.message}>
                <div className={styles.content}>
                    <div className={styles.messageName}>{props.name}</div>
                    <div className={styles.messageText}>{props.message}</div>
                    <span className={styles.time}>{props.time}</span>
                </div>
            </div>
        </div>


    )
}

export default Message

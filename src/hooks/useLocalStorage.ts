import * as React from 'react'

export default function useLocalStorage(
    key: string
): [string | null, (saveItem: string) => void, () => void] {
    const [item, setItem] = React.useState(() => {
        let value = null

        // gatsby SSR check
        if (typeof window !== 'undefined') {
            value = window.localStorage.getItem(key)
        }

        if (value === null) {
            return null
        }

        // gatsby SSR check
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, value)
        }

        return value
    })

    const save = (item: any): void => {
        setItem(item)

        // gatsby SSR check
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, item)
        }
    }

    const remove = (): void => {
        // gatsby SSR check
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem(key)
        }
    }

    return [item, save, remove]
}

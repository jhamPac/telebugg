export default function useLocalStorage(key: string): string | null {
    if (window === undefined) {
        return null
    }

    const value = window.localStorage.getItem(key)

    if (value === null) {
        return null
    }

    return value
}

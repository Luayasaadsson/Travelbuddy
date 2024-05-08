export function validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const isValid = emailRegex.test(email)

    const isEmpty = email.trim() === ""

    return isValid && !isEmpty
}

export function validatePassword(password: string): boolean {
    return password.length >= 6
}

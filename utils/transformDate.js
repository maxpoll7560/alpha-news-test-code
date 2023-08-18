export function transformDate(timestamp) {
    let res = {}
    const offset = new Date().getTimezoneOffset()
    const date = new Date((timestamp - offset * 60) * 1000)

    res.day    = date.getDate()
    res.month  = date.toLocaleString("en-US", { month: "long" })
    res.year   = date.getFullYear()

    return res
}


import React from 'react'

export const useMounted  = () => {
    const [hasMounted, setHasMounted] = React.useState(false)

    React.useEffect(() => {
        setHasMounted(true)
    }, [])
    return {hasMounted}
}